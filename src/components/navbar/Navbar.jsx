import React,{useState, useEffect} from 'react'
import logo from "../../asset/white-and-Yellow.png"

import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const navigateToHome = () => {
        window.location.href = "/"; // navigates + reloads
      };
      const callNow = () => {
        window.location.href = "tel:+12488522055"; 
      };
     
      const navigateToShop = () => {
        window.open("https://madisoncables.com/", "_blank", "noopener,noreferrer");
      };

      const scrollToContact = () => {
        document.getElementById("contact").scrollIntoView({ 
          behavior: "smooth" 
        });
      };
      useEffect(() => {
        if (isOpen) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
      }, [isOpen]);
      
  return (
    <div className='navbar'>
        {/* <div className="navbar-top">
            <p>Call Us: <span>800-459-4656</span> or <span>248-852-2055</span></p>
        </div> */}
        <div className="navbar-container">
            <div className="navbar-logo" onClick={navigateToHome}>
                <img src={logo} alt="Madison generator services" />
            </div>
            <div className="navbar-menu">
            <p><Link to="/">Home</Link></p>
               <p><Link to="/cables">Cables</Link></p>
               <p><Link to="/control-lever">Control Lever</Link></p>
               <p><Link to="/parkingBrakes">Parking Brakes</Link></p>
               <p><Link to="/starters">Starters</Link></p>
               <p><Link to="/alternators">Alternators</Link></p>
               <p><Link to="/batteries">Batteries</Link></p>
               <p onClick={scrollToContact} >  Contact</p>

            </div>
            <div className="navbar-cta">
                <div className="navbar-quote" onClick={callNow}>
                    <p>Get a Free Quote</p>
                </div>
                <div className="navbar-book" onClick={navigateToShop}>
                <p>Shop Now</p>
                </div>
            </div>
        </div>
        <div className="navbar-container-mobile">
      {/* Logo Section */}
      <div className="navbar-logo" onClick={navigateToHome}>
        <img src={logo} alt="Madison generator services" />
      </div>

      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <RiCloseLine size={28} /> : <RxHamburgerMenu size={28} />}
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <p><Link to="/" onClick={toggleMenu}>Home</Link></p>
        <p><Link to="/cables" onClick={toggleMenu}>Cables</Link></p>
        <p><Link to="/control-lever" onClick={toggleMenu}>Control Lever</Link></p>
        <p><Link to="/parkingBrakes" onClick={toggleMenu}>Parking Brakes</Link></p>
        <p><Link to="/starters" onClick={toggleMenu}>Starters</Link></p>
        <p><Link to="/alternators" onClick={toggleMenu}>Alternators</Link></p>
        <p><Link to="/batteries" onClick={toggleMenu}>Batteries</Link></p>
        <p onClick={() => { scrollToContact(); toggleMenu(); }}>Contact</p>

        {/* CTA Buttons Inside Mobile Menu */}
        <div className="navbar-cta">
          <div className="navbar-quote" onClick={callNow}>
            <p>Get a Free Quote</p>
          </div>
          <div className="navbar-book" onClick={navigateToShop}>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar