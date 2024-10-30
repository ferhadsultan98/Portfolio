import React from "react";
import "./CVSection.css";

const CVSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="cv-section">
      <h2 className="cv-title">Curriculum Vitae</h2>
      <div className="cv-content">
        <button
          className="circle-button"
          onClick={() => scrollToSection("education")}
        >
          E
        </button>
        <div id="education" className="cv-item">
          <h3 className="cv-item-title">Education</h3>
          <ul>
            <li>BSc in Computer Science, University of XYZ (2019 - 2023)</li>
            <li>Web Development Bootcamp, ABC Academy (2022)</li>
          </ul>
        </div>
        <button
          className="circle-button"
          onClick={() => scrollToSection("experience")}
        >
          X
        </button>
        <div id="experience" className="cv-item">
          <h3 className="cv-item-title">Experience</h3>
          <ul>
            <li>Frontend Developer at Company A (2023 - Present)</li>
            <li>Intern at Company B (2022 - 2023)</li>
          </ul>
        </div>
        <button
          className="circle-button"
          onClick={() => scrollToSection("languages")}
        >
          L
        </button>
        <div id="languages" className="cv-item">
          <h3 className="cv-item-title">Programming Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML & CSS</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CVSection;
