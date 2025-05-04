import "./ExperiencePage.css"

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      company: "Langhub: A Mobile-Based Language Support Application For Chinese Mandarin And Spanish Language",
      role: "System Analyst",
      period: "June 2024 - March 2025",
      description:
        "Langhub is a mobile-based language support application designed to assist users in learning and practicing Chinese Mandarin and Spanish languages. The app offers interactive lessons, vocabulary exercises, and real-time language translation features. Users can engage in language exchange with native speakers, enhancing their conversational skills. Langhub aims to bridge language barriers and promote cultural exchange through its user-friendly interface and comprehensive language resources.",
       skills: ["Dart", "Flutter" , "google API" ],
    },
    {
      id: 2,
      company: "LinkyTech: WMSU - CCSPE - Digital Scoring System (Arnis, Volleyball, Table Tennis)",
      role: "System Analyst",
      period: "Jan 2024 - Jan 2025",
      description:
        "Welcome to LinkyTech, where our commitment to excellence is reflected in our name Link and Technology. As specialists in technology-driven solutions, LinkyTech is a small local company consist of IT experts that serves as a pivotal link, facilitating seamless connections between businesses and their client through the development of tailored web applications. Our expertise lies in creating sophisticated online platforms to address the unique requirements of each business we partner with. Beyond the realm of technology, our focus extends to fostering effective communication and collaboration between businesses and their customers. As a dedicated technology partner, LinkyTech is poised to elevate your digital presence, ensuring that your business/organization navigates the online landscape with efficiency, sophistication, and a commitment to meaningful connections. ",
      skills: ["javascript", "html", "database"],
    },
    {
      id: 3,
      company: "VerdeVista NurtureHub: Ecommerce Website",
      role: "Frontend Developer",
      period: "Jan 2024 - Dec 2024",
      description:
        "Welcome to VerdeVistaNurtureHub, your premier destination for cultivating a vibrant and thriving garden all year round. At VerdeVista, we take pride in curating and exquisite selection of plants and flowers that are not only tailored to thrive in the current season and Good for profit as well. ",
      skills: ["phyton", "php", "html", "css"],
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
                <h2 className="experience-company text-outline">{exp.company}</h2>
                <h3 className="experience-role">{exp.role}</h3>
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
