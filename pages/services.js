import Layout from "../components/Layout";

export default function Services() {
  return (
    <Layout title="Services | Noormeher Charitable Trust">

      {/* HERO */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url(/images/services.jpg)" }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Services</h1>
         
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container section white-bg">
     
        <hr />

        {/* FACILITIES */}
        <h3>FACILITIES FOR RESIDENCE CHILDREN</h3>

        <div className="grid-2">
          <ul>
            <li>Clothing.</li>
            <li>Basic computer training.</li>
            <li>Aqua water purifier for drinking</li>
            <li>Food</li>
            <li>24 hrs water facilities</li>
            <li>Religious and academic education.</li>
            <li>Medical check - ups.</li>
            <li>AI Whiteboard provided for education.</li>
          </ul>

          <ul>
            <li>Locker.</li>
            <li>School bags and supplies</li>
            <li>Staff (26 teachers / 2 non-teaching)</li>
            <li>Bedding</li>
            <li>24 hrs medical facilities.</li>
            <li>Accommodation.</li>
            <li>Air Conditioner facilities.</li>
          </ul>
        </div>

        {/* ACADEMIC */}
        <h3>ACADEMIC</h3>

        <p>
          The Noor Meher Charitable Trust offers both religious and formal
          education. Jamiya Tajveedul Quran provides Quranic recitation classes
          at three levels (Noorani Qaida, Nazera, Hifz) and a full academic
          syllabus with quarterly, half-term, and annual exams.
        </p>

        <p>
          The Trust also runs Noor Meher Urdu Maktab and High School (Grades 1-10,
          Maharashtra State Board), which conducts two unit tests, semester
          exams, and a final exam.
        </p>

        <div className="grid-2">
          {/* HEALTH */}
          <div>
            <h4>HEALTH & HYGIENE</h4>
            <ul>
              <li>Nutrition</li>
              <li>Medicine</li>
              <li>Toiletries</li>
              <li>Wall to wall carpet</li>
              <li>
                Water storage tanks clean every six month by professionals.
              </li>
            </ul>
          </div>

          {/* SAFETY */}
          <div>
            <h4>SAFETY & SECURITY</h4>
            <ul>
              <li>
                Two Teachers are available 24 / 7 for supervision.
              </li>
              <li>
                Twenty-six Teachers surveillance web cams 24/7 for monitoring
              </li>
              <li>
                Five Fire extinguishers in the institute
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
