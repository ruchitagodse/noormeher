import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "./MobileSideBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        {/* ================= TOP BAR (DESKTOP ONLY) ================= */}
        {/* <div className="top-bar">
          <div className="container top-bar-inner">
         

            <div className="top-social">
              <a
                href="https://www.facebook.com/pages/NOOR-MEHER-Charitable-Trust/1447364995483276"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://twitter.com/Noormeher_org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.linkedin.com/pub/noor-meher/102/ba8/46"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div> */}

        {/* ================= MAIN HEADER ================= */}
        <div className={`main-header ${scrolled ? "scrolled" : ""}`}>
          <div className="container header-inner">
            {/* Logo */}
            <div className="logo">
              <img src="/hero.jpg" alt="Noormeher Charitable Trust" />
            </div>

            {/* Desktop Navigation */}
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/activities">Activities</Link>
              <Link href="/achievements">Achievements</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/donate" className="donate-btn">
                Donate Us
              </Link>
            </nav>

            {/* ✅ MOBILE HAMBURGER (INSIDE HEADER) */}
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* ================= SIDEBAR ================= */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </>
  );
}
