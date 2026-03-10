export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  try {
    const res = await fetch(
      `https://api.noormeher.org/api/student/list.php?type=${type}`,
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