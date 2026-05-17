import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PageSidebar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  const [achievements, setAchievements] = useState([]);
  const scrollingAchievements = achievements.length ? [...achievements, ...achievements] : [];

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
              <Link href="/" className={`quick-link-card ${isActive("/") ? "active" : ""}`}>
                <span className="quick-link-title">Home</span>
              </Link>
            </li>

    

    <li>
              <Link href="/quran" className={`quick-link-card ${isActive("/quran") ? "active" : ""}`}>
                <span className="quick-link-title">Quranic Verses & Hadith</span>
              </Link>
            </li>

    <li>
              <Link href="/mission" className={`quick-link-card ${isActive("/mission") ? "active" : ""}`}>
                <span className="quick-link-title">Why Do We Exist?</span>
              </Link>
            </li>

    <li>
              <Link href="/vision" className={`quick-link-card ${isActive("/vision") ? "active" : ""}`}>
                <span className="quick-link-title">Aims & Objectives</span>
              </Link>
            </li>

    <li>
              <Link href="/activities" className={`quick-link-card ${isActive("/activities") ? "active" : ""}`}>
                <span className="quick-link-title">Admission & Education</span>
              </Link>
            </li>

    <li>
              <Link href="/services" className={`quick-link-card ${isActive("/services") ? "active" : ""}`}>
                <span className="quick-link-title">Facility & Safety</span>
              </Link>
            </li>

    <li>
              <Link href="/achievements" className={`quick-link-card ${isActive("/achievements") ? "active" : ""}`}>
                <span className="quick-link-title">Progress & Success</span>
              </Link>
            </li>




    <li>
              <Link href="/student-lists/Hafiz Student" className={`quick-link-card ${isActive("/student-lists") ? "active" : ""}`}>
                <span className="quick-link-title">Passout Students</span>
              </Link>
            </li>

   


    <li>
              <Link href="/faq" className={`quick-link-card ${isActive("/faq") ? "active" : ""}`}>
                <span className="quick-link-title">FAQ</span>
              </Link>
            </li>

   
    <li>
              <Link href="/help" className={`quick-link-card ${isActive("/help") ? "active" : ""}`}>
                <span className="quick-link-title">Alms / How You Can Help</span>
              </Link>
            </li>

  </ul>
</div>
      </details>

      <section className="achievement-panel">
        <div className="achievement-panel-header">
          <div>
            <p className="achievement-eyebrow">Student Highlights</p>
            <h3>Student Achievements</h3>
          </div>
          <span className="achievement-count">{achievements.length || 0}</span>
        </div>

        <div className="achievement-panel-body">
          {achievements.length ? (
            <ul className="achievement-list achievement-scroll-list">
              {scrollingAchievements.map((item, index) => (
                <li key={`${item.id}-${index}`}>
                  <Link href={`/student-details/${item.id}`} className="achievement-link">
                    <span className="achievement-title">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="achievement-empty">Loading student achievements...</p>
          )}
        </div>

        <div className="achievement-panel-footer">
          <Link href="/student-lists/Hafiz Student" className="achievement-cta">
            View passout students
          </Link>
        </div>
      </section>
    </aside>
  );
}
