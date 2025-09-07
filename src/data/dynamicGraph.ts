type GraphNode = {
  id: string;
  label: string;
  type: string;
  cluster: string;
  meta: {
    messages?: number;
    createdAt: string;
    updatedAt: string;
    duration?: number;
    wordCount?: number;
    sentiment?: 'positive' | 'neutral' | 'negative';
    tags?: string[];
  };
};

type Edge = {
  source: string;
  target: string;
  weight: number;
  type?: 'continuation' | 'related' | 'reference';
  timestamp?: string;
};

function generateRealisticConversationTitle(cluster: string, index: number): string {
  const titles = {
    Technology: [
      "Help with React useState hook",
      "Python data analysis tips",
      "Best practices for API design",
      "Docker containerization guide",
      "JavaScript async/await patterns",
      "Database optimization techniques",
      "Machine learning algorithms explained",
      "Git workflow strategies",
      "CSS Grid vs Flexbox",
      "Node.js performance tuning"
    ],
    Health: [
      "Nutrition facts about protein",
      "Exercise routine for beginners",
      "Mental health and meditation",
      "Sleep hygiene best practices",
      "Understanding vitamin deficiencies",
      "Stress management techniques",
      "Healthy meal prep ideas",
      "Benefits of regular checkups",
      "First aid emergency guide",
      "Natural remedies for headaches"
    ],
    Education: [
      "Study techniques that work",
      "Online learning strategies",
      "Mathematics problem solving",
      "Essay writing structure guide",
      "Language learning tips",
      "Time management for students",
      "Research methodology basics",
      "Critical thinking development",
      "Public speaking confidence",
      "Memory improvement techniques"
    ],
    Finance: [
      "Personal budgeting strategies",
      "Investment basics for beginners",
      "Understanding credit scores",
      "Retirement planning guide",
      "Tax optimization tips",
      "Emergency fund importance",
      "Real estate investment basics",
      "Cryptocurrency explained",
      "Insurance coverage needs",
      "Debt management strategies"
    ],
    Entertainment: [
      "Movie recommendation algorithm",
      "Book analysis and reviews",
      "Gaming strategy guides",
      "Music theory fundamentals",
      "Creative writing prompts",
      "Art history exploration",
      "Photography composition tips",
      "Cooking recipe variations",
      "Travel destination guides",
      "Hobby project ideas"
    ],
    Environment: [
      "Climate change impacts",
      "Sustainable living practices",
      "Renewable energy options",
      "Wildlife conservation efforts",
      "Reducing carbon footprint",
      "Ocean pollution solutions",
      "Recycling best practices",
      "Urban gardening guide",
      "Green technology trends",
      "Environmental policy analysis"
    ],
    Politics: [
      "Electoral system explanations",
      "Policy impact analysis",
      "Historical political events",
      "Civic engagement importance",
      "Government structure guide",
      "International relations basics",
      "Constitutional law principles",
      "Voting procedures explained",
      "Political theory concepts",
      "Current affairs discussion"
    ],
    Sports: [
      "Training regimen design",
      "Sports injury prevention",
      "Game strategy analysis",
      "Athletic performance metrics",
      "Equipment recommendations",
      "Sports nutrition planning",
      "Mental preparation techniques",
      "Rule explanations and updates",
      "Historical sports moments",
      "Youth sports development"
    ],
    Arts: [
      "Painting technique tutorials",
      "Music composition basics",
      "Theater performance tips",
      "Digital art software guide",
      "Creative process insights",
      "Art history periods",
      "Sculpture material choices",
      "Dance choreography ideas",
      "Writing craft techniques",
      "Visual design principles"
    ],
    Science: [
      "Physics concepts explained",
      "Chemistry experiment guides",
      "Biology research methods",
      "Space exploration updates",
      "Scientific method application",
      "Laboratory safety protocols",
      "Data analysis techniques",
      "Research paper writing",
      "Hypothesis testing methods",
      "Scientific discovery history"
    ],
    History: [
      "Ancient civilization studies",
      "World War historical analysis",
      "Cultural evolution patterns",
      "Archaeological discoveries",
      "Historical figure biographies",
      "Timeline of major events",
      "Social movement impacts",
      "Economic history lessons",
      "Technological advancement history",
      "Regional history exploration"
    ]
  };

  const clusterTitles = titles[cluster as keyof typeof titles] || [
    `General discussion about ${cluster}`,
    `Questions regarding ${cluster}`,
    `Help with ${cluster} topics`
  ];

  return clusterTitles[index % clusterTitles.length] || `${cluster} conversation ${index}`;
}

