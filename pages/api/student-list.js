export default async function handler(req, res) {
  const { type } = req.query;

  if (!type) {
    return res.status(400).json({
      success: false,
      message: "type parameter missing",
    });
  }

  try {
    const response = await fetch(
      `http://api.noormeher.org/api/student/list.php?type=${type}`
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