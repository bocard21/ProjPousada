import React from 'react';
import './style.css';
import instagramIcon from '../../assets/insta_icon.png';
import facebookIcon from '../../assets/facebook_icon.png';
import whatsappIcon from '../../assets/_whatsapp_icon.png';
import telephoneIcon from '../../assets/telephone_icon.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-icons">
      <img src={instagramIcon} alt="Instagram" />
      <img src={facebookIcon} alt="Facebook" />
      <img src={whatsappIcon} alt="WhatsApp" />
      <img src={telephoneIcon} alt="Telefone" />
    </div>
    <p>© 2024 Pousada. Todos os direitos reservados.</p>
  </footer>
);

export default Footer;
