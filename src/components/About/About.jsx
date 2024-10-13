import React from 'react'
import './About.css'
import FarhadJPG from '../../assets/farhad.jpg'

const About = () => {
  return (
    <div className="AboutContainer">
    <div className="left">
      <h1>Aboutme</h1>
      <h1>.</h1>
    </div>
    <div className="right">
      <div className="myphoto">
        <img src={FarhadJPG} alt="" />
      </div>
    </div>
    </div>
  )
}

export default About