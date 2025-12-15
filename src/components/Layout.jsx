import Sidebar from '../components/Sidebar';
import { useLang } from '../context/LangContext';
import { useState } from 'react';

const SIDEBAR_WIDTH = 300;

const Layout = ({ children }) => {
    const { lang } = useLang();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div
            className={`min-h-screen bg-slate-50 dark:bg-slate-950 ${lang === 'fa' ? 'font-vazir' : 'font-sans'
                }`}
            dir={lang === 'fa' ? 'rtl' : 'ltr'}
        >
            <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

            {/* Main Content */}
            <main
                className={`
                    min-h-screen overflow-x-hidden transition-all duration-300 ease-in-out
                    ${lang === 'en' ? 'lg:ml-[300px]' : 'lg:mr-[300px]'}
                `}
            >
                {children}
            </main>
        </div>
    );
};

export default Layout;
