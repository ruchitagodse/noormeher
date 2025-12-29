import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About Us | Noormeher Charitable Trust">

      {/* HERO */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url(/images/AboutUs.jpg)" }}
      >
        <div className="overlay">
          <div className="container">
            <h1>About Us</h1>
        
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container section white-bg">
  
        <hr />

        <p>
          Noor Meher Charitable Trust is a non profit organization based in Mumbai,
          primarily working to promote religious & academic education along with
          welfare for orphan & poor children. The trust started an institution in
          the year 2001 with 2 orphan children and by 2016 it has 141 children.
        </p>

        <p>
          The Trust is registered under Bombay Public Trust Act, 1950, Regd no.
          E-20745 MUMBAI, Noor Meher Charitable Trust comes under the Income Tax
          Exemption Act, 1961 12AA.
        </p>

        <p>
          By the Grace of Allah Noor Meher Charitable Trust is working since 2001
          for welfare of poor and orphan Muslim Children and for their education,
          health and child development and teach basic computer skills.
        </p>

        <p>
          By the Grace of Almighty since 2001, our children started memorizing the
          Holy Quran. Our Students have become Teachers / Qari / Alim. Students
          understand, read and write English, Urdu, Hindi, Arabic & Marathi
          languages along with Science Math and Social science.
        </p>

        <p>
          The Trust provides free religious & academic education studies from Std
          1st to SSC board besides memorizing the Holy Quran. There is a Computer
          lab and a Library (Islamic books & general books) for students.
        </p>

        <p>
          Every year Orientation day is organized & competitions are held to
          encourage the students. The winners are awarded with certificates,
          shield, cash prizes, gifts, etc.
        </p>

        <p>
          We are trying to help as many underprivileged children of Mumbai by
          providing them access to education, recreation & a healthy environment.
          Free Medical, Dental & Eye check-ups are organized for the students.
        </p>

        <p>
          Trust has its website www.noormeher.org. The Trust has installed 24 CCTV
          Cameras with live telecast 24/7 for the safety and security of children.
        </p>

        <p>
          Our first batch of 13 students for year 2013, second batch of 7 students
          for year 2014, third batch of 5 students in 2015 & fourth batch of 6
          students for year 2016 appeared for SSC board. All passed with flying
          colors and memorized the Holy Quran.
        </p>

        <p>
          Since 2001, 85 students have become Hafiz (memorized the Holy Quran
          completely). This achievement is a great work in Mumbai.
        </p>

        <p>
          Since last five years our trust is organizing a Holy Quran recitation
          Program known as <strong>"MUSABEQATUL QURAN"</strong> among religious
          institutions in Mumbai and Thane.
        </p>

        <p>
          Noor Meher Charitable Trust focuses its approach for children whose lives
          are devastated by humanitarian emergencies, or who are struggling each
          day in poor Muslim families.
        </p>

        <h3>This means that every child should have:</h3>

        <ul className="icon-list">
          <li>Education</li>
          <li>Food</li>
          <li>Clothing</li>
          <li>Health Care</li>
          <li>A safe & healthy place to live</li>
        </ul>

        <h3>ADMINISTRATION</h3>

        <ul>
          <li>Total Number of Trustees: <strong>10</strong></li>
          <li>Total Number of Teaching Staff: <strong>19</strong></li>
          <li>Total Number of Non Teaching Staff: <strong>2</strong></li>
          <li>Total Number of Children: <strong>141</strong></li>
        </ul>

      </section>
    </Layout>
  );
}
