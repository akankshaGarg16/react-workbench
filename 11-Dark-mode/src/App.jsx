import { useState, useEffect } from 'react'
import './App.css'
import { Switch } from '@mui/material'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  useEffect(() => {
  // ....................................................
  // copied this from tailwind.css 
    document.documentElement.classList.toggle(
      'dark',
      isDarkMode
    )
  // .......................................................
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">

      <div className="p-8">

        <h1 className="mb-4 text-3xl font-bold">
          Dark Mode Toggle
        </h1>

        <Switch
          checked={isDarkMode}
          onChange={() => setIsDarkMode(prev => !prev)}
        />

        <span className="mt-4 text-lg">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </span>

        <div className="mt-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
          <h2 className="text-xl font-semibold">
            Hello!
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            This card also changes with dark mode.
          </p>
        </div>

      </div>

    </div>
  )
}

export default App
