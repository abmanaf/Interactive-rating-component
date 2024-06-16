import React from 'react'
import './index.css'

function ThankYou() {
  return (
    <>
     <div className='rating-container'>
      <div className='thank-you-image'>
        <img src="./images/illustration-thank-you.svg" alt="icon-star" />
      </div>
      <div className='selected-score'>
        <p>You select 1 out of 5</p>
      </div>
      <div className='rating-info'>
      <h2>Thank you!</h2>
      <p className='message' style={{marginTop: '0.5em', color: 'hsl(217, 12%, 63%)',}}>
        We appreciate you taking the time to gice a rating. if you ever need more support, don't hesitate to get in touch!
      </p>
      </div>
     </div>
    </>
  )
}

export default ThankYou