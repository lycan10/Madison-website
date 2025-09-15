import React from 'react'

const CTACard = ({icon, title}) => {
  return (
    <div className='ctacard'>
        <div className="cta-icon-container">
            {icon}
        </div>
        <p>{title}</p>
    </div>
  )
}

export default CTACard