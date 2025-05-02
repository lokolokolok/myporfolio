"use client"

import { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import "./Contact.css" // or "./ContactPage.css" if unified

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
    loading: false,
  })

  useEffect(() => {
    emailjs.init("cCV7-LOZt6Lj92Uac")
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus((prev) => ({
      ...prev,
      loading: true,
    }))

    const serviceID = "service_781k4o7"
    const templateID = "template_289o9ln"
    const userID = "cCV7-LOZt6Lj92Uac"

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID)
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you for your message! I will get back to you soon.",
        loading: false,
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS error:", error)
      setFormStatus({
        submitted: true,
        success: false,
        message: "Something went wrong. Please try again later.",
        loading: false,
      })
    }
  }

  return (
    <div className="contact-container">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>glezel.magsalay@example.com</p>
            <a href="mailto:glezel.magsalay@example.com" className="contact-link">Send Email</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
            <a href="tel:+11234567890" className="contact-link">Call Me</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Location</h3>
            <p>San Francisco, CA</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              View on Map
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/lokolokolok" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/glezel-magsalay-400205363/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://web.facebook.com/hanzaki.imizuki" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          {formStatus.submitted && formStatus.success ? (
            <div className="success-message">
              <h3>Message Sent!</h3>
              <p>{formStatus.message}</p>
              <button
                className="btn btn-primary"
                onClick={() => setFormStatus({ submitted: false, success: false, message: "", loading: false })}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={formStatus.loading}>
                {formStatus.loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
