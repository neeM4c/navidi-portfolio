import { useParams, useNavigate } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { getProjects } from '../data/projectsData';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { slug } = useParams();
    const { lang, t } = useLang();
    const navigate = useNavigate();

    const projects = getProjects(lang);
    const project = projects.find(p => p.id === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return <div className="text-center text-white pt-32">Project not found</div>;
    }

    return (
        <article className="min-h-screen bg-[#02060c] pt-24 pb-16 px-6 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
            >
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#149ddd] mb-8 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" />
                    <span>{lang === 'en' ? 'Back to Projects' : 'بازگشت به پروژه‌ها'}</span>
                </button>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gradient-to-r ${project.color} text-white border border-white/10`}>
                            {project.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 font-light border-l-4 border-[#149ddd] pl-6 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6">
                        {project.slogan}
                    </p>
                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left: Description & Features */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Main Image */}
                        <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                            <img src={project.images[0]} alt={project.title} className="w-full h-auto object-cover" />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-8 bg-[#149ddd] rounded-full"></span>
                                {lang === 'en' ? 'Overview' : 'بررسی اجمالی'}
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                {project.longDesc}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                                {lang === 'en' ? 'Key Features' : 'ویژگی‌های کلیدی'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-[#149ddd] shrink-0"></div>
                                        <span className="text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Sidebar Info */}
                    <div className="space-y-8">
                        {/* Tech Stack */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">
                                {lang === 'en' ? 'Technologies' : 'تکنولوژی‌ها'}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1.5 text-sm text-slate-300 bg-slate-800/50 rounded-lg border border-slate-700/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Metadata (Simulated) */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="flex items-center gap-2"><Calendar size={16} /> Year</span>
                                <span className="text-white">2024</span>
                            </div>
                            <div className="flex items-center justify-between text-slate-400">
                                <span className="flex items-center gap-2"><Tag size={16} /> Role</span>
                                <span className="text-white">Lead Architect</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </article>
    );
};

export default ProjectDetail;
