import { useState } from 'react';
import { useLang } from '../context/LangContext';
import { ChevronRight } from 'lucide-react';
import { getProjects } from '../data/projectsData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const { t, lang } = useLang();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = getProjects(lang);

  return (
    <section id="projects" className="py-24 px-8 md:px-16 lg:px-24 bg-slate-50 dark:bg-[#0a0f1c]">
      <div className="section-title mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white relative pb-4 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 rtl:after:left-auto rtl:after:right-0 after:h-1 after:w-20 after:bg-[#149ddd] after:rounded-full">
          {t.projects.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          {lang === 'en'
            ? "Highlighting key achievements in Automation, Infrastructure, and AI."
            : "نمایش دستاوردهای کلیدی در اتوماسیون، زیرساخت و هوش مصنوعی."}
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProject(project)}
            className={`${project.cols} relative group overflow-hidden rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-transparent transition-all duration-500 shadow-xl cursor-pointer`}
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            {/* Border Glow */}
            <div className={`absolute inset-0 border-2 ${project.border} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}></div>

            <div className="relative p-8 h-full flex flex-col items-start justify-between z-10 transition-transform duration-300 group-hover:-translate-y-1">
              <div>
                <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm shadow-sm group-hover:bg-white/10 group-hover:text-white">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed group-hover:text-slate-100 transition-colors line-clamp-3">
                  {project.desc}
                </p>
              </div>

              <div className="w-full">
                <div className="flex flex-wrap gap-2 w-full pt-4 border-t border-slate-100 dark:border-slate-800 group-hover:border-white/10 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#149ddd] font-bold text-sm group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span>{lang === 'en' ? 'View Details' : 'مشاهده جزئیات'}</span>
                  <ChevronRight size={16} className="rtl:rotate-180" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
