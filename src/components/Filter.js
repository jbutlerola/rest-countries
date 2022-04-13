import React from 'react'
import { useState, useEffect } from 'react'

const Filter = ({searchCountries, searchInput, setCountries}) => {

  const region = [
    {
      name: "Africa",
    },
    {
      name: "America",
    },
    {
      name: "Asia",
    },
    {
      name: "Europe",
    },
    {
      name: "Oceania",
    },
  ]

  const fetchCountryByRegion = async (region) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await res.json()
    // TODO: figure out why region will not be put on url 
    // setCountries(data)
  }


  useEffect(() => {
    fetchCountryByRegion()
  }, [])


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
         <select className=' py-2 px-4 rounded shadow ml-5 md:mr-5 md:ml-0'
          name="select" 
          id="select"
          value={region.name}
          onChange={(e) => fetchCountryByRegion(e.target.value)}
          >
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