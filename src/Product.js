import React from 'react'
import logo_clubhair from "./image/logoCHnew.png";
import "./Product.css";
function Product() {
    return (
        <div className="product">
        <div className="product__banner">
          <div className="product__logo">
            <img className="product__logo--img" src={logo_clubhair} alt="logonbanner" />
          </div>
        </div>
        <div className="middle__item">
          <div className="second__section">
            <h3 className="title__section">OUR PRODUCTS</h3>
          </div>
        </div>
      </div>
    )
}

export default Product
