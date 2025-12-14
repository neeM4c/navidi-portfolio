import { useLang } from '../context/LangContext';
import { Server, Brain, Wrench, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const { t, lang } = useLang();

  const skillCategories = [
    {
      title: lang === 'en' ? 'Infrastructure & Network' : 'زیرساخت و شبکه',
      icon: <Server className="text-emerald-400" size={24} />,
      items: [
        { name: 'HP DL360 Servers', level: 'Expert' },
        { name: 'VMware ESXi', level: 'Expert' },
        { name: 'MikroTik Routing', level: 'Advanced' },
        { name: 'Network Security', level: 'Advanced' },
        { name: 'Cisco Switching', level: 'Intermediate' },
      ]
    },
    {
      title: lang === 'en' ? 'AI & Development' : 'هوش مصنوعی و توسعه',
      icon: <Brain className="text-purple-400" size={24} />,
      items: [
        { name: 'Python Automation', level: 'Advanced' },
        { name: 'Prompt Engineering', level: 'Expert' },
        { name: 'React / Tailwind', level: 'Intermediate' },
        { name: 'Stable Diffusion', level: 'Advanced' },
        { name: 'RAG Architecture', level: 'Intermediate' },
      ]
    },
    {
      title: lang === 'en' ? 'Tools & Leadership' : 'ابزارها و رهبری',
      icon: <Wrench className="text-amber-400" size={24} />,
      items: [
        { name: 'Git / Version Control', level: 'Advanced' },
        { name: 'Linux Administration', level: 'Advanced' },
        { name: 'Team Leadership', level: 'Experienced' },
        { name: 'Docker / Containers', level: 'Intermediate' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-8 md:px-16 lg:px-24 bg-[#0a0f1c] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="section-title mb-16">
          <h2 className="text-4xl font-bold text-white relative pb-4 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 rtl:after:left-auto rtl:after:right-0 after:h-1 after:w-20 after:bg-[#149ddd] after:rounded-full">
            {t.skills.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            {lang === 'en'
              ? "A comprehensive technical arsenal built over 15+ years of experience."
              : "زرادخانه فنی جامع که حاصل بیش از ۱۵ سال تجربه است."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-[#149ddd]/50 transition-all duration-300 shadow-xl group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/10 rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#149ddd] transition-colors">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/5">
                    <span className="font-medium text-slate-300 flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-[#149ddd]" />
                      {skill.name}
                    </span>
                    <span className="text-xs font-bold text-[#149ddd] bg-[#149ddd]/10 px-2 py-1 rounded border border-[#149ddd]/20">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
