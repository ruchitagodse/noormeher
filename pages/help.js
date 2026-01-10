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

          <h4>Bank Details</h4>
          <p>
            NOOR MEHER CHARITABLE TRUST<br/>
            A/C: 012801000018468<br/>
            IFSC: IOBA0000128<br/>
            Indian Overseas Bank, Bandra West
          </p>

          <h4>Office Address</h4>
          <p>
            Noor Meher House, Malad (West), Mumbai – 400095
          </p>
        </main>

    
      </section>
    </Layout>
  );
}
