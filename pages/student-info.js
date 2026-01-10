import Layout from "../components/Layout";

export default function StudentInfo() {
  return (
    <Layout title="Student Information | Noormeher Charitable Trust">
      {/* HERO */}
      <section className="page-hero student-hero">
        <div className="container">
          <h1>Students Information</h1>
          <p>Enter student details to fetch information</p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="container section">
        <div className="student-form-card">

          {/* DOB */}
          <div className="form-row">
            <label>Date of Birth</label>
            <input type="text" placeholder="DD-MM-YYYY" />
            <small>Example: 24-01-2001</small>
          </div>

          {/* YEAR */}
          <div className="form-row">
            <label>Year</label>
            <select>
              <option value="">Select Year</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
            </select>
          </div>

          {/* FORM NO */}
          <div className="form-row">
            <label>Form Number</label>
            <input type="text" placeholder="eg: 541" />
          </div>

          {/* ACTION */}
          <div className="form-actions">
            <button className="btn-primary">Get Info</button>
          </div>
        </div>

        {/* RESULT TABLE PLACEHOLDER */}
        <div id="tableaa" className="student-result">
          {/* API result goes here */}
        </div>
      </section>
    </Layout>
  );
}
