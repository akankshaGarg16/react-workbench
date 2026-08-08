import { useState } from 'react'
import StarRatings from './Components/StarRatings'
import './App.css'

function App() {
  const [ratings, setRatings] = useState(0);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <StarRatings />
    </div>
  )
}

export default App
