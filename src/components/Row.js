import React, { Component } from 'react';
import Card from './Card';

export class Row extends Component {
    render() {
        return (
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
        )
    }
}

export default Row;
