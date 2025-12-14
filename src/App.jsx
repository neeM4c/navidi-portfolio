import { Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import Layout from './components/Layout';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import './index.css';

function App() {
    return (
        <LangProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                </Routes>
            </Layout>
        </LangProvider>
    );
}

export default App;