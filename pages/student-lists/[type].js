"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function StudentList() {
  const router = useRouter();
  const { type } = router.query;

  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!type) return;

    fetch(`/api/student-list?type=${type}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {

          const data = result.data;

          // ✅ SORT
          const sortedStudents = [...data].sort((a, b) => {
            const getYear = (student) =>
              Number(student.hafiz_year || student.ssc_year || student.year || 0);

            return getYear(b) - getYear(a);
          });

          setStudents(sortedStudents);
          setFilteredStudents(sortedStudents);

       const extractYear = (value) => {
  if (!value) return null;

  // if already year like 2020
  if (String(value).length === 4) return value;

  // extract last 4 digits from date
  const match = String(value).match(/\d{4}$/);
  return match ? match[0] : null;
};

const uniqueYears = [
  ...new Set(
    sortedStudents.map((s) =>
      extractYear(s.hafiz_year || s.ssc_year || s.year)
    )
  ),
].filter(Boolean).sort((a, b) => b - a); // latest first

          setYears(uniqueYears);
        }

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [type]);

  // ✅ FILTER LOGIC
  useEffect(() => {
    if (!selectedYear) {
      setFilteredStudents(students);
    } else {
     const extractYear = (value) => {
  if (!value) return null;
  if (String(value).length === 4) return value;
  const match = String(value).match(/\d{4}$/);
  return match ? match[0] : null;
};

const filtered = students.filter((s) =>
  extractYear(s.hafiz_year || s.ssc_year || s.year) == selectedYear
);
      setFilteredStudents(filtered);
    }
  }, [selectedYear, students]);

  // 🔥 LOADER
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

        {/* ✅ FILTER DROPDOWN */}
        <div className="filter-bar">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">All Years</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="student-grid">
          {filteredStudents.map((student) => {
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