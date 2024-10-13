import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer-section">
                <h4>İletişim</h4>
                <p>Email: info@ornek.com</p>
                <p>Telefon: (123) 456-7890</p>
            </div>
            <div className="footer-section">
                <h4>Sosyal Medya</h4>
                <a href="#" className="footer-link">Facebook</a>
                <a href="#" className="footer-link">Twitter</a>
                <a href="#" className="footer-link">Instagram</a>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Tüm Hakları Saklıdır.</p>
            </div>
        </footer>
  )
}

export default Footer