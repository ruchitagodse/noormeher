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
  FaBed,
  FaUserShield,
  FaSnowflake,
  FaFireExtinguisher,
} from "react-icons/fa";

export default function Services() {
  return (
    <Layout title="Services | Noormeher Charitable Trust">

      {/* HERO */}
   
   <section
  className="about-hero"
  style={{
    backgroundImage: "url('/images/services.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="about-overlay"></div>

  <div className="about-inner container">
    <span className="tag">✦ What we do</span>

    <div className="about-flex">
      <h1>Our Services</h1>

      <p>
       Providing care, education, protection and opportunities for every child.
      </p>
    </div>
  </div>
</section>
      {/* FACILITIES */}
      <section className="container section services-section">

        <h2 className="section-title center">Facilities for Residence Children</h2>

        <div className="services-cards">

          <div className="service-box"><FaTshirt /><span>Clothing</span></div>
          <div className="service-box"><FaLaptop /><span>Basic Computer Training</span></div>
          <div className="service-box"><FaTint /><span>Aqua Water Purifier for Drinking</span></div>
          <div className="service-box"><FaUtensils /><span>Food</span></div>
          <div className="service-box"><FaHeartbeat /><span>Medical Check-Ups</span></div>
          <div className="service-box"><FaBook /><span>Religious & Academic Education</span></div>
          <div className="service-box"><FaLaptop /><span>AI Whiteboard for Education</span></div>
          <div className="service-box"><FaLock /><span>Locker</span></div>
          <div className="service-box"><FaSchool /><span>School Bags & Supplies</span></div>
          <div className="service-box"><FaBed /><span>Bedding</span></div>
          <div className="service-box"><FaUserShield /><span>Accommodation</span></div>
          <div className="service-box"><FaSnowflake /><span>Air Conditioner Facility</span></div>

        </div>

      </section>

      {/* ACADEMIC */}
      <section className="academic-section">

        <div className="container">

          <h2 className="section-title center">Academic</h2>

          <div className="academic-text">
<p>
  The Noor Meher Charitable Trust offers both religious and formal education. 
  Jamia Tajveedul Quran provides Quranic recitation classes at three levels 
  (Noorani Qaida, Nazera, Hifz) along with a structured academic syllabus 
  including quarterly, half-term, and annual examinations.
</p>

<p>
  The Trust also runs Noor Meher Urdu Maktab and High School (Grades 1–10, 
  Maharashtra State Board), where students undergo two unit tests, semester 
  examinations, and a final examination.
</p>

<p>
  In addition, the Trust is registered with NIOS (National Institute of Open Schooling), 
  providing students with flexible learning opportunities. Many students have successfully 
  completed their academic programs through NIOS.
</p>
          </div>

          <div className="academic-split">

            <div className="academic-card">
              <h4>Health & Hygiene</h4>
              <ul>
                <li>Nutrition</li>
                <li>Medicine</li>
                <li>Toiletries</li>
                <li>Wall to wall carpet</li>
                <li>Water storage tanks cleaned every six months</li>
              </ul>
            </div>

            <div className="academic-card">
              <h4>Safety & Security</h4>
              <ul>
                <li>Two Teachers available 24/7</li>
                <li>40 CCTV Monitoring</li>
                <li><FaFireExtinguisher /> Fire Extinguishers Installed</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

    </Layout>
  );
}