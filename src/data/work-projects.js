export const workProjects = [
  {
    id: 1,
    title: "Real-Time Fleet Management & IoT Monitoring System",
    description: "(Internal & Customer-Facing · Production System)",
    company: "TM Research & Development",
    overview:
      "A large-scale web application used by internal teams and customers to monitor vehicles using IoT devices in real time, visualize routes, and analyze live and historical data across multiple organizations.",
    features: [
      "Live vehicle location tracking using Google Maps",
      "Route calculation & shortest path visualization",
      "Geofencing using polygon-based zones",
      "Real-time status updates from IoT devices",
      "Multi-tenant data handling for different organizations",
    ],
    responsibilities: [
      "Developed and maintained Angular-based frontend for real-time fleet and IoT monitoring",
      "Integrated Google Maps API for: live vehicle tracking, route calculation and shortest-path visualization, polygon-based geofencing",
      "Built dashboards to display complex IoT data with: real-time updates, historical data views, single-metric and multi-metric charts",
      "Handled multi-tenant data architecture to support multiple organizations",
      "Implemented UI using Angular Material based on provided designs",
      "Provided ongoing frontend maintenance and production support",
    ],
    stacks: [
      "Angular (MEAN stack)",
      "Google Maps API",
      "Angular Material",
      "Real-time data",
      "Charts",
    ],
    impact: [
      "Used daily in production by both internal teams and external customers",
      "Supported high-frequency real-time updates and complex data visualization needs",
    ],
    challenges: [
      "Managing real-time data updates efficiently to ensure smooth user experience",
      "Handling complex map interactions (routing, geofencing) with Google Maps API",
      "Ensuring scalability and maintainability in a large multi-tenant application",
    ],
    notes:
      "🔒 This system was internal and used in production. Screenshots are not shown due to confidentiality.",
    images: [""],
    color: "bg-gray-400",
  },
  {
    id: 3,
    title: "Smart Helmet Monitoring & Communication Platform",
    description: "(IoT · Production System)",
    company: "TM Research & Development",
    overview:
      "An IoT-based smart helmet platform used to monitor helmet status and enable real-time communication between operators and helmet users.",
    responsibilities: [
      "Maintained and supported an existing production Angular (MEAN stack) application",
      "Implemented real-time video conferencing using Jitsi Meet",
      "Integrated communication between the web app and helmet devices using Axios",
      "Worked on a refreshed UI and development of a newer version of the application",
      "Implemented internationalization (i18n), including RTL layout support for Arabic users",
      "Ensured UI consistency and usability across different locales and layouts",
    ],
    stacks: [
      "Angular (MEAN stack)",
      "Jitsi Meet",
      "Axios",
      "IoT APIs",
      "i18n",
      "RTL layouts",
    ],
    impact: [
      "Production system used in real-world environments",
      "Enabled real-time communication and improved usability for international users",
    ],
    challenges: [
      "Integrating real-time video conferencing within the existing application framework",
      "Handling communication between web app and IoT helmet devices reliably",
      "Supporting international users by implementing RTL layouts and i18n without breaking UI consistency",
    ],
    notes:
      "🔒 This system was internal and used in production. Screenshots are not shown due to confidentiality.",
    images: [""],
    color: "bg-gray-400",
  },
  {
    id: 2,
    title: "Fintech Admin, Marketplace & Settlement Dashboard",
    description: "(Customer & Admin · Production System)",
    company: "Herepay Sdn Bhd",
    overview:
      "A fintech dashboard system supporting transactions, settlements, marketplace management, and electronic invoicing for both customers and internal administrators.",
    features: [
      "Settlement pages for transaction tracking and status management",
      "Marketplace interfaces",
      "E-Invoice (LHDN) related pages for customers",
      "New dashboard UI for improved data visibility",
    ],
    responsibilities: [
      "Designed and implemented UI for multiple modules",
      "Refactored broken or inconsistent UI components",
      "Improved layout structure, readability, and visual hierarchy",
      "Ensured responsiveness across devices",
      "Performed Chrome Lighthouse audits and frontend performance optimizations",
    ],
    stacks: ["Vue.js", "TailwindCSS", "Laravel"],
    impact: [
      "Used by both customers and internal administrators in production",
      "Supported complex financial operations with high data throughput",
    ],
    challenges: [
      "Refactoring legacy UI while ensuring existing workflows were not disrupted",
      "Improving readability and information density for data-heavy admin interfaces",
      "Performing Lighthouse audits and planning performance improvements for production readiness",
    ],
    notes:
      "🔒 This system was internal and used in production. Screenshots are not shown due to confidentiality.",
    images: [""],
    color: "bg-gray-400",
  },
  {
    id: 4,
    title: "Zakat Payment Web Platform",
    description: "(Public-Facing · Production System)",
    company: "Herepay Sdn Bhd",
    overview:
      "A public-facing zakat payment platform enabling users to submit payments and manage related financial records.",
    responsibilities: [
      "Designed and implemented frontend UI primarily from scratch",
      "Built customer-facing payment flows and related pages",
      "Improved readability, visual hierarchy, and responsive behavior",
      "Collaborated with backend team (Laravel) for API integration",
    ],
    stacks: ["Vue.js", "TailwindCSS", "Laravel"],
    impact: ["Supported secure financial transactions and record management"],
    challenges: [
      "Designing clear and accessible payment flows for first-time users",
      "Improving visual hierarchy to guide users through financial actions with confidence",
    ],
    notes: "🌐 Public-facing system",
    images: [""],
    color: "bg-gray-400",
  },
];
