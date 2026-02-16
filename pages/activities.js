"use client";

import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import {
  FaUserGraduate,
  FaBookOpen,
  FaLaptop,
  FaTrophy,
  FaCalendarAlt,
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
    <section className="activity-hero">
  <div className="activity-hero-overlay"></div>
</section>

<div className="about-heading container">
   <h1>Activities</h1>
          <p>Empowering children through structured education & meaningful programs</p>
</div>
  
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
              <p>Celebrate Eid-ul-Fitr & Eid-al-Adha with community gatherings.</p>
            </div>
          </div>

          <div className="timeline-item">
            <FaTrophy />
            <div>
              <h4>Inter School Competitions</h4>
              <p>Musabeqa, Hifz-ul-Quran, Qirat, Speech & Islamic Events.</p>
            </div>
          </div>

          <div className="timeline-item">
            <FaCalendarAlt />
            <div>
              <h4>Annual Events</h4>
              <p>Sports Day, Annual Function, Republic & Independence Day.</p>
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
            <p>Islamic Competitions</p>
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
