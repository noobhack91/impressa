import React from 'react';
 import '../css/history.css'; // Import your CSS file if needed

const History = () => {
  return (
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
                <h2 className="counter text-primary"><span>784</span></h2>
                <h3 className="m-b0">Project <br />Completed</h3>
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
                <h2 className="counter text-primary"><span>987</span></h2>
                <h3 className="m-b0">Client <br />Satisfaction</h3>
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
                <h2 className="counter text-primary"><span>874</span></h2>
                <h3 className="m-b0">Cup Of <br />Coffee Meet</h3>
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
                <h2 className="counter text-primary"><span>954</span></h2>
                <h3 className="m-b0">Awards <br />International</h3>
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
  );
};

export default History;
