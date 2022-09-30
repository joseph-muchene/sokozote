import React from "react";
import Category from "./Category";
import ShowcaseProduct from "./Showcase__product";
import Slider from "./Slider";
function Top__section() {
  return (
    <section id="pricing" class="pricing-table pt-0">
      <div class="mx-5">
        <div class="row">
          <Category />
          <Slider />
          <ShowcaseProduct />
        </div>
      </div>
    </section>
  );
}

export default Top__section;
