import Layout from "../components/Layout";

export default function StudentInfo() {
  return (
    <Layout>

   

      <h3 style={{ fontFamily: "Candal" }}>Student Information</h3>
      <hr />

      {/* DOB */}
      <div className="row">
        <label className="col-sm-2 control-label">DOB</label>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control"
            placeholder="DD-MM-YYYY"
          />
          <small>eg:- 24-01-2001</small>
        </div>
      </div>

      <br />

      {/* Year */}
      <div className="row">
        <label className="col-sm-2 control-label">Year</label>
        <div className="col-sm-3">
          <select className="form-control">
            <option value="">Select Year</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>
      </div>

      <br />

      {/* Form Number */}
      <div className="row">
        <label className="col-sm-2 control-label">Form No.</label>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            placeholder="eg:- 541"
          />
        </div>

        <div className="col-sm-2">
          <button className="btn btn-primary">Get Info</button>
        </div>
      </div>

      <br />

      {/* Result Table Placeholder */}
      <div id="tableaa">
        {/* Later: fetch data using API */}
      </div>

    </Layout>
  );
}
