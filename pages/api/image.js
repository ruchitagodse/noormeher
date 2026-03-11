export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("Missing image url");
  }

  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    res.setHeader("Content-Type", response.headers.get("content-type"));
    res.send(Buffer.from(buffer));

  } catch (error) {
    res.status(500).send("Image proxy error");
  }
}