import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import SubHeader from '../../components/header/SubHeader'
import banner from "../../asset/headers/brake-lever.jpeg"
import Footer from '../../components/footer/Footer'
import Reviews from '../../components/reviews/Reviews'
import CTA from '../../components/cta/CTA'
import "../cables/cables.css"

import singleaxle from "../../asset/trailerbrakesystem/single_axle_frame.jpg"
import dualaxle from "../../asset/trailerbrakesystem/dual_axle_frame.jpg"
import trailerspec from "../../asset/trailerbrakesystem/trailer_specification.jpg"

import logo1 from "../../asset/brake_one/Typical_1:8_PBT_Cable_Assembly Construction.gif"
import logo2 from "../../asset/brake_one/Conduit_End_Fittings_1.gif"
import logo3 from "../../asset/brake_one/Conduit_End_Fittings_2.gif"
import logo4 from "../../asset/brake_one/Conduit_Mounting_Clamps.gif"
import logo5 from "../../asset/brake_one/Strand_End_Fittings.gif"
import logo6 from "../../asset/brake_one/Optional_Strand_End_Fittings.gif"
import logo7 from "../../asset/brake_one/clevis_1-8.gif"
import logo8 from "../../asset/brake_one/Equalizer.gif"

import brake1 from "../../asset/brake_two/pbt_typical_3-16-1.gif"
import brake2 from "../../asset/brake_two/conduit_end_fit-2.gif"
import brake3 from "../../asset/brake_two/conduit_mount_clamp2-3.gif"
import brake4 from "../../asset/brake_two/option_str_end_fit2-4.gif"
import brake5 from "../../asset/brake_two/clevis_3-16-5.gif"
import brake6 from "../../asset/brake_two/clevis_3-16-5.gif"

import lever1 from "../../asset/lever/02182600-1.gif"
import lever2 from "../../asset/lever/02182700-2.gif"
import lever3 from "../../asset/lever/02182900-3.gif"
import lever4 from "../../asset/lever/02183100-4.gif"
import lever5 from "../../asset/lever/02183200-5.gif"
import lever6 from "../../asset/lever/02183300-6.gif"
import lever7 from "../../asset/lever/02183400-7.gif"


import foot1 from "../../asset/footpedal/footpedals01.gif"
import foot2 from "../../asset/footpedal/footpedals02.gif"

