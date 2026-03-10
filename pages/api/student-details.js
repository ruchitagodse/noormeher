export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const res = await fetch(
      `https://api.noormeher.org/api/student/details.php?id=${id}`,
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