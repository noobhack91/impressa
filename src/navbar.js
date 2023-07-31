import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll"; // Import animateScroll as scroll
import "../src/css/navbar.css"; // Import the CSS file

const Navbar = () => {
  const slides = [
    {
      image: "/impressa/blob/7bb1c2bfb924d6509b3a27587524debaff6cd641/public/img/c1.jpg",
      name: "Amelia Stanley",
      position: "Fitness Zumba Coach",
      social: {
        skype: "https://visva.dexignzone.com/react/demo",
        facebook: "https://visva.dexignzone.com/react/demo",
        google: "https://visva.dexignzone.com/react/demo",
        twitter: "https://visva.dexignzone.com/react/demo",
        youtube: "https://visva.dexignzone.com/react/demo",
      },
    },
    {
      image: "/public/img/c2.jpg",
      name: "Amelia Stanley",
      position: "Fitness Zumba Coach",
      social: {
        skype: "https://visva.dexignzone.com/react/demo",
        facebook: "https://visva.dexignzone.com/react/demo",
        google: "https://visva.dexignzone.com/react/demo",
        twitter: "https://visva.dexignzone.com/react/demo",
        youtube: "https://visva.dexignzone.com/react/demo",
      },
    },
    {
      image: "/public/img/c3.jpg",
      name: "Amelia Stanley",
      position: "Fitness Zumba Coach",
      social: {
        skype: "https://visva.dexignzone.com/react/demo",
        facebook: "https://visva.dexignzone.com/react/demo",
        google: "https://visva.dexignzone.com/react/demo",
        twitter: "https://visva.dexignzone.com/react/demo",
        youtube: "https://visva.dexignzone.com/react/demo",
      },
    },
    {
      image: "/img/c4.jpg",
      name: "Amelia Stanley",
      position: "Fitness Zumba Coach",
      social: {
        skype: "https://visva.dexignzone.com/react/demo",
        facebook: "https://visva.dexignzone.com/react/demo",
        google: "https://visva.dexignzone.com/react/demo",
        twitter: "https://visva.dexignzone.com/react/demo",
        youtube: "https://visva.dexignzone.com/react/demo",
      },
    },
    {
      image: "/img/c6.jpg",
      name: "Amelia Stanley",
      position: "Fitness Zumba Coach",
      social: {
        skype: "https://visva.dexignzone.com/react/demo",
        facebook: "https://visva.dexignzone.com/react/demo",
        google: "https://visva.dexignzone.com/react/demo",
        twitter: "https://visva.dexignzone.com/react/demo",
        youtube: "https://visva.dexignzone.com/react/demo",
      },
    },
    {
      image: "/img/c7.jpg",
      name: "Amelia Stanley",
      position: "Fitness Zumba Coach",
      social: {
        skype: "https://visva.dexignzone.com/react/demo",
        facebook: "https://visva.dexignzone.com/react/demo",
        google: "https://visva.dexignzone.com/react/demo",
        twitter: "https://visva.dexignzone.com/react/demo",
        youtube: "https://visva.dexignzone.com/react/demo",
      },
    },
    // Add more slides here
  ];
  const images = ["/img/home.jpg", "/img/grid.jpg"]; // Add your image URLs here
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    // Function to change the slide after 5 seconds
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(sliderInterval);
  }, [images.length]);
  const sliderImgStyle = {
    position: "relative",
    overflow: "hidden",
    backgroundImage: `url(${images[currentSlide]})`,
    width: "100%",
    height: "500px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-40%",
    width: "80%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Change the color as needed
    zIndex: 1,
  };

  const portfolio = [
    {
      image: "/img/bface.jpg",

      position: "INTERIOR DESIGN",
      title: "Modern House Interior",
      location: "New York",
      link: "https://visva.dexignzone.com/react/demo/portfolio-details",
    },
    {
      image: "/img/lamp.jpg",

      position: "ARCHITECTURAL",
      title: "Residential Project",
      location: "Paris",
      link: "https://visva.dexignzone.com/react/demo/portfolio-details",
    },
    {
      image: "/img/buil.jpg",

      position: "INTERIOR DESIGN",
      title: "Modern House Interior",
      location: "New York",
      link: "https://visva.dexignzone.com/react/demo/portfolio-details",
    },
    {
      image: "/img/bface.jpg",

      position: "ARCHITECTURAL",
      title: "Residential Project",
      location: "Paris",
      link: "https://visva.dexignzone.com/react/demo/portfolio-details",
    },
  ];

  const slidesWithDuplicates = [...slides, ...slides];

  const tabs = [
    { path: "home", label: "Home" },
    { path: "page", label: "Page" }, // Update the path to match the route    { path: 'tab3', label: 'Portfolio' },
    { path: "tab7", label: "Portfolio" },
    { path: "tab4", label: "Services" },
    { path: "tab5", label: "Blog" },
    { path: "tab6", label: "Contact Us" },

    // Add more tabs as needed
  ];

  // Scroll to the top of the page when the logo is clicked
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="page-wraper">
      <header className="site-header mo-left header style-1">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix">
            <div className="container-fluid clearfix">
              <div className="logo-header mostion logo-dark">
                <img src="/img/LOGO.png" alt="" />
              </div>
              <button className="navbar-toggler collapsed navicon justify-content-end open">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="extra-nav">
                <div className="extra-cell">
                  <div className="extra-icon-box">
                    
                    <img src="/icon/map.png"></img>
                    <h6 className="title">15/B Miranda House New York,US</h6>
                  </div>
                  <div className="search-inhead">
                    <div className="dz-quik-search">
                      <form action="#">
                        <input
                          name="search"
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <span id="quik-search-remove">
                          <i className="ti-close"></i>
                        </span>
                      </form>
                    </div>
                    <a
                      className="search-link"
                      id="quik-search-btn"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <i className="flaticon-loupe"></i>
                    </a>
                  </div>
                  <div className="menu-btn navicon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div
                className="header-nav navbar-collapse collapse justify-content-end show"
                id="navbarNavDropdown"
              >
                <div className="logo-header logo-dark">
                  <img src="/img/LOGO.png" alt="" />{" "}
                </div>
                <ul className="nav navbar-nav navbar navbar-left">
                  <li className="sub-menu-down">
                    <a href="https://visva.dexignzone.com/react/demo">Home</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo">
                          Home 1
                        </a>
                      </li>
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/home-2">
                          Home 2
                        </a>
                      </li>
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/home-3">
                          Home 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-menu-down">
                    <a href="https://visva.dexignzone.com/react/demo">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/about-us">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/team">
                          Team
                        </a>
                      </li>
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/coming-soon">
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/under-construct">
                          Under Construct
                        </a>
                      </li>
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/error-404">
                          Error 404
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-menu-down">
                    <a href="https://visva.dexignzone.com/react/demo">
                      Portfolio
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/portfolio">
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/portfolio-details">
                          Portfolio Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-menu-down">
                    <a href="https://visva.dexignzone.com/react/demo">
                      Services
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/services">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/services-details">
                          Services Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-menu-down">
                    <a href="https://visva.dexignzone.com/react/demo">Blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/blog-grid">
                          Blog Grid
                        </a>
                      </li>
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/blog-large-left-sidebar">
                          Large Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/blog-list-left-sidebar">
                          List Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="https://visva.dexignzone.com/react/demo/blog-details">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://visva.dexignzone.com/react/demo/contact-us">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <div className="dz-social-icon">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/dexignzone/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/dexignzone/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/dexignzones/"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@dexignzone1723"
                        target="_blank"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="contact-sidebar">
        <div className="contact-box">
          <div className="logo-contact logo-dark"></div>
          <div className="m-b50 contact-text">
            <div className="dz-title">
              <h4>About US</h4>
              <div className="dz-separator style-1 text-primary mb-0"></div>
            </div>
            <p>
              Aliquam erat volutpat. Nunc erat massa, porttitor vel egestas sit
              amet, tristique at massa. Donec posuere odio neque, in ultricies
              lorem aliquet eu. Donec venenatis libero Link nulla placerat
              egestas.
            </p>
            <a
              className="btn btn-primary btn-sm btn-rounded"
              href="https://visva.dexignzone.com/react/demo/about-us"
            >
              READ MORE
            </a>
          </div>
          <div className="dz-title">
            <h4>Gallery</h4>
            <div className="dz-separator style-1 text-primary mb-0"></div>
          </div>
          <div className="widget bg-white widget_gallery">
            <ul id="lightgallery" className="lightgallery m-b0">
              <li>
                <div className="dlab-post-thum dlab-img-effect">
                  <span className="lightimg">
                    <img src="/img/broom.jpg" alt="" />
                  </span>
                </div>
              </li>
              <li>
                <div className="dlab-post-thum dlab-img-effect">
                  <span className="lightimg">
                    <img src="/img/pic2.63d459c91a84dae73528.jpg" alt="" />
                  </span>
                </div>
              </li>
              <li>
                <div className="dlab-post-thum dlab-img-effect">
                  <span className="lightimg">
                    <img src="/img/pic3.f45f4dfabb17258cd939.jpg" alt="" />
                  </span>
                </div>
              </li>
              <li>
                <div className="dlab-post-thum dlab-img-effect">
                  <span className="lightimg">
                    <img src="/img/pic4.74bb2f40c2b7760b410e.jpg" alt="" />
                  </span>
                </div>
              </li>
              <li>
                <div className="dlab-post-thum dlab-img-effect">
                  <span className="lightimg">
                    <img src="/img/pic5.1be57176d8de886bc91b.jpg" alt="" />
                  </span>
                </div>
              </li>
              <li>
                <div className="dlab-post-thum dlab-img-effect">
                  <span className="lightimg">
                    <img src="/img/pic6.31ee44d5d94e20f04d2c.jpg" alt="" />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="menu-close"></div>
      <div className="page-content bg-white">
        <div className="slidearea">
          <div className="side-contact-info">
            <ul>
              <li>
                <i className="fas fa-phone-alt"></i> +91 123 456 7890
              </li>
              <li>
                <i className="fas fa-envelope"></i> Visvainfo@gmail.com
              </li>
            </ul>
          </div>
          <div className="silder-one">
            <div
              className="silder-img overlay-black-light"
              style={{ backgroundImage: `url(${images[currentSlide]})` }}
            >
              <div className="silder-content">
                <div className="inner-content">
                  <h6 className="sub-title">DESIGNING</h6>
                  <h1 className="title">We Create</h1>
                  <h3 className="title-small">
                    Unique Architecture
                    <br />
                    Design Ideas
                  </h3>
                  <a
                    className="btn shadow-primary btn-light btn-rounded btn-ov-secondary"
                    href="https://visva.dexignzone.com/react/demo/about-us"
                  >
                    READ MORE <i className="m-l10 fas fa-caret-right"></i>
                  </a>
                </div>
                <div className="overlay-slide"></div>
              </div>
            </div>
            <div className="slider-one-pagination">
              <div
                className="btn-prev swiper-button-prev1 swiper-button-white"
                onClick={() =>
                  setCurrentSlide((prevSlide) =>
                    prevSlide === 0 ? images.length - 1 : prevSlide - 1
                  )
                }
              >
                <i className="las la-long-arrow-alt-left"></i>PREV
              </div>
              <div className="swiper-pagination pagination-styled swiper-pagination-fraction swiper-pagination-horizontal">
                <span className="swiper-pagination-current">
                  {currentSlide + 1}
                </span>{" "}
                /{" "}
                <span className="swiper-pagination-total">{images.length}</span>
              </div>
              <div
                className="btn-next swiper-button-next1 swiper-button-white"
                onClick={() =>
                  setCurrentSlide(
                    (prevSlide) => (prevSlide + 1) % images.length
                  )
                }
              >
                NEXT<i className="las la-long-arrow-alt-right"></i>
              </div>
            </div>
          </div>
        </div>
        <section
          className="section-full content-inner about-bx2"
          // style="
          //   background-image: url('/react/demo/static/media/bg2.f4cf69901fef6bf14c64.png');
          //   background-position: right bottom;
          //   background-size: 100%;
          //   background-repeat: no-repeat;
          // "
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="img1 aos-item">
                    <img src="/img/building.jpg" alt="" />
                  </div>
                  <div className="img2 aos-item" data-aos="fade-up">
                    <img src="/img/sofa.jpg" alt="" />
                  </div>
                  <div className="img3 aos-item">
                    <img src="/img/bsofa.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="year-exp">
                  <h2
                    className="year aos-item counter"
                    data-aos="fade-up"
                    // style="
                    //   opacity: 0;
                    //   transform: translateY(100%) translateZ(0px);
                    // "
                  >
                    <span>25</span>
                  </h2>
                  <h4
                    className="text aos-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                    // style="
                    //   opacity: 0;
                    //   transform: translateY(100%) translateZ(0px);
                    // "
                  >
                    Years Of Working Experience
                  </h4>
                </div>
                <p
                  className="m-b30 aos-item"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                  // style="
                  //   opacity: 0;
                  //   transform: translateY(100%) translateZ(0px);
                  // "
                >
                  Donec lacus velit, volutpat a consequat quis, placerat vitae
                  massa. Nulla facilisi. Fusce ac odio justo. Phasellus a risus
                  in libero feugiat aliquam quis nec metus. Sed vulputate
                  bibendum nulla, eu sodales magna gravida nec. Integer sit amet
                  sollicitudin massa, a blandit lectus. Vivamus lacinia justo
                  non congue blandit.
                </p>
                <div className="accordion dz-accordion about-faq" id="aboutFaq">
                  <div className="accordion">
                    <div className="accordion-item">
                      <div
                      // style="
                      //   opacity: 0;
                      //   transform: translateX(100%) translateZ(0px);
                      // "
                      >
                        <h2
                          id="flush-headingOne"
                          className="accordion-header accordion-header"
                        >
                          <button
                            type="button"
                            aria-expanded="true"
                            className="accordion-button"
                          >
                           <img src="/icon/crane.png"></img>Construction
                            <span className="toggle-close"></span>
                          </button>
                        </h2>
                        <div className="accordion-collapse collapse show">
                          <div className="accordion-body">
                            Vivamus sed eleifend diam.Proin vel orci commodo
                            nulla viverra feugiat nec quis neque.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div
                      // style="
                      //   opacity: 0;
                      //   transform: translateX(100%) translateZ(0px);
                      // "
                      >
                        <h2
                          id="flush-headingOne"
                          className="accordion-header accordion-header"
                        >
                          <button
                            type="button"
                            aria-expanded="false"
                            className="accordion-button collapsed"
                          >
                           <img src="/icon/ab.png"></img>
                            Architecture<span className="toggle-close"></span>
                          </button>
                        </h2>
                        <div className="accordion-collapse collapse">
                          <div className="accordion-body">
                            Vivamus sed eleifend diam.Proin vel orci commodo
                            nulla viverra feugiat nec quis neque.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div
                      // style="
                      //   opacity: 0;
                      //   transform: translateX(100%) translateZ(0px);
                      // "
                      >
                        <h2
                          id="flush-headingOne"
                          className="accordion-header accordion-header"
                        >
                          <button
                            type="button"
                            aria-expanded="false"
                            className="accordion-button collapsed"
                          >
                                                       <img src="/icon/ab.png"></img>
