import { useState } from "react";
import Layout from "../components/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setStatus({ type: "success", message: result.message || "Message sent successfully" });
      setFormData({
        fullname: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Failed to send message" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout title="Contact Us | Noormeher Charitable Trust">
      <section
        className="page-hero contact-hero"
        style={{ backgroundImage: "url(/images/conact.png)" }}
      >
        <div className="overlay">
          <div className="container">
            <h2 className="center">Contact Us</h2>
            <p className="page-subtitle">
              We are here to help you. Reach out anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-card">
            <h3 className="card-title">Send us a message</h3>

            {status.message ? (
              <div className={status.type === "success" ? "alert alert-success" : "alert alert-danger"}>
                {status.message}
              </div>
            ) : null}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Mobile / Phone</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => {
                    setFormData({ fullname: "", email: "", mobile: "", message: "" });
                    setStatus({ type: "", message: "" });
                  }}
                  disabled={submitting}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          <div className="contact-card map-card" style={{ marginTop: "30px" }}>
            <iframe
              title="Noormeher Charitable Trust Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.329375061922!2d72.812481!3d19.180811000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b684e7edf0ff%3A0x265da16c8e6da9ef!2sNoormeher+Charitable+Trust!5e0!3m2!1sen!2sin!4v1439553395159"
              loading="lazy"
              allowFullScreen
              style={{
                width: "100%",
                height: "350px",
                border: "0",
                borderRadius: "12px",
              }}
            />
          </div>

          <div className="contact-info-grid">
            <div className="info-card">
              <h3>Contact Details</h3>

              <ul>
                <li><strong>Mobile:</strong> 09967759266</li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@noormeher.org">info@noormeher.org</a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a href="https://www.noormeher.org" target="_blank" rel="noreferrer">
                    www.noormeher.org
                  </a>
                </li>
              </ul>

              <p className="note">
                For any questions, write to{" "}
                <a href="mailto:admin@noormeher.org">admin@noormeher.org</a>
              </p>
            </div>

            <div className="info-card">
              <h3>Our Office</h3>

              <address>
                NOOR MEHER HOUSE,<br />
                Bungalow No. 12,<br />
                RSC 20, Near Akashwani Ground,<br />
                Malvani, Malad - West,<br />
                Mumbai - 400095,<br />
                Maharashtra, India.
              </address>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
