import React from "react";
import logo_clubhair from "./image/logoCHnew.png";
import sampleimage from "./image/sampleImage.png"
import "./Service.css";
function Service() {
  return (
    <div className="service">
      <div className="top__imageSer">
        <div className="logo_banner--ser">
          <img className="image__CH--ser" src={logo_clubhair} alt="logonbanner" />
        </div>
      </div>
      <div className="middle__item">
        <div className="second__section">
          <h3 className="title__section">OUR SERVICES</h3>
        </div>
      </div>
      <div className="product__sections">
            <div>
              <img className="productimage" src={sampleimage} alt="sampleimage" width="95%"/>
            </div>
            <div className="product__description">
            <h3 className="title__section">Service One </h3>
            <p className="description__product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.</p> 
           
            </div>
        </div>
        <div className="product__sections">
           
            <div className="product__description">
            <h3 className="title__section">Service Two </h3>
            <p className="description__product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.</p> 
           
            </div>
            <div>
              <img className="productimage" src={sampleimage} alt="sampleimage" width="95%"/>
            </div>
        </div>
        <div className="product__sections">
            <div>
              <img className="productimage" src={sampleimage} alt="sampleimage" width="95%"/>
            </div>
            <div className="product__description">
            <h3 className="title__section">Service Three </h3>
            <p className="description__product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.</p> 
           
            </div>
        </div>
        <div className="product__sections">
           
            <div className="product__description">
            <h3 className="title__section">Service Four </h3>
            <p className="description__product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.</p> 
           
            </div>
            <div>
              <img className="productimage" src={sampleimage} alt="sampleimage" width="95%"/>
            </div>
        </div>


    </div>
  );
}

export default Service;
// what this need is the process of check in an appointmnet
//
