import React, { useEffect, useState } from 'react';
import './Projects.css';
import projectsData from './projects.json'; 
import { IoIosCloseCircleOutline } from "react-icons/io";

const Projects = () => {
  const [cards, setCards] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    setCards(projectsData);
    const cardElements = document.querySelectorAll(".card");
    let delay = 0;

    cardElements.forEach(el => {
      el.style.animation = "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
      el.style.animationDelay = delay + "s";
      delay += 0.2;
    });
  }, []);

  const openModal = (images) => {
    setCurrentImages(images);
    setModalOpen(true);
    setTimeout(() => {
      const overlay = document.querySelector('.modal-overlay');
      overlay.classList.add('active');
    }, 10); 
  };

  const closeModal = () => {
    const overlay = document.querySelector('.modal-overlay');
    overlay.classList.remove('active');
    setTimeout(() => {
      setModalOpen(false);
    }, 500);
  };

  return (
    <div className="ProjeContainer">
      <h1>Projects</h1>
      <hr className="project-separator" />
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-main">
              <img src={card.imgSrc} alt={`${card.title} Logo`} />
            </div>
            <div className="card-hover">
              <a href="#">
                <i className="lni lni-github-original"></i>
              </a>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className="view-more" onClick={() => openModal(card.images)}>View More</button>
              <div className="tags">
                {card.tags.map((tag, tagIndex) => (
                  <div className="tag" key={tagIndex}>{tag}</div>
                ))}
              </div>
            
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal Content */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}><i><IoIosCloseCircleOutline /></i></button>
            <div className="slideshow">
              {currentImages.map((image, index) => (
                <img src={image} alt={`Slide ${index}`} key={index} className="slide" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
