"use client"

import { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import "./ContactPage.css"

const ContactPage = () => {
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

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Initialize EmailJS (this is important!)
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

    // Set loading state
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
        loading: false,
        message: "Thank you for your message! I will get back to you soon.",
      })

      // Reset form data
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
        loading: false,
        message: "Something went wrong. Please try again later.",
      })
    }
  }

  return (
    <div className="contact-page-container">
      <div className="contact-page-content">
        <h1 className="contact-page-title gradient-text text-outline">Contact Me</h1>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card content-container">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="gradient-text text-outline">Email</h3>
              <p>glezmagsalay09@gmail.com</p>
              <a href="mailto:glezmagsalay09@gmail.com" className="contact-link">
                Send Email
              </a>
            </div>

            <div className="contact-card content-container">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="gradient-text text-outline">Phone</h3>
              <p>0992 630 8602</p>
              <a href="tel:+639926308602" className="contact-link">
                Call Me
              </a>
            </div>

            <div className="contact-card content-container">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="gradient-text text-outline">Location</h3>
              <p>Maasin, Zamboanga City, Zamboanga del Sur</p>
              <a
                href="https://www.google.com/maps/place/Maasin,+Zamboanga+City,+Zamboanga+del+Sur"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                View on Map
              </a>
            </div>
          </div>

          <div className="contact-form-container content-container">
            {formStatus.submitted && formStatus.success ? (
              <div className="success-message">
                <h3 className="gradient-text text-outline">Message Sent!</h3>
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
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={formStatus.loading}>
                  {formStatus.loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
