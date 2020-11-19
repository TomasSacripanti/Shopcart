import React, { Component } from 'react'

export class TableRow extends Component {
    render() {
        const { name, image, author, price, id} = this.props.course;
        return (
            <tr data-id={id} >
                <td>
                    <img src={image} alt="" />
                </td>
                <td>
                    <p>{name}</p>
                </td>
                <td>
                    <p>{author}</p>
                </td>
                <td>
                    <p>{price}</p>
                </td>
                <td>
                    <button onClick={this.props.deleteCourse} className="vacio">X</button>
                </td>
            </tr>
        )
    }
}

export default TableRow;
