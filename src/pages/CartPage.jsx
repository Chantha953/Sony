import React, { useContext, useEffect } from "react";
import CartItem from "../components/CartItem";
import { Outlet, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { BsCartXFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
const CartPage = () => {
  const navigate = useNavigate();
  const {
    orderProduct,
    countOrder,
    setOrderProduct,
    setCountOrder,
    isToken,
    orderItem,
    setOrderItem,
  } = useContext(ProductContext);
  const subtotal = orderProduct.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  const discount = 10;
  const shipping = subtotal > 0 ? 10 : 0;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal + shipping - discountAmount;
  const getOrderID = (id) => {
    const itemToRemove = orderProduct.find((or) => or.id === id);
    if (!itemToRemove) return;
    const updateOrder = orderProduct.filter((or) => or.id !== id);
    setOrderProduct(updateOrder);
    setCountOrder(countOrder - itemToRemove.qty);
  };
  const handleCheckout = () => {
    setOrderItem(orderProduct); 
    navigate("/checkout");
  };
  return (
    <div>
      {orderProduct.length === 0 ? (
        <CartEmpty />
      ) : (
        <section>
          <div className="container shoppingCart">
            <div
              className="row text-white g-2 border px-2 bg-blur rounded"
              style={{ paddingBottom: "0.5rem", padding: "0,0.8rem" }}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <div className="col-12 col-md-8 h-100 hide-scrollbar">
                <div className="d-flex justify-content-between align-items-center py-2 px-3">
                  <h2>Shopping Cart</h2>
                  <p className="text-white fs-5">
                    <span className="fw-medium">{countOrder}</span> Item
                  </p>
                </div>
                {orderProduct?.map(({ image, name, qty, price, id }) => (
                  <CartItem
                    key={id}
                    image={image}
                    name={name}
                    qty={qty}
                    price={price}
                    getId={getOrderID}
                    id={id}
                  />
                ))}
              </div>
              <div className="col-12 col-md-4">
                <div
                  className="cart border h-100 px-3 py-1 rounded"
                  style={{ maxHeight: "80vh" }}
                >
                  <h2>Order Summary</h2>
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <p>Subtotal</p>
                    <p>{subtotal.toFixed(2)} $</p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <p>Discount</p>
                    <p style={{ color: "#00ff15ff" }}>{discount} %</p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <p>Shipping</p>
                    <p>{shipping} $</p>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold">Total</p>
                    <p className="fw-bold">{total.toFixed(2)} $</p>
                  </div>

                  <div className="mt-4">
                    <button
                      className="btn text-white border w-100 fw-medium rounded-5 btnCheckout"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </button>
                    <div className="text-center mt-3">
                      <i class="fa-solid fa-circle-check text-success me-2"></i>{" "}
                      Secure checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <div
      className="container d-flex justify-content-center align-items-center text-white text-center"
      style={{ height: "100vh" }}
    >
      <article className="border bg-blur p-5 rounded-4 overflow-hidden">
        <div
          className="iconCart text-white border rounded-circle d-flex justify-content-center align-items-center m-auto"
          style={{ width: "110px", height: "110px" }}
        >
          <BsCartXFill className="p-1" style={{ fontSize: "5rem" }} />
        </div>
        <div className="textEmpty fs-2 m-4">
          <p>
            Your Cart is <span className="text-danger fw-bolder">Empty!</span>
          </p>
        </div>
        <div className="des">
          <p>Must add items on the cart before you proceed to check out</p>
        </div>
        <div>
          <button
            className="btn text-white m-3 border rounded-5 btnBackToShop"
            onClick={() => navigate("/product")}
          >
            <MdAddShoppingCart
              className="me-2 mb-1"
              style={{ fontSize: "18px" }}
            />
            RETURN TO SHOP
          </button>
        </div>
      </article>
    </div>
  );
};
export default CartPage;
