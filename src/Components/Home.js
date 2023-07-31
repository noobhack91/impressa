import React from "react";
import "../css/history.css"; // Import the CSS file

const Home = () => {
  return (
    <div id="home" className="home-container">
       <header class="site-header mo-left header style-1">
          <div class="sticky-header main-bar-wraper navbar-expand-lg">
            <div class="main-bar clearfix">
              <div class="container-fluid clearfix">
                <div class="logo-header mostion logo-dark">
                  <a href="https://visva.dexignzone.com/react/demo"
                    ></a>
                </div>
                <button
                  class="navbar-toggler collapsed navicon justify-content-end open">
                  <span></span><span></span><span></span>
                </button>
                <div class="extra-nav">
                  <div class="extra-cell">
                    <div class="extra-icon-box">
                      <i class="fas fa-map-marker-alt"></i>
                      <h6 class="title">15/B Miranda House New York,US</h6>
                    </div>
                    <div class="search-inhead">
                      <div class="dz-quik-search">
                        <form action="#">
                          <input
                            name="search"
                            type="text"
                            class="form-control"
                            placeholder="Search"
                          /><span id="quik-search-remove"
                            ><i class="ti-close"></i
                          ></span>
                        </form>
                      </div>
                      <a
                        class="search-link"
                        id="quik-search-btn"
                        href="https://visva.dexignzone.com/react/demo"
                        ><i class="flaticon-loupe"></i
                      ></a>
                    </div>
                    <div class="menu-btn navicon">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
                <div
                  class="header-nav navbar-collapse collapse justify-content-end show"
                  id="navbarNavDropdown"
                >
                  <div class="logo-header logo-dark">
                    <a href="https://visva.dexignzone.com/react/demo"
                      ></a>
                  </div>
                  <ul class="nav navbar-nav navbar navbar-left">
                    <li class="sub-menu-down">
                      <a href="https://visva.dexignzone.com/react/demo">Home</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="https://visva.dexignzone.com/react/demo"
                            >Home 1</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/home-2"
                            >Home 2</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/home-3"
                            >Home 3</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-down">
                      <a href="https://visva.dexignzone.com/react/demo"
                        >Pages</a
                      >
                      <ul class="sub-menu">
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/about-us"
                            >About Us</a
                          >
                        </li>
                        <li>
                          <a href="https://visva.dexignzone.com/react/demo/team"
                            >Team</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/coming-soon"
                            >Coming Soon</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/under-construct"
                            >Under Construct</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/error-404"
                            >Error 404</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-down">
                      <a href="https://visva.dexignzone.com/react/demo"
                        >Portfolio</a
                      >
                      <ul class="sub-menu">
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/portfolio"
                            >Portfolio</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/portfolio-details"
                            >Portfolio Details</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-down">
                      <a href="https://visva.dexignzone.com/react/demo"
                        >Services</a
                      >
                      <ul class="sub-menu">
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/services"
                            >Services</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/services-details"
                            >Services Details</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="sub-menu-down">
                      <a href="https://visva.dexignzone.com/react/demo">Blog</a>
                      <ul class="sub-menu">
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/blog-grid"
                            >Blog Grid</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/blog-large-left-sidebar"
                            >Large Left Sidebar</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/blog-list-left-sidebar"
                            >List Left Sidebar</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo/blog-details"
                            >Blog Details</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="https://visva.dexignzone.com/react/demo/contact-us"
                        >Contact Us</a
                      >
                    </li>
                  </ul>
                  <div class="dz-social-icon">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/dexignzone/"
                          target="_blank"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/dexignzone/"
                          target="_blank"
                          ><i class="fab fa-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/dexignzones/"
                          target="_blank"
                          ><i class="fab fa-twitter"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@dexignzone1723"
                          target="_blank"
                          ><i class="fab fa-youtube"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    </div>
  );
};

export default Home;
