import React from "react";
import Sony from "../assets/images/camerasony.png";
const CartItem = ({ image, name, qty, price, getId, id }) => {
  const handleRemoveOrder = () => {
    getId(id);
  };
  return (
    <React.Fragment>
      <div className="item d-flex justify-content-between align-items-center rounded-4 mt-2 mb-4 px-3">
        <div className="image-item d-flex justify-content-center align-items-center">
          <img
            src={image?.[0]}
            alt="Product Image"
            width={"80px"}
            height={"80px"}
            className="img-fluid ImageCart"
          />
          <div className="name-item mt-2">
            <p className="fs-5 ms-4 fw-bold">{name}</p>
          </div>
        </div>
        <div className="item d-flex justify-content-between align-items-center w-50">
          <div
            className="qty d-flex justify-content-between align-items-center mt-2"
            style={{ width: "120px" }}
          >
            <button
              className="btn mb-3 border py-1 px-2 rounded-5 text-white-50"
              style={{ fontSize: "12px" }}
            >
              <i class="fa-solid fa-minus text-white-50"></i>
            </button>
            <p className="fs-4">{qty}</p>
            <button
              className="btn mb-3 border py-1 px-2 rounded-5 text-white ms-1"
              style={{ fontSize: "12px" }}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="price mt-2">
            <p className="fs-4 fw-bold">{price}$</p>
          </div>
          <div className="btnAction mt-2">
            <button
              className="btn text-danger border rounded-5 mb-3"
              onClick={handleRemoveOrder}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItem;
