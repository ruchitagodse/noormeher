export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("Missing image url");
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0", // ✅ FIX: prevents blocking
      },
    });

    if (!response.ok) {
      return res.status(400).send("Failed to fetch image");
    }

    const buffer = await response.arrayBuffer();

    // ✅ FIX: fallback content-type
    const contentType =
      response.headers.get("content-type") || "image/jpeg";

    res.setHeader("Content-Type", contentType);

    // ✅ BONUS: caching for performance
    res.setHeader("Cache-Control", "public, max-age=86400");

    return res.send(Buffer.from(buffer));

  } catch (error) {
    console.error("Image proxy error:", error);
    return res.status(500).send("Image proxy error");
  }
}