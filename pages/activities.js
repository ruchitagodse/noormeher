"use client";

import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaHandsHelping,
  FaHeartbeat,
  FaLaptop,
  FaLightbulb,
  FaMosque,
  FaRunning,
  FaTrophy,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";

const highlightCards = [
  {
    icon: FaUserGraduate,
    title: "Admission",
    items: [
      "Age limit: 8 to 18 years",
      "Admissions begin on the 6th day of Eid-ul-Fitr",
      "Medical check-ups after admission",
      "Shobe-Hifz intake up to 14 years",
    ],
  },
  {
    icon: FaBookOpen,
    title: "Education",
    items: [
      "Formal and non-formal schooling",
      "Educational visits",
      "Islamic competitions",
      "Basic computer training",
    ],
  },
];

const timelineItems = [
  {
    icon: FaMosque,
    title: "Eid Celebrations",
    description: "Celebrate Eid-ul-Fitr and Eid-ul-Adha with community prayers and gatherings.",
  },
  {
    icon: FaTrophy,
    title: "Inter-School Competitions",
    description: "Musabeqa, Hifz-ul-Quran, Qirat, speech, and Islamic competitions.",
  },
  {
    icon: FaCalendarAlt,
    title: "Annual Events",
    description: "Sports Day, Gandhi Jayanti, Education Day, Children's Day, Republic Day, and Independence Day.",
  },
  {
    icon: FaGraduationCap,
    title: "Dastarbandi Ceremony",
    description: "An annual ceremony honoring students who complete Hifz-ul-Quran.",
  },
  {
    icon: FaBookOpen,
    title: "Quranic Classes",
    description: "Daily Quran recitation, Tajweed, Nazera, and Hifz programs.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Academic Programs",
    description: "Formal education with SSC curriculum, regular exams, and assessments.",
  },
  {
    icon: FaUsers,
    title: "Orientation Programs",
    description: "Welcoming and guiding new students through orientation sessions.",
  },
  {
    icon: FaRunning,
    title: "Sports and Physical Activities",
    description: "Sports week, fitness activities, and outdoor games for students.",
  },
  {
    icon: FaLightbulb,
    title: "Workshops and Training",
    description: "Skill development, personality development, and awareness workshops.",
  },
  {
    icon: FaHeartbeat,
    title: "Health and Welfare Camps",
    description: "Medical check-ups, eye camps, and health awareness programs.",
  },
  {
    icon: FaLaptop,
    title: "Digital Learning",
    description: "Smart classrooms, online education, and digital tools for learning.",
  },
  {
    icon: FaHandsHelping,
    title: "Community Support",
    description: "Charity drives, support for needy families, and social initiatives.",
  },
];

export default function Activities() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Layout title="Activities | Noormeher Charitable Trust">
      <section
        className="feature-hero"
        style={{ backgroundImage: "url('/images/15august.jpeg')" }}
      >
        <div className="feature-hero-overlay" />
        <div className="container feature-hero-shell">
          <span className="feature-hero-pill">What We Do</span>
          <div className="feature-hero-text">
            <h1>Activities</h1>
            <p>
              Empowering children through structured education and meaningful programs.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className={`activities-section ${visible ? "show" : ""}`}
      >
        <div className="container">
          <div className="section-heading left">
            <span>Daily Engagement</span>
            <h2>Admission, education, and programs designed to build confidence.</h2>
          </div>

          <div className="activities-grid">
            {highlightCards.map((card) => {
              const Icon = card.icon;

              return (
                <article key={card.title} className="activity-card">
                  <Icon />
                  <h3>{card.title}</h3>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <h2 className="section-title">Programme Highlights</h2>
          <div className="timeline">
            {timelineItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="timeline-item">
                  <Icon />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="activities-stats">
            <div className="stat-box">
              <h3>24+</h3>
              <p>Annual Events</p>
            </div>
            <div className="stat-box">
              <h3>10+</h3>
              <p>Islamic, madrasa, and inter-school competitions</p>
            </div>
            <div className="stat-box">
              <h3>100%</h3>
              <p>Student participation encouraged</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
