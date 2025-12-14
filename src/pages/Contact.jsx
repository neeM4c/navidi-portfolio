import { useLang } from '../context/LangContext';
import useSEO from '../hooks/useSEO';
import { useState } from 'react';
import { MapPin, Mail, Smartphone } from 'lucide-react';

const Contact = () => {
  const { t, lang } = useLang();

  useSEO({
    title: `${t.contact.title} | ${t.name}`,
    description: "Contact information for Nima Navidi.",
    canonicalUrl: 'https://nimanavidi.com/contact'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !message) {
      alert(lang === 'en' ? 'Please fill in all required fields.' : 'لطفاً تمام فیلدهای اجباری را پر کنید.');
      return;
    }

    const mailtoLink = `mailto:nima@navidi.org?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-8 md:px-16 lg:px-24 bg-[#f5f8fd] dark:bg-slate-900">
      <div className="section-title mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white relative pb-4 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-[#149ddd]">
          {t.contact.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          {lang === 'en'
            ? "Connect with me for professional services or consultation."
            : "برای دریافت خدمات حرفه‌ای یا مشاوره با من در ارتباط باشید."}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 shadow-xl bg-white dark:bg-slate-950 p-8 rounded-xl">

        {/* Info Column */}
        <div className="lg:w-1/3 space-y-8">
          <div className="flex gap-4 group">
            <div className="w-12 h-12 bg-blue-100 dark:bg-slate-800 text-[#149ddd] rounded-full flex items-center justify-center group-hover:bg-[#149ddd] group-hover:text-white transition-colors">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{lang === 'en' ? 'Location:' : 'موقعیت:'}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Urmia, Iran</p>
            </div>
          </div>

          <div className="flex gap-4 group">
            <div className="w-12 h-12 bg-blue-100 dark:bg-slate-800 text-[#149ddd] rounded-full flex items-center justify-center group-hover:bg-[#149ddd] group-hover:text-white transition-colors">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{lang === 'en' ? 'Email:' : 'ایمیل:'}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">nima@navidi.org</p>
            </div>
          </div>

          <div className="flex gap-4 group">
            <div className="w-12 h-12 bg-blue-100 dark:bg-slate-800 text-[#149ddd] rounded-full flex items-center justify-center group-hover:bg-[#149ddd] group-hover:text-white transition-colors">
              <Smartphone size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{lang === 'en' ? 'Telegram:' : 'تلگرام:'}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">@neeMac</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:w-2/3">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="md:col-span-1">
              <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{lang === 'en' ? 'Your Name' : 'نام شما'}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 dark:border-slate-700 rounded-md p-2 bg-white dark:bg-slate-900 focus:border-[#149ddd] outline-none"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{lang === 'en' ? 'Your Email' : 'ایمیل شما'}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 dark:border-slate-700 rounded-md p-2 bg-white dark:bg-slate-900 focus:border-[#149ddd] outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{lang === 'en' ? 'Subject' : 'موضوع'}</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-slate-300 dark:border-slate-700 rounded-md p-2 bg-white dark:bg-slate-900 focus:border-[#149ddd] outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{lang === 'en' ? 'Message' : 'پیام'}</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 dark:border-slate-700 rounded-md p-2 bg-white dark:bg-slate-900 focus:border-[#149ddd] outline-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center md:text-left rtl:md:text-right">
              <button type="submit" className="bg-[#149ddd] hover:bg-[#128ecc] text-white py-3 px-8 rounded-full transition-colors font-medium cursor-pointer">
                {lang === 'en' ? 'Send Message' : 'ارسال پیام'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
