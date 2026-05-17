"use client";

import Layout from "../components/Layout";

const values = [
  "Quality education",
  "Nutritious food",
  "Proper clothing",
  "Healthcare support",
  "A safe and healthy living environment",
];

const stats = [
  { title: "Total Trustees", value: "10" },
  { title: "Teaching Staff", value: "24" },
  { title: "Non-Teaching Staff", value: "2" },
  { title: "Total Children", value: "160" },
];

function AdminCard({ title, value }) {
  return (
    <div className="admin-card">
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  );
}

export default function About() {
  return (
    <Layout title="About Us | Noormeher Charitable Trust">
      <section
        className="feature-hero"
        style={{ backgroundImage: "url('/images/AboutUs.jpg')" }}
      >
        <div className="feature-hero-overlay" />
        <div className="container feature-hero-shell">
          <span className="feature-hero-pill">Who We Are</span>
          <div className="feature-hero-text">
            <h1>About Us</h1>
            <p>
              Serving children with faith, education, compassion, and long-term care since 2001.
            </p>
          </div>
        </div>
      </section>

      <section className="container section about-section">
        <div className="about-content content-card">
          <div className="section-heading left">
            <span>Our Story</span>
            <h2>Building stability and opportunity for children who need both.</h2>
          </div>

          <p>
            Noor Meher Charitable Trust is a non-profit organization based in Mumbai,
            dedicated to religious education, academic growth, and overall welfare for
            orphaned and underprivileged Muslim children. Established in 2001 with only
            two orphan children, the trust has grown steadily and today supports more
            than 160 children.
          </p>

          <p>
            The trust is registered under the Bombay Public Trust Act, 1950
            (Reg. No. E-20745 Mumbai) and is recognized under the Income Tax Exemption
            Act, 1961 (12AA).
          </p>

          <p>
            Along with memorization of the Holy Quran, students receive education in
            English, Urdu, Hindi, Arabic, Marathi, Science, Mathematics, and Social
            Studies. The trust provides free education from Std. I to SSC Board, along
            with Quran memorization and access to a computer lab, library, and basic
            computer training.
          </p>

          <p>
            Orientation programs, competitions, and annual activities are organized every
            year to encourage students. Winners are recognized with certificates, shields,
            cash prizes, and gifts. To support student well-being, the trust also conducts
            free medical, dental, and eye check-up camps.
          </p>

          <p>
            The premises are monitored through 40 CCTV cameras, helping maintain a safe
            and structured environment. The trust has also achieved strong academic
            outcomes, including multiple SSC batches with excellent results while
            students continued Hifz studies.
          </p>

          <p>
            Since 2001, more than 191 students have become Hafiz. The trust also
            organizes the annual <strong>Musabeqatul Quran</strong>, a Quran recitation
            competition among religious institutions across Mumbai and Thane, promoting
            excellence in both Islamic and formal education.
          </p>

          <div className="about-values">
            <div>
              <h3 className="about-subheading">Every child deserves</h3>
              <ul className="about-icon-list">
                {values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>

            <div className="about-quote-card">
              <p>
                Every child deserves dignity, care, and the opportunity to grow in a
                safe, nurturing environment.
              </p>
            </div>
          </div>

          <h3 className="about-subheading">Administration</h3>
          <div className="admin-grid">
            {stats.map((item) => (
              <AdminCard key={item.title} title={item.title} value={item.value} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
