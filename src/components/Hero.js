import React, { Component } from 'react';
import './styles/Hero.css';

export class Hero extends Component {
    render() {
        return (
            <div id="hero">
                <div class="container">
                    <div class="row">
                        <div className="six columns">
                            <div className="contenido-hero">
                                <h2>Aprender algo nuevo</h2>
                                <p>Todos los cursos a $15</p>
                                <form action="#" id="busqueda" class="u-full-width"> 
                                    <input id="buscador" type="text" placeholder="¿Que te gustaría Aprender?"/>
                                    <input type="submit" id="submit-buscador" class="submit-buscador"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;
