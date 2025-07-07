import React from 'react';

function InputGuess({ guess, setGuess, handleGuess }) {
    return (
        <div className="input-group">
            <input
                type="number"
                placeholder="Ingresa un número del 1 al 100"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
            />
            <button onClick={handleGuess}>Adivinar</button>
        </div>
    );
}

export default InputGuess;