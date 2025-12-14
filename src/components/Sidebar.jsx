import { useLang } from '../context/LangContext';
import { Home, User, Briefcase, Database, Mail, Globe, Send, Linkedin } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/profile1.png';

const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
    const { lang, toggleLang, t } = useLang();
    const location = useLocation();
    const navigate = useNavigate();

    const handleNav = (e, href) => {
        e.preventDefault();
        setIsMobileOpen(false);

        if (href.startsWith('#')) {
            const id = href.substring(1);
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, null, href);
                    }
                }, 100);
            } else {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, null, href);
                }
            }
        } else {
            navigate(href);
        }
    };

    const navItems = [
        { name: t.nav.home, href: "#home", icon: <Home size={20} /> },
        { name: t.nav.about, href: "#about", icon: <User size={20} /> },
        { name: t.nav.skills, href: "#skills", icon: <Database size={20} /> },
        { name: t.nav.projects, href: "#projects", icon: <Briefcase size={20} /> },
        { name: t.nav.contact, href: "#contact", icon: <Mail size={20} /> },
    ];

    const socialLinks = [
        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/nima-navidi-461aa41b4/" },
        { icon: <Send size={18} />, href: "https://t.me/neeMac" },
        { icon: <Mail size={18} />, href: "mailto:nima@navidi.org" },
    ];

    const sidebarClasses = `
    fixed top-0 bottom-0 z-50 w-[280px] lg:w-[300px]
    bg-[#02060c]/80 backdrop-blur-xl border-r border-white/5
    text-white transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
    ${lang === 'fa' ? 'right-0 border-l border-r-0' : 'left-0 border-r'}
    ${isMobileOpen ? 'translate-x-0' : (lang === 'fa' ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0')}
    shadow-[0_0_50px_rgba(0,0,0,0.5)]
  `;

    return (
        <>
            {/* Mobile Toggle Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`lg:hidden fixed top-6 z-50 bg-[#149ddd] text-white p-3 rounded-full shadow-[0_0_20px_rgba(20,157,221,0.4)] hover:scale-110 transition-transform ${lang === 'fa' ? 'left-6' : 'right-6'}`}
                style={{ opacity: isMobileOpen ? 0 : 1, pointerEvents: isMobileOpen ? 'none' : 'auto', transition: 'opacity 0.3s' }}
            >
                <div className="space-y-1.5">
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </div>
            </button>

            <aside className={sidebarClasses}>
                <div className="flex flex-col items-center p-6 h-full overflow-y-auto no-scrollbar">
                    {/* Profile Section */}
                    <div className="relative group mb-6">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-32 h-32 rounded-full border-4 border-[#1a1f35] overflow-hidden shadow-2xl">
                            <img src={profileImg} alt="Nima Navidi" className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold font-sans mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        {lang === 'en' ? 'Nima Navidi' : 'نیما نویدی'}
                    </h1>

                    {/* Social Links - Glassy */}
                    <div className="flex gap-3 mt-4 mb-8">
                        {socialLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-[#149ddd] hover:border-[#149ddd] hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,157,221,0.5)] group"
                            >
                                <span className="text-slate-400 group-hover:text-white transition-colors">{link.icon}</span>
                            </a>
                        ))}
                    </div>

                    {/* Navigation */}
                    <nav className="w-full flex-1 space-y-2">
                        {navItems.map((item) => {
                            const isActive = location.pathname === '/' && location.hash === item.href;
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNav(e, item.href)}
                                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all group relative overflow-hidden ${isActive ? 'bg-[#149ddd]/10 text-[#149ddd]' : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <span className={`transition-colors duration-300 ${isActive ? 'text-[#149ddd]' : 'group-hover:text-[#149ddd]'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="text-sm uppercase tracking-wider font-medium group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                                        {item.name}
                                    </span>
                                    {isActive && <motion.div layoutId="activeNav" className="absolute left-0 w-1 h-full bg-[#149ddd] rounded-r-full" />}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Language Switcher */}
                    <div className="w-full pt-6 border-t border-white/10 mt-4">
                        <button
                            onClick={toggleLang}
                            className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-[#149ddd] hover:to-[#0c7abf] border border-white/5 rounded-xl text-xs tracking-wider uppercase transition-all duration-300 shadow-lg group"
                        >
                            <Globe size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                            <span>{lang === 'en' ? 'فارسی' : 'English'}</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
