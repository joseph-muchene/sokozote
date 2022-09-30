import React from "react";
import Brand from "./Brand";
function Brands() {
  return (
    <section id="features" class="our-achievement py-3 features brand">
      <div class="mx-5 text-left">
        <h3 class="wow zoomIn text-white" data-wow-delay=".2s">
          Browse by Brand
        </h3>
        <div class="row">
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </div>
      </div>
    </section>
  );
}

export default Brands;
