import React from "react";

function Trending__product() {
  return (
    <div class="item mb-3">
      <div class="single-feature wow fadeInUp p-0 card" data-wow-delay=".2s">
        <div class="box">
          <img
            src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/541925/1.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="ribbon">
            <span>50% off</span>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            Geisha Shea & Almond Beauty Bar Soap - 125g
          </h5>
          <h6>
            {" "}
            <em class="strk">Ksh. 56,676</em>{" "}
            <b class="text-danger">Ksh. 56,676</b>
          </h6>
          <p class="view">View</p>
        </div>
      </div>
    </div>
  );
}

export default Trending__product;
