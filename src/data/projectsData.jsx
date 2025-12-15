import { Clock, Server, PenTool, Cpu } from 'lucide-react';
import heroBg from '../assets/profile2.png';
import projectRetail1 from '../assets/project-retail-1.png';
import projectRetail2 from '../assets/project-retail-2.png';
import projectRetail3 from '../assets/project-retail-3.png';
import projectTime1 from '../assets/project-time-1.png';
import projectAi1 from '../assets/project-ai-1.png';
import projectAuto1 from '../assets/project-automation-1.png';

export const getProjects = (lang) => [
    {
        id: 'retail-suite',
        featured: true,
        title: lang === 'en' ? 'Enterprise Retail IT Orchestration & Automation Suite' : 'سامانه جامع مدیریت و ارکستراسیون زیرساخت IT شعب',
        slogan: lang === 'en' ? '“Bridging the gap between Ad-hoc Scripting and Enterprise Orchestration.”' : '«گذار از اسکریپت‌نویسی سنتی به ارکستراسیون سازمانی.»',
        category: lang === 'en' ? 'Orchestration Framework' : 'پلتفرم ارکستراسیون',
        desc: lang === 'en'
            ? 'A centralized Infrastructure Orchestration Platform engineered to streamline IT operations across high-volume retail environments, ensuring configuration consistency and operational agility.'
            : 'پلتفرم متمرکز ارکستراسیون زیرساخت، طراحی شده برای یکپارچه‌سازی عملیات IT در محیط‌های فروشگاهی بزرگ، با تضمین ثبات پیکربندی و چابکی عملیاتی.',
        longDesc: lang === 'en'
            ? 'Leveraging Python and PowerShell, this platform executes complex infrastructure maintenance tasks remotely, drastically reducing Mean Time to Repair (MTTR). It features architecture for mass configuration updates, secure credential rotation, and compliance auditing without imposing significant network overhead. Key capabilities include resilient file transfer protocols and zero-touch troubleshooting for distributed nodes.'
            : 'این سامانه با بهره‌گیری از Python و PowerShell، عملیات پیچیده نگهداری زیرساخت را به صورت راه دور اجرا کرده و MTTR را به شدت کاهش می‌دهد. ویژگی‌های اصلی شامل معماری به‌روزرسانی پیکربندی انبوه، چرخش امن اعتبارنامه‌ها و ممیزی انطباق (Compliance) بدون ایجاد بار اضافی بر شبکه است. قابلیت‌های کلیدی شامل پروتکل‌های انتقال فایل مقاوم و عیب‌یابی بدون دخالت (Zero-touch) برای نودهای توزیع‌شده می‌باشد.',
        features: lang === 'en'
            ? ['Hybrid Network Automation (Cisco, MikroTik)', 'Remote Windows Management via WinRM', 'Optimized File Transfer (Robocopy /J + SFTP fallback)', 'VMware ESXi Management via pyVmomi', 'ChatOps Integration (Telegram Bot)', 'RBAC & Secure Credential Cycling', 'Non-blocking Multi-threaded Architecture']
            : ['اتوماسیون ترکیبی شبکه (Cisco, MikroTik)', 'مدیریت راه دور ویندوز با WinRM', 'انتقال فایل بهینه (Robocopy + SFTP)', 'مدیریت VMware ESXi با pyVmomi', 'یکپارچه‌سازی ChatOps (ربات تلگرام)', 'مدیریت دسترسی نقش‌محور (RBAC)', 'معماری چندنخی (Multi-threaded) بدون وقفه'],
        tech: ['Python 3.x', 'CustomTkinter', 'PowerShell', 'WinRM', 'Netmiko', 'PyVmomi', 'SSH/SFTP', 'Multithreading'],
        tags: ['Python', 'Enterprise', 'Orchestration', 'DevOps'],
        images: [projectRetail1, projectRetail2, projectRetail3],
        icon: <Server size={32} className="text-emerald-400" />,
        color: "from-emerald-500/20 to-teal-600/20",
        border: "border-emerald-500/30",
        cols: "col-span-1 lg:col-span-2"
    },
    {
        id: 'ai-time-sync',
        featured: true,
        title: lang === 'en' ? 'Intelligent Time Drift Remediation Bot' : 'ربات هوشمند اصلاح اختلاف زمانی',
        slogan: lang === 'en' ? 'Precision Timing for Distributed Clusters' : 'زمان‌بندی دقیق برای کلاسترهای توزیع‌شده',
        category: 'Microservice',
        desc: lang === 'en'
            ? 'Autonomous drift detection and remediation system for distributed server clusters. Enforces precise NTP synchronization triggered by authenticated requests.'
            : 'سیستم خودکار تشخیص و اصلاح اختلاف زمان برای کلاسترهای سرور توزیع‌شده. اعمال همگام‌سازی دقیق NTP که توسط درخواست‌های احراز هویت شده فعال می‌شود.',
        longDesc: lang === 'en'
            ? 'Time drift in distributed transactional environments creates critical discrepancies. This solution acts as an on-demand NTP enforcer, utilizing a secure ChatOps interface to allow authorized personnel to trigger immediate synchronization across specific nodes, ensuring temporal consistency for log correlations and transaction integrity.'
            : 'اختلاف زمانی در محیط‌های تراکنشی توزیع‌شده منجر به مغایرت‌های بحرانی می‌شود. این راهکار به عنوان یک ناظر NTP عمل کرده و با استفاده از رابط ایمن ChatOps به پرسنل مجاز امکان می‌دهد تا همگام‌سازی فوری را در نودهای خاص اعمال کنند و یکپارچگی زمانی را برای تحلیل لاگ‌ها و صحت تراکنش‌ها تضمین نمایند.',
        features: lang === 'en' ? ['Instant NTP Enforcement', 'Secure ChatOps Interface', 'IP-based ACL Authentication'] : ['اعمال فوری NTP', 'رابط کاربری ایمن ChatOps', 'احراز هویت مبتنی بر IP ACL'],
        tech: ['Python', 'Telegram API', 'NTPLib', 'Linux Systemd'],
        tags: ['Python', 'Automation', 'NTP'],
        images: [projectTime1],
        icon: <Clock size={32} className="text-cyan-400" />,
        color: "from-cyan-500/20 to-blue-600/20",
        border: "border-cyan-500/30",
        cols: "col-span-1"
    },
    {
        id: 'ai-studio',
        featured: true,
        title: lang === 'en' ? 'Enterprise Generative AI Studio' : 'استودیو هوش مصنوعی مولد سازمانی',
        slogan: lang === 'en' ? 'Automated Brand Asset Synthesis' : 'تولید خودکار دارایی‌های برند',
        category: 'Generative AI',
        desc: lang === 'en'
            ? 'An optimized Generative AI pipeline utilizing Midjourney and Stable Diffusion to synthesize rapid, brand-compliant visual assets for enterprise use.'
            : 'خط تولید بهینه هوش مصنوعی مولد با استفاده از Midjourney و Stable Diffusion برای تولید سریع دارایی‌های بصری منطبق با برند برای مصارف سازمانی.',
        longDesc: lang === 'en'
            ? 'This pipeline ingests textual brand guidelines and transforms them into high-fidelity visual assets using fine-tuned diffusion models. It streamlines the creative workflow, reducing design turnaround time by 70% while maintaining strict adherence to corporate visual identity standards.'
            : 'این خط تولید، دستورالعمل‌های متنی برند را دریافت کرده و با استفاده از مدل‌های انتشار (Diffusion) تنظیم‌شده، آن‌ها را به دارایی‌های بصری با کیفیت بالا تبدیل می‌کند. این سیستم جریان کاری خلاق را تسهیل کرده و زمان طراحی را تا ۷۰٪ کاهش می‌دهد، در حالی که پایبندی دقیق به استانداردهای هویت بصری سازمان را حفظ می‌کند.',
        features: lang === 'en' ? ['Prompt Engineering Library', 'Stable Diffusion Fine-tuning', 'Asset Lifecycle Management'] : ['کتابخانه مهندسی پرامپت', 'تنظیم دقیق Stable Diffusion', 'مدیریت چرخه عمر دارایی‌ها'],
        tech: ['Midjourney', 'Stable Diffusion', 'Python', 'Prompt Engineering'],
        tags: ['Generative AI', 'Stable Diffusion'],
        images: [projectAi1],
        icon: <PenTool size={32} className="text-purple-400" />,
        color: "from-purple-500/20 to-pink-600/20",
        border: "border-purple-500/30",
        cols: "col-span-1"
    },
    {
        id: 'automation-scripts',
        title: lang === 'en' ? 'SRE & DevOps Utility Suite' : 'مجموعه ابزارهای SRE و DevOps',
        slogan: lang === 'en' ? 'Operational Efficiency through Code' : 'بهره‌وری عملیاتی از طریق کد',
        category: 'Tooling',
        desc: lang === 'en'
            ? 'A comprehensive suite of DevOps utilities designed to modernize legacy IT operations, featuring automated log analysis, proactive health monitoring, and reporting.'
            : 'مجموعه‌ای جامع از ابزارهای DevOps طراحی شده برای مدرن‌سازی عملیات IT سنتی، شامل تحلیل خودکار لاگ‌ها، پایش سلامت پیشگیرانه و گزارش‌گیری.',
        longDesc: lang === 'en'
            ? 'Engineered to replace error-prone manual workflows, this utility suite provides robust automation for daily operations. It includes modules for automated backup verification, server health diagnostics, and legacy data migration, ensuring high availability and data integrity across the infrastructure.'
            : 'این مجموعه ابزار که برای جایگزینی جریان‌های کاری دستی و پرخطا مهندسی شده است، اتوماسیون قدرتمندی را برای عملیات روزانه فراهم می‌کند. شامل ماژول‌هایی برای تأیید خودکار پشتیبان‌گیری، تشخیص سلامت سرور و مهاجرت داده‌های قدیمی است که پایداری بالا و یکپارچگی داده‌ها را در سراسر زیرساخت تضمین می‌کند.',
        features: lang === 'en' ? ['Automated Log Parsing', 'Proactive Health Monitoring', 'Compliance Reporting'] : ['پردازش خودکار لاگ', 'پایش سلامت پیشگیرانه', 'گزارش انطباق'],
        tech: ['Python', 'Pandas', 'BeautifulSoup', 'Cron', 'Bash'],
        tags: ['Scripting', 'SRE', 'DevOps'],
        images: [projectAuto1],
        icon: <Cpu size={32} className="text-amber-400" />,
        color: "from-amber-500/20 to-orange-600/20",
        border: "border-amber-500/30",
        cols: "col-span-1 lg:col-span-2"
    }
];
