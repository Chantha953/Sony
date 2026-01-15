import React from "react";
import aboutCamera from "../assets/images/aboutCamera.png";
import userimage from "../assets/images/user.png";
import {
  faCameraRetro,
  faScrewdriverWrench,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AboutPage = () => {
  return (
    <div className="container my-5 text-white aboutPage">
      <section className="text-center mb-5">
        <h1 className="text-uppercase gradient-text">About</h1>
        <p className="text-white fs-5">
          We bring the world of photography closer to you.
        </p>
      </section>
      <section className="row mb-4 g-4">
        <div
          className="col-md-6"
        >
          <div className="p-4 border bg-blur rounded-4 shadow-sm h-100 m-auto d-flex justify-content-center align-items-center" data-aos = "zoom-in">
            <img src={aboutCamera} alt="Camera Store" className="img-fluid" />
          </div>
        </div>
        <div
          className="col-md-6"
        >
          <div className="p-4 border bg-blur rounded-4 shadow-sm h-100" data-aos = "zoom-in">
            <p className="fs-4">
            At Camera Store, we bring the joy of photography to everyone —
            offering top-quality cameras, lenses, and accessories from brands
            like Sony, Canon, Nikon, and Fujifilm.
          </p>
          <p className="fs-4">
            Our mission is to empower all creators, from beginners to
            professionals, with the right tools to capture unforgettable
            moments.
          </p>
          <p className="fs-4">
            More than a store — we’re your trusted partner in every photography
            journey.
          </p>
          </div>
        </div>
      </section>
      <section className="row text-center mb-5 g-4">
        <div
          className="col-md-6"
          data-aos="zoom-in"
        >
          <div className="p-4 border bg-blur rounded-4 shadow-sm h-100">
            <h2 className="text-white mb-3">Our Mission</h2>
            <p>
              To empower creators by providing them with the tools and
              technology needed to capture life’s best moments in perfect
              detail.
            </p>
          </div>
        </div>
        <div
          className="col-md-6"
          data-aos="zoom-in"
        >
          <div className="p-4 border bg-blur rounded-4 shadow-sm h-100">
            <h2 className="text-white mb-3">Our Vision</h2>
            <p>
              To become the leading photography store known for quality, trust,
              and innovation in the camera industry.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="text-center mb-5">
        <h2 className="fw-bold text-primary mb-4 fs-1 gradient-text">
          What We Offer
        </h2>
        <div className="row g-4">
          <div
            className="col-md-4"
            data-aos="fade-up"
          >
            <div className="p-4 border bg-blur rounded-4 shadow-sm h-100">
              <FontAwesomeIcon icon={faCameraRetro} className="fs-1 mb-3" />
              <h4>Camera Sales</h4>
              <p>
                Explore the latest models from Sony, Canon, Nikon, and more.
              </p>
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="fade-up"
          >
            <div className="p-4 border bg-blur rounded-4 shadow-sm h-100">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className="fs-1 mb-3"
              />
              <h4>Maintenance</h4>
              <p>
                Professional cleaning and repair services for your equipment.
              </p>
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="p-4 border bg-blur rounded-4 shadow-sm h-100">
              <FontAwesomeIcon icon={faGraduationCap} className="fs-1 mb-3" />
              <h4>Workshops</h4>
              <p>Learn photography skills and camera setup from experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center">
        <h2 className="fw-bold text-white mb-4 fs-1 gradient-text">
          Meet Our Team
        </h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div
              className="border bg-blur p-5 rounded-4" data-aos="zoom-in"
              style={{ height: "500px" }} 
            >
              <img
                src={userimage}
                alt="Team Member"
                className="img-fluid  mb-3 rounded-circle"
                style={{ height: "79%" }}
              />
              <h5>Rey Chantha</h5>
              <p className="text-secondary">Founder & CEO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="border bg-blur p-5 rounded-4" data-aos="zoom-in"
              style={{ height: "500px" }}
            >
              <img
                src={userimage}
                alt="Team Member"
                className="img-fluid  mb-3 rounded-circle"
                style={{ height: "79%"}}
              />
              <h5>Rey Chantha</h5>
              <p className="text-secondary">Marketing Manager</p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="border bg-blur p-5 rounded-4" data-aos="zoom-in"
              style={{ height: "500px" }}
            >
              <img
                src={userimage}
                alt="Team Member"
                className="img-fluid  mb-3 rounded-circle"
                style={{ height: "79%" }}
              />
              <h5>Rey Chantha</h5>
              <p className="text-secondary">Camera Specialist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
