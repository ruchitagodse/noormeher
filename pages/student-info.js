"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import { API_BASE } from "../utility_api";
export default function StudentInfo() {
  const [dob, setDob] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setError("");
    setStudent(null);

    if (!dob) {
      setError("Please select Date of Birth");
      return;
    }

    try {
      setLoading(true);

     const res = await fetch(`/api/student-search?dob=${dob}`);

      const result = await res.json();

      if (result.success) {
        setStudent(result.data);
      } else {
        setError(result.message || "No student found");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Student Information | Noormeher Charitable Trust">
      <section className="container section">
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

        {error && (
          <div className="alert alert-danger mt-4">
            {error}
          </div>
        )}

        {student && (
          <div className="card mt-4 p-4 shadow">
            <h3>{student.Name}</h3>
            <p><strong>DOB:</strong> {student.DOB}</p>
            <p><strong>Father:</strong> {student.Father_Name}</p>
            <p><strong>Year:</strong> {student.Year}</p>
          
          </div>
        )}
      </section>
    </Layout>
  );
}
