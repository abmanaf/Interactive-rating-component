import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RatingComponent from './RatingComponent'
import ThankYou from './ThankYou'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RatingComponent/>}/>
        <Route path='/ThankYou' element={<ThankYou/>} />
      </Routes>
    </div>
  )
}

export default App