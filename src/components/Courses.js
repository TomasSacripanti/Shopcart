import React, { Component } from 'react';
import Card from './Card';
import './styles/Courses.css';

export class Courses extends Component {
    render() {
        return (
            <div id="lista-cursos" className="container">
                <h1 id="encabezado" className="encabezado">Cursos En Línea</h1>
                <div className="row">
                    <div className="four columns">
                        <Card></Card>
                    </div>
                    <div className="four columns">
                        <Card></Card>
                    </div>
                    <div className="four columns">
                        <Card></Card>
                    </div>
                </div>
                <div className="row">
                    <div className="four columns">
                        <Card></Card>
                    </div>
                    <div className="four columns">
                        <Card></Card>
                    </div>
                    <div className="four columns">
                        <Card></Card>
                    </div>
                </div>
                <div className="row">
                    <div className="four columns">
                        <Card></Card>
                    </div>
                    <div className="four columns">
                        <Card></Card>
                    </div>
                    <div className="four columns">
                        <Card></Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Courses;
