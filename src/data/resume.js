// ─── Personal ────────────────────────────────────────────────────────────────
export const personal = {
  name:     'Teo Choun Meng',
  title:    'Computer Science (Big Data) Graduate',
  github:   { url: 'https://github.com/ddevMetal',              label: '@ddevMetal'       },
  linkedin: { url: 'https://linkedin.com/in/choun-meng-teo',    label: 'choun-meng-teo'   },
  email:    'tchounmeng@gmail.com',
};

// ─── Summary ─────────────────────────────────────────────────────────────────
export const summary = {
  tagline:
    "Computer Science (Big Data) graduate from SIM/University of Wollongong, actively targeting a transition into cybersecurity — " +
    "with a focus on SOC and security operations roles. Brings cross-industry leadership, cloud security knowledge, " +
    "and a strong analytical foundation in Big Data and data analytics.",
  body:
    "A mid-career switcher who earned a CS degree while raising a young child — completing the programme as a mature student " +
    "alongside full-time work and family responsibilities. Holds a prior degree in Business Marketing from RMIT University, " +
    "backed by over a decade of professional and military leadership with the Singapore Armed Forces, " +
    "including operational experience with the Army Deployment Force (ADF). " +
    "Combines technical depth with real-world business perspective, and a proven ability to deliver under pressure.",
};

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'Programming',
    icon: '💻',
    items: ['C++', 'Java', 'Python', 'Flutter', 'Dart', 'HTML', 'CSS', 'JavaScript', 'SQL', 'PL/SQL', 'Tailwind CSS', 'Vite', 'React'],
  },
  {
    category: 'Big Data',
    icon: '📦',
    items: ['Hadoop HDFS', 'MapReduce', 'Apache Hive (HQL)', 'Docker', 'beeline CLI'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['MySQL', 'Oracle SQL', 'MongoDB', 'Firebase', 'NoSQL'],
  },
  {
    category: 'Machine Learning / AI',
    icon: '🤖',
    items: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'CNN', 'DNN'],
  },
  {
    category: 'Security',
    icon: '🔐',
    items: ['HTTPS / TLS', 'HSTS', 'Same-Origin Policy', 'Web App Security', 'Wireshark'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: ['Git', 'VS Code', 'MySQL Workbench', 'Microsoft Project', 'Power BI', 'Ubuntu Linux', 'PRoot Debian + Termux', 'Fedora Linux', 'PowerShell'],
  },
  {
    category: 'Methodologies & Management',
    icon: '📋',
    items: ['OOP', 'OO Design', 'Agile', 'SDLC', 'CI/CD', 'Project Management'],
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────
export const experience = [
  { role: 'Events Operation Supervisor (Electrical and AV)',  company: 'Rainbow Electrical Services Pte Ltd',  period: 'Jan 2023 – Present (Freelance)'  },
  { role: 'Technical Consultant',       company: 'TruVisor.io',                        period: 'Mar 2022 – Apr 2022'    },
  { role: 'Infantry Team Leader',       company: 'Singapore Armed Forces (SAF)',       period: 'Jul 2017 – Oct 2021'    },
  { role: 'Event and Sales Executive',  company: 'Rainbow Electrical Pte Ltd',        period: 'Sep 2012 – Jul 2016'    },
  { role: 'Combat Diver',               company: 'Republic of Singapore Navy, NDU',   period: 'Sep 2010 – Apr 2012'    },
];

// ─── Education ───────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'B.Sc. Computer Science (Big Data)',
    school: 'SIM / University of Wollongong',
    period: 'Oct 2022 – Jul 2026',
  },
  {
    degree: 'B.Bus. Marketing',
    school: 'RMIT University',
    period: 'Jan 2012 – Apr 2014',
  },
  {
    degree: 'Diploma in Business Computing',
    school: 'Republic Polytechnic',
    period: 'Jan 2007 – Apr 2010',
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  {
    icon: '🌐',
    name: 'Interactive Resume Webpage',
    description:
      'Designed and built this personal resume site using React, Vite, and Tailwind CSS — entirely coded on a Samsung S24 Ultra via PRoot Debian on Termux, with AI-assisted development.',
    github: 'https://github.com/ddevMetal/chounmeng-resume',
  },
  {
    icon: '⚙️',
    name: 'OpenClaw Business Automation V1',
    description:
      'AI-powered Discord bot that automates payroll, sales invoicing, and financial reporting for a small business — replacing manual Google Drive workflows. Built on OpenClaw; coded on Samsung S24 Ultra via PRoot Debian on Termux. V2 production release planned.',
    github: null,
    note: 'Private repository',
  },
  {
    icon: '📱',
    name: 'Fitness Mobile App (FYP)',
    description:
      'Final Year Project — Flutter-based fitness application with personalised workout tracking and AI-assisted recommendations.',
    github: 'https://github.com/xuennon/FYP-25-S2-09',
  },
  {
    icon: '🤖',
    name: 'Constraint Satisfaction Problem',
    description:
      'ML/AI project solving multi-city lighting optimisation using constraint satisfaction and heuristic algorithms.',
    github: 'https://github.com/d3nisacookies/Multi-city-lighting',
  },
  {
    icon: '🛒',
    name: 'B2C / C2C Booking Services',
    description:
      'Full-stack booking platform supporting B2C and C2C models, built collaboratively with modern web technologies.',
    github: 'https://github.com/lester-liam/csit314-sim2025q2-tehsiewdai',
  },
  {
    icon: '🇸🇬',
    name: 'NDP 2021 Digital Content Team',
    description:
      'Contributed to Singapore\'s National Day Parade 2021 as part of the SAF Digital Content Team, supporting multimedia production.',
    github: null,
    org: 'Singapore Armed Forces',
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────
export const certifications = [
  { icon: '☁️', name: 'AWS Cloud Practitioner Certification — Prep Course', date: 'Jun 2025 · SIM Centre for Micro-Credentials' },
  { icon: '🔐', name: 'Certificate of Cloud Security Knowledge v.4',        date: 'Mar 2023'                                    },
  { icon: '🎓', name: 'SGUS ICT — Cybersecurity & Data Analytics',          date: 'Sep 2021 – Feb 2022 · Nanyang Polytechnic'   },
];

// ─── Awards ──────────────────────────────────────────────────────────────────
export const awards = [
  { icon: '🥈', name: 'SDBF Dragonboat Race — 2nd Place',        meta: 'SAFSA · 2019'                 },
  { icon: '🏅', name: 'Flames of Merit',                          meta: 'SIM Canoeing Team · 2014'     },
  { icon: '🥇', name: 'National Canoeing Championship 1000m k4 — Gold',    meta: '2013'                         },
  { icon: '🏆', name: 'Sports Excellence Award',                  meta: 'Republic Polytechnic · 2010'  },
  { icon: '🥈', name: 'Pol-Lite Kayak Championship — Silver',     meta: '2009'                         },
];
