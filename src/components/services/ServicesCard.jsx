import React from 'react'
import "./services.css"

const ServicesCard = ({img, title, }) => {
  return (
    <div className='servicescard'>
        <div className="services-card-container">
          <div className="services-card-image">
          <img src={img} alt={title} />
          </div>
          <div className="services-card-content">
          <p>{title}</p>
          </div>
         
        </div>

    </div>
  )
}

export default ServicesCard