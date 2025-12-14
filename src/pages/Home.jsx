import React from 'react';
import useSEO from '../hooks/useSEO';
import { useLang } from '../context/LangContext';
import Hero from '../components/Hero';
import Projects from './Projects';
import TrustSection from '../components/TrustSection';

const Home = () => {
    const { t } = useLang();
    useSEO({
        title: t.name,
        description: t.tagline,
        keywords: ['IT Supervisor', 'AI Automation', 'Python', 'React'],
        canonicalUrl: 'https://nimanavidi.com'
    });

    return (
        <>
            <Hero />
            <Projects />
            <TrustSection />
        </>
    );
};

export default Home;
