import React from "react";
import "./style.css"; // Importa o arquivo CSS local

const DadosReserva = () => {
  return (
    <div className="form-container">
      <h1 id="tituloCadastro">Detalhes da reserva</h1>
      <form id="formularioDadosCliente" className="dados-reserva">
        <h2>Dados do hóspede:</h2>
        <div className="form-group">
          <label htmlFor="nomeDoHospede">Nome completo do hóspede:</label>
          <input type="text" id="nomeDoHospede" name="nomeDoHospede" />
        </div>

        <div className="form-group">
          <label htmlFor="emailDoHospede">E-mail:</label>
          <input type="email" id="emailDoHospede" name="emailDoHospede" />
        </div>

        <div className="form-group">
          <label htmlFor="telefoneDoHospede">Telefone:</label>
          <input type="tel" id="telefoneDoHospede" name="telefoneDoHospede" />
        </div>

        <h3>Endereço:</h3>
        <div className="form-group">
          <label htmlFor="enderecoCep">CEP:</label>
          <input type="text" id="enderecoCep" name="enderecoCep" />
        </div>

        <div className="form-group">
          <label htmlFor="enderecoRua">Rua:</label>
          <input type="text" id="enderecoRua" name="enderecoRua" />
        </div>

        <div className="form-group">
          <label htmlFor="enderecoNumero">Número:</label>
          <input type="text" id="enderecoNumero" name="enderecoNumero" />
        </div>

        <div className="form-group">
          <label htmlFor="enderecoCidade">Cidade:</label>
          <input type="text" id="enderecoCidade" name="enderecoCidade" />
        </div>

        <div className="form-group">
          <label htmlFor="enderecoEstado">Estado:</label>
          <input type="text" id="enderecoEstado" name="enderecoEstado" />
        </div>

        <div className="form-group">
          <label htmlFor="enderecoPais">País:</label>
          <input type="text" id="enderecoPais" name="enderecoPais" />
        </div>

        <input type="submit" id="salvarDadosCliente" value="Salvar dados do cliente" />
      </form>
    </div>
  );
};

export default DadosReserva;
