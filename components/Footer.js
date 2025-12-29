import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* ================= CONTACT US ================= */}
        <div className="footer-col">
          <h4>CONTACT US</h4>
          <p className="footer-title">NOOR MEHER HOUSE</p>
          <p>
            Bungalow No. 12 RSC 20, Near Akashwani Ground,
            <br />
            Malvani, Malad - West, Mumbai - 400095,
            <br />
            Maharashtra, India
          </p>
          <p>📞 +91 99677 59266</p>
          <p>✉️ info@noormeher.org</p>
        </div>

        {/* ================= SHORT LINKS ================= */}
        <div className="footer-col">
          <h4>SHORT LINKS</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/activities">Activities</Link></li>
            <li><Link href="/achievements">Achievements</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/donate">Donate</Link></li>
            <li><Link href="/hafiz">Hafiz</Link></li>
          </ul>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/vision">Vision</Link></li>
            <li><Link href="/mission">Mission</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/disclaimer-policy">Disclaimer Policy</Link></li>
            <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link href="/student-info">Get Student Info</Link></li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} All Rights Reserved By Noormeher
          Charitable Trust.
        </p>
        <p>
          Handcrafted with <span style={{ color: "red" }}>❤</span> by{" "}
          <span className="brand">Webhawkers</span>
        </p>
      </div>
    </footer>
  );
}
