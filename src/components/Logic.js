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
            courses: '',
        }
    }
    addCourse = (curso) => {
        this.setState({
            courses: [...this.state.courses, curso],
        })
    }
    deleteCourse = (e) => {
        const toDelete = e.target.parentElement.parentElement.dataset.id;
        this.state.courses.forEach(curso => {
            if(curso.id.toString() === toDelete) {
                this.setState({
                    courses: courses.splice()
                })
            }
        })
    }
    render() {
        return (
            <>
                <Header courses={this.state.courses} deleteCourse={this.deleteCourse} ></Header>
                <Hero></Hero>
                <Bar></Bar>
                <Courses addCourse={this.addCourse}></Courses>
                <Footer></Footer>
            </>
        )
    }
}

export default Logic;
