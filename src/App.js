import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
// style import files
import "./App.css";

// internal import page
import Landingpage from "./Landingpage";
import Footer from "./Footer";
import Service from "./Service";
import AppointmentPage from "./AppointmentPage";


function App() {
  return (
    // <div className="app">
   
    //          <Landingpage/>
    //          <Footer/>
    //  </div>


    <Router>
      <div className="app">
        <Switch>
          <Route path="/ourservice">
             <Service/>
             <Footer/>
          </Route>
          <Route path="/makeanappointment">
             <AppointmentPage/>
             <Footer/>
          </Route>
          <Route path="/shopping">
             <Service/>
             <Footer/>
          </Route>
          <Route path="/">
             <Landingpage/>
             <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
