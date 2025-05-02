import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A responsive dashboard for e-commerce platforms with analytics, inventory management, and order processing features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
      repoLink: "https://github.com/username/ecommerce-dashboard",
      liveLink: "https://ecommerce-dashboard.vercel.app",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      repoLink: "https://github.com/username/task-management",
      liveLink: "https://task-management-app.vercel.app",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and experience with a unique starry night theme.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "CSS", "Canvas API", "Framer Motion"],
      repoLink: "https://github.com/username/portfolio",
      liveLink: "https://portfolio-website.vercel.app",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A weather application that provides current conditions and forecasts for locations worldwide.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "OpenWeather API", "Styled Components"],
      repoLink: "https://github.com/username/weather-app",
      liveLink: "https://weather-forecast-app.vercel.app",
    },
  ]

  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <p className="projects-intro">Here are some of my recent projects. Click on the cards to learn more.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    Repository
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
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
    </div>
  )
}

export default Projects
