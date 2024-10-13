import React from 'react'
import './MainOne.css'
import HelloImg from '../../assets/hi.png'
import FarhaddJPG from '../../assets/farhad.jpg'

const MainOne = () => {
  return (
    <div className="MainOne">
  <div className="left">
    <div className="hi">
      <h1>Hi, I am Farhad!</h1>
      <img src={HelloImg} alt="" />
    </div>
    <div className="frontend">
      <div className="up">
        <h1>Front</h1>
        <h1>end</h1>
      </div>
      <h1>Developer</h1>
    </div>
    <div className="info">
      <p>
        I am a Frontend developer based in Azerbaijan, I'll help you build
        beautiful websites your users will love.
      </p>
    </div>
    <div className="buttons">
      <button>
        <a href="about/about.html">My Resume</a>
      </button>
      <button>
        <a href="projects/projects.html">My Projects</a>
      </button>
    </div>
  </div>
  <div className="right">
    <div className="myphoto">
      <img src={FarhaddJPG} alt="" />
    </div>
  </div>
  </div>
  )
}

export default MainOne