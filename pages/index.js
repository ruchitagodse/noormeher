import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaHandsHelping,
  FaPhoneAlt,
  FaGraduationCap,
  FaBookOpen,
  FaSchool,
  FaHandHoldingHeart,
} from "react-icons/fa";
import Layout from "../components/Layout";

const images = [
  "/images/s0.JPG",
  "/images/s2.jpeg",
  "/images/s3.jpeg",
  "/images/s6.jpeg",
  "/images/s7.jpeg",
  "/images/s4.jpeg",
  "/images/s5.jpeg",
  "/images/s1.jpeg",
  "/images/s8.jpeg",
  "/images/s9.jpeg",
  "/images/s10.jpeg",
];

function Counter({ number, label, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem(label);

    if (alreadyPlayed) {
      setCount(number);
      setPlayed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [number, played, label]);

  useEffect(() => {
    if (!visible || played) return;

    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= number) {
        setCount(number);
        clearInterval(counter);
        sessionStorage.setItem(label, "true");
        setPlayed(true);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [visible, number, played, label]);

  return (
    <div className="impact-card" ref={ref}>
      <h3>
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
    </div>
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [showYoutubePopup, setShowYoutubePopup] = useState(false);
  const youtubeVideoId = "NXmTjJVQZ80";
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setShowYoutubePopup(true);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchEndX.current - touchStartX.current > 50) prevSlide();
  };

  return (
    <Layout>
      <section
        className="hero-slider home-slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, index) => (
          <div
            key={img}
            className={`hero-slide ${index === current ? "active" : ""}`}
          >
            <img src={img} alt={`Noormeher Trust slide ${index + 1}`} />
            <div className="slide-overlay" />
          </div>
        ))}

        <div className="home-slider-content">
          <div className="home-slider-pill">✦ Noormeher Trust</div>
          <div className="home-slider-text">
            <h1>Welcome</h1>
            <p>
              Serving with Faith,
              <br />
              Education & Compassion
              <br />
              Since 2001
            </p>
          </div>
        </div>

        <button
          type="button"
          className="slider-arrow left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          type="button"
          className="slider-arrow right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#8250;
        </button>

        {showYoutubePopup && youtubeVideoId && (
          <div
            className="youtube-corner-widget"
            role="dialog"
            aria-modal="false"
            aria-label="Noormeher YouTube video"
          >
            <div className="youtube-corner-card">
              <button
                type="button"
                className="youtube-popup-close"
                onClick={() => setShowYoutubePopup(false)}
                aria-label="Close video popup"
              >
                ×
              </button>
              <div className="youtube-popup-frame-wrap">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                  title="Noormeher YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="modern-hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Empowering <br />
            Through <br />
            Education & Faith
          </h1>

          <p className="hero-subtext">
            Noormeher Charitable Trust is dedicated to providing quality Islamic
            education, community support, and building a brighter future for
            students.
          </p>

          <div className="hero-buttons">
            <a href="/about" className="read">
              Learn More
            </a>
            <a href="/donate" className="btn-outline">
              Get Involved
            </a>
          </div>
        </div>

        <div className="hero-right">
          <Link href="/activities" className="color-card purple">
            <FaCalendarAlt />
            <span>Activities</span>
          </Link>

          <Link href="/services" className="color-card pink">
            <FaHandsHelping />
            <span>Services</span>
          </Link>

          <Link href="/contact" className="color-card blue">
            <FaPhoneAlt />
            <span>Contact</span>
          </Link>

          <Link href="/achievements" className="color-card green">
            <FaGraduationCap />
            <span>Achievements</span>
          </Link>
        </div>
      </section>

      <section className="container section welcome-section">
        <div className="welcome-card">
          <span className="welcome-tag">Since 2001</span>

          <h2>Welcome to Noormeher Charitable Trust</h2>

          <p>
            <strong>Noor Meher Charitable Trust</strong> is an organization based in
            Mumbai, Maharashtra, India, primarily working to promote dual
            education and welfare for orphan and poor Muslim children.
          </p>

          <p>
            The Trust is registered under the Bombay Public Trust Act, 1950 (Regd.
            No. E-20745 Mumbai) and comes under the Income Tax Exemption Act, 1961
            (12AA).
          </p>

          <p className="highlight-line">
            By the grace of Almighty, Noor Meher Charitable Trust has been serving the
            community continuously since <strong>2001</strong>.
          </p>
        </div>
      </section>

      <section className="impact-section">
        <div className="container impact-grid">
          <Counter number={2001} label="Established" suffix="" />
          <Counter number={191} label="Hafiz Graduates" suffix="+" />
          <Counter number={141} label="Total Students" suffix="+" />
          <Counter number={40} label="CCTV Cameras" suffix="" />
        </div>
      </section>

      <section className="container section highlights">
        <h2 className="center"> About Us </h2>
        <div className="grid-3 highlight-grid">
          <div className="card highlight-card">
            <div className="highlight-img">
              <img src="/images/vision.jpg" alt="Our Vision" />
            </div>
            <div className="highlight-content">
              <h3>Our Vision</h3>
              <p>
                Our vision is to provide quality education, basic computer education,
                medical support, and essential facilities to poor and needy Muslim
                children.
              </p>
              <a href="/vision" className="highlight-btn">
                Read More
              </a>
            </div>
          </div>

          <div className="card highlight-card">
            <div className="highlight-img">
              <img src="/images/mission.jpg" alt="Our Mission" />
            </div>
            <div className="highlight-content">
              <h3>Our Mission</h3>
              <p>
                Our mission is to work for the care, education, and overall
                development of children through structured education and moral guidance.
              </p>
              <a href="/mission" className="highlight-btn">
                Read More
              </a>
            </div>
          </div>

          <div className="card highlight-card">
            <div className="highlight-img">
              <img src="/images/achievement.jpg" alt="Achievements" />
            </div>
            <div className="highlight-content">
              <h3>Achievements</h3>
              <p>
                Since 2001 more than <strong>191 children</strong> have memorized the Quran.
              </p>
              <a href="/achievements" className="highlight-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container section highlights">
        <h2 className="center">What We Do</h2>

        <div className="grid-3 services-grid">
          <div className="card service-card">
            <div className="icon-box green" aria-hidden="true">
              <FaBookOpen />
            </div>
            <h4>Religious Education</h4>
            <p>
              Jamia Tajveedul Quran provides Hifz, Nazra, and Islamic Secular education
              with strong moral values.
            </p>
          </div>

          <div className="card service-card">
            <div className="icon-box blue" aria-hidden="true">
              <FaSchool />
            </div>
            <h4>Formal Schooling</h4>
            <p>
              Noor Meher Urdu School & Maktab focuses on academic excellence
              along with character building.
            </p>
          </div>

          <div className="card service-card">
            <div className="icon-box purple" aria-hidden="true">
              <FaHandHoldingHeart />
            </div>
            <h4>Welfare & Support</h4>
            <p>
              Food, shelter, medical care, uniforms, books, and guidance for
              orphan and needy children.
            </p>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="cta-inner">
          <h2>Support Our Cause</h2>

          <p>
            Your contribution helps us educate, nurture, and empower children for
            a brighter and dignified future.
          </p>

          <a href="/donate" className="cta-btn">
            Donate Now
          </a>
        </div>
      </section>

    </Layout>
  );
}
