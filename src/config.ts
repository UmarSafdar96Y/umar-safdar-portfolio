export const siteConfig = {
  name: "Umar Safdar",
  title: "Lead Flutter Developer · iOS & Android",
  location: "Lahore, Pakistan",
  description:
    "Umar Safdar is a Lead Flutter Developer with 6+ years of experience building secure, high-performance iOS and Android apps across fintech, sports and AI-powered products.",
  accentColor: "#0175C2",
  social: {
    email: "safdar.umar@icloud.com",
    linkedin: "https://www.linkedin.com/in/umarsafdar",
    github: "https://github.com/UmarSafdar96Y",
  },
  aboutMe:
    "I'm a Flutter engineer with 6+ years of experience designing, building and shipping cross-platform mobile apps for iOS and Android across fintech, sports, AI-powered experiences and real-time communication. I've delivered production apps supporting 100K+ monthly active users, with a focus on clean architecture, application security, performance and CI/CD. I lead and mentor engineers, and I work closely with distributed teams across Europe and the Middle East.",
  stats: [
    { value: "6+", label: "Years building mobile apps" },
    { value: "100K+", label: "Monthly active users supported" },
    { value: "8", label: "Personal apps on the App Store" },
  ],
  skillGroups: [
    { name: "Languages", skills: ["Dart", "Swift", "Kotlin", "JavaScript"] },
    {
      name: "Mobile",
      skills: ["Flutter", "SwiftUI", "Jetpack Compose", "React Native"],
    },
    {
      name: "Architecture & State",
      skills: [
        "Bloc",
        "Riverpod",
        "Provider",
        "GetIt",
        "GoRouter",
        "Freezed",
        "Clean Architecture",
        "MVVM",
        "SOLID",
        "BFF",
        "Modular Architecture",
      ],
    },
    {
      name: "Backend & Integration",
      skills: [
        "REST",
        "GraphQL",
        "WebSockets",
        "Firebase",
        "Dio",
        "Retrofit",
        "Platform Channels",
      ],
    },
    {
      name: "Storage & Security",
      skills: [
        "Hive",
        "SQLite",
        "Flutter Secure Storage",
        "Firebase App Check",
        "AppSealing",
        "mTLS",
        "Biometrics",
      ],
    },
    {
      name: "AI",
      skills: ["Model Context Protocol (MCP)", "LLM APIs", "Google ML Kit"],
    },
    {
      name: "Delivery & Testing",
      skills: [
        "GitHub Actions",
        "Fastlane",
        "Shorebird Code Push",
        "Unit Testing",
        "Widget Testing",
        "Integration Testing",
      ],
    },
  ],
  projects: [
    {
      name: "AuNeo Mobile Wallet",
      description:
        "White-label fintech wallet for mobile and web. I lead its architecture: Backend-for-Frontend services, Firebase App Check, modular structure and CI/CD. Cut startup time by more than 50% and shipped a working Flutter Web build in one week from the mobile codebase.",
      link: "",
      skills: ["Flutter", "Flutter Web", "BFF", "Firebase", "App Check", "Firestore"],
    },
    {
      name: "YAP Young",
      description:
        "Secure fintech wallet covering authentication, payments, biometric verification, savings and transactions. Led development with enterprise security (AppSealing, mTLS, encrypted storage), AI chat through MCP servers and Shorebird code push for rapid hotfixes.",
      link: "https://apps.apple.com/pk/app/yap-young/id6753588916",
      skills: ["Flutter", "Bloc", "Clean Architecture", "mTLS", "MCP", "Shorebird"],
    },
    {
      name: "Ultimate Rugby",
      description:
        "Live rugby scores and match updates for a global audience of 100K+ monthly active users, with real-time updates, push notifications, subscriptions and deep linking.",
      link: "https://apps.apple.com/app/id565995979",
      skills: ["Flutter", "WebSockets", "Firebase Cloud Messaging", "Subscriptions"],
    },
  ],
  apps: {
    intro:
      "Personal projects designed, built and shipped to the App Store, and still maintained.",
    allAppsLink: "https://apps.apple.com/developer/id1782788401",
    items: [
      {
        name: "DogSmart",
        category: "Lifestyle",
        description:
          "Step-by-step dog training, from puppy basics to obedience commands like Sit, Stay and Stand.",
        icon: "apps/dogsmart.jpg",
        link: "https://apps.apple.com/app/id6738891859",
      },
      {
        name: "Videodr",
        category: "Photo & Video",
        description:
          "Compress and trim videos, extract audio and enhance photos, processed on-device where possible.",
        icon: "apps/videodr.jpg",
        link: "https://apps.apple.com/app/id6785070236",
      },
      {
        name: "PhotoFix",
        category: "Photo & Video",
        description:
          "Photo editor with square-fit resizing, filters, text overlays, AI text removal and a quote maker.",
        icon: "apps/photofix.jpg",
        link: "https://apps.apple.com/app/id6742114353",
      },
      {
        name: "Grow Garden",
        category: "Lifestyle",
        description:
          "Gardening companion with care guides for hundreds of fruits, vegetables and plants, plus AI plant tools.",
        icon: "apps/grow-garden.jpg",
        link: "https://apps.apple.com/app/id6747760588",
      },
      {
        name: "Fair Fitness",
        category: "Health & Fitness",
        description:
          "Personalised 12-minute home workouts with AI workout features and customisable routines.",
        icon: "apps/fair-fitness.jpg",
        link: "https://apps.apple.com/app/id6739889115",
      },
      {
        name: "Affirmations",
        category: "Health & Fitness",
        description:
          "Daily affirmations and mindfulness tools for building calm, positive habits.",
        icon: "apps/affirmations.jpg",
        link: "https://apps.apple.com/app/id6743113612",
      },
      {
        name: "SnapTok",
        category: "Entertainment",
        description:
          "Save and bookmark short videos and generate captions for social posts.",
        icon: "apps/snaptok.jpg",
        link: "https://apps.apple.com/app/id6740437441",
      },
      {
        name: "Goal Wall 2026",
        category: "Lifestyle",
        description:
          "A personal football wall for saving match memories, teams, stadiums and players to share with friends.",
        icon: "apps/goal-wall.jpg",
        link: "https://apps.apple.com/app/id6774749077",
      },
    ],
  },
  experience: [
    {
      company: "Aqovia Pakistan Ltd.",
      location: "Lahore, Pakistan",
      title: "Lead Flutter Developer",
      dateRange: "2026 - Present",
      bullets: [
        "Leading architecture and development of the AuNeo white-label fintech wallet, setting engineering standards and delivering secure, scalable features across mobile and web.",
        "Delivered a functional Flutter Web version within one week by adapting the existing mobile codebase, enabling stakeholder and investor demos without a separate app.",
        "Implemented a Backend-for-Frontend (BFF) architecture and Firebase App Check, improving API integration, client-backend separation and security.",
        "Designed CI/CD pipelines and introduced automated validation, testing, modular architecture and structured code reviews.",
        "Reduced app loading time by more than 50% through state-management improvements, startup-flow optimisation and asynchronous initialisation.",
      ],
    },
    {
      company: "YAP Pakistan Pvt Ltd.",
      location: "Lahore, Pakistan",
      title: "Senior Flutter Engineer - Team Lead",
      dateRange: "2025 - 2026",
      bullets: [
        "Led development of YAP Young, a secure cross-platform fintech wallet, from architecture through production on iOS and Android.",
        "Designed a modular architecture using Bloc, Clean Architecture, SOLID and dependency injection across multiple feature modules.",
        "Implemented enterprise-grade security: AppSealing, mTLS, Flutter Secure Storage, biometric authentication and encrypted local storage.",
        "Built AI chat experiences by integrating LLM services through Model Context Protocol (MCP) servers.",
        "Integrated Shorebird Code Push to ship Dart hotfixes without waiting on full App Store and Google Play review cycles.",
        "Established GitHub Actions CI/CD with automated testing and quality checks while maintaining 80%+ unit test coverage.",
        "Led and mentored 4 Flutter engineers through architecture reviews, code reviews, documentation and knowledge-sharing sessions.",
        "Reduced app startup time by 40% through asynchronous programming, rendering optimisation and efficient state management.",
      ],
    },
    {
      company: "Astra Pvt Ltd.",
      location: "Lahore, Pakistan",
      title: "Senior Flutter Engineer",
      dateRange: "2022 - 2025",
      bullets: [
        "Developed AI-assisted biometric verification using Google ML Kit, camera processing and on-device facial recognition.",
        "Built reusable Flutter modules following Clean Architecture, reducing long-term maintenance costs.",
        "Implemented offline-first capabilities with Hive, local persistence and sync strategies for low-connectivity environments.",
        "Improved responsiveness using isolates, asynchronous programming and rendering improvements to minimise UI blocking.",
        "Integrated native iOS and Android capabilities through Platform Channels, including biometrics, secure key storage and ML Kit.",
      ],
    },
    {
      company: "Ultimate Rugby",
      location: "Dublin, Ireland (Remote)",
      title: "Flutter Mobile Engineer",
      dateRange: "2020 - 2022",
      bullets: [
        "Developed and maintained production Flutter apps serving 100K+ monthly active users on the App Store and Google Play.",
        "Delivered live sports experiences using Firebase Cloud Messaging, WebSockets and real-time match updates.",
        "Implemented subscriptions, push notifications, deep linking and production monitoring across multiple releases.",
        "Collaborated with distributed teams across Europe on architecture, sprint planning, code reviews and production support.",
      ],
    },
  ],
  certifications: [
    {
      name: "Flutter Essential Training: Build for Multiple Platforms",
      issuer: "LinkedIn Learning",
      date: "Jul 2026",
      skills: ["Flutter", "Cross-platform Development"],
      link: "https://www.linkedin.com/learning/certificates/ad61b99b21de9b6113d33cfd375fc62889ca5281656edbcc92e81c91b6b62e99",
    },
  ],
  education: [
    {
      school: "University of Sargodha, Lahore",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [],
    },
  ],
};
