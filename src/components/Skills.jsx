import { useLang } from '../context/LangContext';
import { Server, Brain, Wrench, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const { t, lang } = useLang();

  const skillCategories = [
    {
      title: lang === 'en' ? 'Infrastructure & Network' : 'زیرساخت و شبکه',
      icon: <Server className="text-emerald-400" size={24} />,
      items: [
        { name: 'HP DL360 Servers', level: 95 },
        { name: 'VMware ESXi', level: 90 },
        { name: 'MikroTik Routing', level: 85 },
        { name: 'Network Security', level: 80 },
      ]
    },
    {
      title: lang === 'en' ? 'AI & Development' : 'هوش مصنوعی و توسعه',
      icon: <Brain className="text-purple-400" size={24} />,
      items: [
        { name: 'Python Automation', level: 85 },
        { name: 'Prompt Engineering', level: 95 },
        { name: 'React / Tailwind', level: 75 },
        { name: 'Midjourney/SD', level: 90 },
      ]
    },
    {
      title: lang === 'en' ? 'General IT Tools' : 'ابزارها و مهارت‌های عمومی',
      icon: <Wrench className="text-amber-400" size={24} />,
      items: [
        { name: 'Git / Version Control', level: 80 },
        { name: 'Linux Administration', level: 85 },
        { name: 'Problem Solving', level: 100 },
        { name: 'Team Leadership', level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-8 md:px-16 lg:px-24 bg-white dark:bg-[#040b14]">
      <div className="section-title mb-16">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white relative pb-4 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 rtl:after:left-auto rtl:after:right-0 after:h-1 after:w-20 after:bg-[#149ddd] after:rounded-full">
          {t.skills.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          {lang === 'en'
            ? "A comprehensive technical arsenal built over 15+ years of experience."
            : "زرادخانه فنی جامع که حاصل بیش از ۱۵ سال تجربه است."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-slate-50 dark:bg-[#111827] p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
            </div>

            <div className="space-y-6">
              {category.items.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#149ddd]" />
                      {skill.name}
                    </span>
                    <span className="text-xs font-bold text-[#149ddd] bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">{skill.level}%</span>
                  </div>
                  <div
                    className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`${skill.name} proficiency level`}
                  >
                    <div
                      className="bg-gradient-to-r from-blue-500 to-[#149ddd] h-full rounded-full"
                      style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-out' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