const ParkingBrakes = () => {

    const parkingData = [
        {
            title: "Parking Brake Cables",
            content: (
              <>
                <p>
                  Madison Power Systems is a master distributor for <strong>Orscheln® Products</strong>. 
                  We design and custom-build brake cables for most applications, in-house, with minimal lead times. 
                  Whether you need cables built from a sample, drawing, or adjusted due to vehicle modifications, 
                  we can accommodate your needs.
                </p>
          
                <h4>Features:</h4>
                <ul>
                  <li>Available in standard <strong>1/8"</strong> and <strong>3/16"</strong> core sizes, as well as custom configurations</li>
                  <li>High performance with superior corrosion resistance and efficiency</li>
                  <li>Designed for both On-highway and Off-highway applications</li>
                  <li>Optional integration with over-center park brake levers or foot pedals</li>
                </ul>
          
                <h4>Material & Protection:</h4>
                <p>
                  <strong>Polybutylene Terephthalate (PBT) cables</strong> feature PBT-coated strands, PBT liners, 
                  patented seals (internal & external), and boundary lubrication. 
                  These enhancements provide far better corrosion protection than ordinary galvanized constructions.
                </p>
          
                <h4>1/8&quot; PBT Brake Cables:</h4>
                <ul>
                  <li>Designed for light to medium duty applications</li>
                  <li>Rated for loads up to <strong>1,200 lbs</strong></li>
                  <li>Common components allow lower costs and shorter lead times</li>
                </ul>
                <div className="product-links">
                    <img src={logo1} alt="Typical 1/8&quot; PBT Cable Assembly Construction" />
                  <h5>Typical 1/8&quot; PBT Cable Assembly Construction</h5>
                  <br />
                  <img src={logo2} alt="Conduit End Fittings (Part I)" />
                  <h5> Conduit End Fittings (Part I) </h5>
                  <br />
                  <img src={logo3} alt="Conduit End Fittings (Part II)" />
                  <h5>
                    Conduit End Fittings (Part II)
                  </h5>
                  <br />
                  <img src={logo4} alt="Conduit Mounting Clamps" />
                  <h5>
                  Conduit Mounting Clamps
                  </h5>
                  <br />
                  <img src={logo5} alt="Strand_End_Fittings" />
                  <h5>
                    Conduit Mounting Clips
                  </h5>
                  <br />
                  <img src={logo6} alt="Optional_Strand_End_Fittings" />
                  <h5>
                   Optional Strand End Fittings
                  </h5>
                  <br />
                  <img src={logo7} alt="clevis_1-8" />
                  <h5>
                   1/8&quot; Clevis
                  </h5>
                  <br />
                  <img src={logo8} alt="Equalizer" />
                  <h5>
                    Equalizer
                  </h5>
                </div>
          
                <h4>3/16&quot; PBT Brake Cables:</h4>
                <ul>
                  <li>Designed for heavier loads up to <strong>3,000 lbs</strong></li>
                  <li>Share the same performance and protection features as the 1/8&quot; series</li>
                </ul>
                <div className="product-links">
                    <img src={brake1} alt="Typical 3/16&quot; PBT Cable Assembly Construction" />
                  <h5>
                     Typical 3/16&quot; PBT Cable Assembly Construction
                  </h5>
                  <br />
                  <img src={brake2} alt="Conduit End Fittings" />
                  <h5>
                     Conduit End Fittings
                  </h5>
                  <br />
                  <img src={brake3} alt="Conduit Mounting Clamps" />
                  <h5>
                     Conduit Mounting Clamps
                  </h5>
                  <br />
                  <img src={brake4} alt="Optional Strand End Fittings" />
                  <h5>
                     Optional Strand End Fittings
                  </h5>
                  <br />
                  <img src={brake5} alt="3/16&quot; Clevis" />
                  <h5>
                     3/16&quot; Clevis
                  </h5>
                  <br />
                  <img src={brake6} alt="Equalizer" />
                  <h5>
                    Equalizer
                  </h5>
                </div>
              </>
            )
          },
          
          {
            title: "Parking Brake Levers",
            content: (
              <>
                <p>
                  Madison Power Systems is a master distributor for Orscheln® Products. We offer both
                  standard hand and foot parking brake levers as well as the capability to design
                  custom control systems.
                </p>
                <p>
                  We specialize in providing complete parking brake systems that include both park
                  brake levers and park brake cables.
                </p>
                <h4>Features:</h4>
                <ul>
                  <li>
                    Orscheln® hand levers are designed on the principle of variable mechanical
                    advantage, providing variable hand effort.
                  </li>
                  <li>
                    Initial lever movement provides greater linear travel compared to output effort,
                    while near the "on" position the output effort increases significantly.
                  </li>
                  <li>
                    Over-center (toggle) design creates a theoretically infinite mechanical advantage.
                  </li>
                  <li>
                    Screw-type adjustment feature allows easy fine-tuning by turning the adjustment
                    knob on the handle.
                  </li>
                  <li>
                    Standard lever options allow shorter lead times and lower costs, while custom
                    designs offer flexibility for unique applications.
                  </li>
                </ul>
                <p>
                  Key factors in designing a lever system include required lever output, mounting
                  location, operator access, handle effort, travel, cable clamp pattern, and mounting
                  preference.
                </p>
                <div className="product-links">
                  <h4>Hand Lever Diagrams (.gif format):</h4>
                  <ul>
                    <img src={lever1} alt="Orscheln Parking Brake Lever No. - 02182600" />
                    <h5>Orscheln Parking Brake Lever No. - 02182600</h5>
                    <img src={lever2} alt="Orscheln Parking Brake Lever No. - 02182700" />
                    <h5>Orscheln Parking Brake Lever No. - 02182700</h5>
                    <img src={lever3} alt="Orscheln Parking Brake Lever No. - 02182900" />
                    <h5>Orscheln Parking Brake Lever No. - 02182900</h5>
                    <img src={lever4} alt="Orscheln Parking Brake Lever No. - 02183100" />
                    <h5>Orscheln Parking Brake Lever No. - 02183100</h5>
                    <img src={lever5} alt="Orscheln Parking Brake Lever No. - 02183200" />
                    <h5>Orscheln Parking Brake Lever No. - 02183200</h5>
                    <img src={lever6} alt="Orscheln Parking Brake Lever No. - 02183300" />
                    <h5>Orscheln Parking Brake Lever No. - 02183300</h5>
                    <img src={lever7} alt="Orscheln Parking Brake Lever No. - 02183400" />
                    <h5>Orscheln Parking Brake Lever No. - 02183400</h5>
                  </ul>
                  <h4>Foot Pedal Lever Diagrams (.gif format):</h4>
                  <ul>
                    <img src={foot1} alt="Foot Pedals Part I" />
                    <h5>Foot Pedals Part I</h5>
                    <img src={foot2} alt="Foot Pedals Part II" />
                    <h5 style={{borderBottom: "none"}}>Foot Pedals Part II</h5>
                  </ul>
                </div>
              </>
            )
          },
          
          {
            title: "Trailer Brake Systems",
            content: (
              <>
                <p>
                  Madison Power Systems is a master distributor for Orscheln® Products. We can design
                  and build Trailer Brake Systems for most trailers equipped with the Park Brake
                  feature.
                </p>
                <p>
                  Orscheln® Trailer Parking Brake Systems include a mechanical break-away feature that
                  automatically engages the trailer brakes if the towed vehicle becomes unhooked
                  during transportation. The lockable over-center lever prevents unauthorized
                  movement of the trailer once the system is engaged and locked.
                </p>
                <div className="product-links">
                  <h4>Available Brake System Layouts (.jpg format):</h4>
                  <ul>
                    <li>
                      <a href="trailerbrakesystem/layout-single-axle1.pdf" target="_blank">
                        Single Axle - Parking Brake Lever on Front Crossmember
                      </a>
                    </li>
                    <img src={singleaxle} alt="single axle" />
                      <h5 style={{marginBottom: "4rem"}}>
                        Single Axle - Parking Brake Lever on "A" Frame
                      </h5>
                    <img src={dualaxle} alt="dual axle" />
                      <h5>
                        Dual Axle - Parking Brake Lever on "A" Frame
                      </h5>
                 
                  </ul>
                  <h4>Specification Sheet:</h4>
                  <img src={trailerspec} alt="trailer specification" />
                      <h5 style={{borderBottom: 'none'}}>
                        Trailer Specification Sheet
                      </h5>
                   
           
                </div>
              </>
            )
          },
          
      
      ];
      
      

    const navigateToLink = () => {
        // Use the URL of the page you want to navigate to
        const newUrl = "/cable";
    
        if (window.location.pathname === newUrl) {
          // If the user is already on the target page, perform a full page reload
          window.location.reload();
        } else {
          window.location.href = newUrl;
        }
      };
      const [selectedCable, setSelectedCable] = useState(parkingData[0].title);
  return (
    <div className='cables'>
          <Navbar />
          <SubHeader 
  img={banner} 
  title="Parking Brakes" 
  content="Reliable parking brake systems engineered for secure holding power, easy operation, and durability you can trust in any application." 
/>



          
            <div className="cable-links-container">
      <div className="cable-links-left fade-in">
        {parkingData
          .filter((parking) => parking.title === selectedCable)
          .map((parking, idx) => (
            <div className="product-details" key={idx}>
              <h1>{parking.title}</h1>
              <h3>{parking.subtitle}</h3>
              {parking.content}
            </div>
          ))}
      </div>

      <div className="cable-links-right">
        {parkingData.map((parking, idx) => (
          <p
            key={idx}
            className={selectedCable === parking.title ? "active-link" : ""}
            onClick={() => setSelectedCable(parking.title)}
            style={{ cursor: "pointer" }}
          >
            {parking.title}
          </p>
        ))}
      </div>

         </div>

          <Reviews />
          <CTA />
          <Footer />
    </div>
  )
}

export default ParkingBrakes