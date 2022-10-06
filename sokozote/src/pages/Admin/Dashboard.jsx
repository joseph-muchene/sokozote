import React from "react";
import NavDashboard from "./components/NavDashboard";

function Dashboard() {
  return (
    <div>
      <NavDashboard />
      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse"
          >
            <div class="position-sticky pt-4">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="users"></span>
                    Customers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="layers"></span>
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light">
            <div class="row mt-4">
              <div class="col-md-11 mx-auto mt-3">
                <h4>Dashboard</h4>
                <div class="row pt-3">
                  <div class="col-md-4 mb-3">
                    <div class="p-3 rounded shadow-sm bg-white mx-0 row">
                      <div class="col-4 align-items-center">
                        <img
                          src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/32/ffffff/external-_24-chinese-new-year-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png"
                          class="bg-success icon"
                        />
                      </div>
                      <div class="col-8     align-self-center">
                        <h6>Total Revenue</h6>
                        <h5 class="mb-0">
                          <b>KES 21,232,444</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="p-3 rounded shadow-sm bg-white mx-0 row">
                      <div class="col-4 align-items-center">
                        <img
                          src="https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-cart-shopping-actions-those-icons-fill-those-icons-7.png"
                          class="bg-primary icon"
                        />
                      </div>
                      <div class="col-8     align-self-center">
                        <h6>Total Orders</h6>
                        <h5 class="mb-0">
                          <b>232</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <div class="p-3 rounded shadow-sm bg-white mx-0 row">
                      <div class="col-4 align-items-center">
                        <img
                          src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/ffffff/external-cart-call-to-action-bearicons-glyph-bearicons.png"
                          class="bg-warning icon"
                        />
                      </div>
                      <div class="col-8     align-self-center">
                        <h6>Total Products</h6>
                        <h5 class="mb-0">
                          <b>444</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row my-4">
                  <div class="col-md-7">{/* chart here */}</div>
                  <div class="col-md-5 bg-white">{/* chart here */}</div>
                </div>
                <div class="row bg-white pt-3 mx-0 mt-5">
                  <table
                    id="example"
                    class="table table-striped table-bordered"
                    style={{ width: "100%" }}
                  >
                    <h5>Latest Orders</h5>
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <div class="inputs py-0 d-flex align-items-center">
                          <i class="fa fa-search"></i>{" "}
                          <input type="text" class="w-100 border-0 p-2" />
                        </div>
                      </div>
                      <div class="col"></div>
                      <div class="col-md-3">
                        <div class="btn-group me-2">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary p-0 rounded-0"
                          >
                            <select name="" id="">
                              <option value="" class="border-0">
                                Status
                              </option>
                              <option value="">Status</option>
                              <option value="">Status</option>
                            </select>
                          </button>
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary p-0 rounded-0"
                          >
                            <select name="" id="">
                              <option value="" class="border-0">
                                <i class="fa fa-sort"></i> Sort by
                              </option>
                              <option value="">Status</option>
                              <option value="">Status</option>
                            </select>
                          </button>
                        </div>
                      </div>
                    </div>
                    <thead>
                      <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01/12/22 at 21:00</td>
                        <th scope="row">Toyota RAV4 Head Light</th>
                        <td>
                          <span class="border border-danger px-1 rounded text-danger">
                            Cancelled
                          </span>
                        </td>

                        <td>tester@tester.com</td>
                        <td>Ksh. 23,000,000</td>
                        <td>
                          <i class="fa fa-ellipsis-h"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>01/12/22 at 21:00</td>
                        <th scope="row">Dash Cam</th>
                        <td>
                          <span class="border border-warning px-1 rounded text-warning">
                            Pending
                          </span>
                        </td>

                        <td>tester@tester.com</td>
                        <td>Ksh. 23,000,000</td>
                        <td>
                          <i class="fa fa-ellipsis-h"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>01/12/22 at 21:00</td>
                        <th scope="row">Toyota RAV4 Head Light</th>
                        <td>
                          <span class="border border-success px-1 rounded text-success">
                            Success
                          </span>
                        </td>

                        <td>tester@tester.com</td>
                        <td>Ksh. 23,000,000</td>
                        <td>
                          <i class="fa fa-ellipsis-h"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>01/12/22 at 21:00</td>
                        <th scope="row">Toyota RAV4 Head Light</th>
                        <td>
                          <span class="border border-success px-1 rounded text-success">
                            Success
                          </span>
                        </td>

                        <td>tester@tester.com</td>
                        <td>Ksh. 23,000,000</td>
                        <td>
                          <i class="fa fa-ellipsis-h"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>01/12/22 at 21:00</td>
                        <th scope="row">Toyota RAV4 Head Light</th>
                        <td>
                          <span class="border border-success px-1 rounded text-success">
                            Success
                          </span>
                        </td>

                        <td>tester@tester.com</td>
                        <td>Ksh. 23,000,000</td>
                        <td>
                          <i class="fa fa-ellipsis-h"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>01/12/22 at 21:00</td>
                        <th scope="row">Toyota RAV4 Head Light</th>
                        <td>
                          <span class="border border-danger px-1 rounded text-danger">
                            Cancelled
                          </span>
                        </td>

                        <td>tester@tester.com</td>
                        <td>Ksh. 23,000,000</td>
                        <td>
                          <i class="fa fa-ellipsis-h"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>01/12/22 at 21:00</td>
                        <th scope="row">Toyota RAV4 Head Light</th>
                        <td>
                          <span class="border border-success px-1 rounded text-success">
                            Success
                          </span>
                        </td>

                        <td>tester@tester.com</td>
                        <td>Ksh. 23,000,000</td>
                        <td>
                          <i class="fa fa-ellipsis-h"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
