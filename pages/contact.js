import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact Us | Noormeher Charitable Trust">

      {/* ================= PAGE HERO ================= */}
      <section
        className="page-hero contact-hero"
        style={{ backgroundImage: "url(/images/contact.png)" }}
      >
        <div className="overlay">
          <div className="container">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              We are here to help you. Reach out anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="section contact-section">
        <div className="container">

          <div className="grid-2 contact-grid">

            {/* ================= CONTACT FORM ================= */}
         <div className="contact-grid">
  {/* FORM CARD */}
  <div className="contact-card">
    <h3 className="card-title">Send us a message</h3>

    <form className="contact-form" action="/api/contact" method="post">
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" name="fullname" required />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="email" required />
      </div>

      <div className="form-group">
        <label>Mobile / Phone</label>
        <input type="text" name="mobile" required />
      </div>

      <div className="form-group">
        <label>Your Message</label>
        <textarea name="message" rows="5" required />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          Send Message
        </button>
        <button type="reset" className="btn-outline">
          Reset
        </button>
      </div>
    </form>
  </div>

  {/* MAP CARD */}
  <div className="contact-card map-card">
    <iframe
      title="Noormeher Charitable Trust Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.329375061922!2d72.812481!3d19.180811000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b684e7edf0ff%3A0x265da16c8e6da9ef!2sNoormeher+Charitable+Trust!5e0!3m2!1sen!2sin!4v1439553395159"
      loading="lazy"
      allowFullScreen
    />
  </div>
</div>

          </div>

          {/* ================= CONTACT DETAILS ================= */}
          <div className="contact-info-grid">

            <div className="info-card">
              <h3>Contact Details</h3>

              <ul>
                <li><strong>Telephone:</strong> 91-22-28810448</li>
                <li><strong>Mobile:</strong> 09967759266</li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@noormeher.org">info@noormeher.org</a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a href="https://www.noormeher.org" target="_blank">
                    www.noormeher.org
                  </a>
                </li>
              </ul>

              <p className="note">
                For any questions, write to{" "}
                <a href="mailto:admin@noormeher.org">
                  admin@noormeher.org
                </a>
              </p>
            </div>

            <div className="info-card">
              <h3>Our Office</h3>

              <address>
                NOOR MEHER HOUSE,<br />
                Bungalow No. 12,<br />
                RSC 20, Near Akashwani Ground,<br />
                Malvani, Malad – West,<br />
                Mumbai – 400095,<br />
                Maharashtra, India.
              </address>
            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
}
