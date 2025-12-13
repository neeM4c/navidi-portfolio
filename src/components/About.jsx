import { useLang } from '../context/LangContext';
import { ChevronRight } from 'lucide-react';
import profileImg from '../assets/profile1.png';

const About = () => {
  const { t, lang } = useLang();

  const infoList = [
    { label: lang === 'en' ? 'Birthday:' : 'تولد:', value: lang === 'en' ? '1985' : '۱۳۶۴' },
    { label: lang === 'en' ? 'Website:' : 'وب‌سایت:', value: 'navidi.org' },
    { label: lang === 'en' ? 'Degree:' : 'مدرک:', value: lang === 'en' ? "Bachelor's" : 'کارشناسی' },
    { label: lang === 'en' ? 'City:' : 'شهر:', value: lang === 'en' ? 'Urmia, Iran' : 'ارومیه، ایران' },
    { label: lang === 'en' ? 'Age:' : 'سن:', value: '40' },
    { label: lang === 'en' ? 'Email:' : 'ایمیل:', value: 'nima@navidi.org' },
    { label: lang === 'en' ? 'Freelance:' : 'فریلنس:', value: lang === 'en' ? 'Available' : 'در دسترس' },
  ];

  return (
    <section id="about" className="py-20 px-8 md:px-16 lg:px-24 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <div className="section-title mb-12">
        <h2 className="text-3xl font-bold relative pb-4 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-[#149ddd]">
          {t.about.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          {t.tagline}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Column */}
        <div className="lg:w-1/3">
          <img src={profileImg} alt="Profile" className="w-full rounded-lg shadow-lg" />
        </div>

        {/* Content Column */}
        <div className="lg:w-2/3">
          <h3 className="text-2xl font-bold text-[#173b6c] dark:text-[#149ddd] mb-4">
            {t.title}
          </h3>
          <p className="italic mb-6 text-slate-600 dark:text-slate-300">
            "Bridging the gap between robust IT Infrastructure and Creative AI Solutions."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
            {infoList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <ChevronRight size={16} className="text-[#149ddd]" />
                <span className="font-bold">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          <p className="leading-relaxed text-slate-700 dark:text-slate-300">
            {t.about.text}
          </p>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300 mt-4">
            {lang === 'en'
              ? "With extensive experience in network infrastructure utilizing HP servers and MikroTik routing, combined with a fresh and deep dive into the world of Artificial Intelligence, I offer a unique blend of stability and innovation."
              : "با تجربه گسترده در زیرساخت شبکه با استفاده از سرورهای HP و مسیریابی میکروتیک، که با نگاهی تازه و عمیق به دنیای هوش مصنوعی ترکیب شده است، من ترکیبی منحصر به فرد از ثبات و نوآوری را ارائه می‌دهم."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
