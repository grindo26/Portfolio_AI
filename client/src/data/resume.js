export const resume = {
  name: 'Pratik Sangle',
  title: 'Full Stack Software Engineer',
  email: 'pratiksangle6@gmail.com',
  phone: '(551) 342-1471',
  location: 'Chicago, IL',
  github: 'https://github.com/pratiksangle6',
  linkedin: 'https://linkedin.com/in/pratiksangle6',
  summary:
    'Full Stack Software Engineer with 7+ years of experience building scalable, high-performance web applications. Skilled in TypeScript, React, Node.js, and cloud technologies. Currently at Discover Financial Services via Capgemini, delivering microservices and compliance tools supporting 10,000+ users.',

  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Java'],
    },
    {
      category: 'Frameworks',
      items: ['React.js', 'Node.js', 'Express.js', 'Spring', 'Redux', 'Vue.js', 'Tailwind CSS', 'Docker'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Oracle', 'Elasticsearch'],
    },
    {
      category: 'Engineering Tools',
      items: ['GraphQL', 'Kafka', 'RabbitMQ', 'REST API', 'CI/CD (Jenkins)', 'AWS EC2', 'Git', 'JUnit'],
    },
    {
      category: 'Certificates',
      items: ['AWS Certified Solution Architect Associate', 'Claude Certified Architect'],
    },
  ],

  experience: [
    {
      company: 'Discover Financial Services via Capgemini',
      role: 'Software Engineer',
      dates: 'Feb 2025 – Present',
      location: 'Chicago, IL',
      tech: ['TypeScript', 'Node.js', 'Redis', 'GraphQL', 'React'],
      bullets: [
        'Developed a scalable application to help internal teams self-identify issues using Node.js, React, and MongoDB, onboarding 2,000+ applications with audit-level insights on license compliance and governance.',
        'Migrated a monolithic backend to microservices, improving API response time by 45% and supporting 10,000+ users.',
        'Implemented Redis caching and Kafka queues for refresh workflows, reducing redundant API calls by 60% and cutting dashboard refresh time from 30s to under 8s.',
        'Refactored UI into 25+ reusable components, reducing development time for UI features by 35%.',
        'Integrated CI/CD pipeline workflows, reducing manual release effort by 70%.',
        'Leveraged AI coding agents to accelerate feature development and reduce implementation time.',
      ],
    },
    {
      company: 'Vistaar Systems Pvt. Ltd.',
      role: 'Senior Software Engineer',
      dates: 'Jun 2021 – Jul 2022',
      location: 'Mumbai, India',
      tech: ['React', 'TypeScript', 'PostgreSQL', 'Java', 'Node.js', 'Redis'],
      bullets: [
        'Led and mentored a team of nine on major projects for Ford, Jim Beam, and Gallo Winery, achieving a 95% on-time delivery rate using Agile methodologies.',
        'Engineered a Node.js and React mass update module with GraphQL, saving users 5 hours by streamlining data exchange.',
        'Reduced processing time by 70% by implementing Redis caching and migrating security scripts from Node.js to PostgreSQL.',
        'Created a Kafka PubSub model for notifications supporting 20,000 concurrent users with low latency.',
        'Spearheaded development of a Spring and REST framework, reducing development time by 60%.',
      ],
    },
    {
      company: 'Vistaar Systems Pvt. Ltd.',
      role: 'Software Engineer',
      dates: 'Jun 2018 – Jun 2021',
      location: 'Mumbai, India',
      tech: ['TypeScript', 'Node.js', 'JavaScript', 'Java', 'PostgreSQL', 'React'],
      bullets: [
        'Boosted application performance by 90% by refactoring Node.js/Express.js code with efficient data structures, in-memory caching, and optimized AWS EC2 instances.',
        'Built a React-Spring web app with RESTful APIs, automating data processing and visualization, saving 20 hours of work weekly.',
        'Developed an Elasticsearch, Logstash, and Kibana stack improving report generation time by 90% (5 hrs → 10 min).',
        'Achieved 99% data integrity in production, saving 15 hours per week by automating data correction using Java.',
        'Resolved Redis cache inconsistencies, enhanced logging with AWS S3, and reduced user-reported defects in Jira by 60%.',
      ],
    },
  ],

  education: [
    {
      school: 'Stevens Institute of Technology',
      degree: 'Master of Science in Computer Science',
      location: 'Hoboken, NJ',
      dates: 'Sep 2022 – May 2024',
      gpa: '3.7',
      coursework: 'Web Programming, Cryptography, Algorithms, Cybersecurity, Requirement Analysis',
    },
    {
      school: 'University of Mumbai',
      degree: 'Bachelor of Engineering in Computer Engineering',
      location: 'Mumbai, India',
      dates: 'Aug 2014 – Jul 2018',
      gpa: '3.5',
      coursework: 'Data Structures, Databases, Distributed Databases, Computer Networks',
    },
  ],

  projects: [
    {
      name: 'NurtureNest',
      description:
        'A childcare management platform built with the MERN stack that streamlines nanny hiring, task management, and real-time parent communication.',
      tech: ['React', 'Redux', 'MongoDB', 'Node.js', 'Socket.io', 'Firebase', 'AWS S3', 'Redis'],
      github: '',
      live: '',
    },
    {
      name: 'Item Pricing Management System',
      description:
        'A stateless microservices system for item pricing at Vistaar Systems with separate services for reports and the main server. Achieved 99.9% uptime with Docker containerization.',
      tech: ['React', 'Node.js', 'RabbitMQ', 'Kubernetes', 'Docker'],
      github: '',
      live: '',
    },
  ],
};
