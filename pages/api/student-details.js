export default async function handler(req, res) {
  try {
    const { id } = req.query;

    const response = await fetch(
      `http://api.noormeher.org/api/student/details.php?id=${id}`
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    console.error("Proxy Error:", error);

    res.status(500).json({
      success: false,
      message: "Proxy API failed",
    });
  }
}