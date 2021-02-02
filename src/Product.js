import React from 'react'
import logo_clubhair from "./image/logoCHnew.png";
import sampleimage from "./image/sampleImage.png"
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
          <div className="product__sections">
            <div>
              <img className="productimage" src={sampleimage} alt="sampleimage" width="95%"/>
            </div>
            <div className="product__description">
            <h3 className="title__section"> Product One </h3>
            <p className="description__product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.</p> 
            </div>
        </div>
        <div className="product__sections">
            <div>
              <img className="productimage" src={sampleimage} alt="sampleimage" width="95%"/>
            </div>
            <div className="product__description">
            <h3 className="title__section"> Product Two </h3>
            <p className="description__product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.</p> 
            </div>
        </div>
        <div className="product__sections">
            <div>
              <img className="productimage" src={sampleimage} alt="sampleimage" width="95%"/>
            </div>
            <div className="product__description">
            <h3 className="title__section"> Product Three </h3>
            <p className="description__product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.</p> 
            </div>
        </div>
        </div>
      </div>
    )
}

export default Product
