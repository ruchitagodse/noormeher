export default async function handler(req, res) {
  const { yid, galtype } = req.query;

  if (!yid || !galtype) {
    return res.status(400).json({
      success: false,
      message: "Missing parameters (yid or galtype)",
    });
  }

  try {
    const response = await fetch(
      `http://api.noormeher.org/api/gallery/photos.php?yid=${yid}&galtype=${galtype}`
    );

    const text = await response.text();

    res.status(response.status);
    res.setHeader("Content-Type", "application/json");
    res.send(text);

  } catch (error) {
    console.error("Proxy error:", error);

    res.status(500).json({
      success: false,
      message: "Proxy error",
      error: error.message,
    });
  }
}