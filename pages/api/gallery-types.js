export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const yearId = searchParams.get("year_id");

  try {
    const res = await fetch(
      `http://api.noormeher.org/api/gallery/types.php?year_id=${yearId}`,
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