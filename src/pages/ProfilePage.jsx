import React, { useContext, useState } from "react";
import imageUser from "../assets/images/user.png";
import { ProductContext } from "../context/ProductContext";
const ProfilePage = () => {
  const { name, email,image,setImage,setDefaultImage,defaultImage } = useContext(ProductContext);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setDefaultImage(true);
    }
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center text-center profilePage"
      style={{ height: "60vh", transform: "translateY(1rem)" }}
    >
      <div className="text-white">
        <div className=" position-relative">
          <img
            src={defaultImage ? image : imageUser}
            alt="Image"
            className="img-fluid ImgProfile rounded-circle"
            width={"200px"}
            height={"180px"}
            style={{ objectFit: "contain" }}
          />
          <div
            className="infoProfile border m-auto position-absolute top-50 p-5 rounded-4 bg-blur"
            style={{
              height: "340px",
              width: "340px",
              left: "-34%",
              zIndex: "-1",
            }}
          >
            <div style={{ marginTop: "5rem" }}>
              <h1 className="fw-bolder">{name}</h1>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <p className="text-white-50">Email</p>
              <p className="fw-medium">{email}</p>
            </div>
            <div className="my-4">
              <label
                htmlFor="uploadImage"
                className="form-label border py-2 px-3 rounded-5 btnUploadProfile"
              >
                {defaultImage ? "Change Profile" : "Upload Profile"}{" "}
                <i class="fa-solid fa-arrow-up-from-bracket ms-2"></i>
              </label>
              <input
                type="file"
                accept="image/*"
                id="uploadImage"
                className="d-none"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
