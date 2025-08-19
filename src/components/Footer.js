import React, { useEffect } from 'react'
import { footerLinks } from '../components/index_c'
import '../styles/Footer.css'

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector('.footer')
    footer.classList.add('fade-in')
  }, [])

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-shop-options">
          <p className="footer-text">
            More ways to shop:{' '}
            <span className="footer-link">Find an Apple Store </span>
            or <span className="footer-link">other retailer</span> near you.
          </p>
          <p className="footer-text">Or call 000800-040-1966</p>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-text">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="footer-links">
            {footerLinks.map((link, i) => (
              <p key={link} className="footer-text">
                {link}
                {i !== footerLinks.length - 1 && <span className="separator"> | </span>}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
