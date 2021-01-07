import React from 'react'
import logo_clubhair from "./image/logoCHnew.png"
import productimage from "./image/razor.jpg"
import matthew from "./image/matthew.png"
import habeshaw from "./image/habeshaw.png";
import najafi from "./image/ahmadreza-najafi.png"


function Landingpage() {
    return (
        <div className="landing__pages">
            <div className="top__image"> 
            <div className="logo_banner">
                  <img className="image__CH" src={logo_clubhair} alt="logonbanner" />
            </div>
        </div>
        <div className="middle__item">
        <div className="second__section">
          <h3 className="title__section">OUR SERVICES</h3>
          <p className="description__section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="third__sections">
          <div className="third__section">
            <h3 className="title__sectionv2">BASIC HAIRCUT</h3>
            <p className="description__section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
          </div>
          <div className="third__section">
          <h3 className="title__sectionv2">FANCY HAIRCUT</h3>
          <p className="description__section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
          </div>
          <div className="third__section">
          <h3 className="title__sectionv2">SHAMPOO </h3>
          <p className="description__section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
         </div>
        
          <div className="third__section">
            <h3 className="title__sectionv2">FULL HAIRCUT</h3>
            <p className="description__section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
          </div>
          <div className="third__section">
          <h3 className="title__sectionv2">SHAPE HAIR</h3>
          <p className="description__section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
          </div>
          <div className="third__section">
          <h3 className="title__sectionv2">BUZZCUT </h3>
          <p className="description__section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
         </div>
        </div>
        <button className="appointment__Btn">MAKE AN APPOINMENT</button>
        </div>
        <div className="product__sections">
            <div>
              <img className="productimage" src={productimage} alt="productimage" width="95%"/>
            </div>
            <div className="product__description">
            <h3 className="title__section">OUR PRODUCTS </h3>
            <p className="description__product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.</p> 
            <button className="shopping__Btn">START SHOPPING</button>

            </div>
        </div>

        <div className="barbers_section">

            <h2>
              OUR BARBERS
            </h2>

            <div className="mybarber_section">
            <div className="mybarber">
                <img src={matthew} alt="matthew picture" width="30%"/>
                <hr width="10%"/>
                <h3> MATTHEW GARI </h3>
                <hr width="10%"/>
                <span > ★ </span>
            </div>
            <div className="mybarber">
                <img src={habeshaw} alt="habeshaw picture" width="30%"/>
                <hr width="10%"/>
                <h3> HABESHAW SMITH </h3>
                <hr width="10%"/>
                <span > ★ </span>
            </div>
            <div className="mybarber">
                <img src={najafi} alt="najafi picture" width="30%"/>
                <hr width="10%"/>
                <h3> AHMADREZA NAJAFI </h3>
                <hr width="10%"/>
                <span > ★ </span>
            </div>
            </div>
            

        </div>
        </div>
    )
}

export default Landingpage
