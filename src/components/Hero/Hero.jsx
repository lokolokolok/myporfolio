"use client"

import { useEffect, useRef } from "react"
import "./Hero.css"

const Hero = () => {
  const textRef = useRef(null)

  useEffect(() => {
    const text = textRef.current
    if (!text) return

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let interval = null

    const startAnimation = () => {
      let iteration = 0
      const originalText = text.dataset.value

      clearInterval(interval)

      interval = setInterval(() => {
        text.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index]
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("")

        if (iteration >= originalText.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3
      }, 30)
    }

    startAnimation()

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          <span ref={textRef} data-value="GLEZEL E. MAGSALAY">
            GLEZEL E. MAGSALAY
          </span>
        </h1>
        <p className="hero-subtitle">Graphic Designer & Creative Thinker</p>
        <div className="hero-cta">
          <a href="#about" className="btn btn-primary">
            Learn More
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
