import React, { Component } from 'react';
import stars from '../images/estrellas.png';

export class Card extends Component {
    render() {
        return (
            <div className="card">
                <img className="u-full-width" src={this.props.img} alt=""/>
                <div className="info-card">
                    <h4></h4>
                    <p>Juan Pedro</p>
                    <img src={stars} alt="Puntuación"/>
                    <p className="precio">$200 <span className="u-pull-right">$15</span></p>
                    <a href="#/" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar al carrito</a>
                </div>
            </div>
        )
    }
}

export default Card;
