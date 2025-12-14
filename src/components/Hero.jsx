import { useLang } from '../context/LangContext';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t, lang } = useLang();

  // Premium, Authoritative Titles
  const titlesEn = ["Enterprise Infrastructure Architect", "AI Automation Specialist", "System Reliability Engineer"];
  const titlesFa = ["معمار زیرساخت‌های سازمانی", "متخصص اتوماسیون با هوش مصنوعی", "مهندس قابلیت اطمینان سیستم‌ها"];
  const titles = lang === 'en' ? titlesEn : titlesFa;

  const taglineEn = "Architecting resilient infrastructure & intelligent automation at scale.";
  const taglineFa = "معماری زیرساخت‌های پایدار و اتوماسیون هوشمند در مقیاس سازمانی.";
  const tagline = lang === 'en' ? taglineEn : taglineFa;

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typing Effect Logic
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
    <section id="hero" className="relative h-screen flex flex-col justify-center w-full overflow-hidden bg-[#02060c]">

      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,157,221,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,157,221,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left rtl:lg:text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
              <span className="block text-slate-400 text-2xl md:text-3xl font-light mb-2">{lang === 'en' ? "Hello, I'm" : "سلام، من"}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                {t.name}
              </span>
            </h1>

            <div className="text-2xl md:text-3xl text-slate-300 font-light flex items-center justify-center lg:justify-start gap-3 mb-8 h-12">
              <span className="text-[#149ddd] font-medium tracking-wide relative">
                {text}
                <span className="absolute -right-1 top-0 bottom-0 w-0.5 bg-[#149ddd] animate-blink shadow-[0_0_10px_#149ddd]"></span>
              </span>
            </div>

            <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed mb-12 mx-auto lg:mx-0 border-l-2 border-[#149ddd]/50 pl-6 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-6 bg-white/5 backdrop-blur-sm p-4 rounded-r-xl rtl:rounded-r-none rtl:rounded-l-xl">
              {tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="group relative px-8 py-4 bg-[#149ddd] text-white rounded-full overflow-hidden shadow-[0_0_20px_rgba(20,157,221,0.3)] hover:shadow-[0_0_30px_rgba(20,157,221,0.6)] transition-all">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative font-bold tracking-wider uppercase text-sm">{t.cta}</span>
              </a>

              <a href="#contact" className="px-8 py-4 bg-transparent border border-slate-700 text-slate-300 rounded-full hover:bg-slate-800 hover:text-white transition-all font-bold tracking-wider uppercase text-sm">
                {lang === 'en' ? "Contact Me" : "تماس با من"}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual (Optional: 3D or Abstract Shape) */}
        {/* Placeholder for now or just empty to let background shine */}
      </div>
    </section>
  );
};

export default Hero;
