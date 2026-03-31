export default async function handler(req, res) {
  const { dob } = req.query;

  if (!dob) {
    return res.status(400).json({
      success: false,
      message: "dob parameter missing",
    });
  }

  try {
    console.log("DOB received in API:", dob); // 🔍 DEBUG

    const response = await fetch(
      `http://api.noormeher.org/api/student/search.php?dob=${dob}`
    );

    const text = await response.text(); // 🔥 IMPORTANT (see raw first)
    console.log("Raw API response:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Invalid JSON from external API",
      });
    }

    console.log("Parsed data:", data); // 🔍 DEBUG

    return res.status(200).json(data);

  } catch (error) {
    console.error("Proxy error:", error);

    return res.status(500).json({
      success: false,
      message: "Proxy error",
    });
  }
}