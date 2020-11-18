import React, { Component } from 'react';
import Row from './Row';
import './styles/Courses.css';

export class Courses extends Component {
    render() {
        return (
            <div id="lista-cursos" className="container">
                <h1 id="encabezado" className="encabezado">Cursos En Línea</h1>
                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
            </div>
        )
    }
}

export default Courses;
