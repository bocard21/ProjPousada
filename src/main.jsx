import React from 'react';
import ReactDOM from 'react-dom/client'; // Certifique-se de usar 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DadosReserva from './pages/DadosReserva';
import DadosAcomodacoes from './pages/DadosAcomodacoes'; 
import DadosClientes from './pages/DadosClientes';
import TelaCadastro from './pages/TelaCadastro';
import './index.css';
import Menu from './components/Menu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dados-reserva" element={<DadosReserva />} />
        <Route path="/dados-acomodacoes" element={<DadosAcomodacoes />} />     
        <Route path="/dados-clientes" element={<DadosClientes />} />
        <Route path="/tela-cadastro" element={<TelaCadastro />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
