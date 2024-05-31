import React, { useState } from 'react';
import './style.css';

const TelaCadastro = () => {
  const [reservation, setReservation] = useState({
    reservationId: "",
    name: "",
    room: "",
    checkin: "",
    checkout: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving data to localhost
    console.log("Reservation data:", reservation);
  };

  return (
    <div className="tela-cadastro">
      <h1>Tela de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="reservationId" placeholder="ID da Reserva" onChange={handleChange} />
        <input type="text" name="name" placeholder="Nome" onChange={handleChange} />
        <input type="text" name="room" placeholder="Quarto" onChange={handleChange} />
        <input type="date" name="checkin" placeholder="Check-in" onChange={handleChange} />
        <input type="date" name="checkout" placeholder="Check-out" onChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default TelaCadastro;
