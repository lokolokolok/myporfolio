"use client"

import { useState, useEffect } from "react"
import art1 from "../../assets/ART1.jpg"
import art2 from "../../assets/ART2.jpg"
import art3 from "../../assets/ART3.jpg"
import "./FlashingImage.css"

const FlashingImage = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [art1, art2, art3]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="flashing-image-container">
      {images.map((src, index) => (
        <div key={index} className={`flashing-image-item ${currentImage === index ? "visible" : "hidden"}`}>
          <img src={src || "/placeholder.svg"} alt={`Artwork ${index + 1}`} className="flashing-image" />
        </div>
      ))}
      <div className="image-border-animation"></div>
    </div>
  )
}

export default FlashingImage
