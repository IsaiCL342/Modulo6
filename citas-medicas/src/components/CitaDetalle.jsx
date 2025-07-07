import { useParams, useNavigate } from 'react-router-dom';
import './CitaDetalle.css';

const citas = [
    {
        id: '1',
        paciente: 'Juan Pérez',
        doctor: 'Dra. Martínez',
        especialidad: 'Dermatología',
        fecha: '2025-07-10',
        hora: '10:30 AM',
        notas: 'Revisión de lunares y tratamiento para acné.',
    },
    {
        id: '2',
        paciente: 'Ana Gómez',
        doctor: 'Dr. Ramírez',
        especialidad: 'Cardiología',
        fecha: '2025-07-12',
        hora: '2:00 PM',
        notas: 'Chequeo general y seguimiento de presión arterial.',
    },
    ];

    function CitaDetalle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const cita = citas.find((c) => c.id === id);

    if (!cita) {
        return (
        <div className="detalle-container">
            <h2>Cita no encontrada</h2>
            <button onClick={() => navigate('/citas')}>Volver a Citas</button>
        </div>
        );
    }

    return (
        <div className="detalle-container">
            <h2>🩺 Detalles de la Cita</h2>
            <div className="detalle-card">
                <p><strong>Paciente:</strong> {cita.paciente}</p>
                <p><strong>Doctor:</strong> {cita.doctor}</p>
                <p><strong>Especialidad:</strong> {cita.especialidad}</p>
                <p><strong>Fecha:</strong> {cita.fecha}</p>
                <p><strong>Hora:</strong> {cita.hora}</p>
                <p><strong>Notas:</strong> {cita.notas}</p>
            </div>
            <button onClick={() => navigate('/citas')}>🔙 Volver a la lista</button>
        </div>
    );
}

export default CitaDetalle;