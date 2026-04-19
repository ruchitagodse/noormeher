export const config = {
  runtime: "nodejs",
};

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

  const { fullname, email, mobile, message } = req.body || {};

  if (!fullname || !email || !mobile || !message) {
    return res.status(422).json({ success: false, message: "All contact fields are required" });
  }

  const backendBase = getBackendBase();
  const payload = { fullname, email, mobile, message };

  try {
    const primaryResponse = await fetch(`${backendBase}/api/contact/submit.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const primaryData = await parseJsonSafely(primaryResponse);

    if (primaryResponse.ok && primaryData?.success) {
      return res.status(200).json(primaryData);
    }

    const fallbackBody = new URLSearchParams();
    fallbackBody.set("fullname", fullname);
    fallbackBody.set("email", email);
    fallbackBody.set("mobile", mobile);
    fallbackBody.set("message", message);

    const fallbackResponse = await fetch(`${backendBase}/sm-admin/ajax/ADD/Add-Contact.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: fallbackBody.toString(),
    });

    const fallbackText = (await fallbackResponse.text()).trim();

    if (fallbackResponse.ok && (fallbackText === "00" || fallbackText === "01")) {
      return res.status(200).json({
        success: true,
        message: "Your message has been received",
        fallback: true,
      });
    }

    return res.status(502).json({
      success: false,
      message: primaryData?.message || "Failed to submit contact form",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to submit contact form",
    });
  }
}
