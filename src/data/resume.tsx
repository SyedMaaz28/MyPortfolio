import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Syed Ahmeduddin Maaz",
  initials: "MZ",
  url: "https://dillion.io",
  location: "Aurangabad , India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Engineer turned Entrepreneur!! Computer Science graduate, Tech & Data Enthusiast, Love to Travel, Footballer ⚽️",
  summary:
    "I’m **Syed Ahmeduddin Maaz** aka MOODY — a Computer Science graduate and a Data Science student at IIT Madras, deeply passionate about Generative AI, LLMs, and data-driven innovation.With a strong foundation in Python, LangChain and AI frameworks,I build intelligent systems that solve real-world problems. I’m also the founder of **Bayzah.in Ventures**, a freelancing firm focused on delivering impactful AI and Digital solutions. Outside of tech, I’m building **Muslim Halaqah**, a content platform for Islamic knowledge, and I love blending my interests in deen, design, and data.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Langchain",
    "AWS",
    "AWS Fargate",
    "GCP",
    "Google Artifact Registry (GAR)",
    "FastAPI",
    "HTML",
    "CSS",
    "JavaScript",
    "AI Frameworks",
    "Scikit-learn",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Seaborn",
    "Git",
    "GitLab",
    "Github",
    "CircleCI",
    "ArgoCD",
    "Postgres",
    "Flask",
    "MySQL",
    "Vector DB",
    "ChromaDB",
    "Pinecone",
    "Docker",
    "Kubernetes",
    "Minikube | GKE",
    "Jenkins",
    "LLMOps-AIOps",
    "CI/CD Pipelines",
    "Grafana",
    "Prometheus",
    "Trivy",
    "SonarQube",
    "Java",
    "C++",
    "Data Visualization",
    "Microsoft Excel",
    "Microsoft Power BI",
    "Tableau",
    "Prompt Engineering",
    "Deep Learning",
    "NLP",
    "TensorFlow",
    "Keras",
    "HuggingFace",
    "LLM",
    "Retrieval-Augmented Generation (RAG)",
    "Streamlit",
    "Generative AI",
    "Agentic AI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SyedMaaz28",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maazzsd/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/maazz_sd",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "syedsam7676@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Bayzah Ventures",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Founder",
      logoUrl: "/Bayzah.png",
      start: "July 2025",
      end: "Present",
      description:
        "Bayzah.in Ventures is a creative-tech freelancing firm founded by Syed Maaz and Khalid Quadri, Shopify & e-commerce store development, AI/LLM applications, web development, and digital content creation.",
    },

  
  ],
  education: [
    {
      school: "Indian Institute of Technology Madras",
      href: "https://study.iitm.ac.in/ds/",
      degree: "Foundation",
      logoUrl: "/iitm.png",
      start: "2024",
      end: "Ongoing",
    },
    {
      school: "Everest College of Engineering and Technology",
      href: "https://www.eescoet.org/",
      degree: "Bachelor's Degree of Engineering in Computer Science",
      logoUrl: "/clg.jpeg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Government Ploytechnic Aurangabad",
      href: "https://gpabad.ac.in/",
      degree: "Dimploma in Computer Science",
      logoUrl: "/gpa.jpeg",
      start: "2020",
      end: "2022",
    },
    {
      school: "Scholar's English High School",
      href: "https://scholarsgroup.org/",
      degree: "Secondary School Certificate (SSC)",
      logoUrl: "/school.png",
      start: "2008",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
   

  ],

} as const;
