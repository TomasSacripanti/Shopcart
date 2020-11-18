import React, { Component } from 'react';
import Card from './Card';
import './styles/Courses.css';
import imgCurso1 from '../images/curso1.jpg';
import imgCurso2 from '../images/curso2.jpg';
import imgCurso3 from '../images/curso3.jpg';
import imgCurso4 from '../images/curso4.jpg';
import imgCurso5 from '../images/curso5.jpg';

export class Courses extends Component {
    render() {
        return (
            <div id="lista-cursos" className="container">
                <h1 id="encabezado" className="encabezado">Cursos En Línea</h1>
                <div className="row">
                    <div className="four columns">
                        <Card img={imgCurso1}></Card>
                    </div>
                    <div className="four columns">
                        <Card img={imgCurso2}></Card>
                    </div>
                    <div className="four columns">
                        <Card img={imgCurso3}></Card>
                    </div>
                </div>
                <div className="row">
                    <div className="four columns">
                        <Card img={imgCurso4}></Card>
                    </div>
                    <div className="four columns">
                        <Card img={imgCurso5}></Card>
                    </div>
                    <div className="four columns">
                        <Card img={imgCurso1}></Card>
                    </div>
                </div>
                <div className="row">
                    <div className="four columns">
                        <Card img={imgCurso2}></Card>
                    </div>
                    <div className="four columns">
                        <Card img={imgCurso3}></Card>
                    </div>
                    <div className="four columns">
                        <Card img={imgCurso4}></Card>
                    </div>
                </div>
                <div className="row">
                    <div className="four columns">
                        <Card img={imgCurso5}></Card>
                    </div>
                    <div className="four columns">
                        <Card img={imgCurso1}></Card>
                    </div>
                    <div className="four columns">
                        <Card img={imgCurso2}></Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Courses;
