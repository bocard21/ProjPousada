import React, { useState } from 'react';
import './style.css';

const DadosClientes = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [passaporte, setPassaporte] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEnderecoChange = (event) => {
    setEndereco(event.target.value);
  };

  const handlePassaporteChange = (event) => {
    setPassaporte(event.target.value);
  };

  const handleSalvarClick = () => {
    // Save the data here
  };

  return (
    <div className="dados-clientes">
      <h1>Dados dos Clientes</h1>
      <form>
        <label>
          Nome:
          <input type="text" value={nome} onChange={handleNomeChange} />
        </label>
        <label>
          CPF:
          <input type="text" value={cpf} onChange={handleCpfChange} />
        </label>
        <label>
          Telefone:
          <input type="text" value={telefone} onChange={handleTelefoneChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Endereço:
          <input type="text" value={endereco} onChange={handleEnderecoChange} />
        </label>
        <label>
          Passaporte:
          <input type="text" value={passaporte} onChange={handlePassaporteChange} />
        </label>
        <button type="button" onClick={handleSalvarClick}>Salvar</button>
      </form>
      {/* Display saved data here */}
    </div>
  );
};

export default DadosClientes;
