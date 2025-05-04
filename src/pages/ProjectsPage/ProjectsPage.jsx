"use client"

import { useState } from "react"
import "./ProjectsPage.css"
import art1 from "../../assets/ART1.jpg"
import art2 from "../../assets/ART2.jpg"
import art3 from "../../assets/ART3.jpg"
import Grap1 from "../../assets/gp1.png"
import Grap2 from "../../assets/gp2.png"
import Grap3 from "../../assets/gp3.png"
import Grap4 from "../../assets/gp5.png"
import Grap5 from "../../assets/calcu.png"
import Grap6 from "../../assets/poke.png"

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Scientific Calculator",
      description:
        "A responsive scientific calculator built with React, featuring advanced mathematical functions and a user-friendly interface.",
      image: Grap5,
      technologies: ["React", "CSS", "JavaScript", "Responsive Design"],
      repoLink: "https://github.com/lokolokolok/scientific_cal.git",
      liveLink: "https://scientificcalcu.netlify.app/",
      category: "web",
    },
    {
      id: 2,
      title: "Pokemon Battle of Stats",
      description:
        "A web application that allows users to battle pokemon by comparing the Pokemon stats against each other, the higher the stats is the winner.",
      image: Grap6,
      technologies: ["React", "CSS", "JavaScript"],
      repoLink: "https://github.com/lokolokolok/pokemon.git",
      liveLink: "https://pokemonstatslbattle.netlify.app/",
      category: "web",
    },
    {
      id: 3,
      title: "TechnoBlade Tribute ",
      description:
        "A digital painting tribute to the late YouTuber Technoblade, showcasing a blend of vibrant colors and dynamic composition and reminding ourselves that his Legends will never die",
      image: art1,
      technologies: ["ibispaint", "Digital Painting"],
      category: "digital",
    },
    {
      id: 4,
      title: "I Messed Up",
      description:
        "An expression in digital painting exploring themes of chaos and self-reflection, using bold colors.",
      image: art2,
      technologies: ["ibispaint", "Digital Painting"],
      category: "digital",
    },
    {
      id: 5,
      title: "My Inner Persona",
      description:
        "A digital painting exploring the concept of inner personas, using surreal elements and vibrant colors.",
      image: art3,
      technologies: ["Digital Painting", "Ibispaint", "Environment Design"],
      category: "digital",
    },
    {
      id: 6,
      title: "Improved 'the butterfly effect' poster",
      description:
        "a improved version of the butterfly effect poster, showcasing a balance of vibrant colors and dynamic composition.",
      image: Grap1,
      technologies: ["Canva", "Digital Illustration", "Editorial Design"],
      category: "graphic",
    },
    {
      id: 7,
      title: "Eyes are the window to the soul",
      description:
        "a typography poster that explores the concept of eyes as windows to the soul, using a blend of vibrant color such as red that symbolizes blood.",
      image: Grap2,
      technologies: ["Photoshop", "Digital Illustration", "Editorial Design"],
      category: "graphic",
    },
    {
      id: 8,
      title: "Save the World",
      description:
        "typography poster that explores the concept of saving the world, using a blend of various colors and forming shapes using words.",
      image: Grap4,
      technologies: ["Illustrator", "Digital Illustration", "Editorial Design"],
      category: "graphic",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="projects-page-container">
      <div className="projects-page-content">
        <h1 className="projects-page-title gradient-text text-outline">Projects</h1>
        <p className="projects-intro">Here are some of my recent projects. Click on the cards to learn more.</p>

        <div className="project-filters">
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            All
          </button>
          <button className={`filter-btn ${filter === "digital" ? "active" : ""}`} onClick={() => setFilter("digital")}>
            Digital Art
          </button>
          <button className={`filter-btn ${filter === "graphic" ? "active" : ""}`} onClick={() => setFilter("graphic")}>
            Graphic Designs
          </button>
          <button className={`filter-btn ${filter === "web" ? "active" : ""}`} onClick={() => setFilter("web")}>
            Web Development
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => handleProjectClick(project)}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <span className="project-link">View Details</span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title gradient-text text-outline">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-modal-overlay" onClick={closeProjectModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeProjectModal}>
                &times;
              </button>

              <div className="modal-content-wrapper">
                <div className="modal-image">
                  <img src={selectedProject.image || "/placeholder.svg"} alt={selectedProject.title} />
                </div>

                <div className="modal-content">
                  <h2 className="modal-title gradient-text text-outline">{selectedProject.title}</h2>
                  <p className="modal-description">{selectedProject.description}</p>

                  <div className="modal-technologies">
                    <h3>Technologies Used:</h3>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(selectedProject.repoLink || selectedProject.liveLink) && (
                    <div className="modal-links">
                      {selectedProject.repoLink && (
                        <a
                          href={selectedProject.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-link"
                        >
                          View Repository
                        </a>
                      )}
                      {selectedProject.liveLink && (
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-link"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage
