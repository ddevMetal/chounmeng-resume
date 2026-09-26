// ─── Personal ────────────────────────────────────────────────────────────────
export const personal = {
  name: "Teo Choun Meng",
  title: "Cybersecurity & Infrastructure · CS Graduate · CCSK Certified",
  github: { url: "https://github.com/ddevMetal", label: "@ddevMetal" },
  linkedin: {
    url: "https://linkedin.com/in/choun-meng-teo",
    label: "choun-meng-teo",
  },
  email: "tchounmeng@gmail.com",
};

// ─── Summary ─────────────────────────────────────────────────────────────────
export const summary = {
  tagline:
    "CS graduate and former SAF First Sergeant moving into security and infrastructure, bringing " +
    "hands-on security training, a cloud security certification, and years of executing under pressure.",
  // intro is optional: leave it as "" to hide it
  intro: "",
  highlights: [
    {
      label: "Security foundation",
      text:
        "CCSK certified. Completed ASK Training's Cybersecurity Essentials; Ethical Hacking in Oct 2026, " +
        "leading to Security+.",
    },
    {
      label: "Technical base",
      text:
        "BSc Computer Science (Big Data), SIM / UOW, plus a Diploma in Business Computing. " +
        "Hands-on with Linux, PowerShell and Wireshark.",
    },
    {
      label: "Operational discipline",
      text:
        "4+ years as an SAF Infantry Specialist, leaving as First Sergeant after serving as Section 2IC " +
        "in the Army Deployment Force.",
    },
    {
      label: "Technical operations",
      text:
        "Freelance supervisor for electrical and AV setups, leading the day's crew to deliver on schedule.",
    },
  ],
  closing:
    "Looking for an entry role in security operations or IT infrastructure where I can learn fast, " +
    "follow process closely, and grow into incident response.",
};

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: "Programming",
    icon: "💻",
    items: [
      "C++",
      "Java",
      "Python",
      "Flutter",
      "Dart",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "PL/SQL",
      "Tailwind CSS",
      "Vite",
      "React",
    ],
  },
  {
    category: "Big Data",
    icon: "📦",
    items: [
      "Hadoop HDFS",
      "MapReduce",
      "Apache Hive (HQL)",
      "Docker",
      "beeline CLI",
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MySQL", "Oracle SQL", "MongoDB", "Firebase", "NoSQL"],
  },
  {
    category: "Machine Learning / AI",
    icon: "🤖",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "CNN",
      "DNN",
    ],
  },
  {
    category: "Security",
    icon: "🔐",
    items: [
      "HTTPS / TLS",
      "HSTS",
      "Same-Origin Policy",
      "Web App Security",
      "Wireshark",
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: [
      "Git",
      "VS Code",
      "MySQL Workbench",
      "Microsoft Project",
      "Power BI",
      "Ubuntu Linux",
      "PRoot Debian + Termux",
      "Fedora Linux",
      "PowerShell",
    ],
  },
  {
    category: "Methodologies & Management",
    icon: "📋",
    items: ["OOP", "OO Design", "Agile", "SDLC", "CI/CD", "Project Management"],
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────
// Each role can have:
//   bullets: a list of points shown as a bulleted list
//   note:    a single plain line (used for older, lower-priority roles)
// Both are optional. A role with neither shows only title, company and dates.
export const experience = [
  {
    role: "Freelance Supervisor, Electrical & AV",
    company: "Rainbow Electrical Services Pte Ltd",
    period: "Jan 2023 – Present",
    bullets: [
      "Lead the day's assigned crew to meet event task requirements on schedule.",
      "Set up and troubleshoot electrical and AV systems on site.",
    ],
  },
  {
    role: "Technical Consultant",
    company: "TruVisor.io",
    period: "Mar 2022 – Apr 2022",
    bullets: [
      "Supported product demo labs on the company's cloud infrastructure, showing how its security products integrate for prospective clients.",
      "Trained in identity and access management (OneLogin SSO), with exposure to Utimaco key management and Armis asset visibility.",
      "Started the CCSK cloud security certification during the role (completed Mar 2023).",
    ],
  },
  {
    role: "Infantry Specialist · First Sergeant (1SG)",
    company: "Singapore Armed Forces",
    period: "Jul 2017 – Oct 2021",
    bullets: [
      "Graduated from Specialist Cadet School (SCS), 2017–2018.",
      "Trainer and Section Leader at Basic Military Training Centre (BMTC), 2018.",
      "Completed the Army Deployment Force Combat Qualification Course (CQC), 2019.",
      "Section 2IC, Operations Company, Army Deployment Force, 2019–2021.",
      "Digital Media Team, NDP 2021.",
    ],
  },
  {
    role: "Event and Sales Executive",
    company: "Rainbow Electrical Pte Ltd",
    period: "Sep 2012 – Jul 2016",
    note: "Supervised project delivery for key accounts, from sales through on-site electrical installation.",
  },
  {
    role: "Combat Diver (National Service)",
    company: "Republic of Singapore Navy, Naval Diving Unit",
    period: "Sep 2010 – Apr 2012",
  },
];

// ─── Education ───────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Sc. Computer Science (Big Data)",
    school: "SIM / University of Wollongong",
    period: "Oct 2022 – Jul 2026",
  },
  {
    degree: "B.Bus. Marketing",
    school: "RMIT University",
    period: "Jan 2012 – Apr 2014",
  },
  {
    degree: "Diploma in Business Computing",
    school: "Republic Polytechnic",
    period: "Jan 2007 – Apr 2010",
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  {
    icon: "🌐",
    name: "Interactive Resume Webpage",
    description:
      "Designed and built this personal resume site using React, Vite, and Tailwind CSS — entirely coded on a Samsung S24 Ultra via PRoot Debian on Termux, with AI-assisted development.",
    github: "https://github.com/ddevMetal/chounmeng-resume",
  },
  {
    icon: "⚙️",
    name: "OpenClaw Business Automation V1",
    description:
      "AI-powered Discord bot that automates payroll, sales invoicing, and financial reporting for a small business — replacing manual Google Drive workflows. Built on OpenClaw; coded on Samsung S24 Ultra via PRoot Debian on Termux. V2 production release planned.",
    github: null,
    note: "Private repository",
  },
  {
    icon: "📱",
    name: "Fitness Mobile App (FYP)",
    description:
      "Final Year Project — Flutter-based fitness application with personalised workout tracking and AI-assisted recommendations.",
    github: "https://github.com/xuennon/FYP-25-S2-09",
  },
  {
    icon: "🤖",
    name: "Constraint Satisfaction Problem",
    description:
      "ML/AI project solving multi-city lighting optimisation using constraint satisfaction and heuristic algorithms.",
    github: "https://github.com/d3nisacookies/Multi-city-lighting",
  },
  {
    icon: "🛒",
    name: "B2C / C2C Booking Services",
    description:
      "Full-stack booking platform supporting B2C and C2C models, built collaboratively with modern web technologies.",
    github: "https://github.com/lester-liam/csit314-sim2025q2-tehsiewdai",
  },
  {
    icon: "🇸🇬",
    name: "NDP 2021 Digital Content Team",
    description:
      "Contributed to Singapore's National Day Parade 2021 as part of the SAF Digital Content Team, supporting multimedia production.",
    github: null,
    org: "Singapore Armed Forces",
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────
// status options (each shows a small label on the card):
//   "certified"   → Certified    (a certification you hold)
//   "completed"   → Completed    (a course you finished)
//   "in_progress" → In progress
//   "upcoming"    → Upcoming
//   "course"      → Course       (a prep or training course, not a certification)
// Leave status out to show no label.
export const certifications = [
  {
    icon: "🔐",
    name: "Certificate of Cloud Security Knowledge (CCSK) v4",
    date: "Mar 2023 · Cloud Security Alliance",
    status: "certified",
  },
  {
    icon: "🛡️",
    name: "CompTIA Security+ (SY0-701)",
    date: "Exam after ASK courses · target Q4 2026",
    status: "in_progress",
  },
  {
    icon: "🕵️",
    name: "Cybersecurity and Ethical Hacking (32 hrs)",
    date: "Oct 2026 · ASK Training Pte Ltd",
    status: "upcoming",
  },
  {
    icon: "✅",
    name: "Cybersecurity Essentials (24 hrs)",
    date: "Sep 2026 · ASK Training Pte Ltd",
    status: "completed",
  },
  {
    icon: "🎓",
    name: "SGUS ICT — Cybersecurity & Data Analytics",
    date: "Sep 2021 – Feb 2022 · Nanyang Polytechnic",
    status: "completed",
  },
  {
    icon: "☁️",
    name: "AWS Cloud Practitioner — Prep Course",
    date: "Jun 2025 · SIM Centre for Micro-Credentials",
    status: "course",
  },
];

// ─── Awards ──────────────────────────────────────────────────────────────────
export const awards = [
  {
    icon: "🥈",
    name: "SDBF Dragonboat Race — 2nd Place",
    meta: "SAFSA · 2019",
  },
  { icon: "🏅", name: "Flames of Merit", meta: "SIM Canoeing Team · 2014" },
  {
    icon: "🥇",
    name: "National Canoeing Championship 1000m k4 — Gold",
    meta: "2013",
  },
  {
    icon: "🏆",
    name: "Sports Excellence Award",
    meta: "Republic Polytechnic · 2010",
  },
  { icon: "🥈", name: "Pol-Lite Kayak Championship — Silver", meta: "2009" },
];
