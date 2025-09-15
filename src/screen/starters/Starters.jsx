import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SubHeader from "../../components/header/SubHeader";
import banner from "../../asset/headers/car-starter-electric-motor-alternator-engine.png";
import Footer from "../../components/footer/Footer";
import Reviews from "../../components/reviews/Reviews";
import CTA from "../../components/cta/CTA";
import "../cables/cables.css";

import starter from "../../asset/pre-engaged-starter.png";

const Starters = () => {
  return (
    <div className="cables">
      <Navbar />
      <SubHeader
        img={banner}
        title="Starters"
        content="Reliable new and rebuilt starters for cars, trucks, and heavy-duty equipment—engineered for long life and dependable performance."
      />

      <div className="cable-links-container starter-container">
        <div className="cable-links-left fade-in" >
          <p>
            At Madison Power Systems, we understand how critical a reliable
            starter is for keeping your vehicle or equipment in service. That’s
            why we offer both new and rebuilt starters for private vehicles,
            commercial fleets, and heavy-duty equipment. Each unit is carefully
            inspected and tested to ensure <strong> long-lasting performance </strong> you can
            depend on.
          </p>

          <p>
            Our rebuilding process restores starters to like-new condition,
            giving you a <strong> cost-effective alternative </strong>to buying new without
            compromising on quality. We use high-grade components, proven
            techniques, and thorough testing to guarantee every rebuild meets
            <strong> strict reliability standards</strong>.
          </p>

          <p>
            Whether you need a replacement starter for your daily driver, a work
            truck, or specialized equipment, our experienced team is ready to
            help. We provide expert guidance to make sure you get the right
            solution—fast, affordable, and built to last.
          </p>
        </div>

        <div className="cable-links-right starter-image">
          <img src={starter} alt="pre-engaged-starter" />
        </div>
      </div>

      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
};

export default Starters;
