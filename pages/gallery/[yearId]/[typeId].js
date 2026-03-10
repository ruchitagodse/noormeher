"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { API_BASE } from "@/utility_api";

export default function GalleryPhotosPage() {
  const router = useRouter();
  const { yearId, typeId } = router.query;

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;
    if (!yearId || !typeId) return;

    const fetchPhotos = async () => {
      try {
        const res = await ffetch(`/api/gallery-photos?yid=${yearId}&galtype=${typeId}`);

        const result = await res.json();

        if (result.success) {
          setPhotos(result.data);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [router.isReady, yearId, typeId]);

return (
  <>
    <Header />

    <section className="gallery-wrapper">
      <div className="gallery-container">

        <h2 className="gallery-title">Gallery Photos</h2>
        <div className="title-line"></div>

        {loading && <div className="gallery-message">Loading photos...</div>}

        {!loading && photos.length === 0 && (
          <div className="gallery-message">No photos found.</div>
        )}

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div className="gallery-photo-card" key={photo.id}>
              <div className="gallery-img">
                <img src={photo.image} alt={photo.name} />
              </div>
              <div className="gallery-footer">
                {photo.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    <Footer />
  </>
);

}
