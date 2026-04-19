export const config = {
  runtime: "nodejs",
};

import crypto from "crypto";

const getBackendBase = () => {
  if (process.env.BACKEND_INTERNAL_BASE_URL) {
    return process.env.BACKEND_INTERNAL_BASE_URL;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost/noormeher-backend";
  }

  return process.env.NEXT_PUBLIC_BASE_URL || "http://api.noormeher.org";
};

const parseJsonSafely = async (response) => {
  try {
    return await response.json();
  } catch (error) {
    return null;
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const {
    order_id,
    payment_id,
    signature,
    name,
    mobile,
    amount,
    purpose,
  } = req.body || {};

  if (!order_id || !payment_id || !signature || !name || !mobile || !amount) {
    return res.status(422).json({ success: false, message: "Missing payment confirmation details" });
  }

  if (!process.env.RAZORPAY_KEY_SECRET) {
    return res.status(500).json({ success: false, message: "Razorpay secret is not configured" });
  }

  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(`${order_id}|${payment_id}`)
    .digest("hex");

  if (generatedSignature !== signature) {
    return res.status(400).json({ success: false, message: "Payment signature verification failed" });
  }

  try {
    const backendResponse = await fetch(`${getBackendBase()}/api/donate/confirm.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_id,
        payment_id,
        name,
        mobile,
        amount,
        purpose,
        status: "Success",
      }),
    });

    const backendData = await parseJsonSafely(backendResponse);

    if (!backendResponse.ok || !backendData?.success) {
      return res.status(502).json({
        success: false,
        message: backendData?.message || "Payment verified but donation save failed",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Donation recorded successfully",
      data: backendData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Payment verified but donation save failed",
    });
  }
}
