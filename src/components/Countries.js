import React from 'react'
import { useState, useEffect } from 'react'

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchCountries = async() => {
    const res = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await res.json()

    setCountries(data)
    console.log(data)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <>
      <section className='grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:container 2xl:mx-auto'>
        {countries.map(({name, region, capital }) => (
          <article key={name.common} className="bg-white rounded shadow p-5">
            <h2 className='font-bold text-grey-900 text-2xl mb-3'>{name.common}</h2>
            <ul>
              <li>Capital: {capital}</li>
              <li>Region: {region}</li>
            </ul>
          </article>
        ))}
      </section>
    </>
  )
}

export default Countries;