"use client";

import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";

export default function Achievements() {

  const [visibleCount, setVisibleCount] = useState(10);
  const [statsVisible, setStatsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const statsRef = useRef(null);

  const timelineData = [
    { year: "2001", text: "Trust started with 2 Orphan children." },
    { year: "2002", text: "Academic activity started with languages." },
    { year: "2004", text: "Resident children increased to 32." },
    { year: "2005", text: "First batch of Huffaz completed." },
    { year: "2006", text: "Resident children increased to 44." },
    { year: "2007", text: "Primary School started." },
    { year: "2008", text: "1st Musabeqatul Quran organized." },
    { year: "2009", text: "2nd Musabeqatul Quran competition held." },
    { year: "2010", text: "3rd Musabeqatul Quran competition." },
    { year: "2011", text: "Resident children reached 100." },
    { year: "2012", text: "Sports Week and Craft Show organized." },
    { year: "2013", text: "First SSC batch – 100% result." },
    { year: "2014", text: "Second SSC batch – 100% result." },
    { year: "2015", text: "Students secured seats in Engineering & Medical." },
    { year: "2016", text: "Science Fair organized." },
    { year: "2017", text: "First Hafiz students cleared 12th board." },
    { year: "2018", text: "NIOS permission granted." },
    { year: "2019", text: "21st Annual Dastarbandi Ceremony." },
    { year: "2020", text: "Online education started during COVID." },
    { year: "2021", text: "Ninth SSC batch – 100% result." },
    { year: "2022", text: "Azadi Ka Amrit Mahotsav celebration." },
    { year: "2023", text: "Interactive Whiteboards installed." },
    { year: "2024", text: "AC installed and PDL activities." },
    { year: "2025", text: "Silver Jubilee Celebration." },
  ];

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress =
        (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stats visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  const Counter = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsVisible) return;

      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [statsVisible]);

    return <span>{count}</span>;
  };

  return (
    <Layout title="Achievements | Noormeher Charitable Trust">

      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <section className="container section white-bg">

         <section className="achieve-hero">
  <div className="achieve-hero-overlay"></div>
</section>

<div className="about-heading container">
   <h1>Achievements</h1>
          <p>Empowering children through structured education & meaningful programs</p>
</div>
  

        {/* ===== Animated Stats ===== */}
        <div className="stats-section" ref={statsRef}>
          <div className="stat-box">
            <h3><Counter end={182} /></h3>
            <p>Huffaz Completed</p>
          </div>

          <div className="stat-box">
            <h3><Counter end={100} />%</h3>
            <p>SSC Success Rate</p>
          </div>

          <div className="stat-box">
            <h3><Counter end={25} /></h3>
            <p>Years of Service</p>
          </div>
        </div>

        {/* ===== Timeline ===== */}
        <div className="timeline alt-timeline">
          {timelineData.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <h4>{item.year}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < timelineData.length && (
          <div className="timeline-buttons">
            <button
              className="read-more-btn"
              onClick={() => setVisibleCount(prev => prev + 5)}
            >
              Load More
            </button>
          </div>
        )}

      </section>
    </Layout>
  );
}
