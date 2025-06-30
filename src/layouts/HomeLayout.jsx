import React from 'react';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Skills from '../pages/Skills/Skills';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import Education from '../pages/Education/Education';

const HomeLayout = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default HomeLayout;