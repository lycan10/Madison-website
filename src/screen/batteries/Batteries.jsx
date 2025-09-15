import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SubHeader from "../../components/header/SubHeader";
import banner from "../../asset/headers/Deka-dseries-fastcharge-dominator-hydrasaver-batteries.png";
import Footer from "../../components/footer/Footer";
import Reviews from "../../components/reviews/Reviews";
import CTA from "../../components/cta/CTA";
import "../cables/cables.css";

import battery from "../../asset/battery_diagram.jpg";

const Batteries = () => {
 
  return (
    <div className="cables">
      <Navbar />
      <SubHeader
        img={banner}
        title="Batteries"
        content="Reliable batteries built for cars, trucks, and heavy equipment. Designed for long life, consistent power, and dependable performance in any environment."
      />

      <div className="cable-links-container starter-container">
        <div className="cable-links-left fade-in">
          <p>
            Our selection of batteries is designed to deliver reliable power for
            a wide range of vehicles and equipment. Whether you operate
            commercial trucks, agricultural machinery, or personal vehicles, our
            batteries provide the dependable performance you need to keep
            everything running smoothly. Each unit is built to meet the highest
            standards, ensuring consistent starts and lasting durability in
            demanding conditions.
          </p>

          <p>
            With so many options on the market, choosing the right battery can
            feel overwhelming. That’s why we focus on offering only trusted,
            proven solutions that balance performance and longevity. From
            heavy-duty commercial applications to everyday automotive needs, our
            curated selection makes it simple to find a battery that matches
            your equipment requirements.
          </p>

          <p>
            At the core of our service is a commitment to helping customers make
            confident choices. Every battery we provide combines advanced
            technology with real-world reliability, giving you the peace of mind
            that your vehicle or equipment will perform when you need it most.
            With our expertise and support, you can count on power that lasts
            and a partner you can trust.
          </p>
        </div>

        <div className="cable-links-right starter-image">
          <img src={battery} alt="pre-engaged-starter" />
        </div>
      </div>

      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
};

export default Batteries;
