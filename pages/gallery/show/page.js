"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GalleryPhotosPage() {
  const searchParams = useSearchParams();

  const year = searchParams.get("year");
  const yid = searchParams.get("yid");
  const galtype = searchParams.get("galtype");

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!yid || !galtype) return;

    fetch(
      `http://localhost/noormeher-backend/api/gallery/photos.php?yid=${yid}&galtype=${galtype}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setPhotos(result.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [yid, galtype]);

  return (
    <>
      <Header />

      <div className="container my-5">
        <h3 className="mb-4">Gallery Photos ({year})</h3>

        {loading && <p>Loading photos...</p>}

        {!loading && photos.length === 0 && (
          <p>No photos found.</p>
        )}

       <div className="row">
  {photos.map((photo) => (
    <div className="col-md-4 mb-4" key={photo.id}>
      <div className="card gallery-card gallery-photo-card">
        <img
          src={photo.image}
          alt={photo.name}
          className="img-fluid"
        />
      </div>
    </div>
  ))}
</div>

      </div>

      <Footer />
    </>
  );
}
