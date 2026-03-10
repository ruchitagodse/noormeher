"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Layout from "@/components/Layout";
import { API_BASE } from "../utility_api";
export default function GalleryPage() {
  const [galleryYears, setGalleryYears] = useState([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  fetch("/api/gallery-years")
    .then((res) => {
      if (!res.ok) throw new Error("Network response not ok");
      return res.json();
    })
    .then((result) => {
      if (result.success) {
        setGalleryYears(result.data);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error("Gallery fetch error:", err);
      setLoading(false);
    });
}, []);
return (
  <Layout>
   <section
        className="page-hero contact-hero"
        style={{ backgroundImage: "url(/images/conact.png)" }}
      >
        <div className="overlay">
          <div className="container">
            <h2 className="center">Gallery</h2>

          </div>
        </div>
      </section>
    <div className="container gallery-wrapper">
      <div className="gallery-container">

        <h3 className="gallery-title">Photos Gallery</h3>
        <div className="title-line" />

        {loading && <p>Loading gallery...</p>}

        {!loading && galleryYears.length === 0 && (
          <p>No gallery data found.</p>
        )}

        <div className="gallery-grid">
          {galleryYears.map((item) => (
            <Link
              href={`/gallery/${item.id}`}
              key={item.id}
              className="gallery-card"
            >
              <div className="gallery-img">
                <img
                  src={item.image}
                  alt={item.year}
                />
              </div>

              <div className="gallery-footer">
                {item.year}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  </Layout>
);

}
