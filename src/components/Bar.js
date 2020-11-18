import React, { Component } from 'react';
import './styles/Bar.css';

export class Bar extends Component {
    render() {
        return (
            <div className="barra">
                <div className="container">
                    <div className="row">
                        <div className="four columns icono icono1">
                            <p>20,000 Cursos en línea <br/>Explora los temas más recientes</p>
                        </div>
                        <div className="four columns icono icono1">
                            <p>Instructores Expertos <br/>Aprende con distintos estilos</p>
                        </div>
                        <div className="four columns icono icono1">
                            <p>Acceso de por vida <br/>Aprende a tu ritmo</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bar;
