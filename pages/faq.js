import Layout from "../components/Layout";


export default function FAQ() {
  return (
    <Layout title="FAQ | Noormeher Charitable Trust">
      
      {/* ================= HERO / BREADCRUMB ================= */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url(/images/bg.jpg)" }}
      >
        <div className="container">
               <h1>FAQ</h1>
       
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="container section">
        <div className="row">
          
          {/* ===== MAIN CONTENT ===== */}
          <div className="col-md-9">
      
            <hr />

            {/* Q1 */}
            <div className="faq-item">
              <p className="question">
                ❓ What is Jamiya Tajweedul Quran?
              </p>
              <p className="answer">
                📍 Jamiya Tajweedul Quran is an Islamic School (Madrasa)
                where orphan and poor Muslim children can stay and receive
                free education.
              </p>
            </div>

            {/* Q2 */}
            <div className="faq-item">
              <p className="question">
                ❓ How much money do you charge if a poor orphan Muslim child wants admission?
              </p>
              <p className="answer">
                📍 Jamiya Tajweedul Quran runs under Noor Meher Charitable Trust
                and we do not take any money from poor or orphan children.
              </p>
            </div>

            {/* Q3 */}
            <div className="faq-item">
              <p className="question">
                ❓ What are the conditions for admission?
              </p>
              <p className="answer">
                📍 The child’s age should be between 8 to 12 years.
              </p>
            </div>

            {/* Q4 */}
            <div className="faq-item">
              <p className="question">
                ❓ Can orphan or poor Muslim girls take admission?
              </p>
              <p className="answer">
                📍 No, Jamiya admits only poor and orphan Muslim boys.
              </p>
            </div>

            {/* Q5 */}
            <div className="faq-item">
              <p className="question">
                ❓ If I want to donate, how can I reach you?
              </p>
              <p className="answer">
                📍 Jamiya has a 24/7 helpline and its address is available on the
                <a href="/contact"> Contact Us </a> page.
                <br />
                You can also donate online using Credit / Debit cards via the
                <a href="/donate"> Donate </a> page.
                <br />
                <strong>
                  Kindly Note:
                </strong>{" "}
                Donations are accepted only in INR (Indian Rupees).
              </p>
            </div>

            {/* Q6 */}
            <div className="faq-item">
              <p className="question">
                ❓ If someone wants to sponsor a child, how much is required?
              </p>
              <p className="answer">
                📍 To sponsor a child, the donor has to pay ₹2050 per month.
              </p>
            </div>

            {/* Q7 */}
            <div className="faq-item">
              <p className="question">
                ❓ What are the timings for Madarsa and Noormeher Urdu School?
              </p>
              <p className="answer">
                📍 Timings are as follows:
                <br />
                School: 7:50 AM – 12:20 PM
                <br />
                Madarsa: 6:00 AM – 7:20 AM
                <br />
                Madarsa: 2:30 PM – 5:30 PM
                <br />
                Madarsa: 7:30 PM – 9:00 PM
              </p>
            </div>

            {/* Q8 */}
            <div className="faq-item">
              <p className="question">
                ❓ How to reach Noormeher?
              </p>
              <p className="answer">
                📍 Address and helpline details are available on the
                <a href="/contact"> Contact Us </a> page.
                <br />
                You can also find us on Google Maps.
              </p>
            </div>

            {/* Q9 */}
            <div className="faq-item">
              <p className="question">
                ❓ Does Jamiya provide food, clothes, and bedding?
              </p>
              <p className="answer">
                📍 Yes, Noor Meher Charitable Trust provides free breakfast,
                lunch, snacks, dinner, bedding, and clothing to all students.
              </p>
            </div>

          </div>

       

        </div>
      </section>
    </Layout>
  );
}
