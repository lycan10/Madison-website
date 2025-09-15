import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import SubHeader from '../../components/header/SubHeader'
import banner from "../../asset/323-HDCL_Heavy-Duty-Control-Lever_1200x1200-sRGB.png"
import Footer from '../../components/footer/Footer'
import Reviews from '../../components/reviews/Reviews'
import CTA from '../../components/cta/CTA'
import "../cables/cables.css"

import mountingwedge from "../../asset/accessoryImages/mountingwedge.jpg"
import mountingtower from "../../asset/accessoryImages/mountingtower.jpg"
import mountingflange from "../../asset/accessoryImages/mountingflange.jpg"

const Control = () => { 

    const controlData = [
        {
            title: "Heavy Duty Levers",
            content: (
              <>
                <p>
                  The Heavy Duty Levers are engineered for rugged applications to control valves or
                  pumps for both in-cab and outside-cab use. Designed with a 5:1 mechanical advantage,
                  they are compatible with push-pull cable sizes: 4 series (1/4-28 cable end threads) or
                  6 series (5/16-24 cable end threads). Options are available with or without push-button
                  operation.
                </p>
                <p>
                  Operating loads range from 125 to 400 pounds depending on cable series and travel. Each
                  lever features a lightweight design, pivot bushing, and superior corrosion resistance
                  provided by a durable black matte Electrocoat finish, meeting 5% Salt-Spray, 336–500
                  hours, with zinc-plated fasteners.
                </p>
                <div className="product-links">
                  <h4>Construction Diagram (.pdf format):</h4>
                  <ul>
                    <li>
                      <a href="levers/heavy_duty_levers.pdf" target="_blank">
                        Heavy Duty Levers – Construction Diagram
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )
          },
          {
            title: "Friction Throttle Control",
            content: (
              <>
                <p>
                  Built for tough and demanding environments such as mining and construction equipment,
                  drilling rigs, and both on-highway and off-highway machinery, the Friction Throttle
                  Control provides adjustable throttle control that stays firmly in place.
                </p>
                <p>
                  The friction pad is formulated from a special material that delivers a positive feel,
                  reliable control, and stable settings even in environments with heavy vibration and
                  contaminants. This hand-operated control connects to a push-pull cable attached to the
                  engine governor or other apparatus requiring variable control.
                </p>
                <div className="product-links">
                  <h4>Construction Diagram (.pdf format):</h4>
                  <ul>
                    <li>
                      <a href="levers/friction_throttle.pdf" target="_blank">
                        Friction Throttle Control – Construction Diagram
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )
          },
          {
            title: "T-Handle Shifters",
            content: (
              <>
                <p>
                  T-Handle Shifters are proven designs built for rugged performance in trucks and
                  buses. With flexible configuration options, these shifters can also be custom
                  assembled to meet specific application requirements.
                </p>
                <div className="product-links">
                  <h4>Construction Diagram (.pdf format):</h4>
                  <ul>
                    <li>
                      <a href="levers/t_handle_shifters.pdf" target="_blank">
                        T-Handle Shifter – Construction Diagram
                      </a>
                    </li>
                  </ul>
                </div>
                <h4>Specifications:</h4>
                <ul>
                  <li>Lamp Illumination: 14 volts, orange lens</li>
                  <li>Switches: Ball type (options for Neutral and/or Reverse)</li>
                  <li>Travel: 3 inches</li>
                  <li>Cable Connection: 4 series (1/4-28) or 6 series (5/16-24)</li>
                  <li>Cable Entry: Push or pull to reverse, 4 hanger positions</li>
                  <li>“2nd Neutral” type available for Allison Transmissions</li>
                </ul>
              </>
            )
          },
          {
            title: "Dump Body Control",
            content: (
              <>
                <p>
                  The NG (New Generation) Dump Body Control is designed for operating pumps, hydraulic
                  spool valves, and PTOs. Built with rugged steel components and heat-treated in
                  critical areas, it features a simple modular construction that delivers the
                  strength and reliability expected from Felsted® mechanical controls.
                </p>
                <p>
                  This “New Generation” line combines proven durability with modern manufacturing
                  technologies to provide a high-value control system for demanding applications.
                </p>
                <p>
                  For added convenience, Felsted® has incorporated a quick-disconnect cable mounting
                  system. With a clamp built directly into the cable mounting bracket, installation
                  requires only a standard ¼ x 1” bolt and locknut, allowing for faster assembly
                  using common hardware available anywhere.
                </p>
                <div className="product-links">
                  <h4>Construction Diagram (.pdf format):</h4>
                  <ul>
                    <li>
                      <a href="levers/ng_dump.pdf" target="_blank">
                        NG Dump Body Control – Construction Diagram
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )
          },
          {
            title: "Valve Controls",
            content: (
              <>
                <p>
                  The Felsted® Remote Valve Operator (RVO) Control System provides efficient remote
                  cable operation of hydraulic spool valves. By positioning the control head within
                  easy reach of the operator, the system eliminates the noise, heat, and safety
                  concerns associated with running high-pressure hydraulic lines into the cab area.
                </p>
                <p>
                  In addition to simplifying installation, the Felsted® system offers greater
                  flexibility in valve placement, allowing operators and engineers more freedom in
                  equipment design. A complete RVO system includes a control head, cable, and valve
                  connection kit.
                </p>
                <p>
                  Designed for ease of installation, operation, and maintenance, Felsted® Remote
                  Valve Control Systems are trusted across industries including agriculture,
                  construction, off-highway trucks, and industrial equipment.
                </p>
                <div className="product-links">
                  <h4>Construction Diagram (.pdf format):</h4>
                  <ul>
                    <li>
                      <a href="levers/rvo_control.pdf" target="_blank">
                        RVO - Remote Valve Control – Construction Diagram
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )
          },
          {
            title: "Mechanical Floor Pedal",
            content: (
              <>
                <p>
                  The Felsted® Mechanical Foot Pedal is the heavy-duty choice for trucks, buses,
                  agricultural equipment, construction machinery, and virtually any application
                  requiring a reliable foot-operated control.
                </p>
                <p>
                  Built from rugged steel stamping, the Felsted® pedal delivers superior rigidity,
                  durability, and reliability compared to aluminum die castings. It features
                  oil-impregnated bronze bearings that significantly outlast nylon alternatives.
                </p>
                <p>
                  For easy installation, the pedal mounts to the floor with a three-point system and
                  incorporates a keyhole-style cable hub mount requiring only a single fastener. It
                  also provides 360° adjustability for cable entry and is available with either
                  two-inch or three-inch travel and compatible with three or four series cables.
                </p>
                <p>
                  For added versatility, a modulator can be connected directly to the pedal,
                  eliminating the need for cumbersome linkages to the engine governor. Other features
                  include a self-cleaning boot that deflects debris, a double torsion return spring,
                  adjustable pedal height, and a factory-assembled heel rest.
                </p>
                <p>
                  When paired with Felsted® cables and modulators, the Felsted® Mechanical Foot Pedal
                  provides a complete, dependable control system.
                </p>
                <div className="product-links">
                  <h4>Construction Diagram (.pdf format):</h4>
                  <ul>
                    <li>
                      <a href="levers/mechanical_floor_pedal.pdf" target="_blank">
                        Mechanical Floor Pedal – Construction Diagram
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )
          },
          {
            title: "Electronic Floor Pedal",
            content: (
              <>
                <p>Click for Construction Diagram (.pdf format)</p>
                <ul>
                    <li>
                    <a href="levers/electronic_foot_pedal.pdf" target="_blank">
                        Electronic Floor Pedal – Construction Diagram
                      </a>
                    </li>
                </ul>
          
                <h4>Electronic Foot Pedal:</h4>
                <p>
                  The floor pedal delivers a precision signal that interacts with the engine's electronic
                  fuel management systems. Polymer components create a lightweight pedal, as much as half
                  the weight of current pedals in the marketplace. This fast-reacting pedal provides smooth
                  driver operation, and features a durable, longer-life potentiometer. Quality testing
                  ensures reliability and durability.
                </p>
              </>
            )
          },
          
          {
            title: "Electronic Vernier",
            content: (
              <>
                <p>
                  The Felsted® Electronic Vernier (EV2) is engineered to deliver precise variable
                  engine speed adjustment for electronically controlled stationary engines or remote
                  operation on mobile equipment. Compatible with most electronically-controlled diesel
                  engines, the EV2 provides dependable performance in a compact design.
                </p>
                <p>
                  Featuring a large 2-1/4” diameter knob, the EV2 offers smooth regulation from idle
                  to wide open throttle across seven full turns for fine speed control. To prevent
                  accidental over-revving, the knob cannot simply be pulled to wide open throttle—it
                  must be turned. A quick shut-down feature is also built in, activated by pushing the
                  knob inward.
                </p>
                <p>
                  An adjustable friction collar prevents unintended changes in engine speed, while the
                  sealed potentiometer ensures long-lasting reliability against moisture and
                  contaminants. Compact and easy to install, the EV2 requires only a .78” drilled hole
                  and 4.5” clearance behind the dash, with no field adjustment needed thanks to
                  factory pre-setting.
                </p>
                <div className="product-links">
                  <h4>Construction Diagram (.pdf format):</h4>
                  <ul>
                    <li>
                      <a href="levers/ev2_vernier.pdf" target="_blank">
                        EV2 Vernier Hand Control – Construction Diagram
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )
          },
          {
            title: "Accessories",
            content: (
              <>
                <p>Click for Construction Diagram (.pdf format)</p>
                <ul>
                    <li>
                      <a href="levers/accessories.pdf" target="_blank">
                        Accessories – Construction Diagram
                      </a>
                    </li>
                  </ul>
                <h4>Mounting Flange: 59002</h4>
                <p>
                  Made of prefabricated steel with a matte black epoxy finish. Simplifies a top mount
                  installation and is perfect for vehicle conversions. Kit is complete with control
                  mounting hardware. Use with cable hanger bracket in any position.
                </p>
                <img src={mountingflange} alt="mounting_flange" />
                <p><em>Mounting Flange Image</em></p>
             
          
                <h4>Switch and Pin Set Kit</h4>
                <ul>
                  <li>50036-1</li>
                  <li>Switch Set 50036-2</li>
                  <li>Pin Set Kit 50036-3</li>
                  <li>Finger Release Kit 59193-1</li>
                  <li>T-Handle Kit 59228</li>
                </ul>
          
                <h4>Transmission Connection Kits</h4>
                <p>Unassembled Universal Kit</p>
                <table>
                  <thead>
                    <tr>
                      <th>Oil Pan Mount</th>
                      <th>Machine Pad Mount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4 Series 59004</td>
                      <td>4 Series 59369-1</td>
                    </tr>
                    <tr>
                      <td>6 Series 59006</td>
                      <td>6 Series 59369-2</td>
                    </tr>
                    <tr>
                      <td>4 &amp; 6 Series 59005</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
          
                <p>
                  Kits to be assembled in field to fit instillation required.
                  <br />
                  Mount to machine pad above the transmission shift arm. They do not mount to oil pan
                  bolts as seen in the Transmission Connection Kits Diagram.
                  <br />
                  *HT Series, MT 654 with 4.5" oil pan. For refuse and HD applications.
                </p>
          
                <h4>Mounting Wedge: 59009</h4>
               
                <p>
                  A cast aluminum wedge with a matte black epoxy finish. Raises the shifter to a 17°
                  angle from desired mounting surface. Kit is complete with control mounting hardware.
                  Use with cable hanger bracket in any position except #1 or #2.
                </p>
                <img src={mountingwedge} alt="mounting_wedge" />
                <p><em>Mounting Wedge Image</em></p>
                
          
                <h4>Mounting Tower: 59000 (13") &amp; 59035 (9")</h4>
                <p>
                  A prefabricated tower with a matte black epoxy finish. Features access panels on both
                  sides for easy installation and adjustment. A rubber floor gasket is included with
                  tower. Kit is complete with control mounting hardware. For use with cable hanger
                  positions #3, #4, #7, and #8 ONLY.
                </p>
                <img src={mountingtower} alt="mounting_tower" />
                <p><em>Mounting Tower Image</em></p>
          
                <h4>Push-Pull Shift Cables (Used with Controls and Kits)</h4>
                <ul>
                  <li>4 series 1/4 - 28 thread, base part number: 100-4333 length (recommended)</li>
                  <li>6 series 5/16 - 24 thread, base part number: 100-6333 length</li>
                </ul>
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
      const [selectedCable, setSelectedCable] = useState(controlData[0].title);
  return (
    <div className='cables'>
          <Navbar />
          <SubHeader 
  img={banner} 
  title="Control Lever" 
  content="Heavy-duty control levers designed for precise handling, smooth operation, and long-lasting performance in demanding environments." 
/>


          
            <div className="cable-links-container">
      <div className="cable-links-left fade-in">
        {controlData
          .filter((control) => control.title === selectedCable)
          .map((control, idx) => (
            <div className="product-details" key={idx}>
              <h1>{control.title}</h1>
              <h3>{control.subtitle}</h3>
              {control.content}
            </div>
          ))}
      </div>

      <div className="cable-links-right">
        {controlData.map((cable, idx) => (
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

export default Control