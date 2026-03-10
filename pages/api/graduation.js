export default async function handler(req, res) {
  try {
    const response = await fetch(
      "http://api.noormeher.org/api/achievements/graduation.php"
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Proxy API failed",
      error: error.message,
    });
  }
}