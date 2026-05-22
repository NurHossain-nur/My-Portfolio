import React from 'react';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Skills from '../pages/Skills/Skills';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import Education from '../pages/Education/Education';
import Services from '../pages/Services/Services';
import GithubStats from '../pages/GithubStats/GithubStats';
import Marquee from '../pages/Marquee/Marquee';

const HomeLayout = () => {
    return (
        <div>
            <Home></Home>
            <Marquee></Marquee>
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Services></Services>
            <GithubStats></GithubStats>
            <Contact></Contact>
        </div>
    );
};

export default HomeLayout;