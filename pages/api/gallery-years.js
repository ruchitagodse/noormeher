export default async function handler(req, res) {
  try {
    const response = await fetch(
      "http://api.noormeher.org/api/gallery/years.php"
    );

    const text = await response.text();

    res.status(200).setHeader("Content-Type", "application/json");
    res.send(text);

  } catch (error) {
    console.error("Proxy error:", error);

    res.status(500).json({
      success: false,
      message: "Proxy API failed",
      error: error.message,
    });
  }
}