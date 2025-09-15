import React from 'react'
import "./footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

import logo from "../../asset/white-and-Yellow.png"

const Footer = () => {
  const navigateToHome = () => {
    window.location.href = "/"; // navigates + reloads
  };
  return (
    <div className='footer'>
        <div className="footer-container">
          <div className="footer-logo" onClick={navigateToHome}>
            <img src={logo} alt="Madison generator services" />
          </div>
            <p>248-852-2055</p>
            <p>248-852-6297</p>
            <p>sales@madisonpowersystems.com</p>
            <p>1727 E. Auburn Road Rochester Hills, MI 48307</p>
            <div className="footer-socials">
                <FaFacebook className="footer-social-items" />
                <FaInstagram className="footer-social-items"  />
                <RiTwitterXLine className="footer-social-items"  />
                <FaYoutube className="footer-social-items"  />
            </div>
            <p style={{fontSize: "14px", color:'grey'}}>&copy; {new Date().getFullYear()} Madison Power Systems. All rights reserved.</p>


        </div>
    </div>
  )
}

export default Footer