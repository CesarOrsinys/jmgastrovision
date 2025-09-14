import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Redes sociales a la izquierda, en columna */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
        </div>

        {/* Enlaces legales a la derecha, en columna */}
        <div className="footer-links">
          <a href="/aviso-legal">Aviso Legal</a>
          <a href="/politica-privacidad">Política de Privacidad</a>
          <a href="/politica-cookies">Política de Cookies</a>
        </div>
      </div>

      {/* Copy centrado abajo */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
