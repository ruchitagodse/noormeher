export default async function handler(req, res) {
  const channelUrl = "https://www.youtube.com/@noormeherhighschool/videos";

  try {
    const response = await fetch(channelUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      return res.status(200).json({ success: false });
    }

    const html = await response.text();
    const matches = [...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)];
    const ids = [...new Set(matches.map((m) => m[1]))];

    if (!ids.length) {
      return res.status(200).json({ success: false });
    }

    const randomId = ids[Math.floor(Math.random() * ids.length)];
    return res.status(200).json({ success: true, videoId: randomId });
  } catch (error) {
    return res.status(200).json({ success: false });
  }
}
