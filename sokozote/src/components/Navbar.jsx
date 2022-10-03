import React from "react";
import Logo from "../sokozote.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div class="sticky-top bg-white shadow-sm">
        <nav class="navbar navbar-expand-lg navbar-light container">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="Logo" class="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link search" href="#">
                  <span class="box">
                    <i class="lni lni-search"></i>
                    <input type="text" placeholder="Type to search..." />
                  </span>
                  <button class="search-btn">Search</button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  <img src="https://img.icons8.com/ios-glyphs/24/dc2e25/help.png" />{" "}
                  Help
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/20/dc2e25/external-User-essential-collection-bearicons-glyph-bearicons.png" />{" "}
                  Account
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/login">
                      login
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/signup">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      logout
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  <img src="https://img.icons8.com/ios-glyphs/20/dc2e25/shopping-cart--v1.png" />{" "}
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