function generateGraphData(
  totalNodes: number = 500,
  minEdges: number = 700
): { nodes: GraphNode[]; edges: Edge[] } {
  const clusters = [
    "Technology",
    "Health", 
    "Education",
    "Finance",
    "Entertainment",
    "Environment",
    "Politics",
    "Sports",
    "Arts",
    "Science",
    "History",
  ];

  const nodes: GraphNode[] = [];
  const edges: Edge[] = [];
  const edgeTypes = ['continuation', 'related', 'reference'] as const;
  const sentiments = ['positive', 'neutral', 'negative'] as const;

  // Generate nodes with realistic data
  for (let i = 1; i <= totalNodes; i++) {
    const cluster = clusters[Math.floor(Math.random() * clusters.length)];
    const clusterIndex = Math.floor(Math.random() * 10);
    
    const baseDate = new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000);
    const updateOffset = Math.random() * 7 * 24 * 60 * 60 * 1000; // Within 7 days of creation
    
    nodes.push({
      id: `conversation-${i}`,
      label: generateRealisticConversationTitle(cluster, clusterIndex),
      type: "conversation",
      cluster,
      meta: {
        messages: Math.floor(Math.random() * 50) + 5, // 5-55 messages
        createdAt: baseDate.toISOString(),
        updatedAt: new Date(baseDate.getTime() + updateOffset).toISOString(),
        duration: Math.floor(Math.random() * 120) + 5, // 5-125 minutes
        wordCount: Math.floor(Math.random() * 5000) + 100, // 100-5100 words
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
        tags: generateTags(cluster, Math.floor(Math.random() * 4) + 1)
      },
    });
  }

  // Generate edges with more sophisticated relationships
  const targetEdgeCount = Math.max(minEdges, totalNodes * 1.4);
  
  while (edges.length < targetEdgeCount) {
    const sourceIndex = Math.floor(Math.random() * totalNodes);
    const targetIndex = Math.floor(Math.random() * totalNodes);

    if (sourceIndex !== targetIndex) {
      const sourceNode = nodes[sourceIndex];
      const targetNode = nodes[targetIndex];
      
      // Higher probability of connections within same cluster
      const sameCluster = sourceNode.cluster === targetNode.cluster;
      const connectionProbability = sameCluster ? 0.7 : 0.3;
      
      if (Math.random() < connectionProbability) {
        const source = sourceNode.id;
        const target = targetNode.id;

        // Avoid duplicate edges
        if (!edges.some((e) => 
          (e.source === source && e.target === target) || 
          (e.source === target && e.target === source)
        )) {
          // Weight based on cluster similarity and other factors
          let weight = Math.floor(Math.random() * 5) + 1;
          if (sameCluster) weight += 2;
          if (sourceNode.meta.sentiment === targetNode.meta.sentiment) weight += 1;
          
          weight = Math.min(weight, 8); // Cap at 8

          edges.push({
            source,
            target,
            weight,
            type: edgeTypes[Math.floor(Math.random() * edgeTypes.length)],
            timestamp: new Date(Math.max(
              new Date(sourceNode.meta.createdAt).getTime(),
              new Date(targetNode.meta.createdAt).getTime()
            ) + Math.random() * 24 * 60 * 60 * 1000).toISOString()
          });
        }
      }
    }
  }

  return { nodes, edges };
}

function generateTags(cluster: string, count: number): string[] {
  const tagPool = {
    Technology: ['programming', 'web-dev', 'AI', 'database', 'mobile', 'cloud', 'security', 'devops'],
    Health: ['fitness', 'nutrition', 'mental-health', 'wellness', 'medical', 'exercise', 'diet'],
    Education: ['learning', 'study-tips', 'academic', 'skills', 'research', 'writing', 'math'],
    Finance: ['investing', 'budgeting', 'savings', 'taxes', 'retirement', 'credit', 'insurance'],
    Entertainment: ['movies', 'books', 'games', 'music', 'art', 'travel', 'cooking', 'hobbies'],
    Environment: ['climate', 'sustainability', 'conservation', 'green-tech', 'wildlife', 'pollution'],
    Politics: ['government', 'policy', 'elections', 'civic', 'law', 'international', 'history'],
    Sports: ['training', 'fitness', 'competition', 'strategy', 'equipment', 'nutrition', 'injury'],
    Arts: ['painting', 'music', 'theater', 'digital-art', 'creative', 'design', 'culture'],
    Science: ['physics', 'chemistry', 'biology', 'research', 'experiment', 'space', 'discovery'],
    History: ['ancient', 'war', 'culture', 'archaeology', 'biography', 'social', 'timeline']
  };

  const clusterTags = tagPool[cluster as keyof typeof tagPool] || ['general', 'discussion'];
  const shuffled = [...clusterTags].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Export the generated data
export const graphData = generateGraphData(500, 750);

// Export types for use in other components
export type { GraphNode, Edge };