Interior
                            <span className="toggle-close"></span>
                          </button>
                        </h2>
                        <div className="accordion-collapse collapse">
                          <div className="accordion-body">
                            Vivamus sed eleifend diam.Proin vel orci commodo
                            nulla viverra feugiat nec quis neque.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dz-content-bx style-3">
          <div className="dz-content-inner">
            <div className="row">
              <div
                className="col-xl-10 col-lg-12 counter-info aos-item"
                // style="
                //   opacity: 0;
                //   transform: translateX(-20%) translateZ(0px);
                // "
              >
                <div className="row">
                  <div className="col-lg-3 col-sm-6 m-b30 aos-item">
                    <div
                      className="counter-bx"
                      // style="
                      //   opacity: 0;
                      //   transform: translateY(100%) translateZ(0px);
                      // "
                    >
                      <h2 className="counter text-primary">
                        <span>784</span>
                      </h2>
                      <h3 className="m-b0">
                        Project <br />
                        Completed
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 m-b30 aos-item">
                    <div className="counter-bx">
                      <h2 className="counter text-primary">
                        <span>987</span>
                      </h2>
                      <h3 className="m-b0">
                        Client <br />
                        Satisfaction
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 m-b30 aos-item">
                    <div
                      className="counter-bx"
                      // style="
                      //   opacity: 0;
                      //   transform: translateY(100%) translateZ(0px);
                      // "
                    >
                      <h2 className="counter text-primary">
                        <span>874</span>
                      </h2>
                      <h3 className="m-b0">
                        Cup Of <br />
                        Coffee Meet
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 m-b30 aos-item">
                    <div
                      className="counter-bx"
                      // style="
                      //   opacity: 0;
                      //   transform: translateY(100%) translateZ(0px);
                      // "
                    >
                      <h2 className="counter text-primary">
                        <span>954</span>
                      </h2>
                      <h3 className="m-b0">
                        Awards <br />
                        International
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row spno">
              <div className="col-lg-12">
                <div className="video-bx content-media style-2">
                  <img
                    src="Visva%20-%20React%20Architecture%20&amp;%20interior%20Template_files/pic2-2.c7c15c28a384a2987473.jpg"
                    alt=""
                  />
                  <div
                    className="video-btn aos-item"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    <button className="popup-youtube">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-inner-2"
          // style="
          //   background-image: url('/react/demo/static/media/bg1.9ba9a44e9faba9e73473.png');
          //   background-position: left top;
          //   background-size: 100%;
          //   background-repeat: no-repeat;
          // "
        >
          <div className="container">
            <div className="section-head style-1 text-center">
              <h6 className="sub-title text-primary">POPULAR SERVICES</h6>
              <h2 className="title">Our Featured Services</h2>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-sm-6 aos-item"
                // style="
                //   opacity: 0;
                //   transform: translateY(100%) translateZ(0px);
                // "
              >
                <div className="icon-bx-wraper style-3 m-b30 active">
                  <div className="icon-xl m-b30">
                    <a
                      className="icon-cell"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <img src="/icon/crane.png"></img>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="title m-b10">
                      <a href="https://visva.dexignzone.com/react/demo"></a>
                    </h4>
                    <p className="m-b30">
                      Phasellus facilisis urna at ultrices egestas. Nulla mi
                      arcu, finibus non lectus non, mollis tempus enim.
                    </p>
                    <a
                      className="btn btn-primary btn-rounded btn-sm hover-icon"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 aos-item"
                // style="
                //   opacity: 0;
                //   transform: translateY(100%) translateZ(0px);
                // "
              >
                <div className="icon-bx-wraper style-3 m-b30">
                  <div className="icon-xl m-b30">
                    <a
                      className="icon-cell"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <img src="/icon/crane.png"></img>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="title m-b10">
                      <a href="https://visva.dexignzone.com/react/demo"></a>
                    </h4>
                    <p className="m-b30">
                      Phasellus facilisis urna at ultrices egestas. Nulla mi
                      arcu, finibus non lectus non, mollis tempus enim.
                    </p>
                    <a
                      className="btn btn-primary btn-rounded btn-sm hover-icon"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 aos-item"
                // style="
                //   opacity: 0;
                //   transform: translateY(100%) translateZ(0px);
                // "
              >
                <div className="icon-bx-wraper style-3 m-b30">
                  <div className="icon-xl m-b30">
                    <a
                      className="icon-cell"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <img src="/icon/crane.png"></img>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="title m-b10">
                      <a href="https://visva.dexignzone.com/react/demo"></a>
                    </h4>
                    <p className="m-b30">
                      Phasellus facilisis urna at ultrices egestas. Nulla mi
                      arcu, finibus non lectus non, mollis tempus enim.
                    </p>
                    <a
                      className="btn btn-primary btn-rounded btn-sm hover-icon"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 aos-item"
                // style="
                //   opacity: 0;
                //   transform: translateY(100%) translateZ(0px);
                // "
              >
                <div className="icon-bx-wraper style-3 m-b30">
                  <div className="icon-xl m-b30">
                    <a
                      className="icon-cell"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <img src="/icon/crane.png"></img>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="title m-b10">
                      <a href="https://visva.dexignzone.com/react/demo"></a>
                    </h4>
                    <p className="m-b30">
                      Phasellus facilisis urna at ultrices egestas. Nulla mi
                      arcu, finibus non lectus non, mollis tempus enim.
                    </p>
                    <a
                      className="btn btn-primary btn-rounded btn-sm hover-icon"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 aos-item"
                // style="
                //   opacity: 0;
                //   transform: translateY(100%) translateZ(0px);
                // "
              >
                <div className="icon-bx-wraper style-3 m-b30">
                  <div className="icon-xl m-b30">
                    <a
                      className="icon-cell"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <img src="/icon/crane.png"></img>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="title m-b10">
                      <a href="https://visva.dexignzone.com/react/demo"></a>
                    </h4>
                    <p className="m-b30">
                      Phasellus facilisis urna at ultrices egestas. Nulla mi
                      arcu, finibus non lectus non, mollis tempus enim.
                    </p>
                    <a
                      className="btn btn-primary btn-rounded btn-sm hover-icon"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 aos-item"
                // style="
                //   opacity: 0;
                //   transform: translateY(100%) translateZ(0px);
                // "
              >
                <div className="icon-bx-wraper style-3 m-b30">
                  <div className="icon-xl m-b30">
                    <a
                      className="icon-cell"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <img src="/icon/crane.png"></img>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="title m-b10">
                      <a href="https://visva.dexignzone.com/react/demo"></a>
                    </h4>
                    <p className="m-b30">
                      Phasellus facilisis urna at ultrices egestas. Nulla mi
                      arcu, finibus non lectus non, mollis tempus enim.
                    </p>
                    <a
                      className="btn btn-primary btn-rounded btn-sm hover-icon"
                      href="https://visva.dexignzone.com/react/demo"
                    >
                      <span>Read More</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner-2">
          <div className="container">
            <div className="row section-head-bx align-items-center">
              <div className="col-md-8">
                <div className="section-head style-1">
                  <h6 className="sub-title text-primary">OUR PORTFOLIOS</h6>
                  <h2 className="title">Our Latest Projects</h2>
                </div>
              </div>
              <div className="col-md-4 text-start text-md-end mb-4 mb-md-0">
                <a
                  className="btn-link"
                  href="https://visva.dexignzone.com/react/demo/portfolio"
                >
                  See All Projects <i className="fas fa-plus scale08"></i>
                </a>
              </div>
            </div>
          </div>
          <section className="content-inner-2">
            <div className="containe-fluid">
              <div className="slid-container">
                {portfolio.map((slide, index) => (
                  <div key={index} className="slid">
                    <div className="dz-box overlay style-1">
                      <a href={slide.image}>
                        <img alt={slide.name} src={slide.image} />
                      </a>
                      <div className="dz-info">
                        <span
                          data-exthumbimage={slide.image}
                          data-src={slide.image}
                          className="view-btn lightimg"
                          title="ARCHITECTURAL"
                        ></span>
                        <h6 className="sub-title">{slide.position}</h6>
                        <h4 className="title m-b15">
                          <a href={slide.link}>{slide.title}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Rest of the content */}
          </section>
        </section>
        <section
          className="content-inner-2"
          // style="
          //   background-image: url('/react/demo/static/media/bg2.f4cf69901fef6bf14c64.png');
          //   background-position: right bottom;
          //   background-size: 100%;
          //   background-repeat: no-repeat;
          // "
        >
          <div className="container">
            <div className="section-head style-1 text-center">
              <h6 className="sub-title text-primary">TESTIMONIAL</h6>
              <h2 className="title">What Our Clients Says</h2>
            </div>
            <div className="row">
              <div
                className="col-lg-6 align-self-center aos-item"
                // style="
                //   opacity: 0;
                //   transform: translateY(100%) translateZ(0px);
                // "
              >
                <div className="swiper swiper-container swiper-client swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div
                    className="swiper-wrapper"
                    // style="transform: translate3d(0px, 0px, 0px)"
                  >
                    <div
                      className="swiper-slide swiper-slide-active"
                      data-rel="6"
                      // style="width: 570px"
                      data-swiper-slide-index="0"
                    >
                      <div className="testimonial-1">
                        <div className="testimonial-info">
                <img src="/icon/2.png"></img>
                          <div className="testimonial-text">
                            <p>
                              Phasellus facilisis urna at ultrices egestas.
                              Nulla mi arcu, finibus non lectus non, mollis
                              tempus enim. Curabitur vel ipsum eget augue
                              pharetra tempus ac eget ipsum. Fusce vestibulum
                              leo quis bibendum placerat. Duis porttitor mi at
                              mauris auctor eleifend. Cras sed nibh sem. Proin
                              quis ligula eget purus eleifend euismod. Sed
                              rhoncus nunc vitae diam.
                            </p>
                          </div>
                          <div className="testimonial-detail">
                            <h4 className="testimonial-name">George Carson</h4>
                            <span className="testimonial-position text-primary">
                              CEO Founder
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="prev" title="prev"></div>
                      <div className="next" title="next"></div>
                    </div>
                    <div
                      className="swiper-slide swiper-slide-next"
                      data-rel="6"
                      // style="width: 570px"
                      data-swiper-slide-index="1"
                    >
                      <div className="testimonial-1">
                        <div className="testimonial-info">
                          <div className="flaticon-quotation quote-icon"></div>
                          <div className="testimonial-text">
                            <p>
                              Phasellus facilisis urna at ultrices egestas.
                              Nulla mi arcu, finibus non lectus non, mollis
                              tempus enim. Curabitur vel ipsum eget augue
                              pharetra tempus ac eget ipsum. Fusce vestibulum
                              leo quis bibendum placerat. Duis porttitor mi at
                              mauris auctor eleifend. Cras sed nibh sem. Proin
                              quis ligula eget purus eleifend euismod. Sed
                              rhoncus nunc vitae diam.
                            </p>
                          </div>
                          <div className="testimonial-detail">
                            <h4 className="testimonial-name">Freddie Ronan</h4>
                            <span className="testimonial-position text-primary">
                              CEO Founder
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="prev" title="prev"></div>
                      <div className="next" title="next"></div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-rel="6"
                      // style="width: 570px"
                      data-swiper-slide-index="2"
                    >
                      <div className="testimonial-1">
                        <div className="testimonial-info">
                          <div className="flaticon-quotation quote-icon"></div>
                          <div className="testimonial-text">
                            <p>
                              Phasellus facilisis urna at ultrices egestas.
                              Nulla mi arcu, finibus non lectus non, mollis
                              tempus enim. Curabitur vel ipsum eget augue
                              pharetra tempus ac eget ipsum. Fusce vestibulum
                              leo quis bibendum placerat. Duis porttitor mi at
                              mauris auctor eleifend. Cras sed nibh sem. Proin
                              quis ligula eget purus eleifend euismod. Sed
                              rhoncus nunc vitae diam.
                            </p>
                          </div>
                          <div className="testimonial-detail">
                            <h4 className="testimonial-name">Ethan Jacoby</h4>
                            <span className="testimonial-position text-primary">
                              CEO Founder
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="prev" title="prev"></div>
                      <div className="next" title="next"></div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-rel="6"
                      // style="width: 570px"
                      data-swiper-slide-index="3"
                    >
                      <div className="testimonial-1">
                        <div className="testimonial-info">
                          <div className="flaticon-quotation quote-icon"></div>
                          <div className="testimonial-text">
                            <p>
                              Phasellus facilisis urna at ultrices egestas.
                              Nulla mi arcu, finibus non lectus non, mollis
                              tempus enim. Curabitur vel ipsum eget augue
                              pharetra tempus ac eget ipsum. Fusce vestibulum
                              leo quis bibendum placerat. Duis porttitor mi at
                              mauris auctor eleifend. Cras sed nibh sem. Proin
                              quis ligula eget purus eleifend euismod. Sed
                              rhoncus nunc vitae diam.
                            </p>
                          </div>
                          <div className="testimonial-detail">
                            <h4 className="testimonial-name">Charlie Kane</h4>
                            <span className="testimonial-position text-primary">
                              CEO Founder
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="prev" title="prev"></div>
                      <div className="next" title="next"></div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-rel="6"
                      // style="width: 570px"
                      data-swiper-slide-index="4"
                    >
                      <div className="testimonial-1">
                        <div className="testimonial-info">
                          <div className="flaticon-quotation quote-icon"></div>
                          <div className="testimonial-text">
                            <p>
                              Phasellus facilisis urna at ultrices egestas.
                              Nulla mi arcu, finibus non lectus non, mollis
                              tempus enim. Curabitur vel ipsum eget augue
                              pharetra tempus ac eget ipsum. Fusce vestibulum
                              leo quis bibendum placerat. Duis porttitor mi at
                              mauris auctor eleifend. Cras sed nibh sem. Proin
                              quis ligula eget purus eleifend euismod. Sed
                              rhoncus nunc vitae diam.
                            </p>
                          </div>
                          <div className="testimonial-detail">
                            <h4 className="testimonial-name">Alfie Mason</h4>
                            <span className="testimonial-position text-primary">
                              CEO Founder
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="prev" title="prev"></div>
                      <div className="next" title="next"></div>
                    </div>
                    <div
                      className="swiper-slide"
                      data-rel="6"
                      // style="width: 570px"
                      data-swiper-slide-index="5"
                    >
                      <div className="testimonial-1">
                        <div className="testimonial-info">
                          <div className="flaticon-quotation quote-icon"></div>
                          <div className="testimonial-text">
                            <p>
                              Phasellus facilisis urna at ultrices egestas.
                              Nulla mi arcu, finibus non lectus non, mollis
                              tempus enim. Curabitur vel ipsum eget augue
                              pharetra tempus ac eget ipsum. Fusce vestibulum
                              leo quis bibendum placerat. Duis porttitor mi at
                              mauris auctor eleifend. Cras sed nibh sem. Proin
                              quis ligula eget purus eleifend euismod. Sed
                              rhoncus nunc vitae diam.
                            </p>
                          </div>
                          <div className="testimonial-detail">
                            <h4 className="testimonial-name">Archie Parker</h4>
                            <span className="testimonial-position text-primary">
                              CEO Founder
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="prev" title="prev"></div>
                      <div className="next" title="next"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="client-area">
                  <svg
                    viewBox="0 0 574 511"
                    className="client-bg aos-item"
                    data-aos="fade-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                  >
                    <path
                      stroke="var(--primary)"
                      strokeWidth="3"
                      fill="none"
                      d="M466.253 161.575c32.408-59.804 26.317-127.495-35.817-124.214-21.983 1.159-42.258 16.216-64.265 17.762-20.248 1.425-39.152-7.801-56.128-17.686-34.373-20.017-65.685-58.278-103.358-16.906-25.654 28.169 3.163 72.215-24.694 97.514-8.698 7.905-22.479 9.509-33.89 10.987-28.345 3.671-50.444 8.129-77.333 21.075-50.333 24.214-63.016 41.712-68.009 72.376-5.411 33.246 18.459 81.167 57.923 86.892 47.337 6.875 62.6-27.975 115.202-20.21 44.397 6.545 37.678 43.589 36.73 76.523-1.791 62.123 48.901 88.979 106.445 67.392 18.747-7.036 54.435-25.45 61.781-46.766 5.929-17.204-8.925-38.223-12.682-54.363-13.218-56.766 52.37-36.554 90.575-32.547 36.51 3.834 98.693 4.263 110.935-52.659 4.2-19.531-24.295-55.633-42.521-58.503-25.786-4.051-73.433-3.538-60.894-26.667z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      fill="var(--rgba-primary-1)"
                      d="M421.378 125.766c-2.044-75.742-45.622-137.651-103.734-99.88-20.562 13.364-31.734 39.18-52.103 52.929-18.739 12.652-42.114 14.28-63.996 14.201-44.308-.167-95.824-19.637-109.124 41.255-9.059 41.463 43.273 67.904 30.49 107.825-3.989 12.47-16.39 21.694-26.574 29.475-25.3 19.327-44.135 35.937-62.865 63.401-35.069 51.394-37.558 75.336-25.296 107.699 13.297 35.087 63.014 68.02 104.272 51.562 49.494-19.732 44.809-61.853 99.879-83.658 46.474-18.414 60.624 21.064 78.052 53.364 32.873 60.926 96.733 58.6 140.221 5.725 14.167-17.228 38.338-54.87 33.553-79.523-3.863-19.899-29.899-31.903-42.513-45.38-44.367-47.4 30.162-64.432 69.25-81.845 37.355-16.637 97.582-50.856 77.688-112.586-6.827-21.182-54.423-40.137-73.603-32.754-27.132 10.453-72.81 37.485-73.597 8.19z"
                    ></path>
                  </svg>
                  <ul className="aos-item">
                    <li data-member="1" className="swiper-pagination-2">
                      <a
                        className="dzclient1"
                        href="https://visva.dexignzone.com/react/demo"
                      >
                        <img
                          src="/img/c1.jpg"
                          alt=""
                          // style="
                          //   opacity: 0;
                          //   transform: scale(0) translateZ(0px);
                          // "
                        />
                      </a>
                    </li>
                    <li data-member="2" className="swiper-pagination-2">
                      <a
                        className="dzclient2"
                        href="https://visva.dexignzone.com/react/demo"
                      >
                        <img
                          src="/img/c2.jpg"
                          alt=""
                          // style="
                          //   opacity: 0;
                          //   transform: scale(0) translateZ(0px);
                          // "
                        />
                      </a>
                    </li>
                    <li data-member="3" className="swiper-pagination-2">
                      <a
                        className="dzclient3"
                        href="https://visva.dexignzone.com/react/demo"
                      >
                        <img
                          src="/img/c3.jpg"
                          alt=""
                          // style="
                          //   opacity: 0;
                          //   transform: scale(0) translateZ(0px);
                          // "
                        />
                      </a>
                    </li>
                    <li data-member="4" className="swiper-pagination-2">
                      <a
                        className="dzclient4"
                        href="https://visva.dexignzone.com/react/demo"
                      >
                        <img
                          src="/img/c4.jpg"
                          alt=""
                          // style="
                          //   opacity: 0;
                          //   transform: scale(0) translateZ(0px);
                          // "
                        />
                      </a>
                    </li>
                    <li data-member="5" className="swiper-pagination-2">
                      <a
                        className="dzclient5"
                        href="https://visva.dexignzone.com/react/demo"
                      >
                        <img
                          src="/img/c6.jpg"
                          alt=""
                          // style="
                          //   opacity: 0;
                          //   transform: scale(0) translateZ(0px);
                          // "
                        />
                      </a>
                    </li>
                    <li data-member="6" className="swiper-pagination-2">
                      <a
                        className="dzclient6"
                        href="https://visva.dexignzone.com/react/demo"
                      >
                        <img
                          src="/img/c7.jpg"
                          alt=""
                          // style="
                          //   opacity: 0;
                          //   transform: scale(0) translateZ(0px);
                          // "
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="navbar">
          <div className="slider">
            <div className="slides-container">
              {slidesWithDuplicates.map((slide, index) => (
                <div key={index} className="slide">
                  {/* Slide content here */}
                  <div className="card dz-team style-1">
                    <div className="card-media">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="card-body">
                      <h5 className="dz-name m-b5">{slide.name}</h5>
                      <span className="dz-position">{slide.position}</span>
                      <ul class="dz-social">
                        <li>
                          <a
                            href="https://visva.dexignzone.com/react/demo"
                            
                          >
                            <img src="/icon/sky.png"></img>
                          </a>
                        </li>
                        <li>

                        <a
                            href="https://visva.dexignzone.com/react/demo"
                            
                          >
                            <img src="/icon/FB.png"></img>
                          </a>
                        </li>
                        <li>
                         
                        <a
                            href="https://visva.dexignzone.com/react/demo"
                            
                          >
                            <img src="/icon/INSTA.png"></img>
                          </a>
                        </li>
                        <li>
                         
                        <a
                            href="https://visva.dexignzone.com/react/demo"
                            
                          >
                            <img src="/icon/google.png"></img>
                          </a>
                        </li>
                        <li>
                        
                        <a
                            href="https://visva.dexignzone.com/react/demo"
                            
                          >
                            <img src="/icon/TWIT.png"></img>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section
          className="section-full content-inner overflow-hidden"
          // style="
          //   background-image: url('/react/demo/static/media/bg1.9ba9a44e9faba9e73473.png');
          //   background-position: left top;
          //   background-size: 100%;
          //   background-repeat: no-repeat;
          // "
        >
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 m-b30 aos-item"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
                // style="
                //   opacity: 0;
                //   transform: translateX(-100%) translateZ(0px);
                // "
              >
                <div className="twentytwenty-img-area">
                  <div className="twentytwenty-container">
                    <img src="/img/droom.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 aos-item"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title text-primary">FAQ</h6>
                  <h2 className="title">Get Every Answer From Here</h2>
                </div>
                <div className="dz-accordion accordion-sm accordion">
                  <div
                  // style="
                  //   opacity: 0;
                  //   transform: translateX(100%) translateZ(0px);
                  // "
                  >
                    <div className="accordion-item">
                      <h2
                        id="headingOne"
                        className="accordion-header accordion-header"
                      >
                        <button
                          type="button"
                          aria-expanded="true"
                          className="accordion-button"
                        >
                          Sed vehicula ullamcorper odio ac pellentesque ?
                          <span className="toggle-close"></span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                      >
                        <div className="accordion-collapse collapse show">
                          <div className="accordion-body">
                            <p className="m-b0">
                              Quisque ac quam nibh. Nullam nunc tortor,
                              malesuada sed est eu, ultricies egestas risus.
                              Interdum et malesuada fames ac ante ipsum primis
                              in faucibus. Quisque pulvinar enim urna
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                  // style="
                  //   opacity: 0;
                  //   transform: translateX(100%) translateZ(0px);
                  // "
                  >
                    <div className="accordion-item">
                      <h2
                        id="headingOne"
                        className="accordion-header accordion-header"
                      >
                        <button
                          type="button"
                          aria-expanded="false"
                          className="accordion-button collapsed"
                        >
                          Sed vehicula ullamcorper odio ac pellentesque ?
                          <span className="toggle-close"></span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                      >
                        <div className="accordion-collapse collapse">
                          <div className="accordion-body">
                            <p className="m-b0">
                              Quisque ac quam nibh. Nullam nunc tortor,
                              malesuada sed est eu, ultricies egestas risus.
                              Interdum et malesuada fames ac ante ipsum primis
                              in faucibus. Quisque pulvinar enim urna
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                  // style="
                  //   opacity: 0;
                  //   transform: translateX(100%) translateZ(0px);
                  // "
                  >
                    <div className="accordion-item">
                      <h2
                        id="headingOne"
                        className="accordion-header accordion-header"
                      >
                        <button
                          type="button"
                          aria-expanded="false"
                          className="accordion-button collapsed"
                        >
                          Sed vehicula ullamcorper odio ac pellentesque ?
                          <span className="toggle-close"></span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                      >
                        <div className="accordion-collapse collapse">
                          <div className="accordion-body">
                            <p className="m-b0">
                              Quisque ac quam nibh. Nullam nunc tortor,
                              malesuada sed est eu, ultricies egestas risus.
                              Interdum et malesuada fames ac ante ipsum primis
                              in faucibus. Quisque pulvinar enim urna
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-full dz-content-bx style-2 text-white">
          <div
            className="dz-content-inner bg-dark"
            // style="
            //   background-image: url('/react/demo/static/media/bg2-1.7fa3372efd3cb3839703.png');
            //   background-position: center center;
            // "
          >
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6 content-inner-1 aos-item"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  // style="
                  //   opacity: 0;
                  //   transform: translateY(20%) translateZ(0px);
                  // "
                >
                  <div className="section-head style-1">
                    <h6 className="sub-title text-primary">OUR STRATEGY</h6>
                    <h2 className="title text-white m-b20">
                      Distinctive Interior For Special Ideas
                    </h2>
                    <p>
                      Fusce accumsan felis sed purus sollicitudin posuere.
                      Vivamus id pharetra augue. Phasellus molestie ornare lacus
                      mattis iaculis. Nulla dui dui, convallis et venenatis id,
                      condimentum ut justo.
                    </p>
                  </div>
                  <div className="progress-bx">
                    <div className="progress-info">
                      <h4 className="title text-white">Architecture</h4>
                      <h4 className="progress-value text-white">90%</h4>
                    </div>
                    <div className="progress">
                      <div className="progress-bar"></div>
                    </div>
                  </div>
                  <div className="progress-bx style-2 m-b40">
                    <div className="progress-info">
                      <h4 className="title text-white">3D Design</h4>
                      <h4 className="progress-value text-white">80%</h4>
                    </div>
                    <div className="progress">
                      <div className="progress-bar"></div>
                    </div>
                  </div>
                  <div className="progress-bx style-2">
                    <div className="progress-info">
                      <h4 className="title text-white">Interior Design</h4>
                      <h4 className="progress-value text-white">95%</h4>
                    </div>
                    <div className="progress">
                      <div className="progress-bar"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 aos-item"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div className="content-media right">
                    <img
                      src="/img/sview.jpg"
                      alt=""
                      // style="
                      //   opacity: 0;
                      //   transform: translateY(20%) translateZ(0px);
                      // "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-inner-1 bg-gray line-img"
          // style="
          //   background-image: url('images/background/bg2.png');
          //   background-position: right bottom;
          //   background-size: 100%;
          //   background-repeat: no-repeat;
          // "
        >
          <div className="container">
            <div className="section-head style-1 text-center">
              <h6 className="sub-title text-primary">OUR BLOG</h6>
              <h2 className="title">Latest News Feed</h2>
            </div>
            <div className="blog-area">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="dz-card blog-grid style-1 aos-item h-100 overlay-post"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                    // style="
                    //   opacity: 0;
                    //   transform: translateY(20%) translateZ(0px);
                    // "
                  >
                    <div className="dz-media">
                      <a href="https://visva.dexignzone.com/react/demo/blog-details">
                        <img src="/img/broom.jpg" alt="" />
                      </a>
                    </div>
                    <div className="dz-info">
                      <div className="dz-meta">
                        <ul>
                          <li className="post-date">
                            <strong>20</strong>
                            <span>March</span>
                          </li>
                          <li className="post-category">
                            <a href="https://visva.dexignzone.com/react/demo">
                              Architectural
                            </a>
                          </li>
                          <li className="post-user">
                            By
                            <a href="https://visva.dexignzone.com/react/demo">
                              John Doe
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5 className="dz-title">
                        <a href="https://visva.dexignzone.com/react/demo/blog-details">
                          Sed lacinia pulvinar odio, nec tempus augue.
                        </a>
                      </h5>
                      <div className="read-more">
                        <a
                          className="btn btn-primary btn-rounded btn-sm hover-icon"
                          href="https://visva.dexignzone.com/react/demo/blog-details"
                        >
                          <span>Read More</span>
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  // style="
                  //   opacity: 0;
                  //   transform: translateY(20%) translateZ(0px);
                  // "
                >
                  <div
                    className="dz-card blog-grid style-1 aos-item h-100"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="800"
                  >
                    <div className="dz-media">
                      <a href="https://visva.dexignzone.com/react/demo/blog-details">
                        <img src="/img/bathr.jpg" alt="" />
                      </a>
                    </div>
                    <div className="dz-info">
                      <div className="dz-meta">
                        <ul>
                          <li className="post-date">
                            <strong>05</strong>
                            <span>March</span>
                          </li>
                          <li className="post-category">
                            <a href="https://visva.dexignzone.com/react/demo">
                              Architectural
                            </a>
                          </li>
                          <li className="post-user">
                            By
                            <a href="https://visva.dexignzone.com/react/demo">
                              John Doe
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5 className="dz-title">
                        <a href="https://visva.dexignzone.com/react/demo/blog-details">
                          Aenean sit amet ex nec nisl consectetur iaculis.
                        </a>
                      </h5>
                      <div className="read-more">
                        <a
                          className="btn btn-primary btn-rounded btn-sm hover-icon"
                          href="https://visva.dexignzone.com/react/demo/blog-details"
                        >
                          <span>Read More</span>
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  // style="
                  //   opacity: 0;
                  //   transform: translateY(20%) translateZ(0px);
                  // "
                >
                  <div
                    className="dz-card blog-grid style-1 aos-item h-100"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="800"
                  >
                    <div className="dz-media">
                      <a href="https://visva.dexignzone.com/react/demo/blog-details">
                        <img src="/img/osofa.jpg" alt="" />
                      </a>
                    </div>
                    <div className="dz-info">
                      <div className="dz-meta">
                        <ul>
                          <li className="post-date">
                            <strong>05</strong>
                            <span>March</span>
                          </li>
                          <li className="post-category">
                            <a href="https://visva.dexignzone.com/react/demo">
                              Architectural
                            </a>
                          </li>
                          <li className="post-user">
                            By
                            <a href="https://visva.dexignzone.com/react/demo">
                              John Doe
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h5 className="dz-title">
                        <a href="https://visva.dexignzone.com/react/demo/blog-details">
                          Aenean sit amet ex nec nisl consectetur iaculis.
                        </a>
                      </h5>
                      <div className="read-more">
                        <a
                          className="btn btn-primary btn-rounded btn-sm hover-icon"
                          href="https://visva.dexignzone.com/react/demo/blog-details"
                        >
                          <span>Read More</span>
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="site-footer style-1" id="footer">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 aos-item"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div
                className="footer-bg"
                style={{
                  backgroundImage: "url('/img/sview.jpg')",
                }}
              ></div>
            </div>
            <div className="col-lg-7">
              <div className="footer-top">
                <div className="row">
                  <div
                    className="col-md-12 aos-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div className="footer-logo logo-light">
                      <a href="https://visva.dexignzone.com/react/demo">
                        <img src="/img/LOGO.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-md-5 col-sm-6 aos-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                  >
                    <div className="widget widget_services">
                      <h4 className="footer-title">Our Links</h4>
                      <ul>
                        <li>
                          <a href="https://visva.dexignzone.com/react/demo/index">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="https://visva.dexignzone.com/react/demo/about-us">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="https://visva.dexignzone.com/react/demo/services">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="https://visva.dexignzone.com/react/demo/portfolio">
                            Portfolio
                          </a>
                        </li>
                        <li>
                          <a href="https://visva.dexignzone.com/react/demo/blog-grid">
                            Blogs
                          </a>
                        </li>
                        <li>
                          <a href="https://visva.dexignzone.com/react/demo/contact-us">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="https://visva.dexignzone.com/react/demo/team">
                            Team
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-md-7 col-sm-6 aos-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                  >
                    <div className="widget widget_about">
                      <h4 className="footer-title">About Us</h4>
                      <p>
                        Nullam nec rutrum eros. Maecenas maximus augue eget
                        libero dictum, vitae tempus erat pretium. Fusce
                        fermentum lacus ut nunc dignissim hendrerit. Quisque sit
                        amet dignissim orci, eget laoreet eros.
                      </p>
                      <ul className="social-list style-1">
                        <li>
                          <a
                            href="https://www.facebook.com/dexignzone/"
                            target="_blank"
                          >
            <img src="/icon/FB.png"></img>                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/dexignzone/"
                            target="_blank"
                          >
            <img src="/icon/UTUBE.png"></img>                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/dexignzones/"
                            target="_blank"
                          >
            <img src="/icon/TWIT.png"></img>                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/@dexignzone1723"
                            target="_blank"
                          >
            <img src="/icon/INSTA.png"></img>                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <span className="copyright-text">
                  Copyright © 2023
                  <a
                    className="text-primary"
                    href="https://dexignzone.com/"
                    target="_blank"
                  >
                    DexignZone
                  </a>
                  All rights reserved.
                </span>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <ul className="footer-link d-inline-block">
                  <li>
                    <a href="https://visva.dexignzone.com/react/demo">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://visva.dexignzone.com/react/demo">
                      Team &amp; Condition
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="dzSwitcher-right" className="styleswitcher">
        <div className="overlay-switch"></div>
        <div className="switcher-btn-bx"></div>
        <div className="styleswitcher-inner">
          <div className="sw-main-title">Theme Setting</div>
          <div className="theme-design row">
            <div className="theme-box col-md-12">
              <h5 className="switcher-title">
                <span>Theme</span>
              </h5>
              <ul val="themeFullColor" className="color-skins theme-panel-save">
                <li className="active">
                  <a
                    className="theme-skin skin-1 theme-color"
                    data-color-theme="skin-1"
                    data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                    data-logo-image="logo1, logoWhite1,logoWhite1"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li>
                  <a
                    className="theme-skin skin-2 theme-color"
                    data-color-theme="skin-2"
                    data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                    data-logo-image="logo2,logoWhite2,logoWhite2"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li>
                  <a
                    className="theme-skin skin-3 theme-color"
                    data-color-theme="skin-3"
                    data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                    data-logo-image="logo3, logoWhite3,logoWhite3"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li>
                  <a
                    className="theme-skin skin-4 theme-color"
                    data-color-theme="skin-4"
                    data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                    data-logo-image="logo4, logoWhite4,logoWhite4"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li>
                  <a
                    className="theme-skin skin-5 theme-color"
                    data-color-theme="skin-5"
                    data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                    data-logo-image="logo5, logoWhite5,logoWhite5"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li>
                  <a
                    className="theme-skin skin-6 theme-color"
                    data-color-theme="skin-6"
                    data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                    data-logo-image="logo6, logoWhite6,logoWhite6"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li>
                  <a
                    className="theme-skin skin-7 theme-color"
                    data-color-theme="skin-7"
                    data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                    data-logo-image="logo7, logoWhite7,logoWhite7"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li>
                  <a
                    className="theme-skin skin-8 theme-color"
                    data-color-theme="skin-8"
                    data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header-nav .logo-dark img"
                    data-logo-image="logo8, logoWhite8,logoWhite8"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="theme-design row theme-layout-wrapper">
            <div className="theme-box col-md-12">
              <h5 className="switcher-title">
                <span>Theme Layout</span>
              </h5>
              <ul val="layout" className="layout layout-view theme-panel-save">
                <li className="wide-layout active layout-theme-change">
                  <a
                    dir="wide-layout"
                    href="https://visva.dexignzone.com/react/demo"
                  >
                    <div></div>
                    <span>Wide</span>
                  </a>
                </li>
                <li className="boxed layout-theme-change">
                  <a dir="boxed" href="https://visva.dexignzone.com/react/demo">
                    <div>
                      <span></span>
                    </div>
                    <span>Boxed</span>
                  </a>
                </li>
                <li className="frame layout-theme-change">
                  <a dir="frame" href="https://visva.dexignzone.com/react/demo">
                    <div>
                      <span></span>
                    </div>
                    <span>Frame</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="theme-design row theme-view-wrapper">
            <div className="col-xl-6 theme-box">
              <h5 className="switcher-title">
                <span>Header</span>
              </h5>
              <ul
                val="header"
                className="tab-checkbx header-view theme-panel-save"
              >
                <li className="switcher-header-layout-btn header-fixed active">
                  <a
                    dir="sticky-header"
                    href="https://visva.dexignzone.com/react/demo"
                  >
                    Fixed
                  </a>
                </li>
                <li className="switcher-header-layout-btn header-static">
                  <a
                    dir="sticky-no"
                    href="https://visva.dexignzone.com/react/demo"
                  >
                    Static
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="theme-design row mb-0 theme-background-wrapper">
            <div className="col-md-12 theme-box mb-4">
              <h5 className="switcher-title">
                <span>Background Color</span>
              </h5>
              <ul val="bgColor" className="bg-color-switcher theme-panel-save">
                <li className="">
                  <a
                    className="bg-color-1"
                    dir="#a41332"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li className="">
                  <a
                    className="bg-color-2"
                    dir="#57b7c0"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li className="">
                  <a
                    className="bg-color-3"
                    dir="#c6a47e"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li className="">
                  <a
                    className="bg-color-4"
                    dir="#ff1d4d"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li className="">
                  <a
                    className="bg-color-5"
                    dir="#eab248"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li className="">
                  <a
                    className="bg-color-6"
                    dir="#ef9f7e"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li className="">
                  <a
                    className="bg-color-7"
                    dir="#e485da"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
                <li className="">
                  <a
                    className="bg-color-8"
                    dir="#8669d4"
                    href="https://visva.dexignzone.com/react/demo"
                  ></a>
                </li>
              </ul>
            </div>
            <div className="col-md-12 theme-box mb-4">
              <h5 className="switcher-title">
                <span>Background Image</span>
              </h5>
              <ul
                val="bgImage"
                className="background-switcher theme-panel-save"
              >
                <li className="">
                  <img
                    src="Visva%20-%20React%20Architecture%20&amp;%20interior%20Template_files/bg1.dd47aaf0b0e2d8327461.jpg"
                    alt="small1"
                  />
                </li>
                <li className="">
                  <img
                    src="Visva%20-%20React%20Architecture%20&amp;%20interior%20Template_files/bg2.122012a9ac728648a1a3.jpg"
                    alt="small2"
                  />
                </li>
                <li className="">
                  <img
                    src="data:image/jpeg;base64,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AAAHAAgBAQABAQD/4RLWaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAwNyAxLjE0NDEwOSwgMjAxMS8wOS8yMC0xODowOToxMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9IjREQUE5RjBBM0YyMjMxREVBNDExRDJGMzMwN0EwQUFDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY3OURDQzQ2MTVBNEVCMTFCNDQ2RkU4NDM3NUI2MkJEIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjREQUE5RjBBM0YyMjMxREVBNDExRDJGMzMwN0EwQUFDIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTIzVDE0OjU3OjE1KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTIzVDE0OjU3OjE1KzA1OjMwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKDEzLjAyMDExMTAxMi5tLjI1OCAyMDExLzEwLzEyOjIxOjAwOjAwKSAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNC0yM1QxMDoxODozOCswNTozMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE3MEI5ODZBNkU4MkVCMTE5ODhGOEIxMUZEMDA0QjhCIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTExVDE5OjA0OjAxKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6RjY5RENDNDYxNUE0RUIxMUI0NDZGRTg0Mzc1QjYyQkQiIHN0RXZ0OndoZW49IjIwMjEtMDQtMjNUMTQ6NTc6MTUrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKDEzLjAyMDExMTAxMi5tLjI1OCAyMDExLzEwLzEyOjIxOjAwOjAwKSAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNzlEQ0M0NjE1QTRFQjExQjQ0NkZFODQzNzVCNjJCRCIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yM1QxNDo1NzoxNSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMDIwMTExMDEyLm0uMjU4IDIwMTEvMTAvMTI6MjE6MDA6MDApICAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPjAxQTgxQkYxMzRDOTJCOERDQkY3QkEyMEVCQTQ3RERBPC9yZGY6bGk+IDxyZGY6bGk+MDk0MEZENjBCNEIxNDIzQ0EzMUNCMTg0QzhBNUQzQ0M8L3JkZjpsaT4gPHJkZjpsaT4xQzBCNDg0RDM2QkMyNjQyMTBCNDE0NjgxNDdGQjYzNDwvcmRmOmxpPiA8cmRmOmxpPjk4NUZBNDk2M0QwRTJFQTMxRTNCQ0JFNjExODc3QzRBPC9yZGY6bGk+IDxyZGY6bGk+QThDQzA5MjVENDUwMzRBRDBGNzU2QUQ0NzE3M0Y5OUE8L3JkZjpsaT4gPHJkZjpsaT5ENzM3MzM5QjBFRTQzNDM0QUVCN0UxNjdEQzc3OENEQTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyYWJkZGJiMC0zZTMzLTExZTctYjliOC1hNjgwMGFmNzY3ZWU8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjIwY2U1NWU5LTIxZDItNDFiZS04ZmViLTI2ZjRmYmVlNzAzYTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MjM2MjNlOWQtOTY0OC00MWNjLTk5MTYtODJiMzY0ODcwZjYzPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDozMDM3NWQyYS01MDhkLWY2NDItODNiNi0zOTVlZmQyNWI4YTM8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjQ4MTQ4MTJkLWRhOTQtNDAzZS04ZTBlLWFiMDFjYzk5ZDJmZDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NjJjMmU1Y2ItNWM3My00OGUwLTg0NmQtOTBjMzQzZTQzNmEyPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDphMWQ4ODQ3MS0wY2JlLTRmNDItODdjOS0yZWI5Mjg2MTc1M2Y8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOmQ3NzZhYzhiLTI1OTMtNGZjOS1hNTQ5LWM2MGU1NjkwZmZhYTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6ZjVkYWI4ZjAtZjZmNS00Y2I3LTg3OTMtMDZmMjA4MjY3M2EzPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/7gAhQWRvYmUAZEAAAAABAwAQAwIDBgAAAAAAAAAAAAAAAP/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQEBAQEBAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgAKAAoAwERAAIRAQMRAf/EAKAAAAICAwAAAAAAAAAAAAAAAAgJBgcDBQoBAAIDAQEBAAAAAAAAAAAAAAUHAwYIAQQCEAABBQEBAAIDAQAAAAAAAAAFAgMEBgcBCAAUERMJIxEAAQUBAAICAgIDAQAAAAAABAIDBQYHAREIEhMAFSEUMSIXCRIAAgIBBAEDAwMFAQAAAAAAAQIRAyEAMRIEIkFRE2FxMoGRBaGxQlIjM//aAAwDAQECEQMRAAAAXa61bPx5u6q+WNeGc1/ntw6yyIpjP+mF0ekQ7AYXLcWRyasyeLCRe2osFLB9ftIiwR9s7NXIWifYyZhrUYV7e+dWl35qMkg7Q9iVpqlU1ux1sDLf/9oACAECAAEFAJQ18Tw2x3jbzapam2HeOISzzkkFHIIPt/vNPoQtaoikK7/n0wXYGs0dSZFvsgZqQospv66e9fjnjXZcbN3meE5hJprlkhR5jn121qkkFyYwMo8JXy3SFoLEZZBL8rkLv//aAAgBAwABBQAY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"
                    alt="small3"
                  />
                </li>
                <li className="">
                  <img
                    src="Visva%20-%20React%20Architecture%20&amp;%20interior%20Template_files/bg4.9a771b0f7ceeb8d0170f.jpg"
                    alt="small4"
                  />
                </li>
                <li className="">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="small5"
                  />
                </li>
                <li className="">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="small6"
                  />
                </li>
                <li className="">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="small7"
                  />
                </li>
                <li className="">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAoACgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCP4g/s6G0+JXhvxn4XceK9E+IEem+BEsdPm0i4i8P2NhpOsPo3nxamljKsuliysbK7sclL3TbqS+WC5h8PNFd/k2Py6nUoR+rQqUqlHlhGnWVnXatG0akXa/Jdxm3tFxcovV/q2Dxk6Fa1arRxFKvz1HWoyb9gtZNTpzi5xXO1FxWnNK6Ulc8h8SfBjUdD8ZeJdP8AEuhX2kTaPZatfz6Fquj3cWrPdnw7OmgqYL2LS75Yo73UbOP+z4opJ9WF/ZvZi9s4pL8fnOcU8fGhChhuahi5ZhgKNRyahKnh45lQnmUEmpxVV4ClinGf2JQvFxqShE+2wlXD1H7WU416LoVJQ5feVSTw8lRmpXi+SFSUU4KzkpO11Fs+UvEHwtuZmtElh89i/mSptBk0+3llsbVmt7u6e/ie9tb1996l49/FFIuq21vLILkXS+1TjOEZWTU2m77Qm3zOTajy8sXH3FyKN/dm23HlfBUcZyipWcU1/igtErOXNdp6tNyfxQVua55P4k+FaWZuGlRoJNr/AGGbFm0rXcssUPlw2ltH9nhupYlY+aqK01wVkDSG3MYcK000lflu/afF8KTfxN3lG9kleyimtLkzoxabdr/YdktXZJcsVZNxv0V5d0tflPx74IEKzCG3lhjjEgEWSZIYo2OBKZMeS0aw6wUaX9+t7uGYwyxN7mDrvTVPZtvRNvrpbmvent7vL31a8bFUFrZW3S30Svp5WtUWjbUnq9Ef1Ufs5xa94h+NOveBNZ0WT/hCfgVNoUuqXtu+oXeqa14p1vwbHqniK1htUhkNzP4Z0m11LRNF1BJFa6n8dS2UmnfbLQpa/d5mqNfHqpGDpUMNB4ivCnZxqtwcny3TcGoRbUXGLUpJ25ZNH59ks69PLn7Wp7WtXmsPh5zXvQhGSj77TtNc8opy192DvK65iL4teK739o39tbxDb64ln4v8JfBjwP8A2b4os7TTVj8Ma34x8WtLp9hAJbFopdKZ9O8P6x4x0safcr9q1fXdNmU2rW8NyvZ4fZDQz7McZmOZ4CjmOHw1OpJ4fEzjD2uJxEKtJcs/Zzh7Z+0xlSnJOnarRg1Ui5GfFub4jJ8FhMJl2MrYGtXnCarUVzSpUYOFRc8XKLcFCGGpTTVROlVnFwlql4/qHhvwXP4M1L4iaVY3OiWPifxvc6Z4A8Macx1Sz122k1PS/CfhqLTLea7t9bfU/F09rr3jG51Mapqlno3hwvPc6JJNBd3Q9bM+BsgxWDx2MwVWvllaVeUMswMr4mniafNTwuHpp4i1RvF4vnrRq0cVXp0cNUg3TSi4nJgeN84wtfCYfGUaOZUo0lLH4qNsLUoVLTrVZ/uOelahQ5acqdTC0J1K0ZJVG5RkvC/HvwC1BPEd94Vt9HbxJrcukR69qWn6GJ7+WTR7/Wp9D0MPZW9umu3cWsahbXFppyPFPDcySSvA0sMIubr4rOfDfiPLasoYbDQzP2dH6xfLXOvOnSdV0o1J4d04VYylUjJUo06bnU9nP2c5xi2fY5T4icNZhTg8RipZbOpU9ioZlGOHhOooKo4RxCnOhJRjOLnKpWSipw54QlKx+dnxg8FiwN7aC2uvNtZ/mNxaSW5s4rrUZIBcPHcBTFFb3enaW8k1zDdz2Tpp0l451GxksT+fU6kqdTlqOUbXTiouGsY6xd9W2pVFy3jze+klGfMfc1acalO9O0tE1Lm5rKUrX0VrRlGm+a0rNU27yjyn9K37K3h6xsfhVe+KdX8Q/wDCG2Xxv+IPjL4ueKJ7nUby5utO0p55PHMGtXTtc2t6da8M6ZB8KNKuJUMB/s/TtctTO8MEdpZ/oeMqKGCxFebTniuaMLq85xdo0YW1dr+wel4y5J/P81wlHlrYbDRVo4WnBVLNqMZNOVdtu60viLX1jzQul08e+E/wu1Wb4Fv4rtI9e8OeKf2uviPqGv8AhfW52vEuNL8E+Lg8WhSXV1ZXsdxb2/w7+AeiXfjuOS9t4bK31DQPELT3iRXlpex/d5A/7DyCGH/e0cXj4wtiIScOWVdRjGopQbT9lR58VGNaPLzzlFLmaZ8tmy/tXNZ1ny1KGGlNqlKKnzRpNycHFq6Up8tJyg78sU27Jo9U1bwt4Qm8Uyx2t1bRfB79lXwTba7q9/o/9hwQx69f+GZbWy02ewS4htrq4+HfwxtLBdLTQ/sdgfEfj/8AsSYahdxiK/8ATnjFUq4enJUquCy+CfJNpxc/ZuNDW0ov6tQVSrJe5S5Z7P2bR5f1b93WceaniMTJpzStJpzUqumjtUnyU1pKfMr3vK55CNE1/wCHAl12Y3Hh34u/EqPxj8Q9b0260xrW/wDhh4S0Dw3e6etnp9tdxwwTD4WeEm0P4Y+HX0+5g8M3/wAW/EmuahBs/sa4u7XoxGdzweU4/FUcRPC4nE0q83SqSlyYfDUMPKUZ/wDP2EcHhU40oKUqEsXVTVNwm7edRyinis1y/C1KUa1ClWw8PaKMb1KtbERjNap03KvUl7SpPlVaNCmkp88Ip/BPxavLRvh94n1HWrO2v5PDfhTXtXtU8gI76jZWl6+nIt29gPsEFxNdEO9pcWcdsrlZbRmjgnb+U/YJ16VGNmqtaELzbm7TcOZ/HzSn7qXNJSnO3x6tH9Lwqyp051PfXs6c5+7aMW4p2unG3LZvTRLpG6TPffGvxtvPEEGpeB/HHgrxjqfwgN3/AGJ4d17wPa2E9ja6JceH5f7dl197G8S90dVdtXj0u6nlvdThluLCxfQYrW0gZfscPnNevCg8ZG1Om6UpK0HJwhUs3FQtKStJyp8qk+T35QTTpx+brZPBOrDCtRr1PaxtKbVpSjvd+4r8iUuZr3pKHNd3P0T+FHx/+BHirV08S+BfGuraJeeDPh3qdr4H+G13ey67p82q3HmXWr2NxpWrR2PjDTNP1W10Xwt4W8PXNzDoGn6DpGseI1imi0+9vxqH6euJsrzJRq0ZqgqVNKOGcnWgpP3Hyt/vabUVCFPmVOnC7vP2aufntThrNct5qdaMq3PP+LyqnKStdc2vsprmcnNwnKUtNObQ67/hH/B+lW/g/wAN+OPFvhZNKs9WPxQ+KfxX8PeILLWPDfjT4g6p4svdZ8E6PeaXf2tq11ZP8Q7PUfiLquhQ6Rqdponhj4c/DTw3vnfxTKs2mIqUqFKblUpyi5udWtTqRVOpdKUoJ3vNv3aUI+9eEKt01O65VhsROr7KlSqVHFKEYezlzLdKTsmoxvzTlK6TfI0/dsfInjD4i6H45uPiJqN0moeL9f8AGenvo2h6vLLp2iWGgeC9A1O6/wCEQtLzw7LJqN74guTp+o61418Y3aC1i1X4m+NtZ8S2893pPhzwnPbeBmXEGHng8ww1NqvUr4WthITcJQowhVhUptqUo83tKjftGvZrkj7KEoKKjFe9lPDuIp43BYzEWowo16eIdKMlVqzlCUZR52nGCjFxTSjOfNJS9695S/Jv9rjxHH4S8EXNlrmozWk/iGXTbaKy+yyX95rsjeJdIu9aVLe2jm1SKFNIsr2WC0ubW5uLaW4+zWmo3Je3t7f8byf2lfOoUIYZxpYepKcpRnyxowhTnyJwcVCSlUahzU6jvo5UoK8n+qZkoUctnVlVi5VoKMFa8pynOnzbWceWmpSUZJtO9pydkub+Cf7X1xqXhzxfrckiT+GPD+rajb6VrMt4NO1280TSIrrVNU114JItQkbUdQjvINEn0WC60XS44oLoxtLe5lf9Lw/A+c1MNDNcJ7J4fCzm8TRc3GbqRowXs6V5U6VWlSU/auc4upOahyQXK0vzqtx5lMMZHLcfCrTr4mMXSqQh7SHJKpUSnV1c6c6nI48kXKMY3ctWpP6z1X4o/BzxFDbW/jTw54d8M+IYNHfU4NQ1drfSNUubu0/tDzNTXUtPkSw1b7MbL7K8jjU3ZvtUNhKY4LozeXmOV47L41/rmAxOExHvzourhqlCSlCKjywk1BVbyha6k0pSadnt9Blmb5bmXs3l+ZYfF0JKCqU4YiFVWqLm96nK86T5HdJwjJxSlqrM4nXv2qvB0CKugandePri2sxpgt9Ks430ldX02z8M+bqkvi+71JNIl0m+nu9Ut9M0zT7e+1nTk0maLWITfOkzeTh/r9Z89WnOLmop1atSfP7NSrOnDlmudygmnKbfK3UvTvHQ9WccHSuqc4S5b/u4U0o+0tS5pc0ZciUm5KMUuaPIlOz1PnX4iftPfETVoZrDSLzT/A2kXLxiLTvDsa6hq7TyThWjHibWIHuYILrbAsFro2m6NcWsyI8V9POkU476eCTn7SpedSSjGo1aKqpJqMZxXx8rk+V7pu0bKUovjrYlQjJR5YRV2r/ZtZ8yk37qstVe3V3tdfF3xWtvHOh6JqPjnXtFv7aKaa/tbzW/FWoi11e4ubJLmeSG/XVZrnxc9rJPELS31OXTJtEhvLiziudSsrdmmi+ly/Jq1SOkKWGgpctqzjRc5Lm5lCk7TqSiotzaj7vVpuN/l8fnmGpNNzq4mUlzf7PGVeMYvl5XOqv3cIu6cE5e99mLAP/Z"
                    alt="small8"
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-12 theme-box">
              <h5 className="switcher-title">
                <span>Background Pattern</span>
              </h5>
              <ul val="bgPatten" className="pattern-switcher theme-panel-save">
                <li className="">
                  <img
                    src="data:image/jpeg;base64,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dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iRjM2RDk3NjcxRDgxRjlDODlDMDQ1QUI1NzY5Q0U4QzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjU0NUM3NEJGQ0EzRUIxMUI0NDZGRTg0Mzc1QjYyQkQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iRjM2RDk3NjcxRDgxRjlDODlDMDQ1QUI1NzY5Q0U4QzYiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMjNUMTM6NTI6MTQrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMjNUMTM6NTI6MTQrMDU6MzAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMDIwMTExMDEyLm0uMjU4IDIwMTEvMTAvMTI6MjE6MDA6MDApICAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTIzVDEwOjE4OjM4KzA1OjMwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDE0ODY1QTc3MTgyRUIxMTk4OEY4QjExRkQwMDRCOEIiIHN0RXZ0OndoZW49IjIwMjEtMDMtMTFUMTk6Mjk6MzcrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKDEzLjAyMDExMTAxMi5tLjI1OCAyMDExLzEwLzEyOjIxOjAwOjAwKSAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTQ1Qzc0QkZDQTNFQjExQjQ0NkZFODQzNzVCNjJCRCIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yM1QxMzo1MjoxNCswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMDIwMTExMDEyLm0uMjU4IDIwMTEvMTAvMTI6MjE6MDA6MDApICAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPjQ5NjhEMTY4QjlDOTJBMUU4RjZFMEQwNDAzQjY2MTJDPC9yZGY6bGk+IDxyZGY6bGk+OTIwQkJCQzAzQzVEMzM0RkM5M0MwQ0E0MTFCRjgxMEE8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjFDMEI5ODZBNkU4MkVCMTE5ODhGOEIxMUZEMDA0QjhCPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/7gAOQWRvYmUAZEAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQEBAQECAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD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"
                    alt="pattern1"
                  />
                </li>
                <li className="">
                  <img
                    src="data:image/jpeg;base64,/9j/4QXQRXhpZgAATU0AKgAAAAgADAEAAAMAAAABADIAAAEBAAMAAAABADIAAAECAAMAAAADAAAAngEGAAMAAAABAAIAAAESAAMAAAABAAEAAAEVAAMAAAABAAMAAAEaAAUAAAABAAAApAEbAAUAAAABAAAArAEoAAMAAAABAAIAAAExAAIAAABIAAAAtAEyAAIAAAAUAAAA/IdpAAQAAAABAAABEAAAAUgACAAIAAgACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMDIwMTExMDEyLm0uMjU4IDIwMTEvMTAvMTI6MjE6MDA6MDApICAoV2luZG93cykAMjAyMTowNDoyMyAxMzo1MjoyNAAABJAAAAcAAAAEMDIyMaABAAMAAAAB//8AAKACAAQAAAABAAAAMqADAAQAAAABAAAAMgAAAAAAAAAGAQMAAwAAAAEABgAAARoABQAAAAEAAAGWARsABQAAAAEAAAGeASgAAwAAAAEAAgAAAgEABAAAAAEAAAGmAgIABAAAAAEAAAQiAAAAAAAAAEgAAAABAAAASAAAAAH/2P/tAAxBZG9iZV9DTQAC/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAMgAyAwEiAAIRAQMRAf/dAAQABP/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A7jTj7kzH7nPbtc3YQNxGjpG6aT+c399Mxznlwcw17TtBJHvH+kZH+D/rKY45T1i8f6+CgHl1jq9rm7ACHke127tW787Z/hEg4mxzCwta0AizTa+fpBg+l+jUyJHkkpby7jhQbbW6x9QPvqjeIIA3e5sOPtf/AGVIOcbDWWOAa0EW6bXE8sb+dvZ+cpc6dhwkpUDwSTbj+5+dt+X+l/qJJJf/0O45TMc9znhzC0NMMcSDvEfTaB9D933Jh6m927b6UD04ndP5/qT7dv7iIBKesVHYhR3vL3NLC1rQC2yRD5+k0N+k3YmabC9wc0Bgj03TJdp75b/g9qmYhJSo0hQabfUcHhorEemQTuP73qD6Lf8Ag9qdnqbnb9uzT0omYj3erPt3bvobVP8A1KSlQklp/K4/FJJL/9HuCmAs9QkkelA2tg7g785znfR2fuqLRYLHOc4GsgbGRBafz3b/AM/d/wBBE1hPWL/FRb6oLvULSC79HtBBDfB8/Ss/lJmsc17nF7nB0QwxDIH+D/r/AJ6kTogllooNFm928tNZj02gQ4R9P1Hfn/yEmB4c8vcC0kem0CNojUOd+fucpCElMkkvb+6ePH8f/MUklU//0u47j4IdX0rv5z6Q+n9Hj/tP/wAH+/8A8IvnZJPWP0b4KDf56z+c4b9L+b/6x/wn+mXzqkgl+kAk381fN6SSn6RSXzckkp//2f/tACRQaG90b3Nob3AgMy4wADhCSU0EBgAAAAAABwAIAAAAAQEA/+EQimh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMDcgMS4xNDQxMDksIDIwMTEvMDkvMjAtMTg6MDk6MTAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJGMzZEOTc2NzFEODFGOUM4OUMwNDVBQjU3NjlDRThDNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQkUyMEQwODBEQTRFQjExQjQ0NkZFODQzNzVCNjJCRCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJGMzZEOTc2NzFEODFGOUM4OUMwNDVBQjU3NjlDRThDNiIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0yM1QxMzo1MjoyNCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0yM1QxMzo1MjoyNCswNTozMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDQtMjNUMTA6MTg6MzgrMDU6MzAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMTQ4NjVBNzcxODJFQjExOTg4RjhCMTFGRDAwNEI4QiIgc3RFdnQ6d2hlbj0iMjAyMS0wMy0xMVQxOToyOTozNyswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMDIwMTExMDEyLm0uMjU4IDIwMTEvMTAvMTI6MjE6MDA6MDApICAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkVBRTIwRDA4MERBNEVCMTFCNDQ2RkU4NDM3NUI2MkJEIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTIzVDEzOjUyOjI0KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6RUJFMjBEMDgwREE0RUIxMUI0NDZGRTg0Mzc1QjYyQkQiIHN0RXZ0OndoZW49IjIwMjEtMDQtMjNUMTM6NTI6MjQrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKDEzLjAyMDExMTAxMi5tLjI1OCAyMDExLzEwLzEyOjIxOjAwOjAwKSAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT4xMTI5NUIwRDk1MTk5RUI5NTMxQUE1NkFGMDFDN0VERDwvcmRmOmxpPiA8cmRmOmxpPjQ5NjhEMTY4QjlDOTJBMUU4RjZFMEQwNDAzQjY2MTJDPC9yZGY6bGk+IDxyZGY6bGk+OTIwQkJCQzAzQzVEMzM0RkM5M0MwQ0E0MTFCRjgxMEE8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6OWJiNmFjYmEtOTI5Mi1lZjRlLWI5MGEtZWEzMjdkODQ2MTdmPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDoxQzBCOTg2QTZFODJFQjExOTg4RjhCMTFGRDAwNEI4QjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4ADkFkb2JlAGRAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQEBAQEBAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAMgAyAwERAAIRAQMRAf/dAAQAB//EAaIAAAAGAgMBAAAAAAAAAAAAAAcIBgUECQMKAgEACwEAAAYDAQEBAAAAAAAAAAAABgUEAwcCCAEJAAoLEAACAQMEAQMDAgMDAwIGCXUBAgMEEQUSBiEHEyIACDEUQTIjFQlRQhZhJDMXUnGBGGKRJUOhsfAmNHIKGcHRNSfhUzaC8ZKiRFRzRUY3R2MoVVZXGrLC0uLyZIN0k4Rlo7PD0+MpOGbzdSo5OkhJSlhZWmdoaWp2d3h5eoWGh4iJipSVlpeYmZqkpaanqKmqtLW2t7i5usTFxsfIycrU1dbX2Nna5OXm5+jp6vT19vf4+foRAAIBAwIEBAMFBAQEBgYFbQECAxEEIRIFMQYAIhNBUQcyYRRxCEKBI5EVUqFiFjMJsSTB0UNy8BfhgjQlklMYY0TxorImNRlUNkVkJwpzg5NGdMLS4vJVZXVWN4SFo7PD0+PzKRqUpLTE1OT0laW1xdXl9ShH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"
                    alt="pattern2"
                  />
                </li>
                <li className="">
                  <img
                    src="Visva%20-%20React%20Architecture%20&amp;%20interior%20Template_files/pt3.b2e4a9343e6acbe491fd.jpg"
                    alt="pattern3"
                  />
                </li>
                <li className="">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="pattern4"
                  />
                </li>
                <li className="">
                  <img
                    src="data:image/jpeg;base64,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IiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJGMzZEOTc2NzFEODFGOUM4OUMwNDVBQjU3NjlDRThDNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQkM0Q0ExQTcyODJFQjExOTg4RjhCMTFGRDAwNEI4QiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJGMzZEOTc2NzFEODFGOUM4OUMwNDVBQjU3NjlDRThDNiIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wMy0wMVQxNjoxNToyMSswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDMtMTFUMTk6MzA6MTUrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDMtMTFUMTk6MzA6MTUrMDU6MzAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNjQ4NjVBNzcxODJFQjExOTg4RjhCMTFGRDAwNEI4QiIgc3RFdnQ6d2hlbj0iMjAyMS0wMy0xMVQxOTozMDoxNSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMDIwMTExMDEyLm0uMjU4IDIwMTEvMTAvMTI6MjE6MDA6MDApICAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBCQzRDQTFBNzI4MkVCMTE5ODhGOEIxMUZEMDA0QjhCIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTExVDE5OjMwOjE1KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+NkFCNUUzQ0I4RDA3NjhBMEQ0QzMyRDY0QjQ4MzgxMDA8L3JkZjpsaT4gPHJkZjpsaT42RTQ1NTc3RjFDMTkyM0RBOUZBQTg0RjNBOUFCRkU2RDwvcmRmOmxpPiA8cmRmOmxpPjg0NEZGRjU2MDg3RjYwRURDMzE4NERERTJFQkIyMjQyPC9yZGY6bGk+IDxyZGY6bGk+OTIwQkJCQzAzQzVEMzM0RkM5M0MwQ0E0MTFCRjgxMEE8L3JkZjpsaT4gPHJkZjpsaT5FNkU3QjRCQjIzMkNDOEJFNzNGOUQ2MjI5QzUyQUY0QTwvcmRmOmxpPiA8cmRmOmxpPkZBMjFFQ0QxNjA3ODg3NzY5OUEyQUI0RDAzMDRCNTk4PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDoxQzBCOTg2QTZFODJFQjExOTg4RjhCMTFGRDAwNEI4QjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MUUwQjk4NkE2RTgyRUIxMTk4OEY4QjExRkQwMDRCOEI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjlDNkJFOEQ1NzA4MkVCMTE5ODhGOEIxMUZEMDA0QjhCPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpBNDZCRThENTcwODJFQjExOTg4RjhCMTFGRDAwNEI4QjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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"
                    alt="pattern5"
                  />
                </li>
                <li className="">
                  <img
                    src="data:image/jpeg;base64,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L+StGvn/ALVf2uF83JJKfpI/Td/S+e30f7Ko5v8Ayhgf0/m3+b/qt+l/JXz2kkl+lP8A2JSXzWkkp//Z/+0AJFBob3Rvc2hvcCAzLjAAOEJJTQQGAAAAAAAHAAgAAAABAQD/4RC8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAwNyAxLjE0NDEwOSwgMjAxMS8wOS8yMC0xODowOToxMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9IkYzNkQ5NzY3MUQ4MUY5Qzg5QzA0NUFCNTc2OUNFOEM2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVERTIwRDA4MERBNEVCMTFCNDQ2RkU4NDM3NUI2MkJEIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IkYzNkQ5NzY3MUQ4MUY5Qzg5QzA0NUFCNTc2OUNFOEM2IiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTIzVDEzOjUyOjM1KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTIzVDEzOjUyOjM1KzA1OjMwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKDEzLjAyMDExMTAxMi5tLjI1OCAyMDExLzEwLzEyOjIxOjAwOjAwKSAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNC0yM1QxMDoxODozOCswNTozMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxNDg2NUE3NzE4MkVCMTE5ODhGOEIxMUZEMDA0QjhCIiBzdEV2dDp3aGVuPSIyMDIxLTAzLTExVDE5OjI5OjM3KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6RUNFMjBEMDgwREE0RUIxMUI0NDZGRTg0Mzc1QjYyQkQiIHN0RXZ0OndoZW49IjIwMjEtMDQtMjNUMTM6NTI6MzUrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKDEzLjAyMDExMTAxMi5tLjI1OCAyMDExLzEwLzEyOjIxOjAwOjAwKSAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpFREUyMEQwODBEQTRFQjExQjQ0NkZFODQzNzVCNjJCRCIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0yM1QxMzo1MjozNSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMDIwMTExMDEyLm0uMjU4IDIwMTEvMTAvMTI6MjE6MDA6MDApICAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPjExMjk1QjBEOTUxOTlFQjk1MzFBQTU2QUYwMUM3RUREPC9yZGY6bGk+IDxyZGY6bGk+NDk2OEQxNjhCOUM5MkExRThGNkUwRDA0MDNCNjYxMkM8L3JkZjpsaT4gPHJkZjpsaT43OTE1MTNCRjA2QjYyQUMyNjNDRDEwODIyNDU5MDc4ODwvcmRmOmxpPiA8cmRmOmxpPjkyMEJCQkMwM0M1RDMzNEZDOTNDMENBNDExQkY4MTBBPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjliYjZhY2JhLTkyOTItZWY0ZS1iOTBhLWVhMzI3ZDg0NjE3ZjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MUMwQjk4NkE2RTgyRUIxMTk4OEY4QjExRkQwMDRCOEI8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/uAA5BZG9iZQBkQAAAAAH/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAQEBAQICAQICAwMDAwMDAwMDAwMDAwMD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"
                    alt="pattern6"
                  />
                </li>
                <li className="">
                  <img
                    src="data:image/jpeg;base64,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Oi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJGMzZEOTc2NzFEODFGOUM4OUMwNDVBQjU3NjlDRThDNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkUyMEQwODBEQTRFQjExQjQ0NkZFODQzNzVCNjJCRCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJGMzZEOTc2NzFEODFGOUM4OUMwNDVBQjU3NjlDRThDNiIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0yM1QxMzo1Mjo0NSswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0yM1QxMzo1Mjo0NSswNTozMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDQtMjNUMTA6MTg6MzgrMDU6MzAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMTQ4NjVBNzcxODJFQjExOTg4RjhCMTFGRDAwNEI4QiIgc3RFdnQ6d2hlbj0iMjAyMS0wMy0xMVQxOToyOTozNyswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMDIwMTExMDEyLm0uMjU4IDIwMTEvMTAvMTI6MjE6MDA6MDApICAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkVFRTIwRDA4MERBNEVCMTFCNDQ2RkU4NDM3NUI2MkJEIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTIzVDEzOjUyOjQ1KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2ICgxMy4wMjAxMTEwMTIubS4yNTggMjAxMS8xMC8xMjoyMTowMDowMCkgIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6RUZFMjBEMDgwREE0RUIxMUI0NDZGRTg0Mzc1QjYyQkQiIHN0RXZ0OndoZW49IjIwMjEtMDQtMjNUMTM6NTI6NDUrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKDEzLjAyMDExMTAxMi5tLjI1OCAyMDExLzEwLzEyOjIxOjAwOjAwKSAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT4xMTI5NUIwRDk1MTk5RUI5NTMxQUE1NkFGMDFDN0VERDwvcmRmOmxpPiA8cmRmOmxpPjQ5NjhEMTY4QjlDOTJBMUU4RjZFMEQwNDAzQjY2MTJDPC9yZGY6bGk+IDxyZGY6bGk+NUE4REFERTU3RTYwMDhCRUQ0RDhCQjlDNTkxMzk0RTc8L3JkZjpsaT4gPHJkZjpsaT43OTE1MTNCRjA2QjYyQUMyNjNDRDEwODIyNDU5MDc4ODwvcmRmOmxpPiA8cmRmOmxpPjkyMEJCQkMwM0M1RDMzNEZDOTNDMENBNDExQkY4MTBBPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjliYjZhY2JhLTkyOTItZWY0ZS1iOTBhLWVhMzI3ZDg0NjE3ZjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MUMwQjk4NkE2RTgyRUIxMTk4OEY4QjExRkQwMDRCOEI8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/uAA5BZG9iZQBkQAAAAAH/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAQEBAQICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//AABEIADIAMgMBEQACEQEDEQH/3QAEAAf/xAGiAAAABgIDAQAAAAAAAAAAAAAHCAYFBAkDCgIBAAsBAAAGAwEBAQAAAAAAAAAAAAYFBAMHAggBCQAKCxAAAgEDBAEDAwIDAwMCBgl1AQIDBBEFEgYhBxMiAAgxFEEyIxUJUUIWYSQzF1JxgRhikSVDobHwJjRyChnB0TUn4VM2gvGSokRUc0VGN0djKFVWVxqywtLi8mSDdJOEZaOzw9PjKThm83UqOTpISUpYWVpnaGlqdnd4eXqFhoeIiYqUlZaXmJmapKWmp6ipqrS1tre4ubrExcbHyMnK1NXW19jZ2uTl5ufo6er09fb3+Pn6EQACAQMCBAQDBQQEBAYGBW0BAgMRBCESBTEGACITQVEHMmEUcQhCgSORFVKhYhYzCbEkwdFDcvAX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"
                    alt="pattern7"
                  />
                </li>
                <li className="">
                  <img
                    src="Visva%20-%20React%20Architecture%20&amp;%20interior%20Template_files/pt8.1c4d168dd72ac9a08ce4.jpg"
                    alt="pattern8"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
