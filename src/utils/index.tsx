export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}


export const workExperiences: WorkExperience[] = [
  {
    company: "VENUS",
    role: "Software Developer | Logistics & ERP Systems",
    duration: "09.2024 - Present",
    location: "Tekirdag",
    description: [
      "Developed and maintained scalable backend modules using Node.js, Nest.js, and TypeScript.",
      "Designed and implemented RESTful APIs reducing manual operations by ~40%.",
      "Built KPI dashboards to monitor warehouse operations.",
    ],
  },
  {
    company: "FREELANCER",
    role: "Software Developer, Remote",
    duration: "08.2024 - Present",
    location: "Remote",
    description: [
      "Delivered end-to-end logistics and WMS solutions using Next.js, Nest.js, React Native.",
      "Built secure microservices with RabbitMQ and JWT for ERP/WMS integration.",
      "Developed React Native ERP features for field logistics, reducing confirmation time by ~50%.",
    ],
  },
  {
    company: "EMAARTECHS",
    role: "React Native Developer / ERP & Operations Modules",
    duration: "02.2023 - 06.2024",
    location: "Tekirdag",
    description: [
      "Delivered mobile modules for order requisition and processing.",
      "Implemented unit and integration tests, reducing post-release defects by ~35-40%.",
      "Managed sprint planning using Jira Agile boards.",
    ],
  },
  {
    company: "MIMCODE",
    role: "Frontend Developer / Logistics Applications",
    duration: "02.2020 - 03.2022",
    location: "Gaziantep",
    description: [
      "Designed and developed operational logistics dashboards.",
      "Built responsive web portals using React, Redux, Next.js.",
      "Integrated frontend with OMS and Warehouse APIs for real-time reporting.",
    ],
  },
];