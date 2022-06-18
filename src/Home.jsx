import React, { useState, useEffect } from 'react'
import {FiSearch} from 'react-icons/fi'

import {useFetch} from './Fetch';
import {Error, Card, Bcard, Lcard} from './components'

const Home = () => {
  const {loading, error, fetchdata} = useFetch();
  const [weatherData, setWeatherData]= useState();
  const [keyword, setKeyword]= useState('');

  const getWeatherData = async(e) => {
    try{
      const data = await fetchdata(keyword)
      setWeatherData(data);
      console.log(weatherData);
    } catch (error) {}
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getWeatherData();
  }
  useEffect(()=>{
    getWeatherData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if (loading) return <h1>loading...</h1>
 if (error) {
   return (
     <Error error={error} />
   )
 }

  return (
    <div>
      <div className="search">
        <form onSubmit={handleFormSubmit} >
          <input type='text' value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder='Type something here!' />
          <div className="submit">
            <button type='submit'> <FiSearch /> </button>
          </div>
        </form>
      </div>
      <div className='container_fluid'>
        <div className='container_item_1'>

        </div>
        <div className='container_item_2'>
          {weatherData && (
            <Card weatherData={weatherData} />
          )}
          <div className="bottom-card">
            <Bcard weatherData={weatherData} />
          </div>
          <div className="last-card">
            <Lcard weatherData= {weatherData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;