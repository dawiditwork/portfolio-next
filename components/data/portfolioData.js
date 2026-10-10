export const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "REST APIs",
  "Authentication",
  "Payments",
  "Webhooks",
  "Vitest",
  "Playwright",
  "Supertest",
  "Docker",
  "GitHub Actions",
];

export const PROJECTS = [
  {
    number: "01",
    kicker: "Flagship SaaS",
    title: "AI Image Toolkit",

    description: {
      en: "An AI image-editing SaaS I built end to end, with account verification, credit-based billing, Polar checkout, transactional credit fulfillment and idempotent webhooks. Automated tests cover payment retries and duplicate-order races.",

      de: "Eine eigenständig entwickelte SaaS-Anwendung für KI-gestützte Bildbearbeitung — mit E-Mail-Verifizierung, Credit-System, Polar-Checkout und transaktionssicherer Credit-Gutschrift. Automatisierte Tests decken Webhook-Retries und doppelte Bestellungen ab.",
    },

    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "ImageKit",
      "Polar",
      "Vitest",
      "Playwright",
    ],

    stats: [
      ["57+", "tests"],
      ["3", "payment packages"],
      ["P2002", "duplicate race protection"],
    ],

    highlights: {
      en: [
        "Atomic credit fulfillment",
        "Race-condition handling",
        "Idempotent Polar webhooks",
        "Auth + verified email flow",
      ],

      de: [
        "Atomare Credit-Verarbeitung",
        "Race-Condition-Handling",
        "Idempotente Polar-Webhooks",
        "Auth + E-Mail-Verifizierung",
      ],
    },

    href: "https://ai.dawidfrankowicz.com/",
    image: "/images/project-ai.png",
  },

  {
    number: "02",
    kicker: "Full-stack platform",
    title: "MyHikes",

    description: {
      en: "A full-stack hiking community platform with interactive maps, image uploads, JWT authentication and resource-level permissions. I implemented a secure password-reset flow, moderation tools and backend tests running in CI.",

      de: "Eine Full-Stack-Community-Plattform für Wanderungen mit interaktiven Karten, Bild-Uploads, JWT-Authentifizierung und objektbezogenen Zugriffsrechten. Dazu kommen ein abgesicherter Passwort-Reset, Moderation und Backend-Tests in der CI-Pipeline.",
    },

    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Supertest",
      "GitHub Actions",
    ],

    stats: [
      ["24", "backend tests"],
      ["84%", "branch coverage"],
      ["CI", "GitHub Actions"],
    ],

    highlights: {
      en: [
        "Ownership authorization",
        "Password reset security",
        "Interactive maps + geolocation",
        "Backend CI + coverage",
      ],

      de: [
        "Ownership-Autorisierung",
        "Sicherer Passwort-Reset",
        "Interaktive Karten + Geolocation",
        "Backend-CI + Coverage",
      ],
    },

    href: "https://myhikes.dawidfrankowicz.com/",
    image: "/images/project-myhikes.png",
  },

  {
    number: "03",
    kicker: "Content platform",
    title: "Blog Application",

    description: {
      en: "A full-stack publishing platform with Clerk authentication, role-protected admin workflows, MongoDB persistence and Firebase image storage. Built content management, search, pagination and a responsive dashboard.",

      de: "Eine Full-Stack-Publishing-Plattform mit Clerk-Authentifizierung, rollenbasiert geschützten Admin-Funktionen, MongoDB und Firebase Storage. Mit Content-Verwaltung, Suche, Pagination und responsivem Dashboard.",
    },

    stack: [
      "Next.js",
      "React",
      "Clerk",
      "MongoDB",
      "Firebase",
      "Admin CRUD",
    ],

    stats: [
      ["Auth", "Clerk"],
      ["CRUD", "admin"],
      ["SSR", "Next.js"],
    ],

    highlights: {
      en: [
        "Admin-only content actions",
        "Search + pagination",
        "Firebase image storage",
        "Responsive dashboard",
      ],

      de: [
        "Admin-geschützte Aktionen",
        "Suche + Pagination",
        "Firebase-Bildspeicher",
        "Responsives Dashboard",
      ],
    },

    href: "https://blog.dawidfrankowicz.com/",
    image: "/images/project-blog.png",
  },
];

