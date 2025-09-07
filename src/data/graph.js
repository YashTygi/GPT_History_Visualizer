export const graphData = {
    nodes: [
        // ==== Programming Cluster ====
        {
            id: "conv1",
            label: "React State Management",
            type: "conversation",
            cluster: "Programming",
            meta: { timestampStart: "2024-06-01T10:00:00Z", timestampEnd: "2024-06-01T10:45:00Z", messages: 32 }
        },
        {
            id: "conv2",
            label: "Next.js vs Astro",
            type: "conversation",
            cluster: "Programming",
            meta: { timestampStart: "2024-06-02T09:30:00Z", timestampEnd: "2024-06-02T10:10:00Z", messages: 21 }
        },
        {
            id: "conv3",
            label: "TypeScript Best Practices",
            type: "conversation",
            cluster: "Programming",
            meta: { timestampStart: "2024-06-03T08:15:00Z", timestampEnd: "2024-06-03T09:00:00Z", messages: 28 }
        },
        {
            id: "conv4",
            label: "Node.js Scaling",
            type: "conversation",
            cluster: "Programming",
            meta: { timestampStart: "2024-06-04T13:00:00Z", timestampEnd: "2024-06-04T14:00:00Z", messages: 40 }
        },
        {
            id: "conv5",
            label: "GraphQL vs REST",
            type: "conversation",
            cluster: "Programming",
            meta: { timestampStart: "2024-06-05T12:00:00Z", timestampEnd: "2024-06-05T12:40:00Z", messages: 25 }
        },
        {
            id: "conv16",
            label: "Machine Learning Basics",
            type: "conversation",
            cluster: "Programming",
            meta: { timestampStart: "2024-06-16T09:00:00Z", timestampEnd: "2024-06-16T09:40:00Z", messages: 22 }
        },
        {
            id: "conv17",
            label: "Deep Learning for Images",
            type: "conversation",
            cluster: "Programming",
            meta: { timestampStart: "2024-06-17T10:00:00Z", timestampEnd: "2024-06-17T10:50:00Z", messages: 29 }
        },
        {
            id: "conv22",
            label: "Full Stack Roadmap",
            type: "conversation",
            cluster: "Programming",
            meta: { timestampStart: "2024-06-22T15:00:00Z", timestampEnd: "2024-06-22T15:35:00Z", messages: 19 }
        },
        {
            id: "conv24",
            label: "Rust vs Go",
            type: "conversation",
            cluster: "Programming",
            meta: { timestampStart: "2024-06-24T11:00:00Z", timestampEnd: "2024-06-24T11:40:00Z", messages: 27 }
        },
        {
            id: "conv25",
            label: "Microservices vs Monoliths",
            type: "conversation",
            cluster: "Programming",
            meta: { timestampStart: "2024-06-25T12:00:00Z", timestampEnd: "2024-06-25T12:50:00Z", messages: 33 }
        },
        {
            id: "conv26",
            label: "Graph Databases 101",
            type: "conversation",
            cluster: "Programming",
            meta: { timestampStart: "2024-06-26T14:00:00Z", timestampEnd: "2024-06-26T14:35:00Z", messages: 18 }
        },

        // ==== Health Cluster ====
        {
            id: "conv6",
            label: "AI in Healthcare",
            type: "conversation",
            cluster: "Health",
            meta: { timestampStart: "2024-06-06T11:00:00Z", timestampEnd: "2024-06-06T11:50:00Z", messages: 30 }
        },
        {
            id: "conv7",
            label: "Mental Health & AI Chatbots",
            type: "conversation",
            cluster: "Health",
            meta: { timestampStart: "2024-06-07T15:20:00Z", timestampEnd: "2024-06-07T16:00:00Z", messages: 18 }
        },
        {
            id: "conv8",
            label: "Fitness Tracking Apps",
            type: "conversation",
            cluster: "Health",
            meta: { timestampStart: "2024-06-08T07:00:00Z", timestampEnd: "2024-06-08T07:45:00Z", messages: 22 }
        },
        {
            id: "conv9",
            label: "Diet & Nutrition AI",
            type: "conversation",
            cluster: "Health",
            meta: { timestampStart: "2024-06-09T10:00:00Z", timestampEnd: "2024-06-09T10:30:00Z", messages: 20 }
        },
        {
            id: "conv10",
            label: "Telemedicine Platforms",
            type: "conversation",
            cluster: "Health",
            meta: { timestampStart: "2024-06-10T09:00:00Z", timestampEnd: "2024-06-10T09:35:00Z", messages: 19 }
        },
        {
            id: "conv18",
            label: "AI Ethics",
            type: "conversation",
            cluster: "Health",
            meta: { timestampStart: "2024-06-18T11:00:00Z", timestampEnd: "2024-06-18T11:30:00Z", messages: 15 }
        },
        {
            id: "conv20",
            label: "Blockchain in Healthcare",
            type: "conversation",
            cluster: "Health",
            meta: { timestampStart: "2024-06-20T13:00:00Z", timestampEnd: "2024-06-20T13:45:00Z", messages: 23 }
        },
        {
            id: "conv27",
            label: "Wearable Tech & Heart Health",
            type: "conversation",
            cluster: "Health",
            meta: { timestampStart: "2024-06-27T10:00:00Z", timestampEnd: "2024-06-27T10:45:00Z", messages: 21 }
        },
        {
            id: "conv28",
            label: "VR Therapy for PTSD",
            type: "conversation",
            cluster: "Health",
            meta: { timestampStart: "2024-06-28T11:00:00Z", timestampEnd: "2024-06-28T11:50:00Z", messages: 25 }
        },

        // ==== Finance Cluster ====
        {
            id: "conv11",
            label: "Stock Market Predictions",
            type: "conversation",
            cluster: "Finance",
            meta: { timestampStart: "2024-06-11T08:00:00Z", timestampEnd: "2024-06-11T08:40:00Z", messages: 27 }
        },
        {
            id: "conv12",
            label: "Crypto Market Trends",
            type: "conversation",
            cluster: "Finance",
            meta: { timestampStart: "2024-06-12T14:00:00Z", timestampEnd: "2024-06-12T14:30:00Z", messages: 24 }
        },
        {
            id: "conv13",
            label: "AI in Fintech",
            type: "conversation",
            cluster: "Finance",
            meta: { timestampStart: "2024-06-13T09:10:00Z", timestampEnd: "2024-06-13T09:55:00Z", messages: 31 }
        },
        {
            id: "conv14",
            label: "Personal Finance Automation",
            type: "conversation",
            cluster: "Finance",
            meta: { timestampStart: "2024-06-14T12:00:00Z", timestampEnd: "2024-06-14T12:45:00Z", messages: 26 }
        },
        {
            id: "conv15",
            label: "Banking APIs & Security",
            type: "conversation",
            cluster: "Finance",
            meta: { timestampStart: "2024-06-15T16:00:00Z", timestampEnd: "2024-06-15T16:50:00Z", messages: 34 }
        },
        {
            id: "conv19",
            label: "Financial Regulation & AI",
            type: "conversation",
            cluster: "Finance",
            meta: { timestampStart: "2024-06-19T12:00:00Z", timestampEnd: "2024-06-19T12:30:00Z", messages: 17 }
        },
        {
            id: "conv21",
            label: "Edge Computing for Finance",
            type: "conversation",
            cluster: "Finance",
            meta: { timestampStart: "2024-06-21T14:00:00Z", timestampEnd: "2024-06-21T14:40:00Z", messages: 20 }
        },
        {
            id: "conv23",
            label: "AI in Fraud Detection",
            type: "conversation",
            cluster: "Finance",
            meta: { timestampStart: "2024-06-23T16:00:00Z", timestampEnd: "2024-06-23T16:30:00Z", messages: 25 }
        },
        {
            id: "conv29",
            label: "Quantum Finance Models",
            type: "conversation",
            cluster: "Finance",
            meta: { timestampStart: "2024-06-29T09:00:00Z", timestampEnd: "2024-06-29T09:45:00Z", messages: 28 }
        },
        {
            id: "conv30",
            label: "Robo-Advisors & Portfolios",
            type: "conversation",
            cluster: "Finance",
            meta: { timestampStart: "2024-06-30T11:00:00Z", timestampEnd: "2024-06-30T11:50:00Z", messages: 22 }
        },

        // ==== Education Cluster ====
        {
            id: "conv31",
            label: "AI Tutors in Schools",
            type: "conversation",
            cluster: "Education",
            meta: { timestampStart: "2024-07-01T10:00:00Z", timestampEnd: "2024-07-01T10:40:00Z", messages: 24 }
        },
        {
            id: "conv32",
            label: "MOOCs Future Trends",
            type: "conversation",
            cluster: "Education",
            meta: { timestampStart: "2024-07-02T11:00:00Z", timestampEnd: "2024-07-02T11:35:00Z", messages: 18 }
        },
        {
            id: "conv33",
            label: "Gamified Learning",
            type: "conversation",
            cluster: "Education",
            meta: { timestampStart: "2024-07-03T09:30:00Z", timestampEnd: "2024-07-03T10:00:00Z", messages: 20 }
        },
        {
            id: "conv34",
            label: "AI Plagiarism Detection",
            type: "conversation",
            cluster: "Education",
            meta: { timestampStart: "2024-07-04T14:00:00Z", timestampEnd: "2024-07-04T14:40:00Z", messages: 27 }
        },

        // ==== Entertainment Cluster ====
        {
            id: "conv35",
            label: "AI in Music Composition",
            type: "conversation",
            cluster: "Entertainment",
            meta: { timestampStart: "2024-07-05T12:00:00Z", timestampEnd: "2024-07-05T12:50:00Z", messages: 26 }
        },
        {
            id: "conv36",
            label: "Streaming Platform Algorithms",
            type: "conversation",
            cluster: "Entertainment",
            meta: { timestampStart: "2024-07-06T13:00:00Z", timestampEnd: "2024-07-06T13:35:00Z", messages: 19 }
        },
        {
            id: "conv37",
            label: "AI in Video Game Design",
            type: "conversation",
            cluster: "Entertainment",
            meta: { timestampStart: "2024-07-07T14:00:00Z", timestampEnd: "2024-07-07T14:45:00Z", messages: 31 }
        },

        // ==== Science Cluster ====
        {
            id: "conv38",
            label: "AI for Space Exploration",
            type: "conversation",
            cluster: "Science",
            meta: { timestampStart: "2024-07-08T09:00:00Z", timestampEnd: "2024-07-08T09:45:00Z", messages: 29 }
        },
        {
            id: "conv39",
            label: "Climate Modeling with AI",
            type: "conversation",
            cluster: "Science",
            meta: { timestampStart: "2024-07-09T10:00:00Z", timestampEnd: "2024-07-09T10:40:00Z", messages: 27 }
        },
        {
            id: "conv40",
            label: "AI in Drug Discovery",
            type: "conversation",
            cluster: "Science",
            meta: { timestampStart: "2024-07-10T11:00:00Z", timestampEnd: "2024-07-10T11:50:00Z", messages: 32 }
        }
    ],

    edges: [
        // Programming edges
        { source: "conv1", target: "conv2", weight: 0.7, relation: "semantic_similarity" },
        { source: "conv1", target: "conv3", weight: 0.8, relation: "semantic_similarity" },
        { source: "conv2", target: "conv4", weight: 0.5, relation: "semantic_similarity" },
        { source: "conv3", target: "conv22", weight: 0.4, relation: "topic_overlap" },
        { source: "conv24", target: "conv25", weight: 0.6, relation: "semantic_similarity" },
        { source: "conv25", target: "conv26", weight: 0.7, relation: "topic_overlap" },

        // Health edges
        { source: "conv6", target: "conv7", weight: 0.6, relation: "topic_overlap" },
        { source: "conv6", target: "conv8", weight: 0.4, relation: "topic_overlap" },
        { source: "conv18", target: "conv20", weight: 0.5, relation: "topic_overlap" },
        { source: "conv27", target: "conv28", weight: 0.7, relation: "semantic_similarity" },

        // Finance edges
        { source: "conv11", target: "conv12", weight: 0.9, relation: "semantic_similarity" },
        { source: "conv11", target: "conv13", weight: 0.7, relation: "semantic_similarity" },
        { source: "conv14", target: "conv15", weight: 0.6, relation: "semantic_similarity" },
        { source: "conv19", target: "conv21", weight: 0.6, relation: "semantic_similarity" },
        { source: "conv13", target: "conv23", weight: 0.7, relation: "semantic_similarity" },
        { source: "conv29", target: "conv30", weight: 0.8, relation: "topic_overlap" },

        // Cross-cluster edges
        { source: "conv16", target: "conv17", weight: 0.8, relation: "topic_overlap" },
        { source: "conv17", target: "conv40", weight: 0.6, relation: "semantic_similarity" },
        { source: "conv20", target: "conv39", weight: 0.5, relation: "topic_overlap" },
        { source: "conv21", target: "conv38", weight: 0.4, relation: "topic_overlap" },
        { source: "conv22", target: "conv31", weight: 0.3, relation: "topic_overlap" },
        { source: "conv32", target: "conv33", weight: 0.7, relation: "semantic_similarity" },
        { source: "conv34", target: "conv35", weight: 0.4, relation: "topic_overlap" },
        { source: "conv36", target: "conv37", weight: 0.6, relation: "semantic_similarity" }
    ]
};