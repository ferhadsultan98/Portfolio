import React from 'react'
import './Projects.css'
import InstaEvo from '../../assets/instaevo.png'

const Projects = () => {
  return (
    <div className="ProjectsContainer">
  <div className="myprojects">My projects</div>
  <div className="projectcards">
    <div className="procard">
      <div className="backimg">
        <img src={InstaEvo} alt="" />
        <div className="updiv">
          <h1>Evo Coding Instagram Hesabı</h1>
          <h3>
            <a href="">Sayta keçid</a>
          </h3>
        </div>
      </div>
    </div>
  </div>
  </div>

  )
}

export default Projects;