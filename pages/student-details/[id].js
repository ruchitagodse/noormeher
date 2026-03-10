"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { API_BASE } from "../../utility_api";

export default function StudentDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;
    if (!id) return;

   fetch(`/api/student-details?id=${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setStudent(result.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [router.isReady, id]);

  if (loading) return <Layout><p>Loading...</p></Layout>;
  if (!student) return <Layout><p>Student not found.</p></Layout>;

return (
<Layout>
  <div className="container my-5">
    <div className="student-wrapper">

      <h2 className="student-title">{student.Name}</h2>

      {student.About_Us && (
        <div className="student-intro">
          <h4>Introduction</h4>
          <p>{student.About_Us}</p>
        </div>
      )}

      <div className="student-grid">

        <div className="student-image">
          <img
           src={`http://api.noormeher.org/sm-admin/dist/img/Student-Achievement/${student.Image}`}
            alt={student.Name}
          />
        </div>

        <div className="student-info">
          <h3>Personal Information</h3>

          <div className="info-grid">

            <div className="info-item">
              <div className="info-label">DOB</div>
              <div className="info-value">{student.DOB}</div>
            </div>

            <div className="info-item">
              <div className="info-label">Father Name</div>
              <div className="info-value">{student.Father_Name}</div>
            </div>

            <div className="info-item">
              <div className="info-label">Father Occupation</div>
              <div className="info-value">{student.Father_occupation}</div>
            </div>

            <div className="info-item">
              <div className="info-label">Mother Occupation</div>
              <div className="info-value">{student.Mother_occupation}</div>
            </div>

            <div className="info-item">
              <div className="info-label">Date Of Admission</div>
              <div className="info-value">{student.DOA}</div>
            </div>

            <div className="info-item">
              <div className="info-label">Became Hafiz</div>
              <div className="info-value">{student.Hafiz}</div>
            </div>

            {student.SSC && (
              <div className="info-item">
                <div className="info-label">SSC</div>
                <div className="info-value">
                  {student.SSC} ({student.SSC_Year})
                </div>
              </div>
            )}

            {student.HSC && student.HSC !== "0" && (
              <div className="info-item">
                <div className="info-label">HSC</div>
                <div className="info-value">
                  {student.HSC} ({student.HSC_Year})
                </div>
              </div>
            )}

            {student.Current_Position && student.Current_Position !== "0" && (
              <div className="info-item">
                <div className="info-label">Current Position</div>
                <div className="info-value">
                  {student.Current_Position}
                </div>
              </div>
            )}

            {student.Family && (
              <div className="info-item">
                <div className="info-label">Family Gross Income</div>
                <div className="info-value">{student.Family}</div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  </div>
</Layout>


);

}
