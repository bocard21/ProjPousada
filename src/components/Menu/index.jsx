import React from 'react';
import './style.css';

const Menu = () => (
  <nav className="menu">
    <ul>
      <li><a href="/" className="active">Início</a></li>
      <li><a href="/dados-reserva">Reserva</a></li>
      <li><a href="/dados-acomodacoes">Acomodações</a></li>
      <li><a href="/dados-clientes">Clientes</a></li>
      <li><a href="/tela-cadastro">Cadastro</a></li>
      <li><a href="/contato">Contato</a></li>
    </ul>
  </nav>
);

export default Menu;
