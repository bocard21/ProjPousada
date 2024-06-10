import React from 'react';
import './style.css';

const DadosReserva = () => (
  <div className="dados-reserva">
    <h1>Reserva</h1>
    <form>
      <label>
        Nome:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <label>
        Telefone:
        <input type="tel" />
      </label>
      <button type="submit">Reservar</button>
    </form>
  </div>
);

export default DadosReserva;
