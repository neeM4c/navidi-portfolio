// D:\sc\MySite2\src\App.jsx
import React from 'react';
import { LangProvider } from './context/LangContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import FeaturedProjects from './components/FeaturedProjects';

function App() {
    return (
        <LangProvider>
            <Layout>
                <div id="home">
                    <Hero />
                </div>
                <FeaturedProjects />
                <div id="about">
                    <About />
                </div>
                <div id="skills">
                    <Skills />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </Layout>
        </LangProvider>
    );
}

export default App;