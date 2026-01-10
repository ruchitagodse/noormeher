import Layout from "../components/Layout";

export default function Vision() {
  return (
    <Layout>
      {/* ================= HERO / TITLE SECTION ================= */}
    <section
        className="page-hero activities-hero"
        style={{ backgroundImage: "url(/images/activities.jpg)" }}
      >
        <div className="overlay">
          <div className="container">
            <h1 className="page-title">Our Vision</h1>
          </div>
        </div>
      </section>
      {/* ================= VISION CONTENT ================= */}
      <section className="container section  white-bg ">
    
    

        <ul className="activity-list">
          <li>
            Education with residential accommodation and arrangement of food
            and clothing for poor, needy, orphan and deserving Muslim students.
          </li>

          <li>
            Assistance for the relief and welfare of poor and needy Muslim
            orphan children.
          </li>

          <li>
            Basic computer education in English and Urdu for students.
          </li>

          <li>
            Helping students to memorize the Holy Quran (HIFZ).
          </li>

          <li>
            Monetary assistance for further education to become QARI, AALIM,
            or MUFTI.
          </li>

          <li>
            Academic education from 1st Standard to 10th Standard.
          </li>

          <li>
            Monetary assistance for higher education (Engineering, Medical,
            IT, Commerce).
          </li>

          <li>
            Scholarships and cash assistance for poor, needy and orphan
            Muslim children.
          </li>

          <li>
            Monthly grocery and monetary assistance for divorced and widow
            women.
          </li>

          <li>
            Monetary assistance for Lawarris Maiyyat (unclaimed dead bodies),
            including free kafan and burial arrangements.
          </li>

          <li>
            Medicines for poor and needy Muslims.
          </li>

          <li>
            Monetary assistance for poor Muslim girls for marriage.
          </li>
        </ul>
      </section>
    </Layout>
  );
}
