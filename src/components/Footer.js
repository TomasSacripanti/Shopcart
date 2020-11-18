import React, { Component } from 'react';
import './styles/Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="four columns">
                            <nav id="principal" className="menu">
                                <a href="" className="enlace">Para tu negocio</a>
                                <a href="" className="enlace">Conviértete en instructor</a>
                                <a href="" className="enlace">Aplicaciones Móviles</a>
                                <a href="" className="enlace">Soporte</a>
                                <a href="" className="enlace">Temas</a>
                            </nav>
                        </div>
                        <div className="four columns">
                            <nav id="secundaria" className="menu">
                                <a href="" className="enlace">¿Quienes Somos?</a>
                                <a href="" className="enlace">Empleo</a>
                                <a href="" className="enlace">Blog</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
