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
    <section id="hero" className="relative h-screen flex flex-col justify-center w-full overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-[50%_40%] bg-no-repeat bg-scroll lg:bg-fixed scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Dual Gradient Overlay - Darker for more contrast/premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02060c]/95 to-[#040b14]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#02060c] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          {t.name}
        </h1>

        <div className="text-2xl md:text-3xl text-slate-300 font-light flex items-center gap-3 mb-6 h-12">
          <span className="opacity-60 font-thin">{lang === 'en' ? "I am an" : "من"}</span>
          <span className="text-[#149ddd] font-medium tracking-wide relative">
            {text}
            <span className="absolute -right-1 top-0 bottom-0 w-0.5 bg-[#149ddd] animate-blink shadow-[0_0_10px_#149ddd]"></span>
          </span>
        </div>

        {/* New Premium Tagline */}
        <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed border-l-2 border-[#149ddd]/50 pl-6 mb-12">
          {tagline}
        </p>

        {/* CTA Button */}
        <div>
          <a href="#projects" className="group inline-flex items-center gap-2 px-10 py-4 bg-transparent border border-[#149ddd] text-white rounded-full hover:bg-[#149ddd] transition-all duration-300 shadow-[0_0_20px_rgba(20,157,221,0.1)] hover:shadow-[0_0_30px_rgba(20,157,221,0.4)]">
            <span className="tracking-widest text-xs font-bold uppercase">{t.cta}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
