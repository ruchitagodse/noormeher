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
  FaVideo,
} from "react-icons/fa";

const residentialServices = [
  { icon: FaTshirt, title: "Clothing" },
  { icon: FaLaptop, title: "Basic Computer Training" },
  { icon: FaTint, title: "Aqua Water Purifier" },
  { icon: FaUtensils, title: "Food" },
  { icon: FaHeartbeat, title: "Medical Check-Ups" },
  { icon: FaBook, title: "Religious and Academic Education" },
  { icon: FaLaptop, title: "AI Whiteboard for Education" },
  { icon: FaLock, title: "Locker Facility" },
  { icon: FaSchool, title: "School Bags and Supplies" },
  { icon: FaBed, title: "Bedding" },
  { icon: FaUserShield, title: "Accommodation" },
  { icon: FaSnowflake, title: "Air Conditioner Facility" },
  { icon: FaVideo, title: "CCTV Surveillance" },
  { icon: FaFireExtinguisher, title: "Fire Safety System" },
];

export default function Services() {
  return (
    <Layout title="Services | Noormeher Charitable Trust">
      <section
        className="feature-hero"
        style={{ backgroundImage: "url('/images/activities.jpg')" }}
      >
        <div className="feature-hero-overlay" />
        <div className="container feature-hero-shell">
          <span className="feature-hero-pill">What We Do</span>
          <div className="feature-hero-text">
            <h1>Our Services</h1>
            <p>
              Providing care, education, protection, and practical support for every child.
            </p>
          </div>
        </div>
      </section>

      <section className="container section services-section">
        <div className="section-heading left">
          <span>Residential Support</span>
          <h2>Facilities provided for resident children</h2>
        </div>

        <div className="services-cards">
          {residentialServices.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="service-box">
                <Icon />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="academic-section">
        <div className="container academic-layout">
          <div className="section-heading left">
            <span>Academic Support</span>
            <h2>Religious learning and formal education go hand in hand.</h2>
          </div>

          <div className="academic-text content-card">
            <p>
              Noor Meher Charitable Trust offers both religious and formal education.
              Jamia Tajveedul Quran provides Quranic recitation classes at three levels
              including Noorani Qaida, Nazera, and Hifz, along with a structured academic
              syllabus that includes quarterly, half-term, and annual examinations.
            </p>

            <p>
              The trust also runs Noor Meher Urdu Maktab and High School
              (Grades 1-10, Maharashtra State Board), where students take unit tests,
              semester examinations, and final examinations as part of their formal education.
            </p>

            <p>
              In addition, the trust is registered with NIOS (National Institute of Open
              Schooling), giving students flexible learning pathways. Many students have
              successfully completed their academic programs through NIOS.
            </p>
          </div>

          <div className="academic-split">
            <div className="academic-card">
              <h4>Health and Hygiene</h4>
              <ul>
                <li>Nutrition support</li>
                <li>Medicines</li>
                <li>Toiletries</li>
                <li>Wall-to-wall carpeted spaces</li>
                <li>Water storage tanks cleaned every six months</li>
              </ul>
            </div>

            <div className="academic-card">
              <h4>Safety and Security</h4>
              <ul>
                <li>Teachers available on-site for supervision</li>
                <li>40-camera CCTV monitoring</li>
                <li>Fire extinguishers installed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
