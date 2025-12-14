import { useLang } from '../context/LangContext';
import { useEffect, useState } from 'react';
import heroBg from '../assets/profile2.png';
import useSEO from '../hooks/useSEO';

const Hero = () => {
  const { t, lang } = useLang();

  // Premium, Authoritative Titles
  const titlesEn = ["Enterprise Infrastructure Architect", "AI Automation Specialist", "Systems Reliability Engineer"];
  const titlesFa = ["معمار زیرساخت‌های سازمانی", "متخصص اتوماسیون با هوش مصنوعی", "مهندس قابلیت اطمینان سیستم‌ها"];
  const titles = lang === 'en' ? titlesEn : titlesFa;

  // Premium Static Tagline
  const taglineEn = "Architecting resilient infrastructure & intelligent automation at scale.";
  const taglineFa = "معماری زیرساخت‌های پایدار و اتوماسیون هوشمند در مقیاس سازمانی.";
  const tagline = lang === 'en' ? taglineEn : taglineFa;

  // SEO Integration
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nima Navidi",
    "url": "https://navidi.org",
    "image": "https://navidi.org/og-image.jpg",
    "sameAs": [
      "https://github.com/nimanavidi",
      "https://www.linkedin.com/in/nima-navidi-461aa41b4/"
    ],
    "jobTitle": "Enterprise Infrastructure Architect",
    "knowsAbout": ["Python", "VMware", "MikroTik", "Cisco", "Automation", "AI"],
    "description": lang === 'en' ? taglineEn : taglineFa
  };

  useSEO({
    title: lang === 'en' ? "Nima Navidi | Enterprise Infrastructure & AI Architect" : "نیما نویدی | معمار زیرساخت سازمانی و متخصص هوش مصنوعی",
    description: lang === 'en'
      ? "Official portfolio of Nima Navidi, a Senior IT Supervisor & AI Automation Specialist. Expert in HP Servers, ESXi, MikroTik, and Python-based AI solutions."
      : "پورتفولیو رسمی نیما نویدی، سرپرست ارشد IT و متخصص اتوماسیون هوشمند. متخصص در سرورهای HP، ESXi، میکروتیک و راهکارهای هوش مصنوعی پایتون.",
    url: "https://navidi.org",
    image: "https://navidi.org/og-image.jpg",
    schema: personSchema,
    lang: lang
  });

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= titles.length) {
      setIndex(0);
      return;
    }

    const currentTitle = titles[index];

    if (subIndex === currentTitle.length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(currentTitle.substring(0, subIndex));
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, titles]);

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center w-full overflow-hidden bg-slate-900">
      {/* Background Image with Cinematic Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Dual Gradient Overlay - Darker for more contrast/premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
          {t.name}
        </h1>

        <div className="text-xl md:text-2xl text-slate-300 font-light flex items-center gap-3 mb-6 h-12">
          <span className="opacity-70">{lang === 'en' ? "I am a" : "من یک"}</span>
          <span className="text-sky-400 font-medium tracking-wide relative">
            {text}
            <span className="absolute -right-1 top-0 bottom-0 w-0.5 bg-sky-400 animate-blink shadow-[0_0_10px_#0ea5e9]"></span>
          </span>
        </div>

        {/* New Premium Tagline */}
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed border-l-2 border-sky-500/30 pl-6 mb-10">
          {tagline}
        </p>

        {/* CTA Button */}
        <div>
          <a href="#projects" className="group inline-flex items-center gap-3 px-8 py-4 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-all duration-300 shadow-lg shadow-sky-600/20 hover:shadow-xl hover:shadow-sky-500/30 transform hover:-translate-y-1">
            <span className="tracking-wide font-semibold">{t.cta}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
