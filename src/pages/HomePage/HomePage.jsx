"use client"

import { Link } from "react-router-dom"
import FlashingImage from "../../components/FlashingImage/FlashingImage"
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text content-container">
        <h1>
            Hi, I'm <span className="highlight">Glezel E. Magsalay</span>
          </h1>
          
          <h2 className="gradient-text text-outline">Graphic Designer & Developer</h2>
          <p>
            I specialize in creating eye-catching designs that bring ideas to life. Whether it's branding, digital art,
            or print media, I strive to deliver high-quality work that resonates with the audience.
          </p>
          <div className="home-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="home-image">
          <FlashingImage />
        </div>
      </div>
    </div>
  )
}

export default HomePage
