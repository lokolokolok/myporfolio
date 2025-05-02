import "./ExperiencePage.css"

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      company: "Creative Minds Group",
      role: "Junior Software Engineer",
      period: "Jan 2023 - Present",
      description:
        "Working on front-end development using React and Next.js. Collaborating with the design team to implement responsive and accessible user interfaces.",
      skills: ["React", "Next.js", "JavaScript", "CSS", "Git"],
    },
    {
      id: 2,
      company: "Tech Solutions Inc.",
      role: "Web Development Intern",
      period: "Jun 2022 - Dec 2022",
      description:
        "Assisted in developing and maintaining company websites. Learned about modern web development practices and worked on optimizing website performance.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      id: 3,
      company: "Digital Arts Academy",
      role: "Graphic Design Assistant",
      period: "Jan 2022 - May 2022",
      description:
        "Supported senior designers in creating visual assets for digital platforms. Gained experience in translating design concepts into web-friendly formats.",
      skills: ["Photoshop", "Illustrator", "UI Design", "Typography"],
    },
  ]

  return (
    <div className="experience-page-container">
      <div className="experience-page-content">
        <h1 className="experience-page-title text-outline">Software Engineering Experience</h1>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card content-container">
              <div className="experience-period">{exp.period}</div>
              <div className="experience-details">
                <h2 className="experience-role text-outline">{exp.role}</h2>
                <h3 className="experience-company">{exp.company}</h3>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperiencePage
