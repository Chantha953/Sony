import React, { useEffect } from "react";
import Aos from "aos";
import { images } from "../components/Gallery";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-slideshow-image";
import image1 from "../assets/slides/image1.png";
import image2 from "../assets/slides/image2.png";
import image3 from "../assets/slides/image3.png";
import image4 from "../assets/slides/image4.png";
import image5 from "../assets/slides/image5.png";
const image = [image1, image2, image3, image4, image5];
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {image.map((each, index) => (
          <img key={index} style={{ width: "100%", imageRendering : "pixelated", objectFit:"cover"}} height={"626px"} src={each} className="rounded" />
        ))}
      </Zoom>
    </div>
  );
};
const GalleryPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container gallery-page mt-5 pt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-white">
          <span className="text-gradient">Gallery</span>
        </h1>
        <p className="text-secondary">
          Explore our collection of stunning camera shots and photography gear.
        </p>
      </div>
      <div className="p-2" style={{transform : "translateY(-2rem)"}}>
        <Slideshow/>
      </div>
      <div className="gallery">
        {images.map((img, index) => (
          <div className="gallery-item" key={index} onClick={()=>navigate("/product")}>
            <img src={img.src} alt={`Gallery ${index + 1}`} className="border p-2 bg-white" />
            <div className="overlay-text">Captured by {img.camera}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
