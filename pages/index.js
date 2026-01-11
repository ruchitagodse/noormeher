import { useState, useEffect, useRef } from "react";


import Layout from "../components/Layout";

const images = [
  "/images/slide11.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide6.jpg",
  "/images/slide7.jpg",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide1.jpg",
  "/images/slide8.jpg", 
    "/images/slide9.jpg",                             
      "/images/slide10.jpg",       
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, []);

  /* ================= SWIPE SUPPORT ================= */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchEndX.current - touchStartX.current > 50) prevSlide();
  };

  return (
    <Layout>
      {/* ================= HERO SLIDER ================= */}
      <section
        className="hero-slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* SLIDES */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* OVERLAY */}
     

        {/* TEXT ON IMAGE */}
     {/* REMOVE hero-overlay div completely */}

<div className="hero-content glass-box">
  <h1>Noormeher Charitable Trust</h1>
  <p>
    Working for Religious Education & Welfare of Orphan and Poor Muslim
    Children since 2001
  </p>
  <a href="/about" className="donate-btn">
    Read More
  </a>
</div>


        {/* ARROWS (DESKTOP) */}
        <button className="slider-arrow left" onClick={prevSlide}>
          ‹
        </button>
        <button className="slider-arrow right" onClick={nextSlide}>
          ›
        </button>
      </section>

   


      {/* ================= WELCOME ================= */}
    <section className="container section welcome-section">
  <div className="welcome-card">
    <span className="welcome-tag">Since 2001</span>

    <h2>Welcome to Noormeher Charitable Trust</h2>

    <p>
      <strong>Noor Meher Charitable Trust</strong> is an organization based in
      Mumbai, Maharashtra, India, primarily working to promote religious
      education and welfare for orphan and poor Muslim children.
    </p>

    <p>
      The Trust is registered under the Bombay Public Trust Act, 1950 (Regd.
      No. E-20745 Mumbai) and comes under the Income Tax Exemption Act, 1961
      (12AA).
    </p>

    <p className="highlight-line">
      By the grace of Allah, Noor Meher Charitable Trust has been serving the
      community continuously since <strong>2001</strong>.
    </p>
  </div>
</section>

      {/* ================= VISION / MISSION / ACHIEVEMENTS ================= */}
  <section className="container section grid-3 highlights">
  {/* VISION */}
  <div className="card highlight-card">
    <div className="card-image">
      <img src="/images/vision.jpg" alt="Our Vision" />
    </div>
    <h3>Our Vision</h3>
    <p>
      Our vision is to provide quality education, basic computer education,
      medical support, and essential facilities to poor and needy Muslim
      children, helping them grow with dignity and confidence.
    </p>
    <a href="/vision" className="link">Read More →</a>
  </div>

  {/* MISSION */}
  <div className="card highlight-card">
    <div className="card-image">
      <img src="/images/mission.jpg" alt="Our Mission" />
    </div>
    <h3>Our Mission</h3>
    <p>
      Our mission is to work for the care, education, and overall
      development of children from our community and to improve their
      quality of life through structured education and moral guidance.
    </p>
    <a href="/mission" className="link">Read More →</a>
  </div>

  {/* ACHIEVEMENTS */}
  <div className="card highlight-card">
    <div className="card-image">
      <img src="/images/achievemnts.jpg" alt="Achievements" />
    </div>
    <h3>Achievements</h3>
    <p>
      Alhamdulillah, since 2001 more than <strong>182 children</strong> have
      memorized the Holy Quran. In 2025, the number of students increased
      to <strong>165+</strong>.
    </p>
    <a href="/achievements" className="link">Read More →</a>
  </div>
</section>



      {/* ================= KEY HIGHLIGHTS ================= */}
      <section className="container section highlights">
        <h2 className="center">What We Do</h2>

        <div className="grid-3">
          <div className="card">
            <h4>Religious Education</h4>
            <p>
              Jamia Tajveedul Quran provides Hifz, Nazra, and Islamic education
              with strong moral values.
            </p>
          </div>

          <div className="card">
            <h4>Formal Schooling</h4>
            <p>
              Noor Meher Urdu School & Maktab focuses on academic excellence
              along with character building.
            </p>
          </div>

          <div className="card">
            <h4>Welfare & Support</h4>
            <p>
              Food, shelter, medical care, uniforms, books, and guidance for
              orphan and needy children.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
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
