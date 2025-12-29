import Layout from "../components/Layout";

export default function Donate() {
  return (
    <Layout title="Donate | Noormeher Charitable Trust">

      {/* HERO */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url(/images/bg.jpg)" }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Donate</h1>
        
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container section white-bg">
        <h2>PLEASE FILL THE FORM BELOW TO DONATE</h2>
        <hr />

        <div className="info-box">
          <p>
            <strong>Kindly Note:</strong>  
            Noor Meher Charitable Trust is not authorized to receive any donation
            other than INR (Indian Rupee).
          </p>
        </div>

        <div className="info-box">
          <p>
            Donation made from any <strong>INTERNATIONAL, NRE or NRO</strong> account
            will not be accepted.
          </p>
        </div>

        {/* DONATION FORM */}
        <form className="donate-form">
          <div className="form-group">
            <label>Title</label>
            <select>
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>M/s.</option>
            </select>
          </div>

          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Address" />
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="City" />
          </div>

          <div className="form-group">
            <label>Zip Code</label>
            <input type="text" placeholder="Zip Code" />
          </div>

          <div className="form-group">
            <label>State</label>
            <input type="text" placeholder="State" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="text" placeholder="Phone" />
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input type="text" placeholder="Mobile" />
          </div>

          <p className="support-text">
            Yes, InshaAllah I want to support <strong>Jamiya Tajweeddul Quran</strong>{" "}
            run by <strong>Noor Meher Charitable Trust</strong> by donating.
          </p>

          <div className="form-group">
            <label>Amount (₹)</label>
            <input type="text" placeholder="Donation Amount" />
          </div>

          <div className="form-group">
            <label>Donation to be used for</label>
            <select>
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

        {/* PAYMENT ICONS */}
        <div className="payment-icons">
          <img src="/img/mastercard_logo_footer.gif" alt="Mastercard" />
          <img src="/img/visa_logo_footer.gif" alt="Visa" />
          <img src="/img/rupay_logo_footer.gif" alt="Rupay" />
        </div>
      </section>
    </Layout>
  );
}
