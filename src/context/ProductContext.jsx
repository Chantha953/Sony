import React, { createContext, useState } from "react";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [image, setImage] = useState(null);
  const [isToken, setToken] = useState(false);
  const [orderProduct, setOrderProduct] = useState([]);
  const [orderItem , setOrderItem] = useState([]);
  const [countOrder, setCountOrder] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [defaultImage, setDefaultImage] = useState(false);
  const [ProductOrder , setProductOrder]= useState([]);
  return (
    <ProductContext.Provider
      value={{
        showDetail,
        setShowDetail,
        orderProduct,
        setOrderProduct,
        countOrder,
        setCountOrder,
        isToken,
        setToken,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        image,
        setImage,
        defaultImage,
        setDefaultImage,
        setOrderItem,
        orderItem,
        ProductOrder,
        setProductOrder
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
