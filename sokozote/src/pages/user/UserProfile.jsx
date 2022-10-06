import React from "react";
import Navbar from "../../components/Navbar";

function UserProfile() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-4">
            <div className="card shadow">
              <img
                src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Adaora-Akubilo.jpg"
                className="img-fluid rounded"
                alt=""
              />
              <hr />
              <div className="card-body">
                <ul class="list-group">
                  <li class="list-group-item">Full Name: Stephen smith</li>
                  <li class="list-group-item">Email: Stephen@gmail.com</li>
                  <li class="list-group-item">Mobile Number: +25478739473</li>
                  <li class="list-group-item">
                    Business Email: halohalo@gmail.com
                  </li>
                  <li class="list-group-item">
                    KRA pin(optional): sd69d6a9sas59a6sa
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <h3>Account settings</h3>

            <form>
              <div className="mt-3 mb-3">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" className="form-control" name="fullName" />
              </div>

              <div className="mt-3 mb-3">
                <label htmlFor="fullName">Email</label>
                <input type="email" className="form-control" name="email" />
              </div>

              <div className="mt-3 mb-3">
                <label htmlFor="fullName">Mobile Number</label>
                <input type="tel" className="form-control" name="mobile" />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="fullName">Business Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="BusinessEmail"
                />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="pin">KRA pin(optional)</label>
                <input type="text" className="form-control" name="kraPin" />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="country">Country</label>
                <input type="text" className="form-control" name="country" />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="country">State/country</label>
                <input type="text" className="form-control" name="state" />
              </div>
              <div className="mt-3 mb-3 d-flex justify-content-center">
                <div className="btn btn-primary">Save profile</div>
              </div>
            </form>
          </div>
          <div className="col-md-3 mt-4">
            <h3>Billing Info</h3>

            <form>
              <div className="mt-3 mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" name="address" />
              </div>
              <div className="mt-3 mb-3">
                <label htmlFor="address" className="mb-1">
                  <i>choose your method of payment:</i>
                </label>
                <select name="paymentMethod" className="form-control">
                  <option value="">choose:</option>
                  <option value="">Mpesa</option>
                  <option value="">Flutter wave</option>
                  <option value="">Stripe</option>
                </select>
              </div>
              <div className="mt-3 mb-3 d-flex justify-content-center">
                <div className="btn btn-primary">Save</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
