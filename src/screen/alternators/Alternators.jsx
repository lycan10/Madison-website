import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SubHeader from "../../components/header/SubHeader";
import banner from "../../asset/Elements-alternator.png";
import Footer from "../../components/footer/Footer";
import Reviews from "../../components/reviews/Reviews";
import CTA from "../../components/cta/CTA";
import "../cables/cables.css";

import alternator from "../../asset/alternator.png";

const Alternators = () => {
  return (
    <div className="cables">
      <Navbar />
      <SubHeader
        img={banner}
        title="Alternators"
        content="High-quality alternators built to deliver consistent charging power for cars, trucks, and heavy-duty equipment."
      />

      <div className="cable-links-container starter-container">
        <div className="cable-links-left fade-in">
          <p>
            Your alternator is the heart of your vehicle’s electrical system,
            supplying power to everything from lights and electronics to
            ignition and charging your battery. At Madison Power Systems, we
            provide <strong>high-quality alternators</strong> designed to
            deliver dependable performance in the most demanding conditions.
          </p>

          <p>
            Our team offers both brand-new alternatorsand
            professionally rebuilt units. Each rebuilt alternator undergoes a
            complete inspection process, including replacement of worn
            components, precision reassembly, and final testing under load. This
            ensures that every unit meets strict reliability standards and
            delivers long service life.
          </p>

          <p>
            Whether you operate heavy construction equipment, long-haul trucks,
            or passenger vehicles, we have the right alternator to keep your
            equipment powered and your business moving. Our mission is to
            provide durable solutions that reduce downtime and keep your systems
            operating at maximum efficiency.
          </p>
        </div>

        <div className="cable-links-right starter-image">
          <img src={alternator} alt="pre-engaged-starter" />
        </div>
      </div>

      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
};

export default Alternators;
