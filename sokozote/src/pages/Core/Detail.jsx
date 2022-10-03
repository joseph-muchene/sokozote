import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Detail() {
  return (
    <div>
      <Navbar />
      <section id="pricing" class="pricing-table pt-0">
        <div class="container py-5">
          <h4 class="title">Avocado</h4>
          <div class="row">
            <div class="col-md-5 col-12 px-md-0">
              <div class="wow fadeInUp" data-wow-delay=".2s">
                <div class="wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1629020607902-3a93e9f8c4b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60 "
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-md-7 col-12">
              <div class="single-table wow fadeInUp mt-3" data-wow-delay=".8s">
                <h3 class="counter off">
                  <span id="secondo1" class="countup" cup-end="50">
                    50
                  </span>
                  % Off
                </h3>

                <div class="table-head">
                  <h4 class="title">Product Details</h4>
                  <p class="border-bottom pb-3 mb-2">
                    All the basics Fashion Ladies Shoulder Bags Handbags Women
                    Leather-Brown for starting a new business for starting a new
                    business
                  </p>

                  <button class="accordion">Delivery</button>
                  <div class="panel">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  <button class="accordion">Payment options</button>
                  <div class="panel">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  <button class="accordion">Other Specs</button>
                  <div class="panel">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  <p class="mt-2 border-bottom py-2 border-top">
                    <b>vendor: </b> Kama General Store
                    <br />
                    <i class="lni lni-phone"></i> +7254778878
                    <br />
                    <i class="lni lni-map-marker"></i> Nairobi CBD
                  </p>
                  <div class="d-flex jus w-100">
                    <div class="price">
                      <em class="strk text-muted">Was Ksh.5,400</em>
                      <h2 class="amount">
                        <b>Ksh.3,500</b>
                        <span class="duration">/Piece</span>
                      </h2>
                    </div>
                    <div class="button">
                      <a href="" class="btn">
                        <img src="https://img.icons8.com/ios-glyphs/20/ffffff/shopping-cart--v1.png" />{" "}
                        add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Detail;
