import React from 'react'
import { useState } from 'react'
import {FaMoon, FaSun} from "react-icons/fa"

const Toggle = () => {
const [darkMode, setDarkMode] = useState(true)

const handleClick = () => {
  document.body.classList.toggle("dark")
  setDarkMode(!darkMode)
}

  return (
    <>
      <button onClick={handleClick}>
        {darkMode ? <FaMoon className='text-gray-900' /> : <FaSun className='text-yellow-500' /> }
      </button>
    </>
  )
}

export default Toggle