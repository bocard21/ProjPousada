import React from 'react';
import './style.css';
import instagramIcon from '../../assets/insta_icon.png';
import facebookIcon from '../../assets/facebook_icon.png';
import whatsappIcon from '../../assets/_whatsapp_icon.png';
import telephoneIcon from '../../assets/telephone_icon.png';

const Footer = () => (
  <footer className="footer">
    <div id="social">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Facebook" />
      </a>
      <a href="https://wa.me/5598999999999" target="_blank" rel="noopener noreferrer">
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
      <a href="tel:+484999409732" target="_blank" rel="noopener noreferrer">
        <img src={telephoneIcon} alt="Telefone" />
      </a>
    </div>
    <p>&copy; 2024 Pousada. Todos os direitos reservados.</p>
  </footer>
);

export default Footer;
