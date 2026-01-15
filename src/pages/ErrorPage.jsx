import React from "react";
import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="errorPage d-flex justify-content-center align-items-center bg-black text-white text-center"
      style={{ height: "100vh" }}
    >
      <div className="page404">
        <h1 className="text-center errorText">
          404
        </h1>
        <h2 className="text-uppercase">The page you’re looking for doesn’t exist.</h2>
        <button type="button" className="btn text-white mt-4 btnBack" onClick={()=>navigate("/")}>Back Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
