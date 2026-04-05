"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE } from "../utility_api";
export default function MobileSidebar({ open, setOpen }) {
  const [achievements, setAchievements] = useState([]);

 
  useEffect(() => {
    fetch("/api/graduation")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setAchievements(result.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      <aside className={`mobile-sidebar ${open ? "open" : ""}`}>
       <nav className="mobile-nav">

  {/* ===== MAIN LINKS ===== */}
  <Link href="/" onClick={() => setOpen(false)}>Home</Link>
  <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
  <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
  <Link href="/activities" onClick={() => setOpen(false)}>Activities</Link>
  <Link href="/achievements" onClick={() => setOpen(false)}>Achievements</Link>
  <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
  <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>

  <Link
    href="/donate"
    className="donate-btn"
    onClick={() => setOpen(false)}
  >
    Donate Us
  </Link>

  {/* ===== QUICK LINKS ===== */}
  <details className="mobile-panel">
    <summary>Quick Links</summary>
    <ul className="mobile-quick-links">

      <li>
        <Link href="/quran" onClick={() => setOpen(false)}>
          Quranic Verses & Hadith
        </Link>
      </li>

      <li>
        <Link href="/mission" onClick={() => setOpen(false)}>
          Why Do We Exist?
        </Link>
      </li>

      <li>
        <Link href="/vision" onClick={() => setOpen(false)}>
          Aims & Objectives
        </Link>
      </li>

      <li>
        <Link href="/activities" onClick={() => setOpen(false)}>
          Admission & Education
        </Link>
      </li>

      <li>
        <Link href="/services" onClick={() => setOpen(false)}>
          Facility & Safety
        </Link>
      </li>

      <li>
        <Link href="/achievements" onClick={() => setOpen(false)}>
          Progress & Success
        </Link>
      </li>

      <li>
        <Link href="/student-info" onClick={() => setOpen(false)}>
          Get Student Info
        </Link>
      </li>

      <li>
        <Link href="/student-lists/Hafiz Student" onClick={() => setOpen(false)}>
          Hafiz Students
        </Link>
      </li>

      <li>
        <Link href="/faq" onClick={() => setOpen(false)}>
          FAQ
        </Link>
      </li>

    
      <li>
        <Link href="/help" onClick={() => setOpen(false)}>
          Alms / How You Can Help
        </Link>
      </li>

    </ul>
  </details>

  {/* ===== STUDENT ACHIEVEMENTS ===== */}
  <details className="mobile-panel">
    <summary>Student Achievements</summary>

    <div className="mobile-marquee">
      <ul className="mobile-scroll-list">
        {[...achievements, ...achievements].map((item, index) => (
          <li key={index}>
            <Link
              href={`/student-details/${item.id}`}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>

  </details>

</nav>
      </aside>
    </>
  );
}
