import { useLang } from '../context/LangContext';

const TrustSection = () => {
    const { t } = useLang();

    const logos = [
        // Add logos here
    ];

    return (
        <section id="trust" className="py-16 bg-slate-100 dark:bg-slate-800">
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold text-center text-slate-700 dark:text-slate-300 mb-8">
                    {t.trust.title}
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {/* Logos will be mapped here */}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
