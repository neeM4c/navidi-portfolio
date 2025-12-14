import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import FeaturedProjects from './FeaturedProjects';
import RevealOnScroll from './RevealOnScroll';

const Home = () => {
    return (
        <>
            <div id="home">
                <Hero />
            </div>

            <RevealOnScroll>
                <div id="about">
                    <About />
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div id="skills">
                    <Skills />
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div id="projects">
                    <Projects />
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div id="contact">
                    <Contact />
                </div>
            </RevealOnScroll>
        </>
    );
};

export default Home;
