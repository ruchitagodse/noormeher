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
    title: "Mr.",
    name: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    email: "",
    phone: "",
    mobile: "",
    amount: "",
    purpose: "HAFIZ",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= HANDLE DONATE ================= */
  const handleDonate = async (e) => {
    e.preventDefault();

    if (!formData.amount || Number(formData.amount) < 1) {
      alert("Please enter a valid donation amount");
      return;
    }

    const razorpayLoaded = await loadRazorpay();
    if (!razorpayLoaded) {
      alert("Failed to load Razorpay. Check internet connection.");
      return;
    }

    // Create order
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: formData.amount }),
    });

    // 🚨 IMPORTANT: handle backend failure
    if (!res.ok) {
      alert("Unable to initiate payment. Please try again later.");
      return;
    }

    const orderData = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // FRONTEND KEY ONLY
      amount: orderData.amount,
      currency: "INR",
      name: "Noormeher Charitable Trust",
      description: `Donation for ${formData.purpose}`,
      order_id: orderData.id,

      handler: function () {
        alert("Payment successful. Thank you for your donation ❤️");
      },

      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobile || formData.phone,
      },

      notes: {
        purpose: formData.purpose,
        address: formData.address,
      },

      theme: {
        color: "#2c7be5",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <Layout title="Donate | Noormeher Charitable Trust">
    
      
             <h2 className="center">Donate</h2>
            
          

      {/* CONTENT */}
      <section className="container section ">
         <div className="donate-wrapper">
  
     <div className="donate-box">
      <h2>PLEASE FILL THE FORM BELOW TO DONATE</h2>

        <div className="info-box">
          <p>
            <strong>Kindly Note:</strong> Donations are accepted only in INR.
            International / NRE / NRO payments are not accepted.
          </p>
        </div>

        <form className="donate-form" onSubmit={handleDonate}>
          <div className="form-group">
            <label>Title</label>
            <select name="title" value={formData.title} onChange={handleChange}>
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>M/s.</option>
            </select>
          </div>

          <div className="form-group">
            <label>Name</label>
            <input name="name" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea name="address" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>City</label>
            <input name="city" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Zip Code</label>
            <input name="zip" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>State</label>
            <input name="state" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input name="phone" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input name="mobile" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Amount (₹)</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Donation to be used for</label>
            <select name="purpose" onChange={handleChange}>
              <option>HAFIZ</option>
              <option>ALIM</option>
              <option>QARI</option>
              <option>MUFTI</option>
              <option>WIDOWS</option>
              <option>MEDICINES</option>
              <option>GROCERRY</option>
              <option>MARRIAGES</option>
              <option>UNIFORM</option>
              <option>BOOKS</option>
              <option>BEDDINGS</option>
              <option>SALARIES</option>
              <option>HIGHER EDUCATION</option>
              <option>ZAKAAT</option>
              <option>SADAQAH</option>
              <option>LLILAH</option>
              <option>FITRA</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Donate
            </button>
            <button type="reset" className="btn-danger">
              Reset
            </button>
          </div>
        </form>

        <div className="payment-icons">
          <p>
            We accept UPI, Cards, Net Banking & Wallets. Payments are securely
            processed by Razorpay.
          </p>
        </div>
        </div>
        </div>
      </section>
    </Layout>
  );
}
