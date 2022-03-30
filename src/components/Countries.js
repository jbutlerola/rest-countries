import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchCountries = async() => {
    const res = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await res.json()

    setCountries(data)
    console.log(data)
    setIsLoading(false);
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <>
      {isLoading ? <h1 className='flex items-center justify-center h-screen text-4xl uppercase tracking-widest text-gray-900 dark:text-white lg:text-7xl font-bold'>Loading...</h1> : 
        <section className='grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:container 2xl:mx-auto pt-28'>
          {countries.map(({name, region, capital }) => (
            <Link to={`/${name.common}`} key={name.common}> 
              <article className="bg-white rounded shadow p-5 dark:bg-gray-800 dark:text-white hover:dark:bg-gray-700 hover:bg-gray-100 transition-all duration-300">
                <h2 className='font-bold text-grey-900 text-2xl mb-3 '>{name.common}</h2>
                <ul>
                  <li>Capital: {capital}</li>
                  <li>Region: {region}</li>
                </ul>
              </article>
            </Link>
          ))}
        </section>
      }
    </>
  )
}

export default Countries;