"use client";

import { useState } from "react";
import Layout from "../components/Layout";

export default function StudentInfo() {
  const [dob, setDob] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setError("");
    setStudents([]);

    if (!dob) {
      setError("Please select Date of Birth");
      return;
    }

    try {
      setLoading(true);

      console.log("Sending DOB:", dob);

      const res = await fetch(
        `/api/student-search?dob=${encodeURIComponent(dob)}`
      );

      const result = await res.json();

      console.log("API Result:", result);

      if (result.success && result.data) {
        let data = result.data;

        // ✅ ensure array
        if (!Array.isArray(data)) {
          data = [data];
        }

        // ✅ 🔥 FIX: MAP API → UI FORMAT
        const mappedStudents = data.map((s) => ({
          id: s.STUA_ID,
          name: s.Name,
          image: s.Image,
          type: s.Type,
          hafiz_year: s.Hafiz,
          ssc: s.SSC,
          ssc_year: s.SSC_Year,
          hsc: s.HSC,
          stream: s.Stream,
          year: s.Year,
        }));

        // ✅ sort latest first
        const sortedStudents = [...mappedStudents].sort((a, b) => {
          const getYear = (s) =>
            Number(s.hafiz_year || s.ssc_year || s.year || 0);

          return getYear(b) - getYear(a);
        });

        setStudents(sortedStudents);
      } else {
        setError(result.message || "No student found");
      }

    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Student Information | Noormeher Charitable Trust">
      <section className="container section">

        {/* FORM */}
        <div className="student-form-card">
          <div className="form-row">
            <label>Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="form-actions">
            <button
              className="btn-primary"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Searching..." : "Get Info"}
            </button>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className="alert alert-danger mt-4">
            {error}
          </div>
        )}

        {/* LOADER */}
        {loading && (
          <div className="loader-wrapper">
            <div className="loader"></div>
            <p>Loading Students...</p>
          </div>
        )}

        {/* STUDENTS */}
        {students.length > 0 && (
          <div className="student-grid mt-4">
            {students.map((student, index) => {

              // ✅ IMAGE FIX
              let imageUrl = "/images/no-image.png";

              if (student.image && student.image !== "null") {
                const fileName = student.image.split("/").pop();

                imageUrl = `http://api.noormeher.org/sm-admin/dist/img/Student-Achievement/${fileName}`;
              }

              return (
                <div className="student-card fade-in" key={student.id || index}>

                  {/* IMAGE */}
                  <div className="student-card-img">
                    <img
                      src={imageUrl}
                      alt={student.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/no-image.png";
                      }}
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="student-card-body">
                    <h5>{student.name}</h5>

                    {student.type === "Hafiz Student" && (
                      <p className="student-meta">
                        <strong>Year:</strong> {student.hafiz_year}
                      </p>
                    )}

                    {student.type === "SSC/HSC Student" && (
                      <>
                        <p className="student-meta">
                          <strong>SSC:</strong> {student.ssc} ({student.ssc_year})
                        </p>
                        <p className="student-meta">
                          <strong>HSC:</strong> {student.hsc}
                        </p>
                      </>
                    )}

                    {student.type === "Graduation Student" && (
                      <>
                        <p className="student-meta">
                          <strong>Stream:</strong> {student.stream}
                        </p>
                        <p className="student-meta">
                          <strong>Year:</strong> {student.year}
                        </p>
                      </>
                    )}

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </section>
    </Layout>
  );
}