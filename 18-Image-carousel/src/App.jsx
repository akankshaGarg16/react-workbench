import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const imgs = [
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1686494270034-2ec64ea32c0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1545641203-7d072a14e3b2?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/35419119/pexels-photo-35419119.jpeg?_gl=1*148rttc*_ga*MjAwNDIzNjI3MS4xNzkwNzYzNjkx*_ga_8JE65Q40S6*czE3OTA3NjM2OTEkbzEkZzEkdDE3OTA3NjM2OTUkajU2JGwwJGgw',
    'https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]
  const [active, setActive] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      handleNext();
    },4000)
    return () => clearInterval(interval)
  },[active])

  const handlePrev = () => {
    setActive(active - 1 >= 0 ? active - 1 : imgs.length - 1)
  }

  const handleNext = () => {
    setActive((active + 1)%imgs.length)
  }

  return (
    <div className='flex justify-center'>
      <button className='font-bold text-2xl' onClick={handlePrev}>&lt; Prev</button>
      <img className='m-2 p-2 w-200 h-100' src={imgs[active]} alt="walpaper" />
      <button className='font-bold text-2xl' onClick={handleNext}>Next &gt;</button>
    </div>
  )
}

export default App
