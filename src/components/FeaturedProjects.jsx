import { useState } from 'react';
import { useLang } from '../context/LangContext';
import { ArrowRight, Star } from 'lucide-react';
import { getProjects } from '../data/projectsData';
import ProjectModal from './ProjectModal';

const FeaturedProjects = () => {
    const { lang } = useLang();
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = getProjects(lang);

    // Select top 3 projects as featured
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section className="py-20 px-8 md:px-16 lg:px-24 bg-slate-50/50 dark:bg-[#0d1221] border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div>
                    <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mb-2">
                        <Star className="text-amber-500 fill-amber-500" size={28} />
                        {lang === 'en' ? 'Featured Projects' : 'پروژه‌های برجسته'}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        {lang === 'en'
                            ? "A selection of key enterprise achievements and automated solutions."
                            : "گزیده‌ای از دستاوردهای کلیدی سازمانی و راهکارهای اتوماسیون."}
                    </p>
                </div>

                <a href="#projects" className="hidden md:flex items-center gap-2 text-[#149ddd] font-medium hover:underline mt-4 md:mt-0">
                    <span>{lang === 'en' ? 'View All Projects' : 'مشاهده همه پروژه‌ها'}</span>
                    <ArrowRight size={18} className="rtl:rotate-180" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedProject(project)}
                        className="group relative bg-white dark:bg-[#151e32] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-[#149ddd]/50 dark:hover:border-[#149ddd]/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
                    >
                        {/* Image Header with Gradient Overlay */}
                        <div className="relative h-48 overflow-hidden bg-slate-900">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 mix-blend-multiply z-10`}></div>
                            <img
                                src={project.images && project.images[0]}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Icon Badge */}
                            <div className="absolute top-4 right-4 z-20 rtl:right-auto rtl:left-4 bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 text-white shadow-lg group-hover:scale-110 transition-transform">
                                {project.icon}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#149ddd] transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                {project.desc}
                            </p>

                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/50">
                                <span className="text-xs font-semibold uppercase tracking-wider text-[#149ddd]">
                                    {project.category || 'CASE STUDY'}
                                </span>
                                <div className="flex items-center gap-1 text-slate-400 group-hover:text-[#149ddd] transition-colors text-sm font-medium">
                                    <span>{lang === 'en' ? 'Details' : 'جزئیات'}</span>
                                    <ArrowRight size={16} className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View All Link */}
            <div className="mt-8 text-center md:hidden">
                <a href="#projects" className="inline-flex items-center gap-2 text-[#149ddd] font-medium hover:underline">
                    <span>{lang === 'en' ? 'View All Projects' : 'مشاهده همه پروژه‌ها'}</span>
                    <ArrowRight size={18} className="rtl:rotate-180" />
                </a>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default FeaturedProjects;
