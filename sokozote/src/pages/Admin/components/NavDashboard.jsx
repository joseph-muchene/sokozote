import React from "react";
import Logo from "../../../sokozote.png";
function NavDashboard() {
  return (
    <header class="navbar navbar-dark sticky-top bg-white flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 py-0 bg-white" href="#">
        <img src={Logo} class="w-75" alt="" />
      </a>
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="inputs py-0 d-flex align-items-center w-100 ml-3">
        <i class="fa fa-search"></i>{" "}
        <input
          type="text"
          placeholder="Search keyword..."
          class="w-100 border-0 p-2"
        />
      </div>{" "}
      <div class="navbar-nav">
        <div class="nav-item text-nowrap d-flex">
          <a class="nav-link px-3" href="#">
            <i class="fa fa-eye"></i> Visit Site
          </a>
          <a class="nav-link px-3" href="#">
            <i class="fa fa-sms"></i> Notifications
          </a>
          <a class="nav-link px-3" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR6mNeolQnmtuuUJ3SwppHCm0CfRXTBECfOw&usqp=CAU"
              alt=""
              class="avatar"
            />
            Sign out
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavDashboard;