export const COPY = {
  en: {
    /* =========================================================
       NAVIGATION
       ========================================================= */

    nav: ["About", "Work", "Experience", "Contact"],

    /* =========================================================
       HERO
       ========================================================= */

    available:
      "Open to junior frontend / full-stack roles in Switzerland",

    heroTop: "SOFTWARE DEVELOPER · REACT / NEXT.JS",

    heroLine1: "I BUILD",
    heroLine2: "PRODUCTS",
    heroLine3: "THAT WORK.",

    heroIntro:
      "Computer Science engineer building and deploying full-stack web applications with React, Next.js and TypeScript. From interfaces and APIs to authentication, payments, automated tests and deployment — I own the complete workflow.",

    explore: "Explore selected work",
    download: "Download CV",

    statProjects: "deployed projects",
    statTests: "automated tests",
    statFlow: "frontend → backend → deploy",

    scroll: "Scroll to explore",

    marqueeLabel: "CURRENT STACK",

    /* =========================================================
       ABOUT / MANIFESTO
       ========================================================= */

    aboutEyebrow: "HOW I THINK",

    aboutTitle1: "I don't just build pages.",
    aboutTitle2: "I build systems.",

    aboutBody:
      "The interesting part starts when frontend meets backend: authentication, permissions, data flow, payments, failures, retries, testing and deployment. That's where I like working.",

    build: "BUILD",

    buildText:
      "Interfaces that feel deliberate, fast and easy to understand.",

    test: "TEST",

    testText:
      "Critical flows covered with unit, integration and E2E tests.",

    ship: "SHIP",

    shipText:
      "Applications deployed, monitored and treated like real products.",

    /* =========================================================
       PROJECTS
       ========================================================= */

    workEyebrow: "SELECTED WORK",

    workTitle:
      "Three deployed projects. Real engineering challenges.",

    projectOpen: "Open live project",
    projectView: "View project",

    /* =========================================================
       EXPERIENCE
       ========================================================= */

    experienceEyebrow: "EXPERIENCE / BACKGROUND",

    experienceTitle: "A different path. A clear direction.",

    experienceLead:
      "With an engineering degree in Computer Science and professional experience outside IT, I bring reliability, ownership and a practical mindset to software development. I now apply those strengths to building and testing web products.",

    experienceTab: "Experience",
    educationTab: "Education",
    skillsTab: "Skills",

    present: "PRESENT",

    freelanceTitle: "Freelance Developer",
    freelanceCompany: "Independent · Remote",

    freelanceText:
      "Independently building and maintaining web applications and portfolio products using React, Next.js, TypeScript and Node.js, including authentication, databases, payments, automated testing and deployment.",

    driverTitle: "Professional Driver",
    murpf: "Murpf AG · Switzerland",

    driverText:
      "Daily responsibility for safe, reliable and time-critical transport operations.",

    eckert: "Eckert Baulogistik · Switzerland",

    coordinatorTitle: "On-site Coordinator",
    coordinatorCompany: "OTTO Work Force · Eindhoven, Netherlands",

    coordinatorText:
      "On-site support, coordination and communication.",

    wordpressTitle: "WordPress Developer",
    wordpressCompany: "InterStudio · Kielce, Poland",

    wordpressText:
      "Built and maintained responsive WordPress websites, including theme adjustments and technical support.",

    /* =========================================================
       EDUCATION
       ========================================================= */

    engineeringDegree: "Engineering Degree — Computer Science",

    university: "Jan Kochanowski University · Kielce, Poland",

    universityText: "Specialization: IT Technologies",

    school: "Vocational School of Computer Science",

    schoolText: "Computer Science · Computer Graphics",

    diploma: "View redacted diploma",

    /* =========================================================
       CONTACT
       ========================================================= */

    contactEyebrow: "LET'S TALK",

    contactTitle1: "Need a developer who",
    contactTitle2: "actually builds things?",

    contactBody:
      "I'm looking for a junior frontend or full-stack role where I can contribute with practical React and Next.js experience, take ownership of features and grow through code reviews and teamwork.",

    name: "Name",
    email: "Email",
    message: "Message",

    yourName: "Your name",

    messagePlaceholder:
      "Tell me about the role, team or project...",

    send: "Send message",
    sending: "Sending...",

    /* =========================================================
       FOOTER
       ========================================================= */

    footer: "Software Developer · React / Next.js · Switzerland",

    backTop: "Back to top",
  },

  de: {
    /* =========================================================
       NAVIGATION
       ========================================================= */

    nav: ["Über mich", "Projekte", "Erfahrung", "Kontakt"],

    /* =========================================================
       HERO
       ========================================================= */

    available:
      "Offen für Junior-Stellen im Frontend- oder Full-Stack-Bereich in der Schweiz",

    heroTop: "SOFTWARE DEVELOPER · REACT / NEXT.JS",

    heroLine1: "ICH BAUE",
    heroLine2: "PRODUKTE",
    heroLine3: "DIE FUNKTIONIEREN.",

    heroIntro:
      "Informatik-Ingenieur, der Full-Stack-Webanwendungen mit React, Next.js und TypeScript entwickelt und bereitstellt. Von UI und APIs über Authentifizierung und Zahlungen bis zu automatisierten Tests und Deployment — ich setze den gesamten Ablauf um.",

    explore: "Projekte ansehen",
    download: "CV herunterladen",

    statProjects: "veröffentlichte Projekte",
    statTests: "automatisierte Tests",
    statFlow: "Frontend → Backend → Deployment",

    scroll: "Scrollen",

    marqueeLabel: "AKTUELLER STACK",

    /* =========================================================
       ABOUT / MANIFESTO
       ========================================================= */

    aboutEyebrow: "WIE ICH DENKE",

    aboutTitle1: "Ich baue nicht nur Seiten.",
    aboutTitle2: "Ich baue Systeme.",

    aboutBody:
      "Spannend wird es dort, wo Frontend und Backend zusammenkommen: Authentifizierung, Berechtigungen, Datenfluss, Payments, Fehlerfälle, Retries, Tests und Deployment. Genau dort arbeite ich am liebsten.",

    build: "BUILD",

    buildText:
      "Interfaces, die bewusst gestaltet, schnell und einfach verständlich sind.",

    test: "TEST",

    testText:
      "Kritische Abläufe mit Unit-, Integrations- und E2E-Tests absichern.",

    ship: "SHIP",

    shipText:
      "Anwendungen deployen, überwachen und wie echte Produkte behandeln.",

    /* =========================================================
       PROJECTS
       ========================================================= */

    workEyebrow: "AUSGEWÄHLTE PROJEKTE",

    workTitle:
      "Drei veröffentlichte Projekte. Echte technische Herausforderungen.",

    projectOpen: "Live-Projekt öffnen",
    projectView: "Projekt ansehen",

    /* =========================================================
       EXPERIENCE
       ========================================================= */

    experienceEyebrow: "ERFAHRUNG / BACKGROUND",

    experienceTitle: "Ein anderer Weg. Eine klare Richtung.",

    experienceLead:
      "Ich habe einen Ingenieurabschluss in Informatik und bringe Berufserfahrung außerhalb der IT mit. Zuverlässigkeit, Eigenverantwortung und praxisorientiertes Denken setze ich heute bei der Entwicklung und beim Testen von Webanwendungen ein.",

    experienceTab: "Erfahrung",
    educationTab: "Ausbildung",
    skillsTab: "Skills",

    present: "HEUTE",

    freelanceTitle: "Freelance Developer",
    freelanceCompany: "Selbstständig · Remote",

    freelanceText:
      "Eigenständige Entwicklung und Pflege von Webanwendungen und Portfolio-Projekten mit React, Next.js, TypeScript und Node.js — inklusive Authentifizierung, Datenbanken, Zahlungen, automatisierten Tests und Deployment.",

    driverTitle: "Berufskraftfahrer",
    murpf: "Murpf AG · Schweiz",

    driverText:
      "Tägliche Verantwortung für sichere, zuverlässige und zeitkritische Transporte.",

    eckert: "Eckert Baulogistik · Schweiz",

    coordinatorTitle: "On-site Coordinator",
    coordinatorCompany: "OTTO Work Force · Eindhoven, Niederlande",

    coordinatorText:
      "Support vor Ort, Koordination und Kommunikation.",

    wordpressTitle: "WordPress Developer",
    wordpressCompany: "InterStudio · Kielce, Polen",

    wordpressText:
      "Responsive WordPress-Websites erstellt und gepflegt, inklusive Theme-Anpassungen und technischem Support.",

    /* =========================================================
       EDUCATION
       ========================================================= */

    engineeringDegree: "Ingenieurabschluss — Informatik",

    university: "Jan Kochanowski Universität · Kielce, Polen",

    universityText: "Spezialisierung: IT-Technologien",

    school: "Berufsschule für Informatik",

    schoolText: "Informatik · Computergrafik",

    diploma: "Geschwärztes Diplom ansehen",

    /* =========================================================
       CONTACT
       ========================================================= */

    contactEyebrow: "KONTAKT",

    contactTitle1: "Sie suchen einen Entwickler,",
    contactTitle2: "der wirklich baut?",

    contactBody:
      "Ich suche eine Junior-Stelle im Frontend- oder Full-Stack-Bereich, in der ich meine praktischen Kenntnisse in React und Next.js einbringe, Verantwortung für Features übernehme und durch Code-Reviews und Teamarbeit weiterwachse.",

    name: "Name",
    email: "E-Mail",
    message: "Nachricht",

    yourName: "Ihr Name",

    messagePlaceholder:
      "Erzählen Sie mir kurz von der Stelle, dem Team oder Projekt...",

    send: "Nachricht senden",
    sending: "Wird gesendet...",

    /* =========================================================
       FOOTER
       ========================================================= */

    footer: "Software Developer · React / Next.js · Schweiz",

    backTop: "Nach oben",
  },
};