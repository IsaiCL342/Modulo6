import { Link } from 'react-router-dom';
import './Citas.css';

const citas = [
    {
        id: '1',
        paciente: 'Juan Pérez',
        doctor: 'Dra. Martínez',
        especialidad: 'Dermatología',
        fecha: '2025-07-10',
        hora: '10:30 AM',
    },
    {
        id: '2',
        paciente: 'Ana Gómez',
        doctor: 'Dr. Ramírez',
        especialidad: 'Cardiología',
        fecha: '2025-07-12',
        hora: '2:00 PM',
    },
    ];

    function Citas() {
    return (
        <div className="citas-container">
            <h2>📅 Lista de Citas</h2>
            <div className="citas-grid">
                {citas.map((cita) => (
                <Link to={`/citas/${cita.id}`} key={cita.id} className="cita-card">
                    <h3>{cita.paciente}</h3>
                    <p><strong>Doctor:</strong> {cita.doctor}</p>
                    <p><strong>Especialidad:</strong> {cita.especialidad}</p>
                    <p><strong>Fecha:</strong> {cita.fecha}</p>
                    <p><strong>Hora:</strong> {cita.hora}</p>
                </Link>
                ))}
            </div>
        </div>
    );
}

export default Citas;