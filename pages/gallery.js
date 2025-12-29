"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function GalleryPage() {
  const [galleryYears, setGalleryYears] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/noormeher-backend/api/gallery/years.php")
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
    <>
      <Header />

      <div
        style={{
          backgroundImage: "url(/images/gallery.jpg)",
          backgroundSize: "cover",
          minHeight: "350px",
        }}
      >
        <div className="container">
          <h1 className="text-white py-5">Gallery</h1>
        </div>
      </div>

      <div className="container my-5">
        <div className="row bg-white p-4">
          <div className="col-md-9">
            <h3>Photos Gallery</h3>
            <hr />

            {loading && <p>Loading gallery...</p>}

            {!loading && galleryYears.length === 0 && (
              <p>No gallery data found.</p>
            )}

            <div className="row">
              {galleryYears.map((item) => (
                <div className="col-md-4 mb-4" key={item.id}>
                  <Link href={`/gallery/${item.id}`}>
                    <div className="card shadow-sm h-100">
                      <img
                        src={item.image}
                        alt={item.year}
                        className="img-fluid"
                      />
                      <div className="card-footer text-center fw-bold">
                        {item.year}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
