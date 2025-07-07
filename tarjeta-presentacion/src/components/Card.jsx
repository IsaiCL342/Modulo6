import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className="card">
        <img src="src/assets/IMG-20250125-WA0010.jpg" alt="Foto de perfil" />
        <h1>Isai Campechano</h1>
        <h2>Desarrollador Frontend</h2>
        <p>Apasionado por crear experiencias web modernas y accesibles.</p>
        </div>
    );
}

export default Card;