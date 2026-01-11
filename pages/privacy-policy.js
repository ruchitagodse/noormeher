import Layout from "../components/Layout";


export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy | Noormeher Charitable Trust">

      {/* ===== Hero / Banner ===== */}
        <h2 className="center">Privacy Policy</h2>
      {/* ===== Page Content ===== */}
      <section className="container section white-bg">
        <div className="row">
          
          {/* ===== Main Content ===== */}
          <div className="col-md-9">
       
         

            <p>
              This privacy policy sets out how <strong>Noormeher Charitable Trust</strong> 
              uses and protects any information that you give when you use this website.
            </p>

            <p>
              Noormeher Charitable Trust is committed to ensuring that your privacy is protected.
              Should we ask you to provide certain information by which you can be identified
              when using this website, you can be assured that it will only be used in accordance
              with this privacy statement.
            </p>

            <p>
              Noormeher Charitable Trust may change this policy from time to time by updating this
              page. You should check this page periodically to ensure that you are happy with any
              changes. This policy is effective from <strong>10th Dec 2014</strong>.
            </p>

            <h4>What we collect</h4>
            <ul className="activity-list">
              <li>Name and job title</li>
              <li>Contact information including email address</li>
              <li>Demographic information such as postcode, preferences and interests</li>
              <li>Other information relevant to customer surveys and/or offers</li>
            </ul>

            <h4>What we do with the information we gather</h4>
            <p>
              We require this information to understand your needs and provide you with better
              service, and in particular for the following reasons:
            </p>

            <ul className="activity-list">
              <li>Internal record keeping</li>
              <li>We may use the information to improve our work</li>
            </ul>
          </div>

      
        </div>
      </section>

    </Layout>
  );
}
