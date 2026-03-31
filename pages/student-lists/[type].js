"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function StudentList() {
  const router = useRouter();
  const { type } = router.query;

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!type) return;

    fetch(`/api/student-list?type=${type}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {

          // ✅ SAFE + CORRECT SORTING (LATEST YEAR FIRST)
          const sortedStudents = [...result.data].sort((a, b) => {
            const getYear = (student) =>
              Number(student.hafiz_year || student.ssc_year || student.year || 0);

            return getYear(b) - getYear(a);
          });

          setStudents(sortedStudents);
        }

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [type]);

  // 🔥 PREMIUM LOADER
  if (loading) {
    return (
      <Layout>
        <div className="loader-wrapper">
          <div className="loader"></div>
          <p>Loading Students...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container student-list-wrapper">

        <h2 className="student-list-title">{type}</h2>

        <div className="student-grid">

          {students.map((student) => {
            const imageUrl = `/api/image?url=${encodeURIComponent(student.image)}`;

            return (
              <div className="student-card fade-in" key={student.id}>

              

                <div className="student-card-img">
                  <img
                    src={imageUrl}
                    alt={student.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "/images/no-image.png";
                    }}
                  />
                </div>

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

                  <Link
                    href={`/student-details/${student.id}`}
                    className="student-btn"
                  >
                    About Me →
                  </Link>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </Layout>
  );
}