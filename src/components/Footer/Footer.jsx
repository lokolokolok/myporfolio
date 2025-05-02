import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Glezel E. Magsalay</h3>
          <p>Graphic Designer & Developer</p>
        </div>

        <div className="footer-center">
          <p>Made with ❤️ by Glezel E. Magsalay</p>
          <p>&copy; {currentYear} All Rights Reserved</p>
        </div>

        <div className="footer-right">
          <a href="https://github.com/lokolokolok" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/glezel-magsalay-400205363/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://web.facebook.com/hanzaki.imizuki" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
