import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import { ProductContext } from "../context/ProductContext";
const OrderPage = () => {
  const { ProductOrder } = useContext(ProductContext);

  return (
    <div className="container" style={{ transform: "translateY(6rem)" }}>
      {ProductOrder.map((item,id)=>(
        <OrderItem {...item} key={id}/>
      ))}
    </div>
  );
};

export default OrderPage;
