import React from 'react';

function Feedback({ message, attempts }) {
    return (
        <div className="feedback">
            <p>{message}</p>
            <p>Intentos: {attempts}</p>
        </div>
    );
}

export default Feedback;