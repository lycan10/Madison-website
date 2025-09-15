import React from 'react'

import "./about.css"

const About = () => {
  return (
    <div className='about'>
        <div className="about-container">
            <div className="about-title">
                <h1>About</h1>
            </div>
            <div className="about-content">
                <p>
                <span style={{fontWeight:"bold"}}>Madison Power Systems</span> has been solving tough equipment problems since 1967. What began as a small alternator and starter shop focused on rebuilding electrical components has grown into a trusted name in custom cable solutions for automotive, commercial, and industrial applications. </p>

<p>Over the years, we expanded our capabilities beyond electrical rebuilds, adding control cables, parking brake systems, levers, and components to meet the evolving needs of our customers. Today, we specialize in custom parking brake cables and levers for trailers, as well as hard-to-find or discontinued control cables for equipment that's no longer supported by the OEM.</p>

<p>From vintage tractors to modern utility trailers, we help keep essential equipment in service with precision-built parts and personalized support. If you need a cable that’s no longer made—or one that never existed until now—we’re the team that can build it.
                </p>
                <div className="about-learn-more">
                    <p>Learn More</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About