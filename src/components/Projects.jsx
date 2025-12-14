import { useState, useRef } from 'react';
import { useLang } from '../context/LangContext';
import { ChevronRight } from 'lucide-react';
import { getProjects } from '../data/projectsData';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  return (
    <motion.div
      className={className}
      onMouseMove={onMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}


const Projects = () => {
  const { t, lang } = useLang();

  const projects = getProjects(lang);

  return (
    <section id="projects" className="py-24 px-8 md:px-16 lg:px-24 bg-[#02060c]">
      <div className="section-title mb-16">
        <h2 className="text-4xl font-bold text-white relative pb-4 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 rtl:after:left-auto rtl:after:right-0 after:h-1 after:w-20 after:bg-[#149ddd] after:rounded-full">
          {t.projects.title}
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          {lang === 'en'
            ? "Highlighting key achievements in Automation, Infrastructure, and AI."
            : "نمایش دستاوردهای کلیدی در اتوماسیون، زیرساخت و هوش مصنوعی."}
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
        {projects.map((project, idx) => (
          <Link
            to={`/projects/${project.id}`}
            key={idx}
            className={`${project.cols} block`}
          >
            <TiltCard
              className={`relative h-full overflow-hidden rounded-3xl bg-[#111827] border border-slate-800 hover:border-[#149ddd]/50 transition-all duration-500 shadow-xl group`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative p-8 h-full flex flex-col items-start justify-between z-10">
                <div>
                  <div className="mb-6 p-4 bg-slate-800/50 rounded-2xl inline-block backdrop-blur-sm shadow-sm group-hover:bg-white/10 group-hover:text-white transition-colors">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="w-full">
                  <div className="flex flex-wrap gap-2 w-full pt-4 border-t border-slate-800 group-hover:border-white/10 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-800 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-[#149ddd] font-bold text-sm group-hover:text-white transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>{lang === 'en' ? 'View Details' : 'مشاهده جزئیات'}</span>
                    <ChevronRight size={16} className="rtl:rotate-180" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
