import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div id="social">
        <img src="imagens/local.png" alt="Local" />
        <img src="imagens/instagram.png" alt="Instagram" />
        <img src="imagens/facebook.png" alt="Facebook" />
        <img src="imagens/whatsapp.png" alt="Whatsapp" />
      </div>
      <p id="enderecoPousada">Estrada Ipua, nº 6 Laguna - SC | 88790-000</p>
    </footer>
  );
};

export default Footer;
