"use client";

import { useState } from "react";
import Layout from "../components/Layout";

/* ================= LOAD RAZORPAY ================= */
const loadRazorpay = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    amount: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= HANDLE DONATE ================= */
  const handleDonate = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.amount) {
      alert("Please fill all required fields");
      return;
    }

    if (Number(formData.amount) < 1) {
      alert("Enter valid amount");
      return;
    }

    const razorpayLoaded = await loadRazorpay();
    if (!razorpayLoaded) {
      alert("Failed to load Razorpay");
      return;
    }

    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: formData.amount }),
    });

    if (!res.ok) {
      alert("Payment initiation failed");
      return;
    }

    const orderData = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: "INR",
      name: "Noormeher Charitable Trust",
      description: `Donation ${formData.purpose || ""}`,
      order_id: orderData.id,

      handler: function () {
        alert("Payment successful ❤️ Thank you!");
      },

      prefill: {
        name: formData.name,
        contact: formData.mobile,
      },

      notes: {
        purpose: formData.purpose,
      },

      theme: {
        color: "#2c7be5",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Layout title="Donate | Noormeher Charitable Trust">

      <section className="container section">
        <div className="donate-wrapper">

          <div className="donate-box">
            <h2>Donate Now</h2>

            <div className="info-box">
              <p>
                <strong>Note:</strong> Only INR payments accepted. No international payments.
              </p>
            </div>

            <form className="donate-form" onSubmit={handleDonate}>

              {/* NAME */}
              <div className="form-group">
                <label>Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* MOBILE */}
              <div className="form-group">
                <label>Mobile Number *</label>
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* AMOUNT */}
              <div className="form-group">
                <label>Amount (₹) *</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* PURPOSE (OPTIONAL) */}
              <div className="form-group">
                <label>Donate For (Optional)</label>
                <input
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  placeholder="e.g. Education, Zakat, Food"
                />
              </div>

              {/* BUTTONS */}
              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  Donate
                </button>
              </div>

            </form>

          </div>
        </div>
      </section>
    </Layout>
  );
}