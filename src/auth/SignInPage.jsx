import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { OrbitProgress } from "react-loading-indicators";
const SignInPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { email, password, setEmail, setPassword, isToken,setToken,setShowDetail } =
    useContext(ProductContext);
  setShowDetail(false);
  const [IsEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isSignIn , setSignIn] = useState(true);
  useEffect(() => {
    if (isToken) {
      navigate("/information");
    }
  }, [isToken,navigate]);
  const handleSignIn = (e) => {
    e.preventDefault();
    if (!IsEmail || !isPassword) return;
    setSignIn(false);
    if (IsEmail !== email || isPassword !== password) {
      alert("Invalid email or password !");
      setSignIn(true);
      return;
    }
    setTimeout(()=>{
      setSignIn(true);
      setToken(true);
    },2000)
  };
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ transform: "translateY(9rem)" }}
      >
        <form
          className="border signIn p-5 text-center text-white rounded-4"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          <i
            class="fa-regular fa-circle-xmark position-absolute fs-3 fw-bold top-0 end-0 m-3"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          ></i>
          <h1 className="mb-5 mt-2">Sign In</h1>
          <div className="position-relative">
            <input
              value={IsEmail}
              type="email"
              required
              className="form-control bg-transparent rounded-5 signInEmail text-white fs-5 px-4"
              placeholder="Email"
              onChange={(e) => setIsEmail(e.target.value)}
            />
            <i
              class="fa-solid fa-envelope position-absolute fs-5"
              style={{ top: "13px", right: "20px" }}
            ></i>
          </div>
          <div className="mt-5 position-relative">
            <input
              value={isPassword}
              type={showPassword ? "text" : "password"}
              required
              className="form-control bg-transparent rounded-5 text-white fs-5 px-4 signInPassword"
              placeholder="Password"
              onChange={(e) => setIsPassword(e.target.value)}
              position-absolute
              fs-5
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              class={`${
                showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
              } position-absolute fs-5`}
              style={{ top: "13px", right: "20px", cursor: "pointer" }}
            ></i>
          </div>
          <div className="mt-4 ms-2 text-start d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label
                className="form-check-label text-white ms-3"
                htmlFor="rememberMe"
                style={{ cursor: "pointer" }}
              >
                Remember me
              </label>
            </div>
            <Link className="me-2 text-white">Forgot Password?</Link>
          </div>
          <div className="SignIn mt-4">
            <button
              className="btn btnSignIn text-white border rounded-5 w-100 fw-medium"
              onClick={handleSignIn}
            >
              {isSignIn ? (
                "Sign In"
              ) : (
                <div
                  style={{
                    height: "24px",
                    scale: "0.4",
                    transform: "translateY(-24px)",
                  }}
                >
                  <OrbitProgress
                    variant="spokes"
                    dense
                    color="#ffffffff"
                    size={16}
                    text=""
                    textColor=""
                  />
                </div>
              )}
            </button>
          </div>
          <div className="mt-4">
            <p>
              Don't have an account?
              <Link
                to="/signup"
                className="text-white fw-bold text-decoration-none ms-1"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
