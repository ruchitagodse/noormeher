import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* ================= HERO / SLIDER ================= */}
      <section className="hero hero-bg">
        <div className="hero-content">
          <h1>Noormeher Charitable Trust</h1>
          <p>
            Working for Religious Education & Welfare of Orphan and Poor Muslim
            Children since 2001
          </p>
          <a href="/about" className="btn primary">
            Read More
          </a>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="container section">
        <h2 className="center">Welcome to Noormeher Charitable Trust</h2>
        <p>
          <strong>Noor Meher Charitable Trust</strong> is an organization based in
          Mumbai, Maharashtra, India, primarily working to promote religious
          education and welfare for orphan and poor Muslim children.
        </p>
        <p>
          The Trust is registered under the Bombay Public Trust Act, 1950 (Regd.
          No. E-20745 Mumbai) and comes under the Income Tax Exemption Act, 1961
          (12AA).
        </p>
        <p>
          By the grace of Allah, Noor Meher Charitable Trust has been serving the
          community continuously since <strong>2001</strong>.
        </p>
      </section>

      {/* ================= VISION / MISSION / ACHIEVEMENTS ================= */}
      <section className="container section grid-3">
        {/* VISION */}
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            Our vision is to provide quality education, basic computer education,
            medical support, and essential facilities to poor and needy Muslim
            children, helping them grow with dignity and confidence.
          </p>
          <a href="/vision" className="link">
            Read More →
          </a>
        </div>

        {/* MISSION */}
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            Our mission is to work for the care, education, and overall
            development of children from our community and to improve their
            quality of life through structured education and moral guidance.
          </p>
          <a href="/mission" className="link">
            Read More →
          </a>
        </div>

        {/* ACHIEVEMENTS */}
        <div className="card">
          <h3>Achievements</h3>
          <p>
            Alhamdulillah, since 2001 more than <strong>182 children</strong> have
            memorized the Holy Quran. In 2025, the number of students increased
            to <strong>165+</strong>.
          </p>
          <a href="/achievements" className="link">
            Read More →
          </a>
        </div>
      </section>

      {/* ================= KEY HIGHLIGHTS ================= */}
      <section className="container section highlights">
        <h2 className="center">What We Do</h2>

        <div className="grid-3">
          <div className="card">
            <h4>Religious Education</h4>
            <p>
              Jamia Tajveedul Quran provides Hifz, Nazra, and Islamic education
              with strong moral values.
            </p>
          </div>

          <div className="card">
            <h4>Formal Schooling</h4>
            <p>
              Noor Meher Urdu School & Maktab focuses on academic excellence
              along with character building.
            </p>
          </div>

          <div className="card">
            <h4>Welfare & Support</h4>
            <p>
              Food, shelter, medical care, uniforms, books, and guidance for
              orphan and needy children.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="cta section">
        <h2>Support Our Cause</h2>
        <p>
          Your contribution helps us educate, nurture, and empower children for
          a better future.
        </p>
        <a href="/donate" className="btn primary">
          Donate Now
        </a>
      </section>
    </Layout>
  );
}
