import React from 'react'
import {FiArrowUp} from 'react-icons/fi'

const Bcard = ({weatherData}) => {
  return (
    <div className='bcard'>
        <div className="bcard-style">
        <div className="card-content">
            <h4>Temperature</h4>
           <p>Love it!</p>
           <h3> <FiArrowUp /> {Math.round((weatherData?.main.temp_max - 32) * (5 / 9))} &deg; </h3>
        </div>
        </div>
        <div className="bcard-style2">
        <div className="min-temp">
            <h4> Presure </h4>
            <p>Enjoy it!</p>
            <h3> {weatherData?.main.pressure}pa </h3>
        </div>
        </div>
    </div>
  )
}

export default Bcard