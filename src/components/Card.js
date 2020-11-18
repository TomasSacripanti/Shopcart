import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div className="card">
                <img src="" alt=""/>
                <div className="info-card">
                    <h4></h4>
                    <p>Juan Pedro</p>
                    <img src="" alt=""/>
                    <p className="precio">$200 <span className="u-pull-right">$15</span></p>
                    <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar al carrito</a>
                </div>
            </div>
        )
    }
}

export default Card;
