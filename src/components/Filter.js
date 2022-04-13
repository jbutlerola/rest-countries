import React from 'react'

const Filter = ({searchCountries, searchInput}) => {
  return (
    <>
      <div className='flex items-start justify-between flex-col md:flex-row md:items-center md:justify-between 2xl:container 2xl:mx-auto'>
        <input type="search" name="search" id="search" 
        placeholder='Search by country name'
        value={searchInput}
        onChange={(e) => searchCountries(e.target.value)}
        className='py-2 px-4 rounded shadow placeholder-gray-900 ml-5 lg:w-1/2 sm:w-full dark:placeholder-white dark:'
        autoComplete='off'
         />
         <select className='ml-5' name="select" id="select">
           <option value="Africa">Africa</option>
           <option value="Americas">Americas</option>
           <option value="Asia">Asia</option>
           <option value="Europe">Europe</option>
           <option value="Oceania">Oceania</option>
         </select>
      </div>
    </>
  )
}

export default Filter