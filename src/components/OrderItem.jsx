import React from "react";
import camera from "../assets/images/camerasony.png";
const OrderItem = ({
  image,
  name,
  weight,
  size,
  resolution,
  aspectRatio,
  video,
  price,
  qty,
}) => {
  return (
    <div className="border bg-blur rounded-4 py-3 mb-4">
      <div className="d-flex justify-content-between align-items-center text-white">
        <p
          className="ms-4 fw-bold px-2 py-1 rounded-5 border text-success"
          style={{ width: "130px" }}
        >
          <i class="fa-solid fa-circle-notch"></i> In progress
        </p>
        <p className="me-4">2 January 2026</p>
      </div>
      <div className="d-flex">
        <div className="imgItem ms-3">
          <img
            src={image[0]}
            alt=""
            //   className="img-fluid"
            width={"120px"}
            height={"120px"}
          />
        </div>
        <div className="text-white ms-4">
          <section className="d-flex align-items-center">
            <p className="fw-bold fs-5 me-2">{name}</p>
            <p className="fs-5">( {qty}X )</p>
          </section>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <p className="me-4">Weight : {weight}</p>
            <p className="me-4">Size : {size}</p>
            <p className="me-4">Image Resolution : {resolution}</p>
            <p className="me-4">Aspect Ratio : {aspectRatio}</p>
            <p className="me-4">Video Recording : {video}</p>
          </div>
          <p className="fw-bold">$ {price}</p>
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
