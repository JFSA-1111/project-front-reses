import React from 'react'
import 'bootswatch/dist/flatly/bootstrap.min.css';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand">Nutresa Reses</a>

                <div className="navbar-nav ml-auto" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to={'/fincas'}>Fincas</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to={'/pedidos'}>Pedidos</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to={'/proveedores'}>Proveedores</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to={'/lotes'}>Lotes</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to={'/novedades'}>Novedades</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to={'/novedades'}>Salir</Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </React.Fragment>
    )
}

export default Navbar
