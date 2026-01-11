import Link from "next/link";
import { useRouter } from "next/router";

export default function PageSidebar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  return (
    <aside className="page-sidebar">
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
              <li>
              <Link href="/student-info" className={isActive("/student-info") ? "active" : ""}>
              Get Students Info
              </Link>
            </li>    
             <li>
              <Link href="/faq" className={isActive("/faq") ? "active" : ""}>
              FAQ's
              </Link>
            </li>   
          </ul>
        </div>
      </details>

      <details className="panel">
        <summary>Student Achievements</summary>
        <div className="panel-body marquee">
          <ul>
            <li>SSC Result 100% (2025)</li>
            <li>Dastarbandi Ceremony</li>
            <li>Engineering & Medical Admissions</li>
          </ul>
        </div>
      </details>
    </aside>
  );
}
