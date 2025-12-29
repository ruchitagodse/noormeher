import Layout from "../components/Layout";

export default function Disclaimer() {
  return (
    <Layout title="Disclaimer Policy | Noormeher Charitable Trust">

      {/* ===== HERO / TITLE SECTION ===== */}
      <section className="page-hero">
        <div className="container">
          <h1>Disclaimer Policy</h1>
        
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="container page-content">
        <div className="content-with-sidebar">

          {/* ===== MAIN CONTENT ===== */}
          <div className="main-content">
     
            <hr />

            <p>
              The information contained in this website is for general information
              purposes only. The information is provided by{" "}
              <strong>NoorMeher Charitable Trust</strong> and while we endeavor to
              keep the information up to date and correct, we make no
              representations or warranties of any kind, express or implied,
              about the completeness, accuracy, reliability, suitability or
              availability with respect to the website or the information,
              products, services, or related graphics contained on the website
              for any purpose.
            </p>

            <p>
              Any reliance you place on such information is therefore strictly at
              your own risk.
            </p>

            <p>
              In no event will we be liable for any loss or damage including
              without limitation, indirect or consequential loss or damage, or
              any loss or damage whatsoever arising from loss of data or profits
              arising out of, or in connection with, the use of this website.
            </p>

            <p>
              Through this website you are able to link to other websites which
              are not under the control of <strong>NoorMeher Charitable Trust</strong>.
              We have no control over the nature, content and availability of
              those sites.
            </p>

            <p>
              The inclusion of any links does not necessarily imply a
              recommendation or endorse the views expressed within them.
            </p>
          </div>

          {/* ===== SIDEBAR (STATIC FOR NOW) ===== */}
          <aside className="sidebar">
            <div className="sidebar-box">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/quran">Quranic Verses & Hadith</a></li>
                <li><a href="/mission">Why Do We Exist?</a></li>
                <li><a href="/vision">Aims & Objectives</a></li>
                <li><a href="/activities">Admission & Education</a></li>
                <li><a href="/services">Facility & Safety</a></li>
                <li><a href="/achievements">Progress & Success</a></li>
                <li><a href="/help">How You Can Help</a></li>
              </ul>
            </div>
          </aside>

        </div>
      </section>

      {/* ===== BASIC STYLES (can move to CSS file) ===== */}
      <style jsx>{`
        .page-hero {
          background: #2f3e46;
          color: #fff;
          padding: 60px 0;
        }

        .breadcrumb {
          margin-top: 10px;
          font-size: 14px;
        }

        .breadcrumb a {
          color: #fff;
          text-decoration: underline;
        }

        .page-content {
          padding: 50px 0;
        }

        .content-with-sidebar {
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 30px;
        }

        .main-content h2 {
          margin-bottom: 10px;
        }

        .main-content p {
          line-height: 1.7;
          margin-bottom: 15px;
        }

        .sidebar-box {
          border: 1px solid #ddd;
          padding: 15px;
        }

        .sidebar-box h3 {
          margin-bottom: 10px;
        }

        .sidebar-box ul {
          list-style: none;
          padding: 0;
        }

        .sidebar-box li {
          margin-bottom: 8px;
        }

        .sidebar-box a {
          text-decoration: none;
          color: #0070f3;
        }

        @media (max-width: 768px) {
          .content-with-sidebar {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </Layout>
  );
}
