"use client";

import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import {
  FaUserGraduate,
  FaBookOpen,
  FaLaptop,
  FaTrophy,
  FaCalendarAlt,FaGraduationCap,FaChalkboardTeacher,FaUsers,FaRunning,FaLightbulb,FaHeartbeat,FaHandsHelping,
  FaMosque,
} from "react-icons/fa";

export default function Activities() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  /* ================= SCROLL REVEAL ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <Layout title="Activities | Noormeher Charitable Trust">
        <section
  className="about-hero"
  style={{
    backgroundImage: "url('/images/activities.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="about-overlay"></div>

  <div className="about-inner container">
  <span className="tag">✦ What We Do</span>

    <div className="about-flex">
      <h1>Activities</h1>

      <p>
     Empowering children through structured education & meaningful programs
      </p>
    </div>
  </div>
</section>
   
      {/* ================= HERO ================= */}
    
      {/* ================= MAIN CONTENT ================= */}
      <section
        ref={sectionRef}
        className={`activities-section ${visible ? "show" : ""}`}
      >

        {/* ================= ADMISSION & EDUCATION ================= */}
        <div className="activities-grid">

          <div className="activity-card">
            <FaUserGraduate />
            <h3>Admission</h3>
            <ul>
              <li>Age Limit 8 – 14 years</li>
              <li>Admission on 6th Day of Eid-Ul-Fitr</li>
              <li>Medical Check-Ups after Admission</li>
              <li>Shobe-Hifz up to 14 years</li>
            </ul>
          </div>

          <div className="activity-card">
            <FaBookOpen />
            <h3>Education</h3>
            <ul>
              <li>Formal & Non-formal School</li>
              <li>Educational Visits</li>
              <li>Islamic Competitions</li>
              <li>Basic Computer Training</li>
            </ul>
          </div>

        </div>

        {/* ================= PROGRAMME TIMELINE ================= */}
        <h2 className="section-title">Programme Highlights</h2>
<div className="timeline">

  <div className="timeline-item">
    <FaMosque />
    <div>
      <h4>Eid Celebrations</h4>
      <p>Celebrate Eid-ul-Fitr & Eid-ul-Adha with community prayers and gatherings.</p>
    </div>
  </div>

  <div className="timeline-item">
    <FaTrophy />
    <div>
      <h4>Inter School Competitions</h4>
      <p>Musabeqa, Hifz-ul-Quran, Qirat, Speech & Islamic competitions.</p>
    </div>
  </div>

  <div className="timeline-item">
    <FaCalendarAlt />
    <div>
      <h4>Annual Events</h4>
      <p>Sports Day, Gandhi Jayanti, Education Day, Children's Day, Republic Day & Independence Day.</p>
    </div>
  </div>

  <div className="timeline-item">
    <FaGraduationCap />
    <div>
      <h4>Dastarbandi Ceremony</h4>
      <p>Annual ceremony honoring students who complete Hifz-ul-Quran.</p>
    </div>
  </div>

  <div className="timeline-item">
    <FaBookOpen />
    <div>
      <h4>Quranic Classes</h4>
      <p>Daily Quran recitation, Tajweed, Nazera and Hifz programs.</p>
    </div>
  </div>

  <div className="timeline-item">
    <FaChalkboardTeacher />
    <div>
      <h4>Academic Programs</h4>
      <p>Formal education with SSC curriculum, regular exams and assessments.</p>
    </div>
  </div>

  <div className="timeline-item">
    <FaUsers />
    <div>
      <h4>Orientation Programs</h4>
      <p>Welcoming and guiding new students with orientation sessions.</p>
    </div>
  </div>

  <div className="timeline-item">
    <FaRunning />
    <div>
      <h4>Sports & Physical Activities</h4>
      <p>Sports week, fitness activities and outdoor games for students.</p>
    </div>
  </div>

  <div className="timeline-item">
    <FaLightbulb />
    <div>
      <h4>Workshops & Training</h4>
      <p>Skill development, personality development and awareness workshops.</p>
    </div>
  </div>

  <div className="timeline-item">
    <FaHeartbeat />
    <div>
      <h4>Health & Welfare Camps</h4>
      <p>Medical checkups, eye camps and health awareness programs.</p>
    </div>
  </div>

  <div className="timeline-item">
    <FaLaptop />
    <div>
      <h4>Digital Learning</h4>
      <p>Smart classrooms, online education and digital tools for learning.</p>
    </div>
  </div>

  <div className="timeline-item">
    <FaHandsHelping />
    <div>
      <h4>Community Support</h4>
      <p>Charity drives, support for needy families and social initiatives.</p>
    </div>
  </div>

</div>
        {/* ================= STATS ================= */}
        <div className="activities-stats">
          <div className="stat-box">
            <h3>24+</h3>
            <p>Annual Events</p>
          </div>
          <div className="stat-box">
            <h3>10+</h3>
            <p>Islamic Competitions,Madarsa Competitions,Inter School Competitions</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Student Participation</p>
          </div>
        </div>

      </section>
    </Layout>
  );
}
