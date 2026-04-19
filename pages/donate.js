"use client";

import { useState } from "react";
import Layout from "../components/Layout";

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
  const [processing, setProcessing] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleDonate = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.mobile || !formData.amount) {
      alert("Please fill all required fields");
      return;
    }

    if (Number(formData.amount) < 1) {
      alert("Enter valid amount");
      return;
    }

    setProcessing(true);

    try {
      const razorpayLoaded = await loadRazorpay();
      if (!razorpayLoaded) {
        throw new Error("Failed to load Razorpay");
      }

      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: formData.amount }),
      });

      if (!orderResponse.ok) {
        throw new Error("Payment initiation failed");
      }

      const orderData = await orderResponse.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: "INR",
        name: "Noormeher Charitable Trust",
        description: `Donation ${formData.purpose || ""}`,
        order_id: orderData.id,
        handler: async function (response) {
          try {
            const verifyResponse = await fetch("/api/verify-donation", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                name: formData.name,
                mobile: formData.mobile,
                amount: formData.amount,
                purpose: formData.purpose,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (!verifyResponse.ok || !verifyData.success) {
              throw new Error(verifyData.message || "Payment verified but donation save failed");
            }

            alert("Payment successful. Thank you for your support!");
            setFormData({ name: "", mobile: "", amount: "", purpose: "" });
          } catch (error) {
            alert(error.message || "Payment captured but donation save failed");
          } finally {
            setProcessing(false);
          }
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
        modal: {
          ondismiss: function () {
            setProcessing(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      alert(error.message || "Payment initiation failed");
      setProcessing(false);
    }
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
              <div className="form-group">
                <label>Name *</label>
                <input name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>
                <input name="mobile" value={formData.mobile} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Amount (INR) *</label>
                <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Donate For (Optional)</label>
                <input
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  placeholder="e.g. Education, Zakat, Food"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary" disabled={processing}>
                  {processing ? "Processing..." : "Donate"}
                </button>
              </div>

              <div className="donation-warning">
                We accept only Indian (INR) payments. International transactions are not supported.
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
