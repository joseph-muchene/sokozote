import React from "react";
import Navbar from "../../components/Navbar";
function Signup() {
  return (
    <div>
      <Navbar />

      <div className="container mt-3 shadow rounded col-md-6">
        {/* top */}
        <div>
          <h3 className="text-center">Create Account</h3>
          <p className="text-center">Fill in the fields below</p>
        </div>
        {/* middle */}
        <div>
          <form className="d-flex justify-content-center flex-column p-2">
            <div className="mb-3 form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="mobileNo">Mobile Number</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="businessName">Business Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3 form-group">
              <label htmlFor="businessEmail">Business Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="kraPin">KRA PIN(optional)</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3 form-group">
              <label htmlFor="password">password</label>
              <input type="text" className="form-control" name="password" />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="confirmPassword">confirm password</label>
              <input
                type="text"
                className="form-control"
                name="confirmPassword"
              />
            </div>
            <div className="mb-3 form-group button">
              <button className="btn w-100">create account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
