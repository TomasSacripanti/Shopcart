import React, { Component } from 'react';
import './styles/Header.css';

export class Header extends Component {
    render() {
        return (
        <header id="header" class="header">
            <div class="container">
                <div class="row">
                    <div className="four columns">
                        <img src="" alt="Logotipo"/>
                    </div>
                    <div class="two columns u-pull-right">
                        <ul>
                            <li className="sub-menu">
                                <img src="" id="img-carrito"/>
                                <div id="carrito">

                                    <table id="lista-carrito" class="u-full-width">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>

                                    <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
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