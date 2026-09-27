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

  // Hero (top of page)
  badge: "Open to SOC, NOC and IT infrastructure roles · Singapore",
  intro:
    "Career switcher moving into security and infrastructure, starting in security operations. " +
    "CS degree from SIM / UOW, cloud security certified, Security+ in progress.",

  // Optional photo: put the image in the public/ folder and write its name here, e.g. "photo.jpg".
  // Leave as "" to hide it.
  photo: "",

  // The terminal card in the hero. Add, remove or reorder rows freely.
  whoami: [
    { key: "target",   value: "SOC · NOC · IT infra" },
    { key: "cert",     value: "CCSK v4" },
    { key: "next",     value: "Security+ SY0-701" },
    { key: "training", value: "Ethical Hacking · Oct 2026" },
    { key: "degree",   value: "BSc CS · SIM / UOW" },
    { key: "base",     value: "Singapore" },
  ],
};

// ─── Summary ─────────────────────────────────────────────────────────────────
export const summary = {
  // Big heading on the left of the Summary section
  heading: "Operator discipline, now pointed at security.",
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
        "Nearly 6 years of military service, including over 4 years as an SAF Infantry Specialist and more " +
        "than 2 years in peacetime contingency and homeland security operations as Section 2IC in the Army " +
        "Deployment Force, leaving as First Sergeant.",
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
// Each group lists skills with the evidence behind them.
//   name:     the skill
//   evidence: where you actually used it (keep it short and true)
// Only list skills you can back up. Move items from learningNext into a group once done.
export const skills = [
  {
    category: "Security",
    icon: "🔐",
    items: [
      { name: "Cloud security", evidence: "CCSK v4 certification (Mar 2023)" },
      { name: "IAM / SSO basics", evidence: "OneLogin SSO training at TruVisor" },
      { name: "Web security (TLS, HSTS, Same-Origin Policy)", evidence: "University Web Security module" },
    ],
  },
  {
    category: "Systems & Networking",
    icon: "🖥️",
    items: [
      { name: "Linux (Fedora, Debian)", evidence: "Always-on home lab server; this site built in Debian on Termux" },
      { name: "Nginx, PM2, Tailscale", evidence: "Home lab: web routing, keeping services running, private remote access" },
      { name: "Command line (PowerShell, Bash)", evidence: "Daily Git workflow; home server administration" },
      { name: "Git & GitHub Actions", evidence: "Version control and auto-deploy for this site" },
      { name: "Docker", evidence: "Hadoop cluster in Big Data coursework" },
    ],
  },
  {
    category: "Scripting & Data",
    icon: "⌨️",
    items: [
      { name: "Python", evidence: "Data exploration and cleaning with Pandas; algorithm benchmarking; automation practice" },
      { name: "SQL (Oracle, PL/SQL) & MongoDB", evidence: "Indexing, PL/SQL and normalisation in Oracle; MongoDB queries and aggregation (Database Systems module)" },
      { name: "Big data (Hadoop, Hive, Spark, HBase)", evidence: "HDFS and MapReduce in Java, Hive data warehouse, Spark DataFrames in Scala (Big Data Management module)" },
      { name: "JavaScript / React", evidence: "This portfolio site" },
    ],
  },
];

// Short "learning next" line shown under the skills
export const learningNext = [
  "Networking fundamentals (Network+ syllabus via Professor Messer)",
  "Wireshark and packet analysis",
  "Network scanning (Nmap)",
  "Security+ exam prep",
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
      "Section 2IC, Operations Company, Army Deployment Force, 2019–2021: peacetime contingency and homeland security operations in support of the Home Team.",
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
    // optional: key modules, shown as a list under the degree
    coursework: [
      "Database Systems: Oracle, PL/SQL, indexing, MongoDB",
      "Big Data Management: Hadoop, Hive, HBase, Spark",
      "Knowledge Engineering: data cleaning, clustering, association rules",
      "Foundations & Modern AI: KNN, MLP and CNN classifiers, search algorithms, PyTorch",
      "Web Security",
    ],
  },
  {
    degree: "Bachelor of Business (Marketing)",
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
// Each project:
//   type:        "practical" (real-world / self-driven) or "academic" (coursework)
//   meta:        short context line, e.g. "Solo · 2026" or "Team · Final Year Project"
//   description: what it is
//   role:        optional, your part (use for team projects)
//   tags:        tools used
//   github:      optional link; leave out for private or unfinished work
//   note:        optional small line shown when there is no link
export const projects = [
  // ── Practical ──
  {
    type: "practical",
    icon: "🌐",
    name: "Portfolio Website",
    meta: "Solo · 2026",
    description:
      "This site. Built on a Samsung S24 Ultra via PRoot Debian on Termux, with AI-assisted development. " +
      "Auto-deploys to GitHub Pages on every push.",
    tags: ["React", "Vite", "Tailwind", "GitHub Actions"],
    github: "https://github.com/ddevMetal/chounmeng-resume",
  },
  {
    type: "practical",
    icon: "🖥️",
    name: "Home Lab Server",
    meta: "Solo · AI-assisted setup",
    description:
      "Always-on Fedora mini PC for self-hosting: Nginx for web routing, PM2 for keeping services running, " +
      "Tailscale for private remote access.",
    tags: ["Linux", "Nginx", "PM2", "Tailscale"],
  },
  {
    type: "practical",
    icon: "⚙️",
    name: "OpenClaw Business Automation V1",
    meta: "Solo · Prototype",
    description:
      "AI-powered Discord bot prototype to automate payroll, sales invoicing and financial reporting for a " +
      "small business, replacing manual Google Drive workflows.",
    tags: ["Discord bot", "OpenClaw", "Automation"],
    note: "Private repository",
  },
  {
    type: "practical",
    icon: "🧪",
    name: "Security Lab Write-ups",
    meta: "Coming · Oct 2026",
    description:
      "Hands-on labs from the ASK Training courses: what I tested, what I found, what I learned.",
    tags: ["Wireshark", "Nmap", "Kali Linux"],
    note: "In progress",
  },

  // ── Academic ──
  {
    type: "academic",
    icon: "🏋️",
    name: "Wise Workout: Fitness App & Admin Portal",
    meta: "Team · Final Year Project · 2025",
    description:
      "Flutter fitness app with workout tracking and AI recommendations, plus a web admin portal.",
    role:
      "Built most of the backend: Firebase database and connection, the admin portal (business sign-up and " +
      "validation, document review, AI sentiment analysis of testimonials) and the landing page; deployed " +
      "with Docker and Nginx on Render. AI-assisted development.",
    tags: ["Firebase", "JavaScript", "Docker", "Nginx", "OpenAI API"],
    github: "https://github.com/xuennon/FYP-25-S2-09",
  },
  {
    type: "academic",
    icon: "🧠",
    name: "AI Coursework: Foundations & Modern AI",
    meta: "Individual · Foundations of AI & Modern AI · 2025",
    description:
      "Built KNN, MLP and CNN image classifiers and reported how colour histogram bin size affects KNN accuracy. " +
      "Trained and compared a CNN and a fully connected network on CIFAR-10 in PyTorch, and analysed how cost " +
      "settings change the path chosen by uniform cost search.",
    tags: ["Python", "PyTorch", "Keras", "Machine learning"],
  },
  {
    type: "academic",
    icon: "🗄️",
    name: "Big Data Management Assignments",
    meta: "Individual · Big Data Management · 2025",
    description:
      "Merged files in HDFS with a Java app, wrote MapReduce jobs, designed a Hive data warehouse, and " +
      "processed data with HBase, Pig and Spark (Scala).",
    tags: ["Hadoop", "Hive", "Spark", "Scala", "Java"],
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

// ─── Beyond work ─────────────────────────────────────────────────────────────
// Each card: label (small heading), title, then either text (a sentence) or items (a list).
export const beyondWork = [
  {
    label: "Training",
    title: "Hybrid athlete in progress",
    text:
      "Avid runner and regular in the gym, building towards hybrid training that mixes endurance and strength.",
  },
  {
    label: "Paddling",
    title: "Canoe & dragon boat",
    items: [
      "National Canoeing Championship 1000m K4 · Gold, 2013",
      "SDBF Dragonboat Race · 2nd, 2019",
      "SIM Canoeing · Flames of Merit, 2014",
    ],
  },
  {
    label: "Music & tinkering",
    title: "Guitar and home lab",
    text:
      "Play the guitar, and tinker with my home lab server and building things on my phone with Termux.",
  },
];
