import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function GalleryPhotosPage() {
  const router = useRouter();
  const { yearId, typeId } = router.query;
  const yid = typeof yearId === "string" ? yearId : "";
  const galtype = typeof typeId === "string" ? typeId : "";

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady || !yid || !galtype) {
      return;
    }

    setLoading(true);

    fetch(`/api/gallery-photos?yid=${encodeURIComponent(yid)}&galtype=${encodeURIComponent(galtype)}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setPhotos(result.data);
        } else {
          setPhotos([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setPhotos([]);
        setLoading(false);
      });
  }, [router.isReady, yid, galtype]);

  return (
    <Layout>
      <section className="gallery-wrapper">
        <div className="gallery-container">
          <h2 className="gallery-title">Gallery</h2>
          <div className="title-line" />

          {loading && <p>Loading photos...</p>}
          {!loading && photos.length === 0 && <p>No photos found.</p>}

          <div className="gallery-grid">
            {photos.map((photo) => {
              const imageUrl = `/api/image?url=${encodeURIComponent(photo.image)}`;

              return (
                <div key={photo.id} className="gallery-card">
                  <div className="gallery-img">
                    <img
                      src={imageUrl}
                      alt={photo.name}
                      loading="lazy"
                      onError={(event) => {
                        event.target.src = "/images/no-image.png";
                      }}
                    />
                  </div>

                  <div className="gallery-footer">{photo.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
