import React, { useContext, useState } from "react";
import CardProduct from "../components/CardProduct";
import { ProductContext } from "../context/ProductContext";
import DetailProduct from "../components/DetailProduct";
import data from "../data/data";
const ProductPage = () => {
 const { showDetail, setShowDetail } = useContext(ProductContext);
  const [selectedId, setSelectedId] = useState(null);
 const getProductId = (id) => {
    setSelectedId(id);
    setShowDetail(true);
  };
  return (
    <React.Fragment>
      <section>
        <div
          className="container product"
          style={{ transform: "translateY(6rem)" }}
        >
          <h1 className="text-white fw-bold">Products</h1>
          <hr className="text-white" />
          <div className="row g-4 mt-3">
            {data.map(({image,name,price,id})=>(
              <CardProduct key={id} image = {image} name = {name} price = {price} getId = {getProductId} id={id}/>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div>
          {showDetail && <DetailProduct productId = {selectedId} setShowDetail={setShowDetail} />}
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProductPage;
