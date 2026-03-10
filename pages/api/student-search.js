export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const dob = searchParams.get("dob");

  try {
    const res = await fetch(
      `http://api.noormeher.org/api/student/search.php?dob=${dob}`,
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