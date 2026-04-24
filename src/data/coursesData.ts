export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface FreePlatform {
  name: string;
  url: string;
  certificateAvailable: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: Difficulty;
  duration: string;
  tags: string[];
  freePlatforms: FreePlatform[];
}

export interface CourseCategory {
  id: string;
  label: string;
  icon: string;
}

export const courseCategories: CourseCategory[] = [
  { id: "all", label: "All Courses", icon: "🎓" },
  { id: "data-engineering", label: "Data Engineering", icon: "⚙️" },
  { id: "data-science", label: "Data Science & ML", icon: "🧠" },
  { id: "web-development", label: "Web Development", icon: "🌐" },
  { id: "cloud", label: "Cloud Computing", icon: "☁️" },
  { id: "databases", label: "Databases & SQL", icon: "🗄️" },
  { id: "programming", label: "Programming", icon: "💻" },
];

export const coursesData: Course[] = [
  // ── Data Engineering ─────────────────────────────────────────────────────
  {
    id: "python-data-engineering",
    title: "Python for Data Engineering",
    description:
      "Learn to harness the power of Python for transforming and processing data at scale. Build robust data pipelines and optimize data workflows effectively.",
    category: "data-engineering",
    difficulty: "Beginner",
    duration: "10 hrs",
    tags: ["Python", "ETL", "Data Pipelines", "Pandas", "NumPy"],
    freePlatforms: [
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/python-for-data-science",
        certificateAvailable: true,
      },
      {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/python-programming-language/",
        certificateAvailable: false,
      },
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
        certificateAvailable: true,
      },
    ],
  },
  {
    id: "sql-data-engineering",
    title: "SQL for Data Engineering",
    description:
      "Unlock the potential of data manipulation and management. Gain proficiency in crafting and optimizing complex queries to build and maintain efficient data pipelines.",
    category: "data-engineering",
    difficulty: "Beginner",
    duration: "8 hrs",
    tags: ["SQL", "Query Optimization", "Data Pipelines", "Normalization"],
    freePlatforms: [
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/sql-for-data-science",
        certificateAvailable: true,
      },
      {
        name: "W3Schools",
        url: "https://www.w3schools.com/sql/",
        certificateAvailable: false,
      },
      {
        name: "SQLZoo",
        url: "https://sqlzoo.net/",
        certificateAvailable: false,
      },
    ],
  },
  {
    id: "apache-kafka",
    title: "Apache Kafka for Data Engineering",
    description:
      "Dive into real-time data streaming with Apache Kafka. Learn to build scalable, fault-tolerant data pipelines that enable efficient data movement and processing.",
    category: "data-engineering",
    difficulty: "Intermediate",
    duration: "12 hrs",
    tags: ["Kafka", "Real-Time Processing", "Data Streaming", "Batch Processing"],
    freePlatforms: [
      {
        name: "Confluent (Apache Kafka)",
        url: "https://developer.confluent.io/learn-kafka/",
        certificateAvailable: false,
      },
      {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/apache-kafka/",
        certificateAvailable: false,
      },
    ],
  },
  {
    id: "apache-spark",
    title: "Apache Spark for Data Engineering",
    description:
      "Master Apache Spark for distributed data processing. Learn PySpark, Spark SQL, DataFrames, and Spark Streaming for large-scale data engineering.",
    category: "data-engineering",
    difficulty: "Intermediate",
    duration: "15 hrs",
    tags: ["Spark", "PySpark", "Big Data", "DataFrames", "Spark SQL"],
    freePlatforms: [
      {
        name: "Databricks Academy",
        url: "https://www.databricks.com/learn/training/learning-pathway-apache-spark",
        certificateAvailable: false,
      },
      {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/apache-spark/",
        certificateAvailable: false,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/apache-spark-tutorial",
        certificateAvailable: true,
      },
    ],
  },
  {
    id: "snowflake-data-warehouse",
    title: "Data Warehouse with Snowflake",
    description:
      "Discover the modern approach to data warehousing using Snowflake. Learn to design, implement, and manage a high-performance data warehouse.",
    category: "data-engineering",
    difficulty: "Intermediate",
    duration: "10 hrs",
    tags: ["Snowflake", "Data Warehouse", "Cloud Data", "OLAP", "Analytics"],
    freePlatforms: [
      {
        name: "Snowflake University",
        url: "https://www.snowflake.com/en/learn/training/",
        certificateAvailable: true,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/snowflake",
        certificateAvailable: true,
      },
    ],
  },
  {
    id: "workflow-orchestration",
    title: "Workflow Orchestration with Airflow",
    description:
      "Explore workflow orchestration with Apache Airflow. Gain expertise in seamlessly coordinating and automating complex data pipelines.",
    category: "data-engineering",
    difficulty: "Intermediate",
    duration: "10 hrs",
    tags: ["Airflow", "Workflow Automation", "Data Orchestration", "ETL"],
    freePlatforms: [
      {
        name: "Apache Airflow Docs",
        url: "https://airflow.apache.org/docs/",
        certificateAvailable: false,
      },
      {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/introduction-to-apache-airflow/",
        certificateAvailable: false,
      },
    ],
  },

  // ── Data Science & ML ─────────────────────────────────────────────────────
  {
    id: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals",
    description:
      "A comprehensive introduction to machine learning. Learn supervised, unsupervised, and reinforcement learning with practical Python examples.",
    category: "data-science",
    difficulty: "Beginner",
    duration: "20 hrs",
    tags: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis"],
    freePlatforms: [
      {
        name: "Google ML Crash Course",
        url: "https://developers.google.com/machine-learning/crash-course",
        certificateAvailable: false,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/machine-learning",
        certificateAvailable: true,
      },
      {
        name: "Kaggle",
        url: "https://www.kaggle.com/learn/intro-to-machine-learning",
        certificateAvailable: true,
      },
    ],
  },
  {
    id: "data-analysis-pandas",
    title: "Data Analysis with Pandas & NumPy",
    description:
      "Master data manipulation and analysis using the Pandas and NumPy libraries. Learn to clean, transform, and explore datasets efficiently.",
    category: "data-science",
    difficulty: "Beginner",
    duration: "8 hrs",
    tags: ["Pandas", "NumPy", "Data Wrangling", "Data Cleaning", "Python"],
    freePlatforms: [
      {
        name: "Kaggle",
        url: "https://www.kaggle.com/learn/pandas",
        certificateAvailable: true,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/pandas-and-numpy",
        certificateAvailable: true,
      },
    ],
  },
  {
    id: "deep-learning-tensorflow",
    title: "Deep Learning with TensorFlow",
    description:
      "Learn the fundamentals of deep learning and build neural networks using TensorFlow and Keras. Covers CNNs, RNNs, and transfer learning.",
    category: "data-science",
    difficulty: "Advanced",
    duration: "25 hrs",
    tags: ["Deep Learning", "TensorFlow", "Keras", "Neural Networks", "CNN"],
    freePlatforms: [
      {
        name: "TensorFlow Official Tutorials",
        url: "https://www.tensorflow.org/tutorials",
        certificateAvailable: false,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/deep-learning",
        certificateAvailable: true,
      },
    ],
  },
  {
    id: "data-visualization",
    title: "Data Visualization with Python",
    description:
      "Learn to create compelling visualizations using Matplotlib, Seaborn, and Plotly. Communicate data insights effectively to any audience.",
    category: "data-science",
    difficulty: "Beginner",
    duration: "6 hrs",
    tags: ["Data Visualization", "Matplotlib", "Seaborn", "Plotly", "Python"],
    freePlatforms: [
      {
        name: "Kaggle",
        url: "https://www.kaggle.com/learn/data-visualization",
        certificateAvailable: true,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/data-visualization",
        certificateAvailable: true,
      },
    ],
  },

  // ── Web Development ───────────────────────────────────────────────────────
  {
    id: "html-css-basics",
    title: "HTML & CSS Fundamentals",
    description:
      "Build a solid foundation in web development with HTML5 and CSS3. Learn semantic markup, responsive layouts, and modern CSS features.",
    category: "web-development",
    difficulty: "Beginner",
    duration: "10 hrs",
    tags: ["HTML", "CSS", "Responsive Design", "Web Development"],
    freePlatforms: [
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/responsive-web-design/",
        certificateAvailable: true,
      },
      {
        name: "W3Schools",
        url: "https://www.w3schools.com/html/",
        certificateAvailable: false,
      },
      {
        name: "The Odin Project",
        url: "https://www.theodinproject.com/paths/foundations/courses/foundations",
        certificateAvailable: false,
      },
    ],
  },
  {
    id: "javascript-fundamentals",
    title: "JavaScript Fundamentals",
    description:
      "Master JavaScript from the ground up. Covers variables, functions, DOM manipulation, ES6+ features, and asynchronous programming.",
    category: "web-development",
    difficulty: "Beginner",
    duration: "20 hrs",
    tags: ["JavaScript", "ES6", "DOM", "APIs", "Async"],
    freePlatforms: [
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
        certificateAvailable: true,
      },
      {
        name: "The Odin Project",
        url: "https://www.theodinproject.com/paths/full-stack-javascript",
        certificateAvailable: false,
      },
      {
        name: "javascript.info",
        url: "https://javascript.info/",
        certificateAvailable: false,
      },
    ],
  },
  {
    id: "react-basics",
    title: "React for Beginners",
    description:
      "Get started with React — the most popular front-end library. Learn components, state, props, hooks, and how to build modern single-page applications.",
    category: "web-development",
    difficulty: "Intermediate",
    duration: "15 hrs",
    tags: ["React", "JavaScript", "Hooks", "SPA", "Front-End"],
    freePlatforms: [
      {
        name: "React Official Docs",
        url: "https://react.dev/learn",
        certificateAvailable: false,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/react-for-beginners",
        certificateAvailable: true,
      },
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
        certificateAvailable: true,
      },
    ],
  },

  // ── Cloud Computing ───────────────────────────────────────────────────────
  {
    id: "aws-cloud-fundamentals",
    title: "AWS Cloud Fundamentals",
    description:
      "Gain a solid understanding of Amazon Web Services. Learn core services like EC2, S3, RDS, Lambda, and IAM — and prepare for the AWS Cloud Practitioner exam.",
    category: "cloud",
    difficulty: "Beginner",
    duration: "12 hrs",
    tags: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda"],
    freePlatforms: [
      {
        name: "AWS Skill Builder",
        url: "https://explore.skillbuilder.aws/learn/course/134/play/93785/aws-cloud-practitioner-essentials",
        certificateAvailable: false,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/aws-fundamentals",
        certificateAvailable: true,
      },
    ],
  },
  {
    id: "gcp-fundamentals",
    title: "Google Cloud Platform Fundamentals",
    description:
      "Explore Google Cloud Platform services and learn to deploy, manage, and scale applications in the cloud. Covers BigQuery, Cloud Storage, and Compute Engine.",
    category: "cloud",
    difficulty: "Beginner",
    duration: "10 hrs",
    tags: ["Google Cloud", "GCP", "BigQuery", "Cloud Storage", "Cloud"],
    freePlatforms: [
      {
        name: "Google Cloud Skills Boost",
        url: "https://www.cloudskillsboost.google/paths/9",
        certificateAvailable: false,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/google-cloud-fundamentals",
        certificateAvailable: true,
      },
    ],
  },
  {
    id: "azure-fundamentals",
    title: "Microsoft Azure Fundamentals",
    description:
      "Start your journey with Microsoft Azure. Learn cloud concepts, core Azure services, security, privacy, compliance, and pricing to prepare for the AZ-900 exam.",
    category: "cloud",
    difficulty: "Beginner",
    duration: "10 hrs",
    tags: ["Azure", "Microsoft Azure", "Cloud Computing", "AZ-900"],
    freePlatforms: [
      {
        name: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/",
        certificateAvailable: false,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/azure-fundamentals",
        certificateAvailable: true,
      },
    ],
  },

  // ── Databases & SQL ───────────────────────────────────────────────────────
  {
    id: "mysql-complete",
    title: "MySQL — The Complete Course",
    description:
      "A complete guide to MySQL. Learn database design, DDL/DML statements, joins, indexes, stored procedures, triggers, and performance tuning.",
    category: "databases",
    difficulty: "Beginner",
    duration: "12 hrs",
    tags: ["MySQL", "SQL", "Relational Databases", "Indexing", "Stored Procedures"],
    freePlatforms: [
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/mysql",
        certificateAvailable: true,
      },
      {
        name: "W3Schools",
        url: "https://www.w3schools.com/mysql/",
        certificateAvailable: false,
      },
    ],
  },
  {
    id: "postgresql-advanced",
    title: "PostgreSQL for Developers",
    description:
      "Go beyond basic SQL with PostgreSQL. Explore advanced queries, window functions, JSON support, partitioning, and full-text search.",
    category: "databases",
    difficulty: "Intermediate",
    duration: "10 hrs",
    tags: ["PostgreSQL", "SQL", "Window Functions", "Advanced SQL", "Data Integrity"],
    freePlatforms: [
      {
        name: "PostgreSQL Official Tutorial",
        url: "https://www.postgresql.org/docs/current/tutorial.html",
        certificateAvailable: false,
      },
      {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/postgresql-tutorial/",
        certificateAvailable: false,
      },
    ],
  },
  {
    id: "mongodb-nosql",
    title: "MongoDB & NoSQL Databases",
    description:
      "Learn NoSQL database concepts and master MongoDB. Covers CRUD operations, aggregation pipeline, indexing, and schema design.",
    category: "databases",
    difficulty: "Beginner",
    duration: "8 hrs",
    tags: ["MongoDB", "NoSQL", "Database Design", "CRUD", "Aggregation"],
    freePlatforms: [
      {
        name: "MongoDB University",
        url: "https://learn.mongodb.com/",
        certificateAvailable: true,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/mongodb",
        certificateAvailable: true,
      },
    ],
  },

  // ── Programming ───────────────────────────────────────────────────────────
  {
    id: "git-github-basics",
    title: "Git & GitHub — Version Control",
    description:
      "Learn version control from scratch using Git and GitHub. Covers branching, merging, pull requests, and collaborative development workflows.",
    category: "programming",
    difficulty: "Beginner",
    duration: "5 hrs",
    tags: ["Git", "GitHub", "Version Control", "Collaboration"],
    freePlatforms: [
      {
        name: "GitHub Skills",
        url: "https://skills.github.com/",
        certificateAvailable: false,
      },
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/",
        certificateAvailable: false,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/git-and-github",
        certificateAvailable: true,
      },
    ],
  },
  {
    id: "docker-kubernetes",
    title: "Docker & Kubernetes Essentials",
    description:
      "Understand containerization with Docker and orchestration with Kubernetes. Learn to build, ship, and run applications consistently across environments.",
    category: "programming",
    difficulty: "Intermediate",
    duration: "14 hrs",
    tags: ["Docker", "Kubernetes", "Containers", "DevOps", "Scalability"],
    freePlatforms: [
      {
        name: "Play with Docker",
        url: "https://labs.play-with-docker.com/",
        certificateAvailable: false,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/docker-tutorial",
        certificateAvailable: true,
      },
      {
        name: "KodeKloud",
        url: "https://kodekloud.com/courses/docker-for-the-absolute-beginner/",
        certificateAvailable: false,
      },
    ],
  },
  {
    id: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    description:
      "Build a strong computer science foundation. Learn arrays, linked lists, trees, graphs, sorting, and searching algorithms with Python examples.",
    category: "programming",
    difficulty: "Intermediate",
    duration: "30 hrs",
    tags: ["DSA", "Algorithms", "Python", "Problem Solving", "Coding Interviews"],
    freePlatforms: [
      {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/data-structures/",
        certificateAvailable: false,
      },
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/coding-interview-prep/",
        certificateAvailable: false,
      },
      {
        name: "Great Learning",
        url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/data-structures-and-algorithms",
        certificateAvailable: true,
      },
    ],
  },
];
