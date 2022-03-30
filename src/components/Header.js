import React from 'react'
import Toggle from './Toggle'

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between fixed w-full bg-white shadow p-5 dark:bg-gray-800">
        <div>
          <h1 className='font-bold text-gray-900 dark:text-white text-2xl'>Where in the world?</h1>
        </div>

        <div>
          <Toggle />
        </div>
      </header>
    </div>
  )
}

export default Header