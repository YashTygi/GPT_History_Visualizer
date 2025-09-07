export const graphData = {
  nodes: [
    // Programming Cluster - Web Development
    {
      id: "conv1", label: "React State Management", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-01T10:00:00Z", timestampEnd: "2024-06-01T10:45:00Z", messages: 32, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv2", label: "Next.js vs Astro", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-02T09:30:00Z", timestampEnd: "2024-06-02T10:10:00Z", messages: 21, participants: 1, difficulty: "advanced" }
    },
    {
      id: "conv3", label: "TypeScript Best Practices", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-03T08:15:00Z", timestampEnd: "2024-06-03T09:00:00Z", messages: 28, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv4", label: "Node.js Scaling", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-04T13:00:00Z", timestampEnd: "2024-06-04T14:00:00Z", messages: 40, participants: 3, difficulty: "advanced" }
    },
    {
      id: "conv22", label: "Full Stack Roadmap", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-22T15:00:00Z", timestampEnd: "2024-06-22T15:35:00Z", messages: 19, participants: 1, difficulty: "beginner" }
    },
    {
      id: "conv24", label: "Vue.js vs React Performance", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-24T10:00:00Z", timestampEnd: "2024-06-24T11:15:00Z", messages: 45, participants: 4, difficulty: "advanced" }
    },
    {
      id: "conv25", label: "Svelte Kit Deep Dive", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-25T14:30:00Z", timestampEnd: "2024-06-25T15:20:00Z", messages: 35, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv26", label: "WebAssembly Integration", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-26T09:00:00Z", timestampEnd: "2024-06-26T10:30:00Z", messages: 52, participants: 3, difficulty: "expert" }
    },
    {
      id: "conv27", label: "Progressive Web Apps", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-27T11:00:00Z", timestampEnd: "2024-06-27T12:00:00Z", messages: 38, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv28", label: "Micro-frontends Architecture", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-28T13:45:00Z", timestampEnd: "2024-06-28T14:45:00Z", messages: 41, participants: 5, difficulty: "expert" }
    },

    // Programming Cluster - Backend & Infrastructure
    {
      id: "conv29", label: "Docker Containerization", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-29T08:00:00Z", timestampEnd: "2024-06-29T09:15:00Z", messages: 33, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv30", label: "Kubernetes Orchestration", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-30T10:30:00Z", timestampEnd: "2024-06-30T11:45:00Z", messages: 47, participants: 3, difficulty: "advanced" }
    },
    {
      id: "conv31", label: "AWS Lambda Serverless", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-01T14:00:00Z", timestampEnd: "2024-07-01T15:00:00Z", messages: 29, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv32", label: "Database Optimization", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-02T09:30:00Z", timestampEnd: "2024-07-02T10:30:00Z", messages: 36, participants: 4, difficulty: "advanced" }
    },
    {
      id: "conv33", label: "Redis Caching Strategies", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-03T11:00:00Z", timestampEnd: "2024-07-03T11:45:00Z", messages: 27, participants: 2, difficulty: "intermediate" }
    },

    // Programming Cluster - API & Data
    {
      id: "conv5", label: "GraphQL vs REST", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-05T12:00:00Z", timestampEnd: "2024-06-05T12:40:00Z", messages: 25, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv34", label: "API Security Best Practices", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-04T13:00:00Z", timestampEnd: "2024-07-04T14:15:00Z", messages: 44, participants: 3, difficulty: "advanced" }
    },
    {
      id: "conv35", label: "gRPC vs REST Performance", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-05T10:00:00Z", timestampEnd: "2024-07-05T11:00:00Z", messages: 31, participants: 2, difficulty: "advanced" }
    },
    {
      id: "conv36", label: "Event-Driven Architecture", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-06T15:30:00Z", timestampEnd: "2024-07-06T16:30:00Z", messages: 39, participants: 4, difficulty: "expert" }
    },
    {
      id: "conv37", label: "Message Queue Systems", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-07T09:00:00Z", timestampEnd: "2024-07-07T10:15:00Z", messages: 42, participants: 3, difficulty: "advanced" }
    },

    // Programming Cluster - AI/ML
    {
      id: "conv16", label: "Machine Learning Basics", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-16T09:00:00Z", timestampEnd: "2024-06-16T09:40:00Z", messages: 22, participants: 1, difficulty: "beginner" }
    },
    {
      id: "conv17", label: "Deep Learning for Images", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-06-17T10:00:00Z", timestampEnd: "2024-06-17T10:50:00Z", messages: 29, participants: 2, difficulty: "advanced" }
    },
    {
      id: "conv38", label: "Natural Language Processing", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-08T11:00:00Z", timestampEnd: "2024-07-08T12:15:00Z", messages: 48, participants: 3, difficulty: "advanced" }
    },
    {
      id: "conv39", label: "Computer Vision with OpenCV", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-09T13:30:00Z", timestampEnd: "2024-07-09T14:45:00Z", messages: 37, participants: 2, difficulty: "advanced" }
    },
    {
      id: "conv40", label: "Reinforcement Learning", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-10T10:00:00Z", timestampEnd: "2024-07-10T11:30:00Z", messages: 51, participants: 4, difficulty: "expert" }
    },
    {
      id: "conv41", label: "TensorFlow vs PyTorch", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-11T14:00:00Z", timestampEnd: "2024-07-11T15:00:00Z", messages: 34, participants: 3, difficulty: "intermediate" }
    },
    {
      id: "conv42", label: "MLOps Pipeline Design", type: "conversation", cluster: "Programming",
      meta: { timestampStart: "2024-07-12T09:15:00Z", timestampEnd: "2024-07-12T10:45:00Z", messages: 43, participants: 5, difficulty: "expert" }
    },

    // Health Cluster - Digital Health
    {
      id: "conv6", label: "AI in Healthcare", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-06-06T11:00:00Z", timestampEnd: "2024-06-06T11:50:00Z", messages: 30, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv7", label: "Mental Health & AI Chatbots", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-06-07T15:20:00Z", timestampEnd: "2024-06-07T16:00:00Z", messages: 18, participants: 1, difficulty: "beginner" }
    },
    {
      id: "conv8", label: "Fitness Tracking Apps", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-06-08T07:00:00Z", timestampEnd: "2024-06-08T07:45:00Z", messages: 22, participants: 1, difficulty: "beginner" }
    },
    {
      id: "conv9", label: "Diet & Nutrition AI", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-06-09T10:00:00Z", timestampEnd: "2024-06-09T10:30:00Z", messages: 20, participants: 1, difficulty: "intermediate" }
    },
    {
      id: "conv10", label: "Telemedicine Platforms", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-06-10T09:00:00Z", timestampEnd: "2024-06-10T09:35:00Z", messages: 19, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv18", label: "AI Ethics in Healthcare", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-06-18T11:00:00Z", timestampEnd: "2024-06-18T11:30:00Z", messages: 15, participants: 1, difficulty: "intermediate" }
    },
    {
      id: "conv20", label: "Blockchain in Healthcare", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-06-20T13:00:00Z", timestampEnd: "2024-06-20T13:45:00Z", messages: 23, participants: 2, difficulty: "advanced" }
    },

    // Health Cluster - Medical Technology
    {
      id: "conv43", label: "Medical Image Analysis", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-07-13T10:00:00Z", timestampEnd: "2024-07-13T11:15:00Z", messages: 35, participants: 3, difficulty: "advanced" }
    },
    {
      id: "conv44", label: "Electronic Health Records", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-07-14T14:30:00Z", timestampEnd: "2024-07-14T15:30:00Z", messages: 28, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv45", label: "Genomic Data Processing", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-07-15T09:00:00Z", timestampEnd: "2024-07-15T10:30:00Z", messages: 46, participants: 4, difficulty: "expert" }
    },
    {
      id: "conv46", label: "Wearable Health Devices", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-07-16T11:45:00Z", timestampEnd: "2024-07-16T12:45:00Z", messages: 31, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv47", label: "Drug Discovery AI", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-07-17T13:00:00Z", timestampEnd: "2024-07-17T14:15:00Z", messages: 41, participants: 5, difficulty: "expert" }
    },
    {
      id: "conv48", label: "Precision Medicine", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-07-18T10:30:00Z", timestampEnd: "2024-07-18T11:45:00Z", messages: 38, participants: 3, difficulty: "advanced" }
    },

    // Health Cluster - Public Health
    {
      id: "conv49", label: "Epidemiological Modeling", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-07-19T08:00:00Z", timestampEnd: "2024-07-19T09:30:00Z", messages: 44, participants: 4, difficulty: "advanced" }
    },
    {
      id: "conv50", label: "Health Data Privacy", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-07-20T15:00:00Z", timestampEnd: "2024-07-20T16:00:00Z", messages: 27, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv51", label: "Healthcare Accessibility", type: "conversation", cluster: "Health",
      meta: { timestampStart: "2024-07-21T12:00:00Z", timestampEnd: "2024-07-21T13:00:00Z", messages: 23, participants: 3, difficulty: "beginner" }
    },

    // Finance Cluster - Traditional Finance
    {
      id: "conv11", label: "Stock Market Predictions", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-06-11T08:00:00Z", timestampEnd: "2024-06-11T08:40:00Z", messages: 27, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv14", label: "Personal Finance Automation", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-06-14T12:00:00Z", timestampEnd: "2024-06-14T12:45:00Z", messages: 26, participants: 1, difficulty: "beginner" }
    },
    {
      id: "conv15", label: "Banking APIs & Security", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-06-15T16:00:00Z", timestampEnd: "2024-06-15T16:50:00Z", messages: 34, participants: 3, difficulty: "advanced" }
    },
    {
      id: "conv19", label: "Financial Regulation & AI", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-06-19T12:00:00Z", timestampEnd: "2024-06-19T12:30:00Z", messages: 17, participants: 1, difficulty: "intermediate" }
    },
    {
      id: "conv23", label: "AI in Fraud Detection", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-06-23T16:00:00Z", timestampEnd: "2024-06-23T16:30:00Z", messages: 25, participants: 2, difficulty: "advanced" }
    },

    // Finance Cluster - Cryptocurrency & DeFi
    {
      id: "conv12", label: "Crypto Market Trends", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-06-12T14:00:00Z", timestampEnd: "2024-06-12T14:30:00Z", messages: 24, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv52", label: "DeFi Protocol Analysis", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-07-22T10:00:00Z", timestampEnd: "2024-07-22T11:15:00Z", messages: 42, participants: 4, difficulty: "advanced" }
    },
    {
      id: "conv53", label: "Smart Contract Security", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-07-23T13:30:00Z", timestampEnd: "2024-07-23T14:45:00Z", messages: 39, participants: 3, difficulty: "expert" }
    },
    {
      id: "conv54", label: "NFT Market Dynamics", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-07-24T09:00:00Z", timestampEnd: "2024-07-24T10:00:00Z", messages: 26, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv55", label: "Blockchain Scalability", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-07-25T15:00:00Z", timestampEnd: "2024-07-25T16:30:00Z", messages: 48, participants: 5, difficulty: "expert" }
    },

    // Finance Cluster - Fintech
    {
      id: "conv13", label: "AI in Fintech", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-06-13T09:10:00Z", timestampEnd: "2024-06-13T09:55:00Z", messages: 31, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv21", label: "Edge Computing for Finance", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-06-21T14:00:00Z", timestampEnd: "2024-06-21T14:40:00Z", messages: 20, participants: 1, difficulty: "advanced" }
    },
    {
      id: "conv56", label: "Digital Payment Systems", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-07-26T11:00:00Z", timestampEnd: "2024-07-26T12:00:00Z", messages: 33, participants: 3, difficulty: "intermediate" }
    },
    {
      id: "conv57", label: "Robo-Advisory Platforms", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-07-27T14:15:00Z", timestampEnd: "2024-07-27T15:15:00Z", messages: 29, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv58", label: "High-Frequency Trading", type: "conversation", cluster: "Finance",
      meta: { timestampStart: "2024-07-28T08:30:00Z", timestampEnd: "2024-07-28T10:00:00Z", messages: 45, participants: 4, difficulty: "expert" }
    },

    // Education Cluster
    {
      id: "conv59", label: "Online Learning Platforms", type: "conversation", cluster: "Education",
      meta: { timestampStart: "2024-07-29T09:00:00Z", timestampEnd: "2024-07-29T10:15:00Z", messages: 32, participants: 2, difficulty: "beginner" }
    },
    {
      id: "conv60", label: "AI Tutoring Systems", type: "conversation", cluster: "Education",
      meta: { timestampStart: "2024-07-30T11:30:00Z", timestampEnd: "2024-07-30T12:30:00Z", messages: 28, participants: 3, difficulty: "intermediate" }
    },
    {
      id: "conv61", label: "Educational Data Analytics", type: "conversation", cluster: "Education",
      meta: { timestampStart: "2024-07-31T13:00:00Z", timestampEnd: "2024-07-31T14:15:00Z", messages: 36, participants: 4, difficulty: "advanced" }
    },
    {
      id: "conv62", label: "VR in Education", type: "conversation", cluster: "Education",
      meta: { timestampStart: "2024-08-01T10:00:00Z", timestampEnd: "2024-08-01T11:00:00Z", messages: 25, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv63", label: "Adaptive Learning Systems", type: "conversation", cluster: "Education",
      meta: { timestampStart: "2024-08-02T15:30:00Z", timestampEnd: "2024-08-02T16:45:00Z", messages: 41, participants: 3, difficulty: "advanced" }
    },
    {
      id: "conv64", label: "Digital Literacy Programs", type: "conversation", cluster: "Education",
      meta: { timestampStart: "2024-08-03T08:00:00Z", timestampEnd: "2024-08-03T09:00:00Z", messages: 22, participants: 1, difficulty: "beginner" }
    },

    // Business Cluster
    {
      id: "conv65", label: "Digital Transformation", type: "conversation", cluster: "Business",
      meta: { timestampStart: "2024-08-04T12:00:00Z", timestampEnd: "2024-08-04T13:15:00Z", messages: 38, participants: 4, difficulty: "intermediate" }
    },
    {
      id: "conv66", label: "AI-Driven Analytics", type: "conversation", cluster: "Business",
      meta: { timestampStart: "2024-08-05T09:30:00Z", timestampEnd: "2024-08-05T10:45:00Z", messages: 34, participants: 3, difficulty: "advanced" }
    },
    {
      id: "conv67", label: "Customer Experience AI", type: "conversation", cluster: "Business",
      meta: { timestampStart: "2024-08-06T14:00:00Z", timestampEnd: "2024-08-06T15:00:00Z", messages: 31, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv68", label: "Supply Chain Optimization", type: "conversation", cluster: "Business",
      meta: { timestampStart: "2024-08-07T11:15:00Z", timestampEnd: "2024-08-07T12:30:00Z", messages: 43, participants: 5, difficulty: "advanced" }
    },
    {
      id: "conv69", label: "Remote Work Technology", type: "conversation", cluster: "Business",
      meta: { timestampStart: "2024-08-08T10:00:00Z", timestampEnd: "2024-08-08T11:00:00Z", messages: 26, participants: 2, difficulty: "beginner" }
    },
    {
      id: "conv70", label: "Business Intelligence Tools", type: "conversation", cluster: "Business",
      meta: { timestampStart: "2024-08-09T13:45:00Z", timestampEnd: "2024-08-09T14:45:00Z", messages: 35, participants: 3, difficulty: "intermediate" }
    },

    // IoT & Smart Technology Cluster
    {
      id: "conv71", label: "Smart Home Automation", type: "conversation", cluster: "IoT",
      meta: { timestampStart: "2024-08-10T08:30:00Z", timestampEnd: "2024-08-10T09:45:00Z", messages: 29, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv72", label: "Industrial IoT Networks", type: "conversation", cluster: "IoT",
      meta: { timestampStart: "2024-08-11T15:00:00Z", timestampEnd: "2024-08-11T16:15:00Z", messages: 37, participants: 4, difficulty: "advanced" }
    },
    {
      id: "conv73", label: "Edge AI Processing", type: "conversation", cluster: "IoT",
      meta: { timestampStart: "2024-08-12T10:30:00Z", timestampEnd: "2024-08-12T11:45:00Z", messages: 42, participants: 3, difficulty: "expert" }
    },
    {
      id: "conv74", label: "Smart City Infrastructure", type: "conversation", cluster: "IoT",
      meta: { timestampStart: "2024-08-13T12:00:00Z", timestampEnd: "2024-08-13T13:30:00Z", messages: 46, participants: 5, difficulty: "advanced" }
    },
    {
      id: "conv75", label: "Vehicle Telematics", type: "conversation", cluster: "IoT",
      meta: { timestampStart: "2024-08-14T09:00:00Z", timestampEnd: "2024-08-14T10:00:00Z", messages: 27, participants: 2, difficulty: "intermediate" }
    },

    // Gaming & Entertainment Cluster
    {
      id: "conv76", label: "Game AI Development", type: "conversation", cluster: "Gaming",
      meta: { timestampStart: "2024-08-15T14:30:00Z", timestampEnd: "2024-08-15T15:45:00Z", messages: 39, participants: 3, difficulty: "advanced" }
    },
    {
      id: "conv77", label: "Procedural Content Generation", type: "conversation", cluster: "Gaming",
      meta: { timestampStart: "2024-08-16T11:00:00Z", timestampEnd: "2024-08-16T12:15:00Z", messages: 33, participants: 2, difficulty: "advanced" }
    },
    {
      id: "conv78", label: "VR Game Mechanics", type: "conversation", cluster: "Gaming",
      meta: { timestampStart: "2024-08-17T13:15:00Z", timestampEnd: "2024-08-17T14:30:00Z", messages: 35, participants: 4, difficulty: "intermediate" }
    },
    {
      id: "conv79", label: "Streaming Platform Tech", type: "conversation", cluster: "Gaming",
      meta: { timestampStart: "2024-08-18T10:00:00Z", timestampEnd: "2024-08-18T11:15:00Z", messages: 28, participants: 2, difficulty: "intermediate" }
    },
    {
      id: "conv80", label: "Esports Analytics", type: "conversation", cluster: "Gaming",
      meta: { timestampStart: "2024-08-19T15:45:00Z", timestampEnd: "2024-08-19T16:45:00Z", messages: 31, participants: 3, difficulty: "advanced" }
    },
    
  ],
  
  edges: [
    // Programming cluster internal connections
    { source: "conv1", target: "conv2", weight: 0.7, relation: "semantic_similarity" },
    { source: "conv1", target: "conv3", weight: 0.8, relation: "semantic_similarity" },
    { source: "conv1", target: "conv24", weight: 0.9, relation: "framework_comparison" },
    { source: "conv2", target: "conv4", weight: 0.5, relation: "semantic_similarity" },
    { source: "conv2", target: "conv25", weight: 0.8, relation: "framework_comparison" },
    { source: "conv3", target: "conv22", weight: 0.4, relation: "topic_overlap" },
    { source: "conv3", target: "conv34", weight: 0.6, relation: "best_practices" },
    { source: "conv4", target: "conv30", weight: 0.7, relation: "scaling_techniques" },
    { source: "conv4", target: "conv32", weight: 0.6, relation: "performance_optimization" },
    { source: "conv5", target: "conv35", weight: 0.9, relation: "api_comparison" },
    { source: "conv16", target: "conv17", weight: 0.8, relation: "topic_overlap" },
    { source: "conv16", target: "conv38", weight: 0.7, relation: "ml_progression" },
    { source: "conv17", target: "conv39", weight: 0.8, relation: "computer_vision" },
    { source: "conv17", target: "conv41", weight: 0.6, relation: "framework_comparison" },
    { source: "conv22", target: "conv27", weight: 0.5, relation: "web_development" },
    { source: "conv24", target: "conv25", weight: 0.7, relation: "framework_comparison" },
    { source: "conv26", target: "conv28", weight: 0.6, relation: "advanced_architecture" },
    { source: "conv29", target: "conv30", weight: 0.9, relation: "containerization_stack" },
    { source: "conv30", target: "conv31", weight: 0.7, relation: "cloud_infrastructure" },
    { source: "conv31", target: "conv37", weight: 0.6, relation: "serverless_messaging" },
    { source: "conv32", target: "conv33", weight: 0.8, relation: "database_performance" },
    { source: "conv34", target: "conv15", weight: 0.7, relation: "api_security" },
    { source: "conv35", target: "conv36", weight: 0.6, relation: "api_architecture" },
    { source: "conv36", target: "conv37", weight: 0.8, relation: "messaging_architecture" },
    { source: "conv38", target: "conv40", weight: 0.5, relation: "ai_techniques" },
    { source: "conv39", target: "conv43", weight: 0.7, relation: "image_analysis" },
    { source: "conv40", target: "conv42", weight: 0.6, relation: "ml_operations" },
    { source: "conv41", target: "conv42", weight: 0.8, relation: "ml_framework_ops" },

    // Health cluster internal connections
    { source: "conv6", target: "conv7", weight: 0.6, relation: "topic_overlap" },
    { source: "conv6", target: "conv8", weight: 0.4, relation: "topic_overlap" },
    { source: "conv6", target: "conv43", weight: 0.8, relation: "ai_healthcare_applications" },
    { source: "conv6", target: "conv47", weight: 0.7, relation: "ai_medical_research" },
    { source: "conv7", target: "conv60", weight: 0.5, relation: "ai_interaction_systems" },
    { source: "conv8", target: "conv46", weight: 0.9, relation: "fitness_technology" },
    { source: "conv9", target: "conv48", weight: 0.6, relation: "personalized_health" },
    { source: "conv10", target: "conv44", weight: 0.7, relation: "digital_health_systems" },
    { source: "conv18", target: "conv20", weight: 0.5, relation: "topic_overlap" },
    { source: "conv18", target: "conv50", weight: 0.8, relation: "healthcare_ethics_privacy" },
    { source: "conv20", target: "conv44", weight: 0.6, relation: "health_data_systems" },
    { source: "conv43", target: "conv45", weight: 0.7, relation: "medical_data_analysis" },
    { source: "conv44", target: "conv50", weight: 0.8, relation: "health_data_privacy" },
    { source: "conv45", target: "conv47", weight: 0.6, relation: "precision_medicine_research" },
    { source: "conv46", target: "conv49", weight: 0.4, relation: "health_monitoring" },
    { source: "conv47", target: "conv48", weight: 0.8, relation: "personalized_medicine" },
    { source: "conv49", target: "conv51", weight: 0.5, relation: "public_health" },
    { source: "conv50", target: "conv51", weight: 0.6, relation: "healthcare_accessibility" },

    // Finance cluster internal connections
    { source: "conv11", target: "conv12", weight: 0.9, relation: "semantic_similarity" },
    { source: "conv11", target: "conv13", weight: 0.7, relation: "semantic_similarity" },
    { source: "conv11", target: "conv58", weight: 0.8, relation: "trading_systems" },
    { source: "conv12", target: "conv52", weight: 0.8, relation: "crypto_analysis" },
    { source: "conv12", target: "conv54", weight: 0.7, relation: "crypto_markets" },
    { source: "conv13", target: "conv23", weight: 0.7, relation: "semantic_similarity" },
    { source: "conv13", target: "conv56", weight: 0.8, relation: "fintech_applications" },
    { source: "conv14", target: "conv15", weight: 0.6, relation: "semantic_similarity" },
    { source: "conv14", target: "conv57", weight: 0.9, relation: "automated_finance" },
    { source: "conv15", target: "conv56", weight: 0.7, relation: "financial_technology" },
    { source: "conv19", target: "conv21", weight: 0.6, relation: "semantic_similarity" },
    { source: "conv19", target: "conv53", weight: 0.7, relation: "financial_compliance" },
    { source: "conv21", target: "conv58", weight: 0.6, relation: "high_performance_finance" },
    { source: "conv23", target: "conv53", weight: 0.6, relation: "security_systems" },
    { source: "conv52", target: "conv53", weight: 0.8, relation: "defi_security" },
    { source: "conv52", target: "conv55", weight: 0.7, relation: "blockchain_protocols" },
    { source: "conv53", target: "conv55", weight: 0.6, relation: "blockchain_technology" },
    { source: "conv54", target: "conv55", weight: 0.5, relation: "blockchain_applications" },
    { source: "conv56", target: "conv57", weight: 0.7, relation: "digital_finance" },
    { source: "conv57", target: "conv58", weight: 0.5, relation: "automated_trading" },

    // Education cluster internal connections
    { source: "conv59", target: "conv60", weight: 0.8, relation: "educational_technology" },
    { source: "conv59", target: "conv64", weight: 0.6, relation: "digital_learning" },
    { source: "conv60", target: "conv63", weight: 0.9, relation: "ai_education_systems" },
    { source: "conv61", target: "conv63", weight: 0.7, relation: "data_driven_education" },
    { source: "conv61", target: "conv70", weight: 0.5, relation: "analytics_systems" },
    { source: "conv62", target: "conv78", weight: 0.6, relation: "vr_applications" },
    { source: "conv63", target: "conv66", weight: 0.4, relation: "ai_analytics" },
    { source: "conv64", target: "conv69", weight: 0.5, relation: "digital_skills" },

    // Business cluster internal connections
    { source: "conv65", target: "conv66", weight: 0.8, relation: "business_analytics" },
    { source: "conv65", target: "conv69", weight: 0.7, relation: "digital_workplace" },
    { source: "conv66", target: "conv67", weight: 0.7, relation: "ai_business_applications" },
    { source: "conv66", target: "conv70", weight: 0.9, relation: "business_intelligence" },
    { source: "conv67", target: "conv68", weight: 0.5, relation: "customer_operations" },
    { source: "conv68", target: "conv70", weight: 0.6, relation: "operational_analytics" },
    { source: "conv69", target: "conv79", weight: 0.4, relation: "remote_technology" },

    // IoT cluster internal connections
    { source: "conv71", target: "conv72", weight: 0.6, relation: "iot_networks" },
    { source: "conv71", target: "conv74", weight: 0.7, relation: "smart_systems" },
    { source: "conv72", target: "conv73", weight: 0.8, relation: "edge_computing" },
    { source: "conv72", target: "conv74", weight: 0.6, relation: "industrial_smart_systems" },
    { source: "conv73", target: "conv21", weight: 0.7, relation: "edge_processing" },
    { source: "conv74", target: "conv75", weight: 0.5, relation: "connected_infrastructure" },
    { source: "conv75", target: "conv68", weight: 0.4, relation: "logistics_optimization" },

    // Gaming cluster internal connections
    { source: "conv76", target: "conv77", weight: 0.8, relation: "game_ai_systems" },
    { source: "conv76", target: "conv80", weight: 0.6, relation: "competitive_gaming" },
    { source: "conv77", target: "conv78", weight: 0.5, relation: "game_mechanics" },
    { source: "conv78", target: "conv62", weight: 0.7, relation: "vr_experiences" },
    { source: "conv79", target: "conv69", weight: 0.5, relation: "streaming_technology" },
    { source: "conv80", target: "conv61", weight: 0.4, relation: "performance_analytics" },

    // Cross-cluster connections (Programming to other clusters)
    { source: "conv1", target: "conv67", weight: 0.4, relation: "ui_state_management" },
    { source: "conv3", target: "conv34", weight: 0.6, relation: "type_safety" },
    { source: "conv4", target: "conv72", weight: 0.5, relation: "distributed_systems" },
    { source: "conv5", target: "conv44", weight: 0.4, relation: "api_integration" },
    { source: "conv16", target: "conv60", weight: 0.7, relation: "ai_tutoring" },
    { source: "conv17", target: "conv76", weight: 0.6, relation: "ai_applications" },
    { source: "conv26", target: "conv73", weight: 0.8, relation: "performance_optimization" },
    { source: "conv27", target: "conv71", weight: 0.5, relation: "web_iot_interfaces" },
    { source: "conv29", target: "conv68", weight: 0.4, relation: "deployment_automation" },
    { source: "conv31", target: "conv58", weight: 0.5, relation: "serverless_trading" },
    { source: "conv32", target: "conv45", weight: 0.6, relation: "large_dataset_processing" },
    { source: "conv34", target: "conv50", weight: 0.7, relation: "data_security" },
    { source: "conv36", target: "conv74", weight: 0.5, relation: "event_driven_iot" },
    { source: "conv38", target: "conv47", weight: 0.8, relation: "nlp_drug_discovery" },
    { source: "conv39", target: "conv76", weight: 0.6, relation: "computer_vision_games" },
    { source: "conv40", target: "conv58", weight: 0.5, relation: "ai_trading_algorithms" },
    { source: "conv41", target: "conv66", weight: 0.4, relation: "ml_framework_business" },
    { source: "conv42", target: "conv47", weight: 0.7, relation: "ml_pipeline_drug_discovery" },

    // Cross-cluster connections (Health to other clusters)
    { source: "conv6", target: "conv59", weight: 0.5, relation: "health_education" },
    { source: "conv7", target: "conv67", weight: 0.6, relation: "mental_health_interfaces" },
    { source: "conv8", target: "conv71", weight: 0.6, relation: "smart_fitness_devices" },
    { source: "conv9", target: "conv63", weight: 0.4, relation: "personalized_nutrition_learning" },
    { source: "conv10", target: "conv65", weight: 0.5, relation: "digital_health_transformation" },
    { source: "conv18", target: "conv19", weight: 0.7, relation: "ai_ethics_regulation" },
    { source: "conv20", target: "conv55", weight: 0.6, relation: "blockchain_healthcare" },
    { source: "conv43", target: "conv61", weight: 0.5, relation: "medical_image_education" },
    { source: "conv44", target: "conv70", weight: 0.6, relation: "health_data_intelligence" },
    { source: "conv46", target: "conv75", weight: 0.4, relation: "health_monitoring_vehicles" },
    { source: "conv48", target: "conv14", weight: 0.4, relation: "personalized_health_finance" },
    { source: "conv49", target: "conv74", weight: 0.5, relation: "public_health_smart_cities" },

    // Cross-cluster connections (Finance to other clusters)
    { source: "conv11", target: "conv66", weight: 0.6, relation: "financial_analytics" },
    { source: "conv12", target: "conv76", weight: 0.3, relation: "crypto_gaming" },
    { source: "conv13", target: "conv65", weight: 0.7, relation: "fintech_transformation" },
    { source: "conv15", target: "conv72", weight: 0.4, relation: "secure_iot_payments" },
    { source: "conv21", target: "conv73", weight: 0.8, relation: "edge_financial_processing" },
    { source: "conv52", target: "conv77", weight: 0.3, relation: "defi_gaming_mechanics" },
    { source: "conv53", target: "conv72", weight: 0.5, relation: "industrial_blockchain" },
    { source: "conv56", target: "conv71", weight: 0.6, relation: "iot_payments" },
    { source: "conv57", target: "conv63", weight: 0.4, relation: "financial_education_ai" },
    { source: "conv58", target: "conv80", weight: 0.4, relation: "high_frequency_esports_data" },

    // Cross-cluster connections (Education to other clusters)
    { source: "conv59", target: "conv69", weight: 0.8, relation: "remote_learning_technology" },
    { source: "conv60", target: "conv67", weight: 0.5, relation: "ai_customer_education" },
    { source: "conv62", target: "conv71", weight: 0.4, relation: "vr_smart_home_training" },
    { source: "conv63", target: "conv57", weight: 0.5, relation: "adaptive_financial_learning" },
    { source: "conv64", target: "conv51", weight: 0.6, relation: "digital_health_literacy" },

    // Cross-cluster connections (Business to other clusters)
    { source: "conv65", target: "conv74", weight: 0.6, relation: "smart_city_business" },
    { source: "conv66", target: "conv49", weight: 0.4, relation: "health_data_analytics" },
    { source: "conv67", target: "conv46", weight: 0.5, relation: "health_customer_experience" },
    { source: "conv68", target: "conv47", weight: 0.4, relation: "pharma_supply_chain" },
    { source: "conv70", target: "conv80", weight: 0.5, relation: "esports_business_intelligence" },

    // Cross-cluster connections (IoT to other clusters)
    { source: "conv71", target: "conv59", weight: 0.4, relation: "smart_learning_environments" },
    { source: "conv72", target: "conv68", weight: 0.7, relation: "industrial_supply_chain" },
    { source: "conv73", target: "conv42", weight: 0.6, relation: "edge_ml_ops" },
    { source: "conv74", target: "conv49", weight: 0.6, relation: "smart_city_health_monitoring" },
    { source: "conv75", target: "conv56", weight: 0.5, relation: "connected_vehicle_payments" },

    // Cross-cluster connections (Gaming to other clusters)
    { source: "conv76", target: "conv63", weight: 0.4, relation: "gamified_learning" },
    { source: "conv77", target: "conv45", weight: 0.3, relation: "procedural_genome_analysis" },
    { source: "conv78", target: "conv48", weight: 0.3, relation: "vr_precision_medicine" },
    { source: "conv79", target: "conv61", weight: 0.5, relation: "streaming_educational_analytics" },
    { source: "conv80", target: "conv58", weight: 0.5, relation: "esports_trading_algorithms" },

    // Additional semantic and temporal connections
    { source: "conv1", target: "conv25", weight: 0.5, relation: "temporal_adjacency" },
    { source: "conv6", target: "conv18", weight: 0.6, relation: "temporal_evolution" },
    { source: "conv11", target: "conv19", weight: 0.5, relation: "temporal_evolution" },
    { source: "conv16", target: "conv42", weight: 0.7, relation: "ml_maturity_progression" },
    { source: "conv24", target: "conv76", weight: 0.4, relation: "performance_critical_apps" },
    { source: "conv26", target: "conv55", weight: 0.5, relation: "performance_blockchain" },
    { source: "conv28", target: "conv36", weight: 0.7, relation: "distributed_architecture" },
    { source: "conv30", target: "conv74", weight: 0.6, relation: "container_orchestration_iot" },
    { source: "conv33", target: "conv32", weight: 0.8, relation: "database_optimization" },
    { source: "conv35", target: "conv5", weight: 0.9, relation: "api_protocol_comparison" },
    { source: "conv37", target: "conv72", weight: 0.6, relation: "messaging_iot" },
    { source: "conv40", target: "conv80", weight: 0.4, relation: "rl_gaming_analytics" },
    { source: "conv43", target: "conv39", weight: 0.8, relation: "medical_computer_vision" },
    { source: "conv44", target: "conv10", weight: 0.8, relation: "health_records_telemedicine" },
    { source: "conv45", target: "conv48", weight: 0.9, relation: "genomic_precision_medicine" },
    { source: "conv52", target: "conv20", weight: 0.5, relation: "defi_healthcare_blockchain" },
    { source: "conv54", target: "conv77", weight: 0.3, relation: "nft_procedural_content" },
    { source: "conv59", target: "conv7", weight: 0.4, relation: "educational_mental_health" },
    { source: "conv60", target: "conv40", weight: 0.5, relation: "ai_tutoring_reinforcement" },
    { source: "conv61", target: "conv66", weight: 0.8, relation: "educational_business_analytics" },
    { source: "conv65", target: "conv13", weight: 0.8, relation: "business_fintech_transformation" },
    { source: "conv67", target: "conv9", weight: 0.4, relation: "customer_health_ai" },
    { source: "conv71", target: "conv8", weight: 0.6, relation: "smart_home_fitness" },
    { source: "conv73", target: "conv31", weight: 0.7, relation: "edge_serverless" },
    { source: "conv75", target: "conv68", weight: 0.6, relation: "vehicle_supply_chain" },
    { source: "conv78", target: "conv59", weight: 0.4, relation: "vr_education_gaming" },
    { source: "conv79", target: "conv27", weight: 0.4, relation: "streaming_progressive_web" }
  ]
};