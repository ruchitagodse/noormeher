import Link from "next/link";

export default function MobileSidebar({ open, setOpen }) {
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
              <li><Link href="/quran" onClick={() => setOpen(false)}>Quranic Verses & Hadith</Link></li>
              <li><Link href="/mission" onClick={() => setOpen(false)}>Why Do We Exist?</Link></li>
              <li><Link href="/vision" onClick={() => setOpen(false)}>Aims & Objectives</Link></li>
              <li><Link href="/activities" onClick={() => setOpen(false)}>Admission & Education</Link></li>
              <li><Link href="/services" onClick={() => setOpen(false)}>Facility & Safety</Link></li>
              <li><Link href="/achievements" onClick={() => setOpen(false)}>Progress & Success</Link></li>
                <li>
              <Link href="/help" onClick={() => setOpen(false)}>
              Alms / How You Can Help
              </Link>
            </li>    
             <li>
              <Link href="/student-info" onClick={() => setOpen(false)}>
              Get Students Info
              </Link>
            </li>    
             <li>
              <Link href="/faq" onClick={() => setOpen(false)}>
              FAQ's
              </Link>
            </li>                      
            </ul>
          </details>

          {/* ===== STUDENT ACHIEVEMENTS ===== */}
          <details className="mobile-panel">
            <summary>Student Achievements</summary>
            <ul className="mobile-achievements">
              <li>SSC Result 100% (2025)</li>
              <li>Dastarbandi Ceremony</li>
              <li>Engineering & Medical Admissions</li>
            </ul>
          </details>

        </nav>
      </aside>
    </>
  );
}
