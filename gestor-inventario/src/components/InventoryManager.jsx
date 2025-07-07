import React, { useReducer, useRef, useCallback } from 'react';
import './InventoryManager.css';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), name: action.name, quantity: action.quantity }];
    case 'remove':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

function InventoryManager() {
    const [inventory, dispatch] = useReducer(reducer, initialState);
    const nameRef = useRef();
    const quantityRef = useRef();

    const handleAdd = useCallback(() => {
        const name = nameRef.current.value.trim();
        const quantity = parseInt(quantityRef.current.value);
        if (!name || isNaN(quantity)) return;

        dispatch({ type: 'add', name, quantity });
        nameRef.current.value = '';
        quantityRef.current.value = '';
        nameRef.current.focus();
    }, []);

    const handleRemove = useCallback((id) => {
        dispatch({ type: 'remove', id });
    }, []);

    return (
        <div className="inventory">
            <h1>📦 Gestor de Inventario</h1>
            <div className="form">
                <input ref={nameRef} type="text" placeholder="Nombre del producto" />
                <input ref={quantityRef} type="number" placeholder="Cantidad" />
                <button onClick={handleAdd}>Agregar</button>
            </div>

            <ul>
                {inventory.map(item => (
                <li key={item.id}>
                    {item.name} - {item.quantity} unidades
                    <button onClick={() => handleRemove(item.id)}>❌</button>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default InventoryManager;