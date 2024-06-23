import React from 'react'
import { useLocation } from 'react-router-dom'
import "./index.css"

function ThankYou() {
  const location = useLocation()
  const { selectedRating } = location.state || { selectedRating: 0 }

  return (
    <div className='thank-you-container'>
      <div className='thank-you-image'>
        <img src="./images/illustration-thank-you.svg" alt="illustration-thank-you" />
      </div>
      <div className='selected-score'>
        <p>You selected {selectedRating} out of 5</p>
      </div>
      <div className='rating-info'>
        <h2>Thank you!</h2>
        <p className='message' style={{ marginTop: '0.5em', color: 'hsl(217, 12%, 63%)' }}>
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}

export default ThankYou
