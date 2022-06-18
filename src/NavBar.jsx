import React from 'react'
import {FiInstagram, FiGithub, FiLinkedin, FiGlobe} from 'react-icons/fi'

const NavBar = () => {

  return (
    <nav className="navbar">
        <h1> Weather Forecast </h1>
        <div className="content">
            <a href='/' style={{ borderRadius:'6px', color: '#ffffff', backgroundColor: '#34b7a7' }}>Home</a>
            <a href='/funfact' style={{ borderRadius:'6px', color: '#ffffff', backgroundColor: '#34b7a7' }}>FunFact</a>
        </div>
        <div className="fig-nav">
            <ul>
                <li>
                    <a href='https://www.instagram.com/zeeemari/' rel='noopener noreferrer' target='_blank' ></a>
                    <FiInstagram />
                </li>
                <li>
                    <a href='https://github.com/Zeemari/' rel='noopener noreferrer' target='_blank'></a>
                    <FiGithub />
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/zainab-musa-3a38aa174/' rel='noopener noreferrer' target='_blank'></a>
                    <FiLinkedin />
                </li>
                <li>
                    <a href='https://zeeresumee.netlify.app/' rel='noopener noreferrer' target='_blank'></a>
                    <FiGlobe />
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar