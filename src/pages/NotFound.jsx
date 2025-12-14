import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { ShieldAlert } from 'lucide-react';

const NotFound = () => {
    const { t } = useLang();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-300">
            <ShieldAlert className="w-24 h-24 text-sky-500 mb-6" />
            <h1 className="text-6xl font-bold text-slate-100 mb-2">404</h1>
            <p className="text-2xl text-slate-400 mb-8">{t.notFound.message}</p>
            <Link
                to="/"
                className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors"
            >
                {t.notFound.button}
            </Link>
        </div>
    );
};

export default NotFound;
