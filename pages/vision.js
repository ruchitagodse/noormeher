import Layout from "../components/Layout";

const visionItems = [
  "Education with residential accommodation, food, and clothing for poor, needy, orphan, and deserving Muslim students.",
  "Relief and welfare support for poor and needy Muslim orphan children.",
  "Basic computer education in English and Urdu for students.",
  "Support for students working to memorize the Holy Quran (Hifz).",
  "Monetary assistance for further education to become Qari, Aalim, or Mufti.",
  "Academic education from 1st Standard to 10th Standard.",
  "Monetary assistance for higher education in Engineering, Medical, IT, and Commerce.",
  "Scholarships and cash assistance for poor, needy, and orphan Muslim children.",
  "Monthly grocery and financial assistance for divorced and widow women.",
  "Support for burial arrangements for unclaimed dead bodies, including kafan and related help.",
  "Medicines for poor and needy Muslims.",
  "Financial assistance for marriage support for poor Muslim girls.",
];

export default function Vision() {
  return (
    <Layout title="Vision | Noormeher Charitable Trust">
      <section
        className="inner-hero"
        style={{ backgroundImage: "url('/images/vision.jpg')" }}
      >
        <div className="inner-hero-overlay" />
        <div className="container inner-hero-shell">
          <span className="inner-hero-tag">A Better Tomorrow</span>
          <div className="inner-hero-content">
            <div>
              <h1>Our Vision</h1>
              <p className="inner-hero-lead">
                Step by step, we aim to build futures through education, welfare, and meaningful support.
              </p>
            </div>
            <p className="inner-hero-side">
              The vision is not limited to one program. It extends to learning, housing, health,
              dignity, and long-term opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="container section white-bg content-card">
        <div className="section-heading left">
          <span>Long-Term Direction</span>
          <h2>What the trust continues to work toward.</h2>
        </div>

        <ul className="activity-list">
          {visionItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
