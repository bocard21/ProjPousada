import React from 'react';
import './style.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dados-reserva">Reserva</a></li>
        <li><a href="/dados-vagas">Vagas</a></li>
        <li><a href="/dados-clientes">Clientes</a></li>
        <li><a href="/tela-cadastro">Cadastro</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
