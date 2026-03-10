import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PageSidebar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

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
          </ul>
        </div>
      </details>

      <details className="panel">
        <summary>Student Achievements</summary>

        <div className="panel-body marquee">
          <ul className="scroll-list">
            {[...achievements, ...achievements].map((item, index) => (
              <li key={index}>
                <Link href={`/student-details/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </aside>
  );
}