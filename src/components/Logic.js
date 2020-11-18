import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import Courses from './Courses';
import Footer from './Footer';
import Bar from './Bar';

export class Logic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: null,
        }
    }
    addCourse = (curso) => {
        this.setState({
            courses: [
                curso,
            ]
        })
    }
    render() {
        return (
            <>
                <Header courses={this.state.courses} ></Header>
                <Hero></Hero>
                <Bar></Bar>
                <Courses addCourse={this.addCourse}></Courses>
                <Footer></Footer>
            </>
        )
    }
}

export default Logic;
