import React, { useContext } from "react";
import camera from "../assets/images/camerasony.png";
import { ProductContext } from "../context/ProductContext";
import data from "../data/data";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ image, name, price, getId, id }) => {
  const navigate = useNavigate();
  const {
    isToken,
    showDetail,
    setShowDetail,
    orderProduct,
    setOrderProduct,
    countOrder,
    setCountOrder,
    setOrderItem
  } = useContext(ProductContext);
  const handleGetId = () => {
    getId(id);
    setShowDetail(true);
  };
  const AddOrderProduct = () => {
    const order = data.find((or) => or.id === id);
    if (!order) return;
    const exist = orderProduct.find((item) => item.id === id);
    let AddOrder;
    if (exist) {
      AddOrder = orderProduct.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      AddOrder = [...orderProduct, { ...order, qty: 1 }];
    }
    setOrderProduct(AddOrder);
    setCountOrder(countOrder + 1);
  };
  const handleBuying = () => {
    const buying = data.find((or) => or.id === id);
   if(isToken){
    setOrderItem([buying]);
    setOrderProduct([buying]);
    navigate("/checkout");
   }
   else{
    navigate("/signin");
   }
  };
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-white">
      <div className="border p-4 rounded-5 cardProduct position-relative">
        <img src={image[0]} className="w-100 img-fluid" alt="" />
        <button
          className="btn text-white border rounded-5 py-1 px-2 position-absolute btnDetail"
          onClick={handleGetId}
        >
          <i className="fa-solid fa-eye"></i>
        </button>
        <h3>{name}</h3>
        <p className="fs-5 fw-bolder">
          {price}${" "}
          <del className="fs-6 text-danger fw-bold">{price + 200}$</del>
        </p>
        <button
          className="w-100 fw-bold rounded-5 mb-3 text-white border-0 bg-transparent py-2 btnAddToCart"
          onClick={AddOrderProduct}
        >
          Add to Cart
        </button>
        <button
          className="w-100 fw-bold rounded-5 text-white bg-transparent border btnBuy py-2"
          onClick={handleBuying}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
