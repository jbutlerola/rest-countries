import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Country = () => {
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { capital } = useParams()

  const fetchCountryData = async () => {
    const res = await fetch(`https://restcountries.com/v2/capital/${capital}`)
    const data = await res.json()
    setCountry(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchCountryData()
  }, [capital])

  return (
    <>
      {isLoading ? <h1 className='flex items-center justify-center h-screen text-4xl uppercase tracking-widest text-gray-900 dark:text-white lg:text-7xl font-bold'>Loading...</h1> : 
      <section className='pt-32 xl:max-w-7xl xl:mx-auto px-5 xl:px-0 h-screen'>
        <Link to="/" className='bg-blue-500 py-2 px-4 rounded shadow text-white font-bold tracking-wide pl-4 pr-6 pt-2 pb-3 animate-pulse'>&larr; Back</Link>
        {country.map(({name, region, capital }) => (
          
          <article key={name}>
            <h2 className='text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-10 mb-5'>{name}, {" "} <span className='font-light text-2xl lg:text-4xl'>{capital}</span></h2>
            <ul>
              <li className='text-gray-900 dark:text-white lg:text-lg'> Top Level Domain: {}</li>
              <li className='text-gray-900 dark:text-white lg:text-lg'>Region: {region}</li>
            </ul> 
          </article>
        ))}
      </section> }
    </>
  )
}

export default Country