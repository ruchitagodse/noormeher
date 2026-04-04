"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function GalleryTypesPage() {
  const router = useRouter();
  const { yearId } = router.query;

  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!yearId) return;

    fetch(`/api/gallery-types?year_id=${yearId}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setTypes(result.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [yearId]);

  return (
    <Layout>
      {/* HERO SAME AS GALLERY */}
    
        <section className="gallery-wrapper">
        <div className="gallery-container">
          
          <h2 className="gallery-title">Gallery</h2>
          <div className="title-line" />

          {loading && <p>Loading albums...</p>}

          {!loading && types.length === 0 && (
            <p>No albums found.</p>
          )}

          <div className="gallery-grid">
            {types.map((item) => {
              const imageUrl = `/api/image?url=${encodeURIComponent(item.image)}`;

              return (
                <Link
                  href={`/gallery/${yearId}/${item.id}`}
                  key={item.id}
                  className="gallery-card"
                >
                  <div className="gallery-img">
                    <img
                      src={imageUrl}
                      alt={item.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "/images/no-image.png";
                      }}
                    />
                  </div>

                  <div className="gallery-footer">
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}