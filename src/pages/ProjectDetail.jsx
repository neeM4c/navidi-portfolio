import { useParams, Link, Navigate } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import useSEO from '../hooks/useSEO';
import { getProjects } from '../data/projectsData';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
    const { lang, t } = useLang();
    const { slug } = useParams();
    const projects = getProjects(lang);
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        // Redirect to a 404 page if the project is not found
        return <Navigate to="/404" />;
    }

    // SEO
    useSEO({
        title: `${project.title} | Nima Navidi`,
        description: project.desc,
        keywords: project.tags,
        canonicalUrl: `https://nimanavidi.com/projects/${project.slug}`
    });

    const { title, longDesc, slogan, tech, features, images, category } = project;

    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link to="/projects" className="inline-flex items-center text-sky-400 hover:text-sky-300 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        {t.projectDetail.back}
                    </Link>
                </div>

                <article>
                    <header className="mb-8">
                        <p className="text-sky-400 font-semibold mb-2">{category}</p>
                        <h1 className="text-4xl font-bold text-slate-100 tracking-tight mb-3">{title}</h1>
                        <p className="text-lg text-slate-400 italic">{slogan}</p>
                    </header>

                    <div className="mb-10">
                        <img src={images[0]} alt={title} className="rounded-lg shadow-xl w-full" />
                    </div>

                    <div className="prose prose-invert lg:prose-xl max-w-none">
                        <p className="lead text-slate-300">{longDesc}</p>
                    </div>

                    {project.metrics && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-slate-100 mb-4">{t.projectDetail.metrics}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                {project.metrics.map((metric, index) => (
                                    <div key={index} className="bg-slate-800/50 p-4 rounded-lg">
                                        <p className="text-3xl font-bold text-sky-400">{metric.value}</p>
                                        <p className="text-sm text-slate-400">{metric.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-100 mb-4 border-b-2 border-sky-500/30 pb-2">{t.projectDetail.features}</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-300">
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-100 mb-4 border-b-2 border-sky-500/30 pb-2">{t.projectDetail.techStack}</h3>
                            <div className="flex flex-wrap gap-2">
                                {tech.map((techItem, index) => (
                                    <span key={index} className="bg-slate-800 text-sky-300 text-sm font-medium px-3 py-1 rounded-full">
                                        {techItem}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {images.length > 1 && (
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-slate-100 mb-4">{t.projectDetail.gallery}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {images.slice(1).map((image, index) => (
                                    <img key={index} src={image} alt={`Gallery image ${index + 1}`} className="rounded-lg shadow-md" />
                                ))}
                            </div>
                        </div>
                    )}
                </article>
            </div>
        </div>
    );
};

export default ProjectDetail;