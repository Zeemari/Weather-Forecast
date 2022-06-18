import React from 'react'
import {FiXOctagon} from 'react-icons/fi'

const Error = ({error}) => {
  return (
    <>
     <main>
         <div className='failed-error'>
            <i> {FiXOctagon} </i>
            <p>Check Your Connection: <span> {error} </span> </p>
            <button onClick={() => {
                window.location.reload()
            }} >Refresh Please</button>
         </div>
     </main>
    </>
  )
}

export default Error