import logo from "../images/Logo.PNG"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <div>
            <nav className="fondo-nav navbar navbar-expand-md navbar-light">
            <a href="principal.html" class="navbar-brand">
                <img src={logo} className="App-logo" alt="logo" />
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" 
                aria-controls="mainNav" aria-expanded="false" aria-label="Barra de navegación">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainNav">
                    <div className="nav ms-auto">
                        <div className="nav pe-3">
                            <a href="principal.html" className="text-nav nav-link active">Inicio</a>
                            <a href="" className="text-nav nav-link">Mi cuenta</a>
                            <a href="" className="text-nav nav-link">Cerrar Sesión</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar