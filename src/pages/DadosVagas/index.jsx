import React, { useState, useEffect } from 'react';
import './style.css';

const DadosVagas = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [funcionario, setFuncionario] = useState(null);
  const [quartosDisponiveis, setQuartosDisponiveis] = useState(null);
  const [quartosOcupados, setQuartosOcupados] = useState(null);

  // Simulando a obtenção de dados de uma API ou outra fonte
  useEffect(() => {
    setCheckIn('2022-01-01');
    setCheckOut('2022-01-07');
    setFuncionario('João Silva');
    setQuartosDisponiveis(5);
    setQuartosOcupados(3);
  }, []);

  return (
    <div className="dados-vagas">
      <h1>Dados de Vagas</h1>
      <p>Check-in: {checkIn}</p>
      <p>Check-out: {checkOut}</p>
      <p>Funcionário responsável: {funcionario}</p>
      <p>Quartos disponíveis: {quartosDisponiveis}</p>
      <p>Quartos ocupados: {quartosOcupados}</p>
    </div>
  );
};

export default DadosVagas;