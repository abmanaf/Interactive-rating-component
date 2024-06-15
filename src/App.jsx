import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='rating-container'>
      <img src="./images/icon-star.svg" alt="icon-star" />
      <div className='rating-info'>
      <h2>How did we do?</h2>
      <p style={{marginTop: '1em'}}>
        Please let us know how we did with yoru support request.
        All feedback is appreciated to help us improve our offering.
      </p>
      </div>
      <div >
        <div className='rating-btn'>
            <button class="rate-btn" id="rateBtn" onclick="userRatingValue='1'">1</button>
            <button class="rate-btn" id="rateBtn" onclick="userRatingValue='2'">2</button>
            <button class="rate-btn" id="rateBtn" onclick="userRatingValue='3'">3</button>
            <button class="rate-btn" id="rateBtn" onclick="userRatingValue='4'">4</button>
            <button class="rate-btn" id="rateBtn" onclick="userRatingValue='5'">5</button>
        </div>
        <button id="submitBtn" type="submit">SUBMIT</button>
        </div>
     </div>
    </>
  )
}

export default App
