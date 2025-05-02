"use client"

import { useState, useEffect } from "react"
import profileImage from "../../assets/profile.jpg"
import "./AboutPage.css"

const AboutPage = () => {
  const skills = ["Typography", "Layout Design", "Branding", "Logo Design", "Digital Art", "HTML", "Photoshop"]
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Preload the image
    const img = new Image()
    img.src = profileImage
    img.onload = () => setImageLoaded(true)
  }, [])

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title gradient-text text-outline">About Me</h1>

        <div className="about-main">
          <div className="about-image">
            <div className="image-circle">
              {!imageLoaded && (
                <div className="image-placeholder">
                  <span>Loading...</span>
                </div>
              )}
              <img
                src={profileImage || "/placeholder.svg"}
                alt="Glezel E. Magsalay"
                className={imageLoaded ? "fade-in" : "hidden"}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>

          <div className="about-info content-container">
            <div className="about-section">
              <h2 className="gradient-text text-outline">Introduction</h2>
              <p>
                Hello! I'm Glezel E. Magsalay, a passionate graphic designer with a love for creativity and visual
                storytelling. I specialize in creating eye-catching designs that bring ideas to life. Whether it's
                branding, digital art, or print media, I strive to deliver high-quality work that resonates with the
                audience.
              </p>
            </div>

            <div className="about-section">
              <h2 className="gradient-text text-outline">Skills & Expertise</h2>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-section">
              <h2 className="gradient-text text-outline">Career Goals</h2>
              <p>
                To become a highly skilled and versatile graphic designer, mastering both traditional and digital
                mediums to create innovative and engaging visual experiences.
              </p>
            </div>

            <div className="about-section">
              <h2 className="gradient-text text-outline">Personal Touch</h2>
              <div className="personal-items">
                <div className="personal-item">
                  <h3>Fun Fact</h3>
                  <p>I'm an anime lover</p>
                </div>

                <div className="personal-item">
                  <h3>Motto in Life</h3>
                  <p>"Treat people how people treat you"</p>
                </div>

                <div className="personal-item">
                  <h3>Hobbies</h3>
                  <p>Watching anime, Listening to music, Playing games, Reading manhwa, Watching movies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
