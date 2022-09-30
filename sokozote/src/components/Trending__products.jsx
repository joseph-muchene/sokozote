import React from "react";
import Trending__product from "./Trending__product";
import OwlCarousel from "react-owl-carousel";
function Trending__products() {
  return (
    <section id="features" class="features pb-4">
      <div class="mx-5">
        <h4 class="wow zoomIn cat-title mb-0 pt-4" data-wow-delay=".2s">
          Trending Products
        </h4>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          <Trending__product />
          <Trending__product />
          <Trending__product />
          <Trending__product />
          <Trending__product />
        </OwlCarousel>
      </div>
    </section>
  );
}

export default Trending__products;
