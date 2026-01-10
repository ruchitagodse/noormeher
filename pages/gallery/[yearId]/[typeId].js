"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GalleryPhotosPage() {
  const router = useRouter();
  const { yearId, typeId } = router.query;

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!yearId || !typeId) return;

    fetch(
      `http://localhost/noormeher-backend/api/gallery/photos.php?yid=${yearId}&galtype=${typeId}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setPhotos(result.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [yearId, typeId]);

  return (
    <>
      <Header />

      <div className="container my-5">
        <h3>Gallery Photos</h3>

        {loading && <p>Loading photos...</p>}
        {!loading && photos.length === 0 && <p>No photos found.</p>}

    <div className="row">
  {photos.map((photo) => (
    <div className="col-md-4 mb-4" key={photo.id}>
      <div className="gallery-card gallery-photo-card">
        <img src={photo.image} alt="Gallery Photo" />
      </div>
    </div>
  ))}
</div>

      </div>

      <Footer />
    </>
  );
}
