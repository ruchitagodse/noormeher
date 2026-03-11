export default async function handler(req, res) {
  const { year_id } = req.query;

  if (!year_id) {
    return res.status(400).json({
      success: false,
      message: "year_id missing",
    });
  }

  try {
    const response = await fetch(
      `http://api.noormeher.org/api/gallery/types.php?year_id=${year_id}`
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