import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Country = () => {
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { name } = useParams()

  const fetchCountryData = async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${name}`)
    const data = await res.json()
    setCountry(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchCountryData()
  }, [name])

  return (
    <>
      {isLoading ? <h1 className='flex items-center justify-center h-screen text-4xl uppercase tracking-widest text-gray-900 dark:text-white lg:text-7xl font-bold'>Loading...</h1> : 
      <section className='pt-32 xl:max-w-7xl xl:mx-auto px-5 xl:px-0'>
        <Link to="/">&larr; Back</Link>
        {country.map(({name, region, capital, tld }) => (

          <article key={name}>
            <h2 className='text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8'>{name}, {" "} <span className='font-light text-2xl lg:text-4xl'>{capital}</span></h2>
            <ul>
              <li className='text-gray-900 dark:text-white lg:text-lg'>Top Level Domain {tld}</li>
              <li className='text-gray-900 dark:text-white lg:text-lg'>Region: {region}</li>
            </ul> 
          </article>
        ))}
      </section> }

    </>
  )
}

export default Country