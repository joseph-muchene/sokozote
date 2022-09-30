import React from "react";

function Slider() {
  return (
    <div class="col-md-6 col-12 px-md-0">
      <div class="wow fadeInUp mt-2" data-wow-delay=".2s">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://media.istockphoto.com/vectors/vector-tire-sale-banner-vector-id1144189552?k=20&m=1144189552&s=170667a&w=0&h=EjvOXEX4zGuLZIIp9jyl_NHCw912KT1ikFLHyiJo1Xk="
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://ke.jumia.is/cms/2022/W05/HP/Sliders/Revised/KE_2_2_Beauty_0122_S.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://ke.jumia.is/cms/2022/W05/KE_2.2_Cross_0222_S.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
