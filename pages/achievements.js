"use client";

import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";

export default function Achievements() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);

  const statsRef = useRef(null);

  // ================= TIMELINE =================
  const timelineData = [
    { year: "2001", text: "Trust started with 2 Orphan children.", icon: "🏁" },
    { year: "2002", text: "Academic activity started with languages.", icon: "📚" },
    { year: "2004", text: "Resident children increased to 32.", icon: "👨‍👧‍👦" },
    { year: "2005", text: "First batch of Huffaz completed.", icon: "🎓" },
    { year: "2006", text: "Resident children increased to 44.", icon: "📈" },
    { year: "2007", text: "Primary School started.", icon: "🏫" },
    { year: "2008", text: "1st Musabeqatul Quran organized.", icon: "📖" },
    { year: "2009", text: "2nd Musabeqatul Quran competition held.", icon: "🏆" },
    { year: "2010", text: "3rd Musabeqatul Quran competition.", icon: "🏆" },
    { year: "2011", text: "Resident children reached 100.", icon: "💯" },
    { year: "2012", text: "Sports Week and Craft Show organized.", icon: "🎨" },
    { year: "2013", text: "First SSC batch – 100% result.", icon: "🥇" },
    { year: "2014", text: "Second SSC batch – 100% result.", icon: "🥇" },
    { year: "2015", text: "Students secured seats in Engineering & Medical.", icon: "🧑‍⚕️" },
    { year: "2016", text: "Science Fair organized.", icon: "🔬" },
    { year: "2017", text: "First Hafiz students cleared 12th board.", icon: "🎓" },
    { year: "2018", text: "NIOS permission granted.", icon: "📜" },
    { year: "2019", text: "21st Annual Dastarbandi Ceremony.", icon: "🎉" },
    { year: "2020", text: "Online education started during COVID.", icon: "💻" },
    { year: "2021", text: "Ninth SSC batch – 100% result.", icon: "🥇" },
    { year: "2022", text: "Azadi Ka Amrit Mahotsav celebration.", icon: "🇮🇳" },
    { year: "2023", text: "Interactive Whiteboards installed.", icon: "🖥️" },
    { year: "2024", text: "AC installed and PDL activities.", icon: "❄️" },
    { year: "2025", text: "Silver Jubilee Celebration.", icon: "🎊" },
  ];

  // ================= SCROLL PROGRESS =================
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ================= FIXED OBSERVER =================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect(); // ✅ run once
        }
      },
      { threshold: 0.2 } // ✅ lower threshold
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ FALLBACK (important for mobile)
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // ================= STAGGER TIMELINE =================
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".journey-card");

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();

        if (rect.top < window.innerHeight - 80) {
          setTimeout(() => {
            setVisibleItems((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });
          }, index * 120);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ================= COUNTER =================
const Counter = ({ end, id }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const key = `counter_${id}`;

    // ✅ Check if already calculated
    const saved = sessionStorage.getItem(key);
    if (saved) {
      setCount(Number(saved));
      return; // ❌ don't run again
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
        sessionStorage.setItem(key, end); // ✅ store final value
      }
    };

    requestAnimationFrame(step);
  }, [end, id]);

  return <span>{count}</span>;
};
  return (
    <Layout title="Achievements | Noormeher Charitable Trust">

      {/* Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      
        <section
  className="about-hero"
  style={{
    backgroundImage: "url('/images/Achievements.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="about-overlay"></div>

  <div className="about-inner container">
  <span className="tag">✦ Our Impact</span>

    <div className="about-flex">
      <h1>Achievements</h1>

      <p>
   From 2001 to today, we have grown step by step—empowering children,
            building futures, and creating meaningful change.
      </p>
    </div>
  </div>
</section>
   
      

        {/* Stats */}
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

        {/* Timeline */}
        <div className="journey-timeline">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`journey-card ${
                visibleItems.includes(index) ? "show" : ""
              }`}
            >
              <div className="journey-header">
                <span className="journey-icon">{item.icon}</span>
                <h3 className="journey-title">{item.year}</h3>
              </div>

              <p className="journey-desc">{item.text}</p>
            </div>
          ))}
        </div>

  
    </Layout>
  );
}