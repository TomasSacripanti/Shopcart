import React, { Component } from 'react';
import './styles/Header.css';
import TableRow from './TableRow';
import imgCarrito from '../images/cart.png';
import logo from '../images/logo.jpg';

export class Header extends Component {
    render() {
        return (
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="four columns">
                        <img src={logo} alt="Logotipo"/>
                    </div>
                    <div className="two columns u-pull-right">
                        <ul>
                            <li className="submenu">
                                <img src={imgCarrito} alt="Carrito" id="img-carrito"/>
                                <div id="carrito">

                                    <table id="lista-carrito" className="u-full-width">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.props.courses && this.props.courses.map((course, index) => {
                                                return  <TableRow course={course} key={index} deleteCourse={this.props.deleteCourse} ></TableRow>
                                            })
                                            }
                                        </tbody>
                                    </table>

                                    <button onClick={this.props.clearAll} className="button u-full-width">Vaciar Carrito</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        );
    }
}

export default Header;