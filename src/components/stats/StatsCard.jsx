import React from 'react'
import "./stats.css"

const StatsCard = ({title, content}) => {
  return (
        <div className="stats-card-container">
            <h4>{title}</h4>
            <p>{content}</p>
        </div>


  )
}

export default StatsCard