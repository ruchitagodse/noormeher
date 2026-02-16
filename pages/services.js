import Layout from "../components/Layout";
import {
  FaTshirt,
  FaLaptop,
  FaTint,
  FaUtensils,
  FaHeartbeat,
  FaBook,
  FaLock,
  FaSchool,
  FaUserShield,
  FaFireExtinguisher,
} from "react-icons/fa";

export default function Services() {
  return (
    <Layout title="Services | Noormeher Charitable Trust">
<section className="services-hero">
  <div className="about-hero-overlay"></div>
</section>

<div className="about-heading container">
   <h1>Our Services</h1>
          <p>
            Providing care, education, protection and opportunities for every child.
          </p>
</div>

      {/* ================= HERO ================= */}
  

      {/* ================= FACILITIES ================= */}
      <section className="container section services-section">

        <h2 className="section-title center">Facilities for Residence Children</h2>

        <div className="services-cards">

          <div className="service-box"><FaTshirt /><span>Clothing</span></div>
          <div className="service-box"><FaLaptop /><span>Basic Computer Training</span></div>
          <div className="service-box"><FaTint /><span>Aqua Water Purifier</span></div>
          <div className="service-box"><FaUtensils /><span>Food</span></div>
          <div className="service-box"><FaHeartbeat /><span>Medical Checkups</span></div>
          <div className="service-box"><FaBook /><span>Religious & Academic Education</span></div>
          <div className="service-box"><FaLock /><span>Locker Facility</span></div>
          <div className="service-box"><FaSchool /><span>School Supplies</span></div>

        </div>
      </section>

      {/* ================= ACADEMIC ================= */}
      <section className="academic-section">

        <div className="container">

          <h2 className="section-title center">Academic Excellence</h2>

          <div className="academic-split">

            <div className="academic-text">
              <p>
                The Noor Meher Charitable Trust offers both religious and formal
                education. Jamiya Tajveedul Quran provides Quranic recitation
                classes at three levels (Noorani Qaida, Nazera, Hifz) and a full
                academic syllabus with quarterly, half-term, and annual exams.
              </p>

              <p>
                The Trust also runs Noor Meher Urdu Maktab and High School
                (Grades 1-10, Maharashtra State Board), conducting unit tests,
                semester exams and final exams.
              </p>
            </div>

            <div className="academic-card">
              <h4>Health & Hygiene</h4>
              <ul>
                <li>Nutrition & Medicine</li>
                <li>Toiletries</li>
                <li>Professional water tank cleaning</li>
                <li>Wall-to-wall carpet</li>
              </ul>
            </div>

            <div className="academic-card">
              <h4>Safety & Security</h4>
              <ul>
                <li>24/7 teacher supervision</li>
                <li>24 CCTV monitoring</li>
                <li>Fire extinguishers installed</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </Layout>
  );
}
