import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { ProductContext } from "../context/ProductContext";
const Header = () => {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {countOrder} = useContext(ProductContext);
  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    setMenuOpen(false);
    return () => clearTimeout(timer);
  }, [location]);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <header
      className="position-fixed top-0"
      style={{ transform: "translateY(20px)", zIndex : "1" }}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo" onClick={() => navigate("/")}>
            <p
              className="text-white fw-bold fs-3"
            >
              SONY ✌︎︎
            </p>
          </div>
          <ul
            className={`nav-bar ${
              menuOpen ? "open" : ""
            } d-flex justify-content-between align-items-center border py-2 px-4 rounded-5`}
          >
            <li className="nav-item list-unstyled">
              <NavLink
                className={"text-decoration-none text-uppercase text-white"}
                to={""}
                end
              >
                Home<i className="fa-solid fa-house  ms-2 fs-6"></i>
              </NavLink>
            </li>
            <li className="nav-item list-unstyled">
              <NavLink
                className={"text-decoration-none text-uppercase text-white"}
                to={"about"}
              >
                About<i className="fa-solid fa-circle-info  ms-2 fs-6"></i>
              </NavLink>
            </li>
            <li className="nav-item list-unstyled">
              <NavLink
                className={"text-decoration-none text-uppercase text-white"}
                to={"product"}
              >
                Product<i className="fa-solid fa-camera  ms-2 fs-6"></i>
              </NavLink>
            </li>
            <li className="nav-item list-unstyled">
              <NavLink
                className={"text-decoration-none text-uppercase text-white"}
                to={"gallery"}
              >
                Gallery<i class="fa-regular fa-images ms-2 fs-6"></i>
              </NavLink>
            </li>
            <li className="nav-item list-unstyled">
              <NavLink
                className={"text-decoration-none text-uppercase text-white"}
                to={"contact"}
              >
                Contact<i class="fa-solid fa-phone ms-2"></i>
              </NavLink>
            </li>
          </ul>
          <div>
            <button
              onClick={() => navigate("/cart")}
              type="button"
              className="btn btnCart text-uppercase fw-bold text-white border rounded-5 bg-blur me-2"
            >
              <FaCartShopping size={22} />
              <p
                className="position-absolute fs-4 bg-primary rounded-5 d-flex justify-content-center align-items-center fw-medium"
                style={{
                  right: "-8px",
                  top: "-10px",
                  width: "31px",
                  height: "30px",
                }}
              >
                {countOrder}
              </p>
            </button>
            <button
              className="btn text-white fw-bold border btnSignIn rounded-5"
              onClick={() => navigate("signin")}
            >
              <i class="fa-solid fa-user"></i>
            </button>
            <button
              className="btn text-white d-xl-none border rounded-5 btnMenu ms-4"
              style={{ fontSize: "22px" }}
              onClick={handleOpen}
            >
              {menuOpen ? (
                <i class="fa-solid fa-xmark"></i>
              ) : (
                <i class="fa-solid fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
