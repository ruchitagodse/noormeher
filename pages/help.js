import Layout from "../components/Layout";


export default function Help() {
  return (
    <Layout title="Help | Noormeher Trust">
      <section className="container with-sidebar">
        <main className="content">
          <h2>Alms / How You Can Help</h2>

          <ul className="activity-list">
            <li>Meals for children</li>
            <li>Milk Scheme</li>
            <li>Education Adoption</li>
            <li>Financial Adoption</li>
            <li>Noor Meher Charity Scheme</li>
          </ul>
<div className="contact-info-grid">
  <div className="info-card">    
          <h3>Bank Details</h3>
          <address>
            NOOR MEHER CHARITABLE TRUST<br/>
            A/C: 012801000018468<br/>
            IFSC: IOBA0000128<br/>
            Indian Overseas Bank, Bandra West
          </address>
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
        </main>

    
      </section>
    </Layout>
  );
}
