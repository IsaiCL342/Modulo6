import React, { useState } from 'react';
import InputGuess from './InputGuess';
import Feedback from './Feedback';
import './Game.css';

function Game() {
    const [target] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [won, setWon] = useState(false);

    const handleGuess = () => {
        const num = parseInt(guess);
        setAttempts(attempts + 1);

        if (num === target) {
        setMessage(`🎉 ¡Correcto! El número era ${target}.`);
        setWon(true);
        } else if (num < target) {
        setMessage('🔼 Intenta con un número más alto.');
        } else {
        setMessage('🔽 Intenta con un número más bajo.');
        }
    };

    return (
        <div className="game">
            <h1>🎲 Adivina el Número</h1>
            {!won && (
                <InputGuess
                guess={guess}
                setGuess={setGuess}
                handleGuess={handleGuess}
                />
            )}
            <Feedback message={message} attempts={attempts} />
        </div>
    );
}

export default Game;