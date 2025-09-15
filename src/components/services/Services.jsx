import React from 'react'
import ServicesCard from './ServicesCard'
import s1 from "../../asset/parking_brake_cable.jpg"
import s2 from "../../asset/parking_brake_lever.jpg"
import s3 from "../../asset/Automobile_starter.jpeg"
import s4 from "../../asset/deka-gold-ultimate_batteries.png"
import s5 from "../../asset/alternator.jpg"
import s6 from "../../asset/hydraulic_hose.webp"

import "./services.css"

const Services = () => {
  return (
    <div className='services'>
        <div className="services-container">
            <div className="services-header">
                <h1>Our Services</h1>
                <p>Madison Power Systems has provided our customers with a high quality, reliable and affordable product for 58 strong years.</p>
            </div>
            <div className="sevices-display-container">
                <div className="sevices-display">
                    <div className="services-display-smaller services-up">
                        <ServicesCard img={s1} title= "Parking Brake Cable"  />
                        <ServicesCard img={s2} title= "Parking Brake Lever" />
                    </div>
                    <ServicesCard img={s3} title= "Starter" />
                </div>
                <div className="sevices-display">
                    <ServicesCard img={s4} title= "Deka Batteries" />
                    <div className="services-display-smaller services-down">
                        <ServicesCard img={s5} title= "Alternator" />
                        <ServicesCard img={s6} title= "Hydraulic Hose" />
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Services