import "./Experience.css"

const Experience = () => {
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
    <div className="experience-container">
      <h2 className="section-title">Software Engineering Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-content">
              <div className="timeline-date">{exp.period}</div>
              <h3 className="timeline-title">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-skills">
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
  )
}

export default Experience
