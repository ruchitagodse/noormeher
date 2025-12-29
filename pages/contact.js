import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact Us | Noormeher Charitable Trust">

      {/* HERO */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url(/images/contact.png)" }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Contact Us</h1>
          
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container section white-bg">
      
        <hr />

        <div className="grid-2">
          {/* CONTACT FORM */}
          <div>
            <form
              className="contact-form"
              action="/api/contact"
              method="post"
            >
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />

              <input
                type="text"
                name="mobile"
                placeholder="Mobile / Phone"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                required
              ></textarea>

              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  Submit
                </button>
                <button type="reset" className="btn-danger">
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* MAP */}
          <div className="map-container">
            <iframe
              title="Noormeher Charitable Trust Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.329375061922!2d72.812481!3d19.180811000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b684e7edf0ff%3A0x265da16c8e6da9ef!2sNoormeher+Charitable+Trust!5e0!3m2!1sen!2sin!4v1439553395159"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* CONTACT DETAILS */}
        <div className="grid-2 contact-info">
          <div>
            <h3>Contact</h3>
            <p><strong>Telephone No:</strong> 91-22-28810448</p>
            <p><strong>Mobile No:</strong> 09967759266</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@noormeher.org">info@noormeher.org</a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://www.noormeher.org">www.noormeher.org</a>
            </p>
            <p>
              If you have any questions or comments, feel free to write us at{" "}
              <a href="mailto:admin@noormeher.org">
                admin@noormeher.org
              </a>
            </p>
          </div>

          <div>
            <h3>At our office</h3>
            <p>
              NOOR MEHER HOUSE,<br />
              Bungalow No. 12,<br />
              RSC 20, Near Akashwani Ground,<br />
              Malvani, Malad - West,<br />
              Mumbai - 400095,<br />
              Maharashtra,<br />
              India.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
