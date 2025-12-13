import { useState, useEffect } from 'react';
import { useLang } from '../context/LangContext';
import { X, CheckCircle2, Layers, Terminal, ChevronRight, ChevronLeft } from 'lucide-react';
import heroBg from '../assets/profile2.png';
import useSEO from '../hooks/useSEO';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const { lang } = useLang();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Dynamic SEO for Projects
    // We pass null when modal is not open to avoid overriding Home SEO unexpectedly,
    // although the hook cleanup handles it. Best is to pass values only if isOpen && project.
    const seoData = (isOpen && project) ? {
        title: `${project.title} | Nima Navidi`,
        description: project.desc,
        url: `https://navidi.org/projects/${project.id}`,
        // Use the first image or heroBg if none, ensure absolute URL if possible or just relative
        image: (project.images && project.images.length > 0) ? `https://navidi.org${project.images[0]}` : "https://navidi.org/assets/profile2.png",
        type: "article",
        schema: {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": project.title,
            "description": project.desc,
            "author": {
                "@type": "Person",
                "name": "Nima Navidi"
            },
            "programmingLanguage": project.tech
        },
        lang: lang
    } : { title: null }; // Pass nulls effectively to skip update in hook logic if we wanted, but hook logic checks `if (title)`.

    // However, if we pass { title: null }, the hook's `if (title)` prevents update, which is correct.
    // BUT, the hook runs on every render. If we pass null, it does nothing?
    // Wait, if it does nothing, it shouldn't unmount the previous state?
    // The hook cleans up on unmount or re-run.
    // If we transition from Open -> Closed.
    // SEO Hook renders with null.
    // Previous effect cleans up (restores title).
    // New effect runs with null -> does nothing.
    // Result: Title restored. Expected behavior.

    useSEO(seoData);

    // Reset image index when project changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [project]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !project) return null;

    const images = project.images && project.images.length > 0 ? project.images : [heroBg];

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0f172a] rounded-3xl shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-300">

                {/* Header Image / Gallery */}
                <div className="relative h-64 md:h-96 w-full overflow-hidden shrink-0 group bg-slate-900">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-multiply z-10 pointer-events-none`}></div>

                    <img
                        src={images[currentImageIndex]}
                        alt={`${project.title} - ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain object-center transition-transform duration-500"
                    />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-30 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-colors rtl:right-auto rtl:left-4"
                    >
                        <X size={24} />
                    </button>

                    {/* Gallery Controls */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all hover:scale-110"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all hover:scale-110"
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                        className={`w-2 h-2 rounded-full cursor-pointer transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {!images.length && (
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent">
                            <div className="flex items-center gap-3 mb-2 text-[#149ddd] font-medium tracking-wide text-sm uppercase">
                                <Layers size={16} />
                                <span>{project.category || 'Enterprise Solution'}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                {project.title}
                            </h2>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">

                    {/* Title Section (if not over image or distinct) */}
                    <div>
                        <div className="flex items-center gap-3 mb-2 text-[#149ddd] font-medium tracking-wide text-sm uppercase">
                            <Layers size={16} />
                            <span>{project.category || 'Enterprise Solution'}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            {project.title}
                        </h2>
                        <h3 className="text-xl font-medium text-slate-500 mb-6 italic border-l-4 border-[#149ddd] pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
                            {project.slogan}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg text-justify">
                            {project.longDesc || project.desc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Features */}
                        {project.features && (
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
                                    <CheckCircle2 size={20} className="text-emerald-500" />
                                    {lang === 'en' ? 'Key Features' : 'ویژگی‌های کلیدی'}
                                </h4>
                                <ul className="space-y-3">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#149ddd] shrink-0"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tech Stack */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h4 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
                                <Terminal size={20} className="text-amber-500" />
                                {lang === 'en' ? 'Tech Stack' : 'تکنولوژی‌های مورد استفاده'}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech && project.tech.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
