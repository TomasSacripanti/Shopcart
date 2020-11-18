import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import Courses from './Courses';
import Footer from './Footer';
import Bar from './Bar';

export class Logic extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Hero></Hero>
                <Bar></Bar>
                <Courses></Courses>
                <Footer></Footer>
            </>
        )
    }
}

export default Logic;
