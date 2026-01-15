import { Outlet, useNavigate } from "react-router-dom";
import ProductPage from "./ProductPage";
import { images } from "../components/SlideImages";
import { Zoom } from "react-slideshow-image";
import camera from "../assets/images/camerasony.png";
import Award2021 from "../assets/images/Award2021.png";
import Award2022 from "../assets/images/Award2022.png";
import Award2023 from "../assets/images/Award2023.png";
import Award2024 from "../assets/images/Award2024.png";
import userimage from "../assets/images/user.png";
import { ProductContext } from "../context/ProductContext";
import AboutPage from "./AboutPage";
import CardProduct from "../components/CardProduct";
import { useContext, useEffect, useState } from "react";
import DetailProduct from "../components/DetailProduct";
import data from "../data/data";
const HomePage = () => {
  const navigate = useNavigate();
  const { showDetail, setShowDetail } = useContext(ProductContext);
  const [selectedId, setSelectedId] = useState(null);
  const getProductId = (id) => {
    setSelectedId(id);
    setShowDetail(true);
  };
  return (
    <main>
      <section className="container" style={{ transform: "translateY(8rem)" }}>
        <div className="row align-items-center mainHome">
          <div
            className="col-12 col-md-6 text-white"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="fw-bold mb-3 textSony">
              Capture Every Moment with
              <span className="gradient-text ms-2">SONY</span>
            </h1>
            <p className="fs-5">
              Discover cutting-edge <strong>Sony cameras</strong> built for
              performance, clarity, and creativity. Whether you’re a
              professional photographer or a passionate beginner, Sony delivers
              stunning detail, advanced features, and the perfect shot every
              time.
            </p>
            <div>
              <button
                className="btn btnShopNow text-white text-uppercase border-0 mt-3 px-4 py-2 fw-bold"
                onClick={() => navigate("product")}
              >
                Shop now
              </button>
            </div>
          </div>

          <div
            className="col-12 col-md-6 text-center"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <img
              src={camera}
              alt="Sony Camera"
              className="img-fluid imgSony"
              style={{ maxWidth: "80%" }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="aboutSony text-white">
            <h1 className="text-center fw-bold">About Us</h1>
            <p className="text-center m-auto fs-5" style={{ width: "80%" }}>
              Elevate your photography game with our range of professionals
              grade cameras and accessories capture every moment with our
              high-quality cameras and lenses.
            </p>
            <div className="row">
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                data-aos="flip-right"
              >
                <img src={Award2023} className="w-100 imgAboutSony" alt="" />
              </div>
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                data-aos="flip-right"
              >
                <img src={Award2021} className="w-100 imgAboutSony" alt="" />
              </div>
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                data-aos="flip-right"
              >
                <img src={Award2022} className="w-100 imgAboutSony" alt="" />
              </div>
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                data-aos="flip-right"
              >
                <img src={Award2024} className="w-100 imgAboutSony" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>{showDetail && <DetailProduct productId={selectedId} />}</div>
      </section>
      <section>
        <div className="container product">
          <h1 className="text-center text-white fw-bold mb-4">Products</h1>
          <div className="row g-4">
            {data.map(({ image, name, price, id }) => (
              <CardProduct
                key={id}
                image={image}
                name={name}
                price={price}
                getId={getProductId}
                id={id}
              />
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              className="border py-1 px-4 fw-medium rounded-5 bg-transparent text-white btnViewAll"
              onClick={() => navigate("/product")}
            >
              View All <i class="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="Gellery text-white text-center">
            <h1>Moments Captured Perfectly</h1>
            <p className="fs-5">
              Journey through our gallery of amazing photos. See how Sony
              cameras transform ordinary moments into extraordinary memories.
            </p>
          </div>
          <div className="slider">
            <div className="slide-track">
              {images.map((item, index) => (
                <div className="slide" key={index}>
                  <img src={item} alt={`photo-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="container">
          <div className="feedback text-white text-center">
            <h1>Why Customer Love Sony</h1>
            <p className="text-white-50 fs-5">See why our customers rate us.</p>
            <div className="btnFeedback row align-items-center justify-content-between">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <p className="p-2 border fw-medium rounded subBtnFeedback">
                  Price
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <p className="p-2 border fw-medium rounded subBtnFeedback">
                  Quality
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <p className="p-2 border fw-medium rounded subBtnFeedback">
                  Installation
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <p className="p-2 border fw-medium rounded subBtnFeedback">
                  Customer Service
                </p>
              </div>
            </div>
            <div className="row text-white mt-3">
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                data-aos="zoom-in"
              >
                <div className="border p-4 rounded-4 shadow-sm bg-transparent cardFeedback">
                  <div className="text-start text-warning mb-2">
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                  </div>
                  <div className="textFeedback text-start">
                    <p className="fs-5">
                      I was really impressed with how affordable the pricing was
                      compared to other brands. For the same level of quality
                      and features, I would have expected to pay much more. It
                      truly feels like I’m getting premium value without the
                      premium cost.
                    </p>
                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={userimage}
                        className="rounded-circle me-2"
                        width="40"
                        height="40"
                        alt="Customer"
                      />
                      <div>
                        <h6 className="mb-0">Amanda Lee</h6>
                        <small className="text-secondary">
                          Marketing Manager
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                data-aos="zoom-in"
              >
                <div className="border p-4 rounded-4 shadow-sm bg-transparent h-100 cardFeedback">
                  <div className="text-start text-warning mb-2">
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                  </div>
                  <div className="textFeedback text-start">
                    <p className="fs-5">
                      The build quality and performance are absolutely
                      top-notch. Every detail feels thoughtfully designed — from
                      the materials to the overall functionality. After months
                      of use, everything still works like new.
                    </p>
                    <div className="d-flex align-items-center mt-5">
                      <img
                        src={userimage}
                        className="rounded-circle me-2"
                        width="40"
                        height="40"
                        alt="Customer"
                      />
                      <div>
                        <h6 className="mb-0">Daniel Carter</h6>
                        <small className="text-secondary">Photographer</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                data-aos="zoom-in"
              >
                <div className="border p-4 rounded-4 shadow-sm bg-transparent h-100 cardFeedback">
                  <div className="text-start text-warning mb-2">
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                  </div>
                  <div className="textFeedback text-start">
                    <p className="fs-5">
                      The installation process was much easier than I expected.
                      The team provided clear step-by-step instructions, and
                      when I had questions, support responded instantly.
                      Everything worked perfectly from the start.
                    </p>
                    <div className="d-flex align-items-center mt-5">
                      <img
                        src={userimage}
                        className="rounded-circle me-2"
                        width="40"
                        height="40"
                        alt="Customer"
                      />
                      <div>
                        <h6 className="mb-0">Sophia Martinez</h6>
                        <small className="text-secondary">Homeowner</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                data-aos="zoom-in"
              >
                <div className="border p-4 rounded-4 shadow-sm bg-transparent h-100 cardFeedback">
                  <div className="text-start text-warning mb-2">
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                    <i class="fa-solid fa-star me-2"></i>
                  </div>
                  <div className="textFeedback text-start">
                    <p className="fs-5">
                      The customer service experience was outstanding. The team
                      was friendly, patient, and quick to solve any issues. They
                      even followed up after my purchase to make sure everything
                      worked smoothly — truly impressive service.
                    </p>
                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={userimage}
                        className="rounded-circle me-2"
                        width="40"
                        height="40"
                        alt="Customer"
                      />
                      <div>
                        <h6 className="mb-0">Michael Thompson</h6>
                        <small className="text-secondary">IT Consultant</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
