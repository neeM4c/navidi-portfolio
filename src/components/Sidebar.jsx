import { NavLink } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { Home, User, Briefcase, Database, Mail, Globe, Send, Linkedin } from 'lucide-react';
import profileImg from '../assets/profile1.png'; // Verified png extension

const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
    const { lang, toggleLang, t } = useLang();

    const navItems = [
        { name: t.nav.home, to: "/", icon: <Home size={20} /> },
        { name: t.nav.about, to: "/about", icon: <User size={20} /> },
        { name: t.nav.skills, to: "/skills", icon: <Database size={20} /> },
        { name: t.nav.projects, to: "/projects", icon: <Briefcase size={20} /> },
        { name: t.nav.contact, to: "/contact", icon: <Mail size={20} /> },
    ];

    const socialLinks = [
        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/nima-navidi-461aa41b4/" },
        { icon: <Send size={18} />, href: "https://t.me/neeMac" },
        { icon: <Mail size={18} />, href: "mailto:nima@navidi.org" },
    ];

    const sidebarClasses = `
    fixed top-0 bottom-0 z-50 w-[300px] 
    bg-slate-900/80 backdrop-blur-lg border-slate-800/50
    text-white transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) overflow-y-auto
    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
    ${lang === 'fa' ? 'right-0 border-l' : 'left-0 border-r'}
    ${isMobileOpen ? 'translate-x-0' : (lang === 'fa' ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0')}
    shadow-2xl
  `;

    return (
        <>
            {/* Mobile Toggle Overlay */}
            {isMobileOpen && (
                <div
                    onClick={() => setIsMobileOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                />
            )}

            {/* Mobile Toggle Button */}
            {!isMobileOpen && (
                <button
                    onClick={() => setIsMobileOpen(true)}
                    className={`lg:hidden fixed top-6 z-50 bg-[#149ddd] text-white p-3 rounded-full shadow-[0_0_15px_rgba(20,157,221,0.5)] hover:scale-110 transition-transform ${lang === 'fa' ? 'left-6' : 'right-6'}`}
                    aria-label={lang === 'en' ? 'Open Menu' : 'باز کردن منو'}
                >
                    <div className="space-y-1.5">
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </div>
                </button>
            )}

            <aside className={sidebarClasses}>
                <div className="flex flex-col items-center p-4 h-full no-scrollbar">
                    {/* Profile Section */}
                    <div className="relative group mb-4">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-28 h-28 rounded-full border-4 border-[#2c2f4f] overflow-hidden">
                            <img src={profileImg} alt="Profile" className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold font-sans mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        {lang === 'en' ? 'Nima Navidi' : 'نیما نویدی'}
                    </h1>

                    {/* Social Links - Glassy */}
                    <div className="flex gap-2 mt-3 mb-6">
                        {socialLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-[#149ddd] hover:border-[#149ddd] hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,157,221,0.5)]"
                                aria-label="Social Link"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    {/* Navigation */}
                    <nav className="w-full flex-1 space-y-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                onClick={() => setIsMobileOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                                        isActive
                                            ? 'bg-white/10 text-white'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`
                                }
                            >
                                <span className="group-hover:text-[#149ddd] transition-colors duration-300">
                                    {item.icon}
                                </span>
                                <span className="text-sm uppercase tracking-wider font-medium group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                                    {item.name}
                                </span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* Language Switcher */}
                    <div className="w-full pt-4 border-t border-white/10 mt-2">
                        <button
                            onClick={toggleLang}
                            className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-[#149ddd] hover:to-[#0c7abf] border border-white/5 rounded-lg text-xs tracking-wider uppercase transition-all duration-300 shadow-lg"
                        >
                            <Globe size={14} />
                            <span>{lang === 'en' ? 'فارسی' : 'English'}</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
