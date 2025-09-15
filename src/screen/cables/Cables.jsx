import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import SubHeader from '../../components/header/SubHeader'
import banner from "../../asset/headers/control-cables-bouquet.png"
import Footer from '../../components/footer/Footer'
import Reviews from '../../components/reviews/Reviews'
import CTA from '../../components/cta/CTA'
import "./cables.css"

const Cables = () => {

    const cableData = [
        {
          title: "Push Pull Cables",
          content: (
            <>
              <div className="product-links">
                <a href="pushpullcable/p1.pdf" target="_blank">Click for Construction Diagram (.pdf format)</a><br />
                <a href="pushpullcable/p2.pdf" target="_blank">Click for Engineering Specs (.pdf format)</a>
              </div>
              <p>
                Madison Power Systems is a master distributor for <strong>Felsted®</strong> and 
                <strong> Orscheln®</strong> Products. Our Cables are made with the same 100% OEM quality 
                components used at the factory.
              </p>
              <p>
                Push Pull High Performance (HP) Cables are a core part of our business and are produced 
                at our Rochester Hills, Michigan facility in various configurations. We have over 25 years 
                of experience producing mechanical Push Pull cable assemblies for a wide range of 
                On-highway and Off-highway applications.
              </p>
              <p>
                Push Pull control cables are available in various mounting configurations, travel or stroke 
                length, overall length and temperature options. Cables are available for large OEM needs, 
                and are also available custom made to your specifications.
              </p>
              <p>
                As a master distributor for <strong>Felsted®</strong> and <strong>Orscheln®</strong> Products, 
                we have a full complement of Cable and Control products to meet both custom and OEM 
                production needs, as well as a multitude of service applications.
              </p>
            </>
          )
        },
        {
          title: "T-Handle Utility Cables",
          content: (
            <>
              <div className="product-links">
                <a href="thandle/th1.pdf" target="_blank">Click for Construction Diagram (.pdf format)</a><br />
                <a href="thandle/th2.pdf" target="_blank">Click for Engineering Specs (.pdf format)</a>
              </div>
              <h4>Features:</h4>
              <ul>
                <li>Light Duty: 3 Series</li>
                <li>Heavy Duty: 3, 4 & 6 Series threaded end rods.</li>
              </ul>
              <h4>Temperature Range:</h4>
              <ul>
                <li>-65 to +225°F / -54 to +107°C Std.</li>
                <li>-65 to +300°F / -54 to +149°C HEFT 2.</li>
              </ul>
              <h4>Applications:</h4>
              <ul>
                <li>Throttle</li>
                <li>Choke</li>
                <li>Engine Stop</li>
                <li>Fuel Shut-off</li>
                <li>Latches</li>
              </ul>
              <p>Wide variety of Handles and Knobs.</p>
              <div className="product-links">
                <a href="thandle/th3.pdf" target="_blank">T-Handles & Knobs Diagram (.pdf format)</a>
              </div>
            </>
          )
        },
        {
          title: "Throttle Cables / Vernier",
          content: (
            <>
              <div className="product-links">
                <a href="throttlecable/tr1.pdf" target="_blank">Click for Construction Diagram (.pdf format)</a><br />
                <a href="throttlecable/tr2.pdf" target="_blank">Click for Engineering Specs (.pdf format)</a>
              </div>
              <h4>Features:</h4>
              <ul>
                <li>Light Duty 3 Series: Exposed Solid Core or 1 x 7 HP Core.</li>
                <li>Heavy Duty: 3 & 4 Series threaded end rods.</li>
              </ul>
              <p>Applications: Engine RPM, or where coarse or fine adjustments are needed.</p>
              <ul>
                <li>-65 to +225°F/ -54 to +107°C Std.</li>
                <li>-65 to +300°F/ -54 to +149°C HEFT 2.</li>
              </ul>
            </>
          )
        },
        {
          title: "Bow Fishing Boat Steering Cables",
          content: (
            <>
            <p>Madison Cables provides custom cable solutions for bow fishing boats that need mechanical cables to steer the kicker motor. We build each steering cable to customer specified length in an extremely heavy duty 3/8" strand armored cable with 3/8" threaded rods at each end and 8" of travel. These cables are used in conjunction with steer sticks typically mounted in the bow of the boat for directing travel whilst powered by the kicker motor. </p>
            <p>Customers will typically use a 7/8" threaded coupler to connect the bulkhead connector on the cable to the support tube in front of the kicker motor, the end of the rod then can connect to the motor via a ball joint that the motor's z-bar fits inside. </p>
            <p>We also make custom shift cables and throttle cables for bow fishing applications. All these products are built to your exact specifications and ship out quickly. If you need a bow fishing boat steering cable, throttle cable or shift cable please give us a call at 248-852-2055 so we can go over the details with you. </p>
          
            
            </>
          )
        },
        {
          title: "GMC Topkick Chevy Kodiak Parking Brake Cables",
          content: (
            <>
            <p>Hard to find, discontinued and well sought after parking brake cables for your GMC Topkick or Chevrolet Kodiak medium duty truck are available now at Madison Cables. If you require a cable you don't see here, remember we can build custom cables to specifications just call 248-852-2055 and we'll get you back on the road with quality parking brake cables you can depend on.</p>
          
            
            </>
          )
        },
        {
          title: "Valve Control Cables",
          content: (
            <>
              <div className="product-links">
                <a href="valvecontrol/vc1.pdf" target="_blank">Click for Construction Diagram (.pdf format)</a><br />
                <a href="valvecontrol/vc2.pdf" target="_blank">Click for Engineering Specs (.pdf format)</a>
              </div>
              <h4>Features:</h4>
              <ul>
                <li>Fits Morse® RVC Controls</li>
              </ul>
            </>
          )
        },
        {
          title: "Tension Cables",
          content: (
            <>
              <div className="product-links">
                <a href="tensioncable/tc1.pdf" target="_blank">Click for Construction Diagram (.pdf format)</a><br />
                <a href="tensioncable/tc2.pdf" target="_blank">Click for Engineering Specs (.pdf format)</a>
              </div>
              <h4>Features:</h4>
              <ul>
                <li>3, 4, & 6 Series.</li>
                <li>Applications: throttle, clutch, light to heavy duty pull loads.</li>
                <li>Improved boot seals: O-ring on boot for tighter seal.</li>
                <li>Tear resistant silicone boots.</li>
                <li>HP coated core and polymer liner.</li>
              </ul>
              <h4>Temperature Range:</h4>
              <ul>
                <li>-65 to +225°F/ -54 to +107°C Std.</li>
                <li>-65 to +300°F/ -54 to +149°C HEFT 2.</li>
              </ul>
            </>
          )
        },
        {
          title: "Power Take Off Cables - PTO",
          content: (
            <>
              <div className="product-links">
                <a href="pto/pto1.pdf" target="_blank">Click for Construction Diagram (.pdf format)</a><br />
                <a href="pto/pto2.pdf" target="_blank">Click for Engineering Specs (.pdf format)</a>
              </div>
              <h4>Features:</h4>
              <ul>
                <li>Power Take Off Operation</li>
                <li>.093 Solid Stainless Steel Core</li>
                <li>Full 5" travel</li>
                <li>6" bend radius</li>
                <li>Temperature Range: -65 to +225°F / -54 to +107°C Std.</li>
                <li>Red knob - Standard</li>
              </ul>
            </>
          )
        },
        {
          title: "Custom Cables",
          content: (
            <>
              <p>
                Madison Power Systems builds custom control cables for many applications including 
                Race Cars, Industrial and Commercial applications. Call us today to discuss your 
                current project options.
              </p>
            </>
          )
        }
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
      const [selectedCable, setSelectedCable] = useState(cableData[0].title);
  return (
    <div className='cables'>
          <Navbar />
          <SubHeader img={banner} title="Control Cables" content="Durable and reliable control cables built for smooth, precise operation in tough conditions." />

          
            <div className="cable-links-container">
      <div className="cable-links-left fade-in">
        {cableData
          .filter((cable) => cable.title === selectedCable)
          .map((cable, idx) => (
            <div className="product-details" key={idx}>
              <h1>{cable.title}</h1>
              <h3>{cable.subtitle}</h3>
              {cable.content}
            </div>
          ))}
      </div>

      <div className="cable-links-right">
        {cableData.map((cable, idx) => (
          <p
            key={idx}
            className={selectedCable === cable.title ? "active-link" : ""}
            onClick={() => setSelectedCable(cable.title)}
            style={{ cursor: "pointer" }}
          >
            {cable.title}
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

export default Cables