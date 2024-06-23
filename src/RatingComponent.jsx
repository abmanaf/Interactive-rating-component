import React, { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

function RatingComponent() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([1,2,3,4,5])
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/ThankYou", { state: { selectedRating: count } })
  }
  
  return (
    <div className='rating-container'>
      <img src="./images/icon-star.svg" alt="icon-star" />
      <div className='rating-info'>
        <h2>How did we do?</h2>
        <p className='message' style={{ marginTop: '0.5em', color: 'hsl(217, 12%, 63%)' }}>
          Please let us know how we did with your support request.
          All feedback is appreciated to help us improve our offering!
        </p>
      </div>
      <div>
        <div className='rating-btn'>
          {list.map(value => (
            <button
              key={value}
              className="rate-btn"
              onClick={() => setCount(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <button onClick={handleNavigate} className="submitBtn" type="submit">SUBMIT</button>
      </div>
    </div>
  )
}

export default RatingComponent
