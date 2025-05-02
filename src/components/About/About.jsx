"use client"

import { useState, useEffect } from "react"
import profileImage from "../../assets/profile.jpg"
import "./About.css"

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Preload the image
    const img = new Image()
    img.src = profileImage
    img.onload = () => setImageLoaded(true)
  }, [])

  return (
    <div className="about-container">
      <h2 className="section-title gradient-text text-outline">About Me</h2>

      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
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

        <div className="about-text">
          <div className="about-section">
            <h3 className="gradient-text text-outline">Introduction</h3>
            <p>
              Hello! I'm Glezel E. Magsalay, a passionate graphic designer with a love for creativity and visual
              storytelling. I specialize in creating eye-catching designs that bring ideas to life. Whether it's
              branding, digital art, or print media, I strive to deliver high-quality work that resonates with the
              audience.
            </p>
          </div>

          <div className="about-section">
            <h3 className="gradient-text text-outline">Skills & Expertise</h3>
            <div className="skills-container">
              <span className="skill-tag">Typography</span>
              <span className="skill-tag">Layout Design</span>
              <span className="skill-tag">Branding</span>
              <span className="skill-tag">Logo Design</span>
              <span className="skill-tag">Digital Art</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">Photoshop</span>
            </div>
          </div>

          <div className="about-section">
            <h3 className="gradient-text text-outline">Career Goals</h3>
            <p>
              To become a highly skilled and versatile graphic designer, mastering both traditional and digital mediums
              to create innovative and engaging visual experiences.
            </p>
          </div>

          <div className="about-section">
            <h3 className="gradient-text text-outline">Personal Touch</h3>
            <div className="personal-items">
              <div className="personal-item">
                <h4>Fun Fact</h4>
                <p>I'm an anime lover</p>
              </div>

              <div className="personal-item">
                <h4>Motto in Life</h4>
                <p>"Treat people how people treat you"</p>
              </div>

              <div className="personal-item">
                <h4>Hobbies</h4>
                <p>Watching anime, Listening to music, Playing games, Reading manhwa, Watching movies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
