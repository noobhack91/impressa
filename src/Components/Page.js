import React, { useState, useEffect } from "react";
import "../css/history.css"; // Import the CSS file
import AOS from "aos"; // Import the AOS library
import "aos/dist/aos.css"; // Import the AOS CSS file

const Pages = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const isAccordionActive = (index) => activeAccordion === index;

  const sectionStyle = {
    backgroundImage: 'url("../../public/img/bg2.jpg")',
    backgroundPosition: "right bottom",
    backgroundSize: "50%",
    backgroundRepeat: "no-repeat",
  };

  const yearExpStyle = {
    opacity: 0,
    transform: "translateY(100%) translateZ(0px)",
  };

  const textBlockStyle = {
    opacity: 1, // Change opacity from 0 to 1
    transform: "none", // Change transform value to "none"
  };

  const accordionItemStyle = {
    opacity: 1, // Change opacity from 0 to 1
    transform: "none", // Change transform value to "none"
  };
  const sectionStye = {
    backgroundImage: `url('/img/bg2.png')`,
    backgroundPosition: "right bottom",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    // position: "absolute",
    marginLeft:"200px"
  };
  const h2Style = {
    opacity: 0,
    transform: "translateY(100%) translateZ(0px)",
  };
  return (
    <div className="container">
      <section
        className="section-full content-inner about-bx2"
        style={sectionStye}
      >
        
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="dz-media">
                <div className="img1 aos-item" data-aos="fade-up">
                  <img src="/img/building.jpg"  alt="" />
                </div>
                <div className="img2 aos-item" data-aos="fade-up">
                  <img src="/img/sofa.jpg" alt="" />
                </div>
                <div className="img3 aos-item" data-aos="fade-up">
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
                massa. Nulla facilisi. Fusce ac odio justo. Phasellus a risus in
                libero feugiat aliquam quis nec metus. Sed vulputate bibendum
                nulla, eu sodales magna gravida nec. Integer sit amet
                sollicitudin massa, a blandit lectus. Vivamus lacinia justo non
                congue blandit.
              </p>
              <div className="accordion dz-accordion about-faq" id="aboutFaq">
                <div className="accordion" data-aos="fade-up">
                  <div
                    className={`accordion-item ${
                      isAccordionActive(1) ? "active" : ""
                    }`}
                    
                  >
                    <h2
                      id="flush-headingOne"
                      className="accordion-header accordion-header"
                      onClick={() => handleAccordionClick(1)}
                    >
                      <button
                        type="button"
                        aria-expanded={isAccordionActive(1)}
                        className="accordion-button"
                      >
                        <i className="flaticon-crane" ></i>Construction
                        <span className="toggle-close"></span>
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        isAccordionActive(1) ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        Vivamus sed eleifend diam. Proin vel orci commodo nulla
                        viverra feugiat nec quis neque.
                      </div>
                    </div>
                  </div>
                  <div
                    className={`accordion-item ${
                      isAccordionActive(2) ? "active" : ""
                    }`}
                  >
                    <h2
                      id="flush-headingTwo"
                      className="accordion-header accordion-header"
                      onClick={() => handleAccordionClick(2)}
                    >
                      <button
                        type="button"
                        aria-expanded={isAccordionActive(2)}
                        className="accordion-button collapsed"
                      >
                        <i className="flaticon-interior-design"></i>Architecture
                        <span className="toggle-close"></span>
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        isAccordionActive(2) ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        Vivamus sed eleifend diam. Proin vel orci commodo nulla
                        viverra feugiat nec quis neque.
                      </div>
                    </div>
                  </div>
                  <div
                    className={`accordion-item ${
                      isAccordionActive(3) ? "active" : ""
                    }`}
                  >
                    <h2
                      id="flush-headingThree"
                      className="accordion-header accordion-header"
                      onClick={() => handleAccordionClick(3)}
                    >
                      <button
                        type="button"
                        aria-expanded={isAccordionActive(3)}
                        className="accordion-button collapsed"
                      >
                        <i className="flaticon-blueprint"></i>Interior
                        <span className="toggle-close"></span>
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        isAccordionActive(3) ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">
                        Vivamus sed eleifend diam. Proin vel orci commodo nulla
                        viverra feugiat nec quis neque.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pages;
