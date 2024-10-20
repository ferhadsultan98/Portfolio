import React, { useRef } from "react";
import "./MainOne.css";
import HelloImg from "../../assets/hi.png";
import FarhaddJPG from "../../assets/farhad.jpg";
import Projects from "../Projects/Projects";
import AboutSection from "../About/About";
import { FaDownload } from "react-icons/fa";

const MainOne = () => {
  // Projects bölümüne referans
  const projectsRef = useRef(null);

  // Projects butonuna tıklandığında kaydırma işlemi
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="CommonMenu">
      <div className="MainOne">
        <div className="left">
          <div className="hi">
            <h1>Hi, I am Farhad!</h1>
            <img src={HelloImg} alt="" />
          </div>
          <div className="frontend">
            <div className="up">
              <h1>FrontEnd</h1>
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
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1gSe7ubc4RmjlAA47F6RfIQUsCvlAkHdn&export=download">
              {" "}
              <button className="downloadbutton" type="button">
                <span className="downloadbutton__text">Download CV</span>
                <span className="downloadbutton__icon">
                  <FaDownload className="svg" />
                </span>
              </button>
            </a>

            <button className="ProjectButtonn" onClick={scrollToProjects}>
              <span className="ProjectButtonn-content">Projects</span>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="shadow-div"></div>
          <div className="myphoto">
            <img src={FarhaddJPG} alt="" />
          </div>
        </div>
      </div>
      <div className="ProjectsSection" ref={projectsRef}>
        <Projects />
      </div>
      <div className="AboutSection">
        <AboutSection />
      </div>
    </div>
  );
};

export default MainOne;
