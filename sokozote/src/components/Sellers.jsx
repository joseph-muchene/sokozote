import React from "react";
import Seller from "./Seller";

function Sellers() {
  return (
    <section id="features" class="features py-4">
      <div class="mx-md-5 mx-2">
        <h4 class="wow zoomIn cat-title mb-2 pt-4" data-wow-delay=".2s">
          Best Sellers{" "}
        </h4>
        <div class="row mt-0">
          <Seller />
          <Seller /> <Seller /> <Seller />
          <Seller />
          <Seller />
        </div>
      </div>
    </section>
  );
}

export default Sellers;
