import Layout from "../components/Layout";

export default function Disclaimer() {
  return (
    <Layout title="Disclaimer Policy | Noormeher Charitable Trust">

      {/* ===== HERO / TITLE SECTION ===== */}
      
          <h2 className="center">Disclaimer Policy</h2>
        
      {/* ===== CONTENT SECTION ===== */}
      <section className="container page-content white-bg">
        <div className="content-with-sidebar">

          {/* ===== MAIN CONTENT ===== */}
          <div className="about-content">
     
        
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
      
        </div>
      </section>

     

    </Layout>
  );
}
