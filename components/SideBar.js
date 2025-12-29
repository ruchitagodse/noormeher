import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <>
      {/* ===== TOGGLE (MUST BE BEFORE SIDEBAR) ===== */}
      <input type="checkbox" id="sidebar-toggle" hidden />
      <label htmlFor="sidebar-toggle" className="sidebar-toggle">
        ☰
      </label>

      {/* ===== SIDEBAR ===== */}
      <aside className="sidebar">

        {/* ===== QUICK LINKS (ACCORDION) ===== */}
        <details className="panel" open>
          <summary>Quick Links</summary>

          <div className="panel-body">
            <ul className="quick-links">
              <li>
                <Link href="/quran" className={isActive("/quran") ? "active" : ""}>
                  Quranic Verses & Hadith
                </Link>
              </li>
              <li>
                <Link href="/mission" className={isActive("/mission") ? "active" : ""}>
                  Why Do We Exist?
                </Link>
              </li>
              <li>
                <Link href="/vision" className={isActive("/vision") ? "active" : ""}>
                  Aims & Objectives
                </Link>
              </li>
              <li>
                <Link href="/activities" className={isActive("/activities") ? "active" : ""}>
                  Admission & Education
                </Link>
              </li>
              <li>
                <Link href="/services" className={isActive("/services") ? "active" : ""}>
                  Facility & Safety
                </Link>
              </li>
              <li>
                <Link href="/achievements" className={isActive("/achievements") ? "active" : ""}>
                  Progress & Success
                </Link>
              </li>
              <li>
                <Link href="/help" className={isActive("/help") ? "active" : ""}>
                  Alms / How You Can Help
                </Link>
              </li>
            </ul>
          </div>
        </details>

        {/* ===== STUDENT ACHIEVEMENTS (ACCORDION) ===== */}
        <details className="panel">
          <summary>Student Achievements</summary>

          <div className="panel-body marquee">
            <ul>
              <li>
                <Link href="/student-achievements/2025">
                  Hafiz Students – SSC Result 100% (2025)
                </Link>
              </li>
              <li>
                <Link href="/student-achievements/2024">
                  Annual Dastarbandi Ceremony (2024)
                </Link>
              </li>
              <li>
                <Link href="/student-achievements/2023">
                  Engineering & Medical Admissions
                </Link>
              </li>
            </ul>

            <Link href="/gallery" className="read-more">
              Read More
            </Link>
          </div>
        </details>

      </aside>
    </>
  );
}
