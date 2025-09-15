import React from 'react'
import banner from "../../asset/headers/banner.jpg"
import "./header.css"
import ReactGA from "react-ga4";

const Header = () => {
  const navigateToShop = () => {
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Shop Button Clicked",
    });
    window.open("https://madisoncables.com/", "_blank", "noopener,noreferrer");
  };
  const callNow = () => {
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Call Button Clicked",
    });
    window.location.href = "tel:+12488522055"; 
  };
  return (
    <div className='header'>
        <img src={banner} alt="Madison generator services" />
        <div className="header-content">
            <h3>Madison Power Systems</h3>
            <h1>Control Cables, Hydraulic Hoses & Electrical Components</h1>
            <p>Madison Power Systems supplies high-quality parts for machinery and vehicles—cables, hoses, batteries, starters, alternators, and more.</p>
            <div className="navbar-cta header-cta">
                <div className="navbar-quote" onClick={callNow}>
                    <p>Get a Free Quote</p>
                </div>
                <div className="navbar-book" onClick={navigateToShop}>
                <p>Shop Now</p>
                </div>
            </div>
        </div>
        
    </div>

  )
}

export default Header