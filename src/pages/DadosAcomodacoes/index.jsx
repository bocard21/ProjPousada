import React from 'react';
import './style.css';

const DadosAcomodacoes = () => (
  <main className="acomodacoes">
    <div className="container">
      <h1>Conheça Nossas Acomodações</h1>
      <div className="acomodacoes-info">
        <div className="imagem-acomodacao">
          <img src="sua-imagem-aqui.jpg" alt="Acomodações" />
        </div>
        <div className="descricao-acomodacao">
          <p>Desfrute do conforto e tranquilidade de nossas acomodações. Cada detalhe foi pensado para proporcionar uma estadia inesquecível.</p>
        </div>
      </div>
      <div className="form-container">
        <h2>Nossas acomodações</h2>
        <form>
          <label>
            Check-in
            <input type="date" name="checkin" />
          </label>
          <label>
            Check-out
            <input type="date" name="checkout" />
          </label>
          <label>
            Adultos
            <select name="adults">
              <option value="1">1 Adulto</option>
              <option value="2">2 Adultos</option>
              <option value="3">3 Adultos</option>
              <option value="4">4 Adultos</option>
            </select>
          </label>
          <button type="submit">Pesquisar</button>
        </form>
      </div>
    </div>
  </main>
);

export default DadosAcomodacoes;
