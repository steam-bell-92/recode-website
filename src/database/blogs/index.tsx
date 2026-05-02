interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
  authors: string[];
  category: string;
  tags?: string[];
}

const blogs: Blog[] = [

  {
    id: 1,
    title: "Land a Job in UI/UX Design",
    image: "/img/blogs/04-ux-job-design.png",
    description:
      " Are you passionate about design and dreaming of a career in it? Or maybe you are already in the design space and looking to pivot into UI/UX? ",
    slug: "ux-ui-design-job",
    authors: ["sowmiya-v", "sanjay-kv"],
    category: "Design",
    tags: ["UX", "UI", "Career", "Job"],
  },

  {
    id: 2,
    title: "What is GitHub Copilot",
    image: "/img/blogs/06-github-agent.png",
    description:
      "The GitHub Copilot Coding Agent is an asynchronous software engineering agent that assists developers by suggesting code snippets",
    slug: "git-coding-agent",
    authors: ["sanjay-kv"],
    category: "Development",
    tags: ["GitHub", "AI", "Coding", "Tools"],
  },
  {
    id: 3,
    title: "Apache Spark Architecture Explained",
    image: "img/blogs/07-spark-blog-banner.png",
    description:
      "Apache Spark is a fast, open-source big data framework that leverages in-memory computing for high performance. Its architecture powers scalable distributed processing across clusters, making it essential for analytics and machine learning.",
    slug: "spark-architecture",
    authors: ["Aditya-Singh-Rathore", "sanjay-kv"],
    category: "Development",
    tags: ["Apache Spark", "Big Data", "Data Engineering", "Architecture"],
  },
  {
    id: 4,
    title: "N8N: The Future of Workflow Automation",
    image: "/img/blogs/n8n-logo.png",
    description:
      "N8N is an open-source workflow automation tool that enables users to connect various apps and services to automate tasks without extensive coding knowledge.",
    slug: "n8n-workflow-automation",
    authors: ["Aditya-Singh-Rathore"],
    category: "Development",
    tags: ["Automation", "Workflow", "N8N", "Tools"],
  },
  {
    id: 5,
    title: "OpenAI AgentKit: Building AI Agents Without the Complexity",
    image: "/img/blogs/Agent_Builder.png",
    description:
      "OpenAI AgentKit is a framework that simplifies the process of building AI agents, allowing developers to create intelligent applications without getting bogged down in the underlying complexities.",
    slug: "open-ai-agent-builder",
    authors: ["Aditya-Singh-Rathore"],
    category: "AI & Tech",
    tags: ["AI", "OpenAI", "Development", "Agents"],
  },
  {
    id: 6,
    title: "Delta Lake: An Introduction to Trustworthy Data Storage",
    image: "/img/blogs/delta-lake-logo.png",
    description:
      "Delta Lake is an open-source storage layer that brings ACID transactions to Apache Spark and big data workloads.",
    slug: "deltalake-data-storage",
    authors: ["Aditya-Singh-Rathore"],
    category: "data engineering",
    tags: ["Delta Lake", "Big Data", "Data Engineering", "Storage"],
  },
  {
    id: 7,
    title: "How I Cleared the Azure Data Engineer Associate Certification",
    image: "/img/blogs/microsoft-certified-associate-badge.png",
    description:
      "The Microsoft Certified: Azure Data Engineer Associate certification validates your skills in designing and implementing data solutions on the Azure platform.",
    slug: "fabric-data-engineer",
    authors: ["Aditya-Singh-Rathore"],
    category: "data engineering",
    tags: ["Microsoft", "Azure", "Data Engineering", "Certification"],
  },
];

export default blogs;
