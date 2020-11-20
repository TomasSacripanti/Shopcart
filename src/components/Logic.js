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
    addCourse = (course) => {
        if (this.state.courses) {
            if( this.state.courses.some(courseItem => courseItem.name === course.name)) {
                const cursos = this.state.courses.map(c => {
                    if(c.name === course.name) {
                        c.quantity += 1;
                        return c;
                    } else {
                        return c;
                    }
                })
                this.setState({
                    courses: [...cursos],
                })
            } else {
                this.setState({
                    courses: [...this.state.courses, course],
                })
            }
        } else {
            this.setState({
                courses: [course],
            })
        }

    }
    deleteCourse = (e) => {
        const toDelete = e.target.parentElement.parentElement.dataset.id;
        this.state.courses.forEach(curso => {
            if (curso.id.toString() === toDelete) {
                this.setState({
                    courses: this.state.courses.filter(crs => {
                        return crs !== curso;
                    }),
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
