import React from "react";
import logo_clubhair from "./image/logoCHnew.png";
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
          <p className="description__section">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
// what this need is the process of check in an appointmnet
//
