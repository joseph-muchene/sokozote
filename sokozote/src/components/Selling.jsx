import React from "react";

function Selling() {
  return (
    <div class="col-md-2 col-6 mb-3">
      <div
        class="single-feature wow fadeInUp p-0 card border-0 shadow-sm mt-0"
        data-wow-delay=".2s"
      >
        <img
          src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/045533/1.jpg?7867"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body p-2 ">
          <p class="text-dark mb-1">HP Refurbished 3125M AMD Ram 2gb</p>

          <h6>
            {" "}
            <em class="strk">Ksh. 56,676</em>{" "}
            <b class="text-danger">Ksh. 676</b>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Selling;
