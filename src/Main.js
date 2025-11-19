import React from 'react';
import Header from './Layout/Header';
import About from './Layout/About';
import Project from './Layout/Project';
import Contact from './Layout/Contact';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';

function Main(props) {
    return (
        <div>
            <Header/>
            <About/>
            <Project/>
            <Contact/>
            <Footer/>
            <Navbar/>
        </div>
    );
}

export default Main;