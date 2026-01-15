import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { OrbitProgress } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";

const SignOutPage = () => {
  const { setToken } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setToken(false);
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [setToken, navigate]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <section className="text-center text-white">
        <h1 className="mb-5">Signing Out...</h1>
        <OrbitProgress
          variant="spokes"
          color="#ffffff"
          size="large"
        />
      </section>
    </div>
  );
};

export default SignOutPage;
