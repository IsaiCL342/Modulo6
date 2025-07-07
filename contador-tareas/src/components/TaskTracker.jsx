import React, { useState, useEffect, useMemo } from 'react';
import './TaskTracker.css';

function TaskTracker() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    // ⏰ Actualiza la hora cada segundo
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // ➕ Agrega una nueva tarea
    const handleAddTask = () => {
        if (taskName.trim() === '' || taskTime.trim() === '') return;
        setTasks([...tasks, { name: taskName, time: parseFloat(taskTime) }]);
        setTaskName('');
        setTaskTime('');
    };

    // 🧠 Calcula el total de tiempo solo cuando cambian las tareas
    const totalTime = useMemo(() => {
        return tasks.reduce((sum, task) => sum + task.time, 0);
    }, [tasks]);

    return (
        <div className="tracker">
            <h1>⏱️ Contador de Tareas</h1>
            <p>Hora actual: {currentTime}</p>

            <div className="input-group">
                <input
                type="text"
                placeholder="Nombre de la tarea"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                />
                <input
                type="number"
                placeholder="Duración (min)"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
                />
                <button onClick={handleAddTask}>Agregar</button>
            </div>

            <ul>
                {tasks.map((task, index) => (
                <li key={index}>
                    {task.name} - {task.time} min
                </li>
                ))}
            </ul>

            <h3>⏳ Tiempo total: {totalTime} minutos</h3>
        </div>
    );
}

export default TaskTracker;