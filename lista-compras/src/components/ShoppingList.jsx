import React, { useState } from 'react';
import './ShoppingList.css';

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim() === '') return;
        setItems([...items, input]);
        setInput('');
    };

    const handleDelete = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <div className="shopping-container">
            <h1>🛒 Lista de Compras</h1>
            <div className="input-group">
                <input
                type="text"
                placeholder="Agregar producto..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleAdd}>Agregar</button>
            </div>
            <ul>
                {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => handleDelete(index)}>❌</button>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;