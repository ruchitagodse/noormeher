import Razorpay from "razorpay";

export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { amount } = req.body;

    // Validate amount
    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    // Ensure keys exist
    if (
      !process.env.RAZORPAY_KEY_ID ||
      !process.env.RAZORPAY_KEY_SECRET
    ) {
      return res
        .status(500)
        .json({ message: "Razorpay keys not configured" });
    }

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Create order
    const order = await razorpay.orders.create({
      amount: Math.round(Number(amount) * 100), // INR → paise
      currency: "INR",
      receipt: `donation_${Date.now()}`,
    });

    // Success
    return res.status(200).json(order);
  } catch (error) {
    // Generic error response (no HTML, no crash)
    return res.status(500).json({
      message: "Failed to create Razorpay order",
    });
  }
}
