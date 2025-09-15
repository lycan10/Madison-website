import React, { useState, useContext, useEffect, useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlScreenSmartphone } from "react-icons/sl";
import CTACard from './CTACard';
import "./cta.css"
import emailjs from '@emailjs/browser';

const CTA = () => {
  
  const [formData, setFormData] = useState({
    businessname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  var YOUR_SERVICE_ID = 'service_2lmdhbn';
  const YOUR_TEMPLATE_ID = 'template_virzvpc';
  const YOUR_PUBLIC_KEY = 'h6v36MW4lMvfYHo47';


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          // alert('Your booking request has been sent successfully!');
          // trackClickEvent('Button', 'Click', 'Appointment booked');
         
          setFormData({
            businessname: '',
            email: '',
            phone: '',
            message: '',
          });
          // navigateToThankYou();
        },
        (error) => {
          alert('Failed to send booking request. Please try again.');
        },
      );

      e.preventDefault();
  };
  const form = useRef();

  return (
    <div className='cta' >
      <div className="cta-container">
        <div className="cta-address" id='contact'>
          <h1>Contact Us</h1>
          <div className="cta-address-card-container">
          <CTACard icon={<IoLocationOutline />} title="1747 E Auburn Rd, Rochester Hills Mi, 48307" />
          <CTACard icon={<FiPhone />} title="248-852-2055" />
          <CTACard icon={<MdOutlineMailOutline />} title="sales@madison-powersystems.com" />
          <CTACard icon={<SlScreenSmartphone />} title="248-852-6297" />
          </div>
          <div className="cta-map">
            <div className="map" style={{ height: "100%", borderRadius: "5px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.0975790154116!2d-83.0998140238763!3d42.63809127116836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c2bf0e9e3b41%3A0xf0bcf485f366eb9b!2s1747%20E%20Auburn%20Rd%2C%20Rochester%20Hills%2C%20MI%2048307!5e0!3m2!1sen!2sus!4v1703736380103!5m2!1sen!2sus"
                width="100%"
                height="100%"
                title="map"
                style={{ border: "none", outline: "none" }}
              ></iframe>
          </div>
          </div>
        </div>
        <div className="cta-form-container">
        <form ref={form} onSubmit={sendEmail}>
        <div className="cta-form">
          <div className="cta-form-input">
            <p>Business Name</p>
            <input type="text" name="businessname" value={formData.businessname} onChange={handleChange} />
          </div>
          <div className="cta-form-input">
            <p>Email</p>
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
          </div>
          <div className="cta-form-input">
            <p>Phone</p>
            <input type="phone" name="phone" value={formData.phone} onChange={handleChange}/>
          </div>
          <div className="cta-form-input">
            <p>Your message (optional)</p>
            <textarea type="text" name="message" value={formData.message} onChange={handleChange} />
          </div>
          <div className="cta-form-button"  onClick={sendEmail}>
            <p>Submit</p>
          </div>
        </div>
        </form>
        </div>

      </div>
    </div>
  )
}

export default CTA