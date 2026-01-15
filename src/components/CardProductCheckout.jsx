import React from "react";
const CardProductCheckout =({name,qty,price,image})=>{
    return (
        <div>
            <div className="imgProduct d-flex mt-3">
                <img src={image[0]} alt="Image" width={"85px"} height={"70px"} className="img-fluid border p-1 rounded"/>
                <div className="ms-4">
                    <span className="fw-bold">{name}</span><br />
                    <span>{qty}x</span>
                    <p style={{transform: "translateY(20px)"}} className="fw-bold">{price}$</p>
                </div>
            </div>
        </div>
    )
}

export default CardProductCheckout;