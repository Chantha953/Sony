import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer
      className="text-white text-center py-4 text-center"
      style={{
        background: "linear-gradient(90deg, #000000, #1a0033)",
        height : "370px",
        display : "grid",
        placeItems : "center",
        transform : "translateY(15rem)"
        // marginTop : "10rem"
      }}
    >
      <div className="container text-center">
        <h4 className="fw-bold mb-3">SONY ✦</h4>
        <p className="m-2">
          Capture your world with clarity and creativity. Explore our latest
          cameras and gear.
        </p>
        <div className="d-flex justify-content-center gap-4 m-3 flex-wrap">
          <button className="btn text-white rounded-3 fw-medium" onMouseOver={(e)=> e.target.style.border = "1px solid white"} onMouseOut={(e)=>e.target.style.border = "1px solid transparent"} onClick={()=>navigate("/")}>Home</button>
          <button className="btn text-white rounded-3 fw-medium" onMouseOver={(e)=> e.target.style.border = "1px solid white"} onMouseOut={(e)=>e.target.style.border = "1px solid transparent"} onClick={()=>navigate("about")}>About</button>
          <button className="btn text-white rounded-3 fw-medium" onMouseOver={(e)=> e.target.style.border = "1px solid white"} onMouseOut={(e)=>e.target.style.border = "1px solid transparent"} onClick={()=>navigate("product")}>Product</button>
          <button className="btn text-white rounded-3 fw-medium" onMouseOver={(e)=> e.target.style.border = "1px solid white"} onMouseOut={(e)=>e.target.style.border = "1px solid transparent"} onClick={()=>navigate("gallery")}>Gellery</button>
          <button className="btn text-white rounded-3 fw-medium" onMouseOver={(e)=> e.target.style.border = "1px solid white"} onMouseOut={(e)=>e.target.style.border = "1px solid transparent"} onClick={()=>navigate("contact")}>Contact</button>
        </div>
        <div className="btnSocial d-flex justify-content-between align-items-center m-auto" style={{maxWidth: "340px"}}>
          <button className="btn text-white"><i class="p-2 border rounded-circle  fs-5 fa-brands fa-instagram" ></i></button>
          <button className="btn text-white"><i class="p-2 border rounded-circle  fs-5  fa-brands fa-facebook"></i></button>
          <button className="btn text-white"><i class="p-2 border rounded-circle  fs-5 fa-brands fa-tiktok"></i></button>
          <button className="btn text-white"><i class="p-2 border rounded-circle  fs-5  fa-brands fa-youtube"></i></button>
          <button className="btn text-white"><i class="p-2 border rounded-circle  fs-5 fa-brands fa-telegram"></i></button>
        </div>
        <div style={{ opacity: "0.8", fontSize: "0.9rem" }} className="mt-4 mb-3">
          © 2025 Sony Camera Store — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
