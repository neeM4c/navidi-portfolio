import { createContext, useState, useContext, useEffect } from 'react';
import { content } from '../data/content';

const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState('en'); // Default to English

    useEffect(() => {
        const dir = lang === 'fa' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = lang;

        // Update font class on body
        if (lang === 'fa') {
            document.body.classList.add('font-vazir');
            document.body.classList.remove('font-sans');
        } else {
            document.body.classList.add('font-sans');
            document.body.classList.remove('font-vazir');
        }
    }, [lang]);

    const toggleLang = () => {
        setLang((prev) => (prev === 'en' ? 'fa' : 'en'));
    };

    const t = content[lang];

    return (
        <LangContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);
