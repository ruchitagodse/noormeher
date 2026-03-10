export async function GET() {
  try {
    const res = await fetch(
      "http://api.noormeher.org/api/gallery/years.php",
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