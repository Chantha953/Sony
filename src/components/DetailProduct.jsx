import { useState, useContext, useEffect } from "react";
import camera from "../assets/images/camerasony.png";
import camera1 from "../assets/images/aboutCamera.png";
import { ProductContext } from "../context/ProductContext";
import data from "../data/data";
import { useNavigate } from "react-router-dom";
const DetailProduct = ({ productId }) => {
  const { showDetail, setShowDetail,setOrderItem,setOrderProduct,isToken } = useContext(ProductContext);
  const childImage = [camera, camera1, camera, camera1];
  const detailProduct = data.find((de) => de.id === productId); 
  const [baseImage, setBaseImage] = useState(detailProduct?.image[0]);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const handleBuying = () => {
    const buying = data.find((or) => or.id === productId);
   if(isToken){
    setOrderItem([buying]);
    setOrderProduct([buying]);
    setShowDetail(false);
    navigate("/checkout");
   }
   else{
    navigate("/signin");
   }
  };
  return (
    <div
      className="showdetail d-flex justify-content-center align-items-center"
      data-aos="zoom-in"
    >
      <div className="productDetail p-4">
        <div className="border rounded-4">
          <div className="row p-4">
            <button
              className="closeDetail btn border-0 text-white position-absolute"
              onClick={() => setShowDetail(false)}
            >
              <i class="fa-solid fa-circle-xmark fs-3"></i>
            </button>
            <div className="col-12 col-md-6 text-center mb-4">
              <div className="baseImgDetail">
                <img
                  src={baseImage}
                  alt="Image"
                  width={"400px"}
                  height={"400px"}
                  className="rounded-3 baseImage"
                />
              </div>
              <div className="childImgDetail mt-5 d-flex justify-content-between align-items-center text-center">
                {detailProduct?.image.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Image"
                    width={"100px"}
                    height={"100px"}
                    className="p-2 border rounded-2 childImage"
                    onClick={() => setBaseImage(img)}
                  />
                ))}
              </div>
            </div>
            <div className="col-12 col-md-6 text-white pb-4">
              <h1 className="fw-bold">{detailProduct?.name}</h1>

              <div
                className="mt-4 border-top pt-3 infoProduct"
                style={{ fontSize: "18px" }}
              >
                <h4>Specification</h4>
                <div className="mt-3">
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span>Weight</span>
                    <span>{detailProduct?.weight}</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span>Size</span>
                    <span>{detailProduct?.size}</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span>Image Resolution</span>
                    <span>{detailProduct?.resolution}</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span>Aspect Ratio</span>
                    <span>{detailProduct?.aspectRatio}</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom py-2">
                    <span>Video Recording</span>
                    <span>{detailProduct?.video}</span>
                  </div>
                </div>
              </div>

              <div
                className="mt-2 pt-3 infoProduct"
                style={{ fontSize: "18px" }}
              >
                <p className="mb-3">
                  <strong>Current Price :</strong> ${detailProduct?.price}
                  <del className="text-danger ms-2">
                    ${detailProduct?.price + 200}
                  </del>
                </p>
                <p className="mb-3">
                  <strong>Availability :</strong> {detailProduct?.availability}{" "}
                  <i
                    class="fa-solid fa-circle-check text-success ms-1"
                    style={{ fontSize: "16px" }}
                  ></i>
                </p>
                <p className="mb-0">
                  <strong>Warranty :</strong> {detailProduct?.warranty}
                </p>
              </div>

              <div className="d-flex gap-3 mt-4 btnDetail">
                <button className="btn btn-primary  rounded-5 flex-fill fw-medium" onClick={handleBuying}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
