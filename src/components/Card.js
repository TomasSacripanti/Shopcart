import React, { Component } from 'react';
import stars from '../images/estrellas.png';

export class Card extends Component {
    render() {
        return (
            <div className="card">
                <img className="image" className="u-full-width" src={this.props.img} alt=""/>
                <div className="info-card">
                    <h4 className="name">{this.props.name}</h4>
                    <p className="author">Juan Pedro</p>
                    <img src={stars} alt="Puntuación"/>
                    <p>$200 <span className="price u-pull-right">$15</span></p>
                    <button className="u-full-width button-primary button input agregar-carrito" data-id={this.props.id}>Agregar al carrito</button>
                </div>
            </div>
        )
    }
}

export default Card;
