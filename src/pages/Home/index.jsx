import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <img src="imagens/logotipo.png" alt="Pousada Quinta do Ypuã" id="imgLogotipo" />
      </header>
      <main className="main">
        <section className="welcome">
          <h1>Bem-vindo à Pousada Quinta do Ypuã</h1>
          <p>Desfrute de momentos incríveis em nossa pousada, localizada em Laguna - SC.</p>
        </section>
        <section className="contact">
          <h2>Entre em contato conosco</h2>
          <ul>
            <li><strong>Telefone:</strong> (48) 99940-9732</li>
            <li><strong>Email:</strong> pousadaquintadoypua@gmail.com</li>
            <li><strong>Endereço:</strong> Estrada Ipua, nº 6 Laguna - SC | 88790-000</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <div id="social">
          <img src="imagens/local.png" alt="Local" />
          <img src="imagens/instagram.png" alt="Instagram" />
          <img src="imagens/facebook.png" alt="Facebook" />
          <img src="imagens/whatsapp.png" alt="Whatsapp" />
        </div>
        <p id="enderecoPousada">Estrada Ipua, nº 6 Laguna - SC | 88790-000</p>
      </footer>
    </div>
  );
};

export default Home;
