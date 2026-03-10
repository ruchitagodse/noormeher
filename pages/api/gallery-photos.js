export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const yid = searchParams.get("yid");
  const galtype = searchParams.get("galtype");

  try {
    const res = await fetch(
      `https://api.noormeher.org/api/gallery/photos.php?yid=${yid}&galtype=${galtype}`,
      { cache: "no-store" }
    );

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { success: false, message: "Proxy error" },
      { status: 500 }
    );
  }
}