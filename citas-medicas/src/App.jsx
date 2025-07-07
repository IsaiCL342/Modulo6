import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Citas from './components/Citas';
import CitaDetalle from './components/CitaDetalle';
import './App.css'; // Estilos globales para layout

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/citas/:id" element={<CitaDetalle />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;