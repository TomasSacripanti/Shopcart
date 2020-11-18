import React, { Component } from 'react';
import Card from './Card';
import './styles/Courses.css';
import imgCurso1 from '../images/curso1.jpg';
import imgCurso2 from '../images/curso2.jpg';
import imgCurso3 from '../images/curso3.jpg';
import imgCurso4 from '../images/curso4.jpg';
import imgCurso5 from '../images/curso5.jpg';

export class Courses extends Component {
    handleClick = (e) => {
        if (e.target.className.includes('agregar-carrito')) {
            this.createCourseObject(e.target.parentElement.parentElement);
        }
    }

    createCourseObject = (card) => {
        const course = {
            name: card.querySelector('.name').innerText,
            image: card.querySelector('img').src,
            author: card.querySelector('.author').innerText,
            price: card.querySelector('.price').innerText,
        }
        this.props.addCourse(course);
    }
    



    render() {
        return (
            <div onClick={this.handleClick} id="lista-cursos" className="container">
                <h1 id="encabezado" className="encabezado">Cursos En Línea</h1>
                <div className="row">
                    <div className="four columns">
                        <Card name="HTML5, CSS3, JavaScript para Principiantes" id={1} img={imgCurso1}></Card>
                    </div>
                    <div className="four columns">
                        <Card name="Curso de Comida Vegetariana" id={2} img={imgCurso2}></Card>
                    </div>
                    <div className="four columns">
                        <Card name="Guitarra para Principiantes" id={3} img={imgCurso3}></Card>
                    </div>
                </div>
                <div className="row">
                    <div className="four columns">
                        <Card name="Huerto en tu casa" id={4} img={imgCurso4}></Card>
                    </div>
                    <div className="four columns">
                        <Card name="Decoración con productos de tu hogar" id={5} img={imgCurso5}></Card>
                    </div>
                    <div className="four columns">
                        <Card name="Diseño Web para Principiantes" id={6} img={imgCurso1}></Card>
                    </div>
                </div>
                <div className="row">
                    <div className="four columns">
                        <Card name="Comida Mexicana para principiantes" id={7} img={imgCurso2}></Card>
                    </div>
                    <div className="four columns">
                        <Card name="Estudio Musical en tu casa" id={8} img={imgCurso3}></Card>
                    </div>
                    <div className="four columns">
                        <Card name="Cosecha tus propias frutas y verduras" id={9} img={imgCurso4}></Card>
                    </div>
                </div>
                <div className="row">
                    <div className="four columns">
                        <Card name="Prepara galletas caseras" id={10} img={imgCurso5}></Card>
                    </div>
                    <div className="four columns">
                        <Card name="JavaScript Moderno con ES6" id={11} img={imgCurso1}></Card>
                    </div>
                    <div className="four columns">
                        <Card name="100 Recetas de Comida Natural" id={12} img={imgCurso2}></Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Courses;
