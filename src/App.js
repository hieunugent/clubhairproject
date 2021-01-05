import './App.css';
import logo_clubhair from "./image/logoCH.png"
import productimage from "./image/razor.jpg"
function App() {
  return (
    <div className="app">
        <div className="top__image"> 
            <div className="logo_banner">
                  <img className="image__CH" src={logo_clubhair} alt="logonbanner" width="80%" height="20%"/>
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
         </div></div>
         <div className="third__sections">
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
              <img src={productimage} alt="productimage" width="95%"/>
            </div>
            <div className="product__description">
            <h3 className="title__section">OUR PRODUCTS </h3>
            <p className="description__product">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus.</p> 
            <button className="shopping__Btn">START SHOPPING</button>

            </div>
        </div>


   
    </div>
  );
}

export default App;
