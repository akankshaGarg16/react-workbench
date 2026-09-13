import { useState } from 'react'
import './App.css'
import Memes from './Memes'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div><Memes /></div>
  )
}

export default App
