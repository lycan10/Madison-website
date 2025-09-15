import React from 'react'
import s1 from "../../asset/pushpull_cable.jpg"


import "./stats.css"
import StatsCard from './StatsCard'

const Stats = () => {
  return (
    <div className='stats'>
        <div className="stats-container">
            <div className="services-header">
                <h1>Our Numbers</h1>
            </div>
            <div className="stats-display-container">
                <div className="stats-image">
                    <img src={s1} alt="" />
                </div>
                    <div className="stats-main-right">
                        <div className="stats-main-text">
                            <p>Since 1967, Madison Power Systems has built a reputation for solving equipment challenges with precision and reliability. What started as a small alternator and starter rebuild shop has grown into a trusted source for custom control cables, parking brake systems, and specialty components across automotive, commercial, and industrial markets.</p>
                            <p>Today, we focus on delivering hard-to-find and discontinued cables, along with custom solutions tailored to unique applications. From vintage farm equipment to modern utility trailers, our expertise ensures that critical machines stay in service with dependable, high-quality parts.</p>
                        </div>
                    <div className="stats-display">
                        <StatsCard title="13000+" content= "Happy Clients" />
                        <StatsCard title="5" content= "Professionals" />
                        <StatsCard title="100,000+" content= "Cables built" />
                        <StatsCard title="1000+" content= "Re-built alternators & Starters" />
                        <StatsCard title="58+" content= "Years of Experience" />
                        <StatsCard title="20+" content= "Trusted Partners" />
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Stats