import Layout from "../components/Layout";

export default function TermsConditions() {
  return (
    <Layout>
      {/* ===== HERO / TITLE ===== */}
      <section
        className="hero hero-small"
        style={{
          backgroundImage: "url(/images/bg.jpg)",
        }}
      >
        <div className="hero-overlay">
          <h1>Terms & Conditions</h1>
      
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="container section">
  
        <p>
          Welcome to our website. If you continue to browse and use this website,
          you are agreeing to comply with and be bound by the following terms and
          conditions of use, which together with our privacy policy govern
          <strong> NoorMeher Charitable Trust</strong>’s relationship with you in
          relation to this website.
        </p>

        <p>
          The term <strong>“NoorMeher Charitable Trust”</strong> refers to the
          owner of the website whose registered office is:
        </p>

        <p>
          <strong>
            NOOR MEHER HOUSE, <br />
            Bungalow No. 12, RSC 20, <br />
            Near Akashwani Ground, <br />
            Malvani, Malad (West), <br />
            Mumbai – 400095, Maharashtra, India.
          </strong>
        </p>

        <p>
          Our registration number is <strong>E-20745</strong>.
        </p>

        <h3>Website Usage Terms</h3>

        <ul className="list">
          <li>
            The content of the pages of this website is for your general
            information and use only. It is subject to change without prior
            notice.
          </li>

          <li>
            NoorMeher Charitable Trust does not receive any donation from any
            international account or from NRI/NRE accounts. In case of any such
            donation, the exact amount will be refunded to the donor.
          </li>

          <li>
            Neither we nor any third parties provide any warranty or guarantee as
            to the accuracy, timeliness, performance, completeness, or
            suitability of the information and materials found on this website
            for any particular purpose.
          </li>

          <li>
            Your use of any information or materials on this website is entirely
            at your own risk, for which we shall not be liable.
          </li>

          <li>
            This website contains material which is owned by or licensed to us.
            This includes, but is not limited to, the design, layout, appearance,
            and graphics. Reproduction is prohibited without prior permission.
          </li>

          <li>
            All trademarks reproduced in this website which are not the property
            of, or licensed to, the operator are acknowledged.
          </li>

          <li>
            Unauthorized use of this website may give rise to a claim for damages
            and/or be a criminal offence.
          </li>
        </ul>
      </section>
    </Layout>
  );
}
