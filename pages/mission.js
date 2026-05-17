import Layout from "@/components/Layout";

export default function MissionPage() {
  return (
    <Layout title="Mission | Noormeher Charitable Trust">
      <section
        className="inner-hero"
        style={{ backgroundImage: "url('/images/mission.jpg')" }}
      >
        <div className="inner-hero-overlay" />
        <div className="container inner-hero-shell">
          <span className="inner-hero-tag">Our Purpose</span>
          <div className="inner-hero-content">
            <div>
              <h1>Our Mission</h1>
              <p className="inner-hero-lead">
                To care for children, improve quality of life, and help them grow through education and guidance.
              </p>
            </div>
            <p className="inner-hero-side">
              The trust exists to turn care into long-term opportunity for orphan and underprivileged children.
            </p>
          </div>
        </div>
      </section>

      <section className="container section white-bg content-card">
        <p className="lead-quote">
          “Our mission is to work for the cause and care of children in our community and to improve their quality of life.”
        </p>

        <p>
          Noor Meher Charitable Trust, founder of Jamia Tajveedul Quran, started
          with two children in the year 2001. Today, in 2026, the trust serves
          more than 165 children.
        </p>

        <p>
          Over the years, the trust has helped shape children through education,
          personality development, and stage exposure, helping them grow into
          confident young people and professionals across many fields.
        </p>

        <p>
          There has been visible progress in discipline, concentration, leadership,
          and confidence. Children are encouraged to take an active interest in
          both education and personal growth.
        </p>

        <p>
          The trust works to nurture God-given potential in orphan and poor Muslim
          children so they can build a better future and help uplift the next generation.
        </p>

        <blockquote>
          Help us generously in this work by supporting children with education, care,
          and guidance. Every act of support contributes to a better future for orphans
          and the needy.
        </blockquote>
      </section>
    </Layout>
  );
}
