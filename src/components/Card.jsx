import React from 'react'
import {BiMapPin} from 'react-icons/bi'
import {WiWindBeaufort1, WiCloudy} from 'react-icons/wi'
import {FiWind} from 'react-icons/fi' 

const Card = ({weatherData}) => {
  return (
    <div className="data-display">
      {/* <img src='/public/Weatherapp.png' alt='page'/> */}
        <div className="left">
          <div className='box'>
          <div className="status-bar">
            <h3> <BiMapPin /> {weatherData?.name}, {weatherData?.sys.country} </h3>
            </div>
            <div className="temp">
                <h4>{weatherData?.wind.deg} &#8451;</h4>
                <p> {weatherData?.weather[0].description} </p>
            </div>
                <div className="info">
                    <h3> <WiWindBeaufort1/> {weatherData.wind.speed}kmh </h3>
                    <h3> <WiCloudy/> {weatherData.wind.gust}s </h3>
                    <h3> <FiWind/> {weatherData.main.humidity}% </h3>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Card;