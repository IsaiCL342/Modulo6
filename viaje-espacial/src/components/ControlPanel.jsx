import React, { useState, useEffect, useMemo } from 'react';
import './ControlPanel.css';

function ControlPanel() {
    const [distance, setDistance] = useState(0);
    const [fuel, setFuel] = useState(100);
    const [planets, setPlanets] = useState([]);
    const [isFlying, setIsFlying] = useState(false);

    // 🚀 Simula el vuelo
    useEffect(() => {
        let interval;
        if (isFlying) {
        interval = setInterval(() => {
            setDistance((prev) => prev + 10);
            setFuel((prev) => Math.max(prev - 5, 0));
            if (Math.random() > 0.7) {
            setPlanets((prev) => [...prev, `Planeta ${prev.length + 1}`]);
            }
        }, 1000);
        }

        return () => {
            clearInterval(interval);
            console.log('🛑 Vuelo detenido (desmontaje)');
        };
    }, [isFlying]);

    // 🧠 Calcula la distancia total con useMemo
    const totalDistance = useMemo(() => {
        console.log('🔍 Recalculando distancia total...');
        return distance * 1.6; // por ejemplo, convertir a otra unidad
    }, [distance]);

    return (
        <div className="panel">
            <h1>🛰️ Panel del Explorador Espacial</h1>
            <p>Distancia recorrida: {distance} km</p>
            <p>Distancia total (convertida): {totalDistance.toFixed(2)} unidades</p>
            <p>Combustible restante: {fuel}%</p>
            <p>Planetas visitados: {planets.length}</p>
            <ul>
                {planets.map((planet, index) => (
                <li key={index}>{planet}</li>
                ))}
            </ul>
            <button onClick={() => setIsFlying(!isFlying)}>
                {isFlying ? 'Detener vuelo' : 'Iniciar vuelo'}
            </button>
        </div>
    );
}

export default ControlPanel;