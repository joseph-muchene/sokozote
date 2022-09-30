import React from "react";
import Arrival from "./Arrival";
import OwlCarousel from "react-owl-carousel";
function Arrivals() {
  return (
    <section id="features" class="features">
      <div class="mx-5">
        <h4 class="wow zoomIn cat-title pt-4" data-wow-delay=".2s">
          New Arrivals
        </h4>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          <Arrival />
        </OwlCarousel>
      </div>
    </section>
  );
}

export default Arrivals;
