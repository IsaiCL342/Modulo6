import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">🩺 Citas Médicas</div>
            <div className="navbar-links">
                <Link to="/">Inicio</Link>
                <Link to="/citas">Citas</Link>
            </div>
        </nav>
    );
}

export default Navbar;