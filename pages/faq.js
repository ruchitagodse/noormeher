import { useState } from "react";
import Layout from "../components/Layout";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Jamiya Tajweedul Quran?",
      a: "Jamiya Tajweedul Quran is an Islamic School (Madrasa) where orphan and poor Muslim children can stay and receive free education."
    },
    {
      q: "How much money do you charge if a poor orphan Muslim child wants admission?",
      a: "Jamiya Tajweedul Quran runs under Noor Meher Charitable Trust and we do not take any money from poor or orphan children."
    },
    {
      q: "What are the conditions for admission?",
      a: "The child’s age should be between 8 to 12 years."
    },
    {
      q: "Can orphan or poor Muslim girls take admission?",
      a: "No, Jamiya admits only poor and orphan Muslim boys."
    },
    {
      q: "If I want to donate, how can I reach you?",
      a: (
        <>
          Jamiya has a 24/7 helpline and its address is available on the{" "}
          <a href="/contact">Contact Us</a> page.
          <br />
          You can also donate online via the <a href="/donate">Donate</a> page.
          <br />
          <strong>Kindly Note:</strong> Donations are accepted only in INR.
        </>
      )
    },
    {
      q: "If someone wants to sponsor a child, how much is required?",
      a: "To sponsor a child, the donor has to pay ₹2050 per month."
    },
    {
      q: "What are the timings for Madarsa and Noormeher Urdu School?",
      a: (
        <>
          School: 7:50 AM – 12:20 PM <br />
          Madarsa: 6:00 AM – 7:20 AM <br />
          Madarsa: 2:30 PM – 5:30 PM <br />
          Madarsa: 7:30 PM – 9:00 PM
        </>
      )
    },
    {
      q: "How to reach Noormeher?",
      a: (
        <>
          Address and helpline details are available on the{" "}
          <a href="/contact">Contact Us</a> page.
          <br />
          You can also find us on Google Maps.
        </>
      )
    },
    {
      q: "Does Jamiya provide food, clothes, and bedding?",
      a: "Yes, free breakfast, lunch, snacks, dinner, bedding, and clothing are provided."
    }
  ];

  return (
    <Layout title="FAQ | Noormeher Charitable Trust">
      {/* HERO */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url(/images/bg.jpg)" }}
      >
        <div className="container">
          <h1>FAQ</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container section">
        <div className="faq-accordion">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-accordion-item ${
                openIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.q}</span>
                <span className="icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <div className="faq-answer-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
