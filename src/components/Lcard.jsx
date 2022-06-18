import React from 'react'
import {WiWindBeaufort1, WiCloudy} from 'react-icons/wi'

const Lcard = ({weatherData}) => {
  return (
    <div className='bcard'>
        <div className="bcard-style">
        <div className="card-content">
            <h4>Wind</h4>
           <p>Keep the pace!</p>
           {/* <h3> <WiWindBeaufort1 /> {weatherData.wind.speed}kmh </h3> */}
        </div>
        </div>
        <div className="bcard-style2">
        <div className="min-temp">
            <h4> Feels Like </h4>
            <p>Experience it!</p>
            <h3> <WiCloudy/> <span>{weatherData?.main.feels_like}&deg;</span> </h3>
        </div>
        </div>
    </div>
  )
}

export default Lcard;