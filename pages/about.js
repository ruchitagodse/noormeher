import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About Us | Noormeher Charitable Trust">

      {/* HERO */}
      <section
        className="page-hero about-hero"
        style={{ backgroundImage: "url(/images/AboutUs.jpg)" }}
      >
        <div className="overlay">
          <div className="container">
            <h1 className="page-title">About Us</h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container section white-bg about-section">

        <hr className="section-divider" />

        <div className="about-content">

          <p>
            Noor Meher Charitable Trust is a non-profit organization based in Mumbai,
            dedicated to providing religious, academic education and overall welfare
            to orphaned and underprivileged Muslim children. Established in 2001
            with just two orphan children, the Trust has grown steadily and today
            supports more than 140 children.
          </p>

          <p>
            The Trust is registered under the Bombay Public Trust Act, 1950
            (Reg. No. E-20745 Mumbai) and is recognized under the Income Tax Exemption
            Act, 1961 (12AA).
          </p>

          <p>
            Since its inception, Noor Meher Charitable Trust has been working for the
            education, health, and holistic development of children. Along with
            memorization of the Holy Quran, students receive quality education in
            English, Urdu, Hindi, Arabic and Marathi, as well as Science, Mathematics
            and Social Studies.
          </p>

          <p>
            The Trust provides free education from Std. I to SSC Board, along with
            Quran memorization. Facilities include a computer lab, a well-equipped
            library, and basic computer training to prepare students for the modern
            world.
          </p>

          <p>
            Orientation programs, competitions and annual activities are organized
            every year to encourage students. Winners are recognized with
            certificates, shields, cash prizes and gifts.
          </p>

          <p>
            To ensure students’ well-being, the Trust regularly conducts free
            medical, dental and eye check-up camps. The premises are secured with
            24 CCTV cameras with live monitoring to ensure the safety of children.
          </p>

          <p>
            Our SSC results have consistently been excellent. Multiple batches of
            students from 2013 onwards have passed with 100% results, while also
            completing memorization of the Holy Quran. Since 2001, over 85 students
            have become Hafiz — a remarkable achievement in Mumbai.
          </p>

          <p>
            The Trust also organizes the annual <strong>Musabeqatul Quran</strong>,
            a Quran recitation competition among religious institutions across
            Mumbai and Thane, promoting excellence in Islamic education.
          </p>

          <p>
            Noor Meher Charitable Trust works with the belief that every child,
            regardless of background, deserves dignity, care and opportunity to
            grow in a safe and nurturing environment.
          </p>

          <h3 className="about-subheading">
            Every child deserves:
          </h3>

          <ul className="about-icon-list">
            <li>Quality Education</li>
            <li>Nutritious Food</li>
            <li>Proper Clothing</li>
            <li>Health Care</li>
            <li>A Safe & Healthy Living Environment</li>
          </ul>

          <h3 className="about-subheading">Administration</h3>

          <ul className="about-admin-list">
            <li>Total Trustees: <strong>10</strong></li>
            <li>Teaching Staff: <strong>19</strong></li>
            <li>Non-Teaching Staff: <strong>2</strong></li>
            <li>Total Children: <strong>141</strong></li>
          </ul>

        </div>
      </section>
    </Layout>
  );
}
