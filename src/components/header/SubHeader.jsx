import React from 'react'
import banner from "../../asset/banner.png"
import "./header.css"

const SubHeader = ({img, title, content}) => {
  return (
    <div className='header subheader'>
        <img src={img} alt={title} />
        <div className="header-content subheader-content">
            <h3>Madison Power Systems</h3>
            <h1>{title}</h1>
            <p>{content}</p>
            {/* <div className="navbar-cta header-cta">
                <div className="navbar-quote">
                    <p>Get a Free Quote</p>
                </div>
                <div className="navbar-book">
                <p>Call Now</p>
                </div>
            </div> */}
        </div>
        
    </div>

  )
}

export default SubHeader