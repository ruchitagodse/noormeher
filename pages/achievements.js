"use client";

import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";

const timelineData = [
  {
    year: "2001",
    short: "Trust started with 2 orphan children.",
    items: [
      "Noor Meher Charitable Trust started its activity.",
      "Jamia Tajveedul Quran established.",
    ],
    icon: "🏁",
  },
  {
    year: "2002",
    short: "Academic activity started.",
    items: ["Started English, Urdu, and Hindi education."],
    icon: "📚",
  },
  {
    year: "2009",
    short: "Growth and multiple activities.",
    items: [
      "2nd Musabeqatul Quran competition.",
      "Students increased to 85.",
      "Orientation Day organized.",
      "Picnic organized for students.",
    ],
    icon: "🏆",
  },
  {
    year: "2018",
    short: "NIOS and major upgrades.",
    items: [
      "NIOS permission granted.",
      "Student strength increased.",
      "New laptops introduced.",
      "Eye checkup camp organized.",
    ],
    icon: "📜",
  },
  {
    year: "2025",
    short: "Silver Jubilee milestone.",
    items: [
      "25th Annual Function conducted.",
      "Silver Jubilee celebration.",
      "13th batch SSC result 100%.",
    ],
    icon: "🎊",
  },
];

function Counter({ end, id }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const key = `counter_${id}`;
    const saved = sessionStorage.getItem(key);

    if (saved) {
      setCount(Number(saved));
      return;
    }

    let startTimestamp = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
        sessionStorage.setItem(key, String(end));
      }
    };

    requestAnimationFrame(step);
  }, [end, id]);

  return <span>{count}</span>;
}

export default function Achievements() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const [openYear, setOpenYear] = useState(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".journey-card");

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();

        if (rect.top < window.innerHeight - 80) {
          setTimeout(() => {
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }, index * 120);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout title="Achievements | Noormeher Charitable Trust">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <section
        className="feature-hero"
        style={{ backgroundImage: "url('/images/achievement.jpeg')" }}
      >
        <div className="feature-hero-overlay" />
        <div className="container feature-hero-shell">
          <span className="feature-hero-pill">Our Impact</span>
          <div className="feature-hero-text">
            <h1>Achievements</h1>
            <p>
              From 2001 to today, we have grown step by step, empowering children,
              building futures, and creating meaningful change.
            </p>
          </div>
        </div>
      </section>

      <div className="stats-section" ref={statsRef}>
        <div className="stat-box">
          <h3>
            <Counter end={191} id="1" />
          </h3>
          <p>Huffaz Completed</p>
        </div>

        <div className="stat-box">
          <h3>
            <Counter end={100} id="2" />%
          </h3>
          <p>SSC Success Rate</p>
        </div>

        <div className="stat-box">
          <h3>
            <Counter end={25} id="3" />
          </h3>
          <p>Years of Service</p>
        </div>
      </div>

      <div className="journey-timeline">
        {timelineData.map((item, index) => {
          const isOpen = openYear === index;

          return (
            <div
              key={item.year}
              className={`journey-card ${visibleItems.includes(index) ? "show" : ""}`}
            >
              <div
                className="journey-header clickable"
                onClick={() => setOpenYear(isOpen ? null : index)}
              >
                <span>{item.icon}</span>
                <h3>{item.year}</h3>
                <span>{isOpen ? "▲" : "▼"}</span>
              </div>

              <p className="journey-desc">{item.short}</p>

              {isOpen && (
                <div className="journey-details">
                  {item.items.map((desc) => (
                    <p key={desc}>• {desc}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
