// ─── Personal ────────────────────────────────────────────────────────────────
export const personal = {
  name:     'Teo Choun Meng',
  title:    'Computer Science (Big Data) Graduate',
  github:   { url: 'https://github.com/ddevMetal',              label: '@ddevMetal'       },
  linkedin: { url: 'https://linkedin.com/in/choun-meng-teo',    label: 'choun-meng-teo'   },
  email:    'tchounmeng@gmail.com', // TODO: replace before deploying
};

// ─── Summary ─────────────────────────────────────────────────────────────────
export const summary =
  "Motivated Computer Science graduate specialising in Big Data at SIM/UOW with strong " +
  "leadership experience from military service. Holds a Bachelor's in Business Marketing, " +
  "combining technical and business expertise.";

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'Programming',
    icon: '💻',
    items: ['C++', 'Java', 'Python', 'Flutter', 'Dart', 'HTML', 'CSS', 'JavaScript', 'SQL', 'PL/SQL'],
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
    items: ['HTTPS / TLS', 'HSTS', 'Same-Origin Policy', 'Web App Security'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: ['Git', 'VS Code', 'MySQL Workbench', 'Microsoft Project', 'Power BI', 'Ubuntu Linux'],
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────
export const experience = [
  { role: 'Logistic Setup Supervisor',  company: 'Rainbow Electrical Pte Ltd',        period: 'Dec 2022 – Present'     },
  { role: 'Technical Consultant',       company: 'TruVisor Pte Ltd',                  period: 'Apr 2022 – May 2022'    },
  { role: 'Infantry Leader',            company: 'Singapore Armed Forces (SAF)',       period: 'Jul 2017 – Oct 2021'    },
  { role: 'Events & Sales Executive',   company: 'Rainbow Electrical Pte Ltd',        period: 'Jul 2012 – Jan 2017'    },
  { role: 'Combat Diver',               company: 'Republic of Singapore Navy, NDU',   period: 'Sep 2010 – Apr 2012'    },
];

// ─── Education ───────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'B.Sc. Computer Science (Big Data)',
    school: 'SIM / University of Wollongong',
    period: 'Oct 2022 – Expected Jun 2026',
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
  { icon: '☁️', name: 'AWS Cloud Practitioner',                             date: 'Expected Jul 2026'                           },
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
