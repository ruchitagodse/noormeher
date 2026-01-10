"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function GalleryTypesPage() {
  const router = useRouter();
  const { yearId } = router.query;

  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!yearId) return;

    fetch(
      `http://localhost/noormeher-backend/api/gallery/types.php?year_id=${yearId}`
    )
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
    <>
      <Header />

      <div className="container my-5">
        <h2 className="mb-4">Gallery Albums</h2>

        {loading && <p>Loading albums...</p>}

        {!loading && types.length === 0 && <p>No albums found.</p>}

      <div className="row">
  {types.map((item) => (
    <div className="col-md-4 mb-4" key={item.id}>
      <Link href={`/gallery/${yearId}/${item.id}`}>
        <div className="card gallery-card gallery-type-card h-100">
          <img
            src={item.image}
            alt={item.name}
            className="img-fluid"
          />
          <div className="card-footer text-center fw-bold">
            {item.name}
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>

      </div>

      <Footer />
    </>
  );
}
