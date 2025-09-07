"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Download, 
  Settings, 
  Info, 
  Maximize2, 
  RotateCcw,
  Zap,
  Users,
  MessageSquare,
  Calendar,
  Filter,
  Search
} from "lucide-react";
import { graphData as rawGraphData } from "@/data/dynamicGraph";

// Prevent SSR issues with Three.js by dynamically importing
const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: true,
});

// Loading component
function GraphLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-900">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-white text-lg">Loading your conversation graph...</p>
        <p className="text-gray-400 text-sm">Rendering {rawGraphData.nodes.length} conversations</p>
      </div>
    </div>
  );
}

export default function VisualizePage() {
  const params = useParams();
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCluster, setFilterCluster] = useState("all");
  const [graphStats, setGraphStats] = useState({
    totalNodes: rawGraphData.nodes.length,
    totalEdges: rawGraphData.edges.length,
    clusters: 0,
    avgConnections: 0
  });

  // Calculate graph statistics
  useEffect(() => {
    const clusters = new Set(rawGraphData.nodes.map(node => node.cluster)).size;
    const avgConnections = rawGraphData.edges.length / rawGraphData.nodes.length;
    
    setGraphStats({
      totalNodes: rawGraphData.nodes.length,
      totalEdges: rawGraphData.edges.length,
      clusters,
      avgConnections: Math.round(avgConnections * 10) / 10
    });
  }, []);

  // Filter data based on search and cluster filter
  const filteredData = {
    nodes: rawGraphData.nodes.filter(node => {
      const matchesSearch = node.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          node.cluster.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCluster = filterCluster === "all" || node.cluster === filterCluster;
      return matchesSearch && matchesCluster;
    }),
    links: rawGraphData.edges.filter(edge => {
      const sourceExists = rawGraphData.nodes.some(node => 
        node.id === edge.source && 
        (filterCluster === "all" || node.cluster === filterCluster) &&
        (node.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
         node.cluster.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      const targetExists = rawGraphData.nodes.some(node => 
        node.id === edge.target && 
        (filterCluster === "all" || node.cluster === filterCluster) &&
        (node.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
         node.cluster.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      return true; //sourceExists && targetExists
    })
  };

  const clusters = Array.from(new Set(rawGraphData.nodes.map(node => node.cluster)));

  const handleNodeClick = (node: any) => {
    setSelectedNode(node);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const resetView = () => {
    setSearchTerm("");
    setFilterCluster("all");
    setSelectedNode(null);
  };

  return (
    <div className="w-full h-screen bg-slate-900 relative overflow-hidden">
      {/* Header - only show when not fullscreen */}
      {!isFullscreen && (
        <header className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-b border-slate-700">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/')}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Upload</span>
              </button>
              <div className="h-6 w-px bg-gray-600"></div>
              <h1 className="text-xl font-bold text-white">
                Session: {params.sessionId}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">{graphStats.totalNodes} conversations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">{graphStats.totalEdges} connections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">{graphStats.clusters} topics</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={resetView}
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-slate-700"
                  title="Reset View"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-slate-700"
                  title="Toggle Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Controls Panel - only show when not fullscreen */}
      {!isFullscreen && (
        <div className="absolute top-20 left-4 z-20 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 space-y-4 w-80">
          <h3 className="font-semibold text-white flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filters & Search
          </h3>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
            />
          </div>

          {/* Cluster Filter */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Filter by Topic</label>
            <select
              value={filterCluster}
              onChange={(e) => setFilterCluster(e.target.value)}
              className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
            >
              <option value="all">All Topics</option>
              {clusters.map(cluster => (
                <option key={cluster} value={cluster}>{cluster}</option>
              ))}
            </select>
          </div>

          {/* Current Stats */}
          <div className="pt-2 border-t border-slate-600">
            <p className="text-sm text-gray-400 mb-2">Showing:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-700/50 p-2 rounded">
                <div className="text-blue-400 font-semibold">{filteredData.nodes.length}</div>
                <div className="text-gray-400">Conversations</div>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <div className="text-purple-400 font-semibold">{filteredData.links.length}</div>
                <div className="text-gray-400">Connections</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Node Details Panel */}
      {selectedNode && !isFullscreen && (
        <div className="absolute top-20 right-4 z-20 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white flex items-center">
              <Info className="w-4 h-4 mr-2" />
              Conversation Details
            </h3>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider">Title</label>
              <p className="text-white font-medium">{selectedNode.label}</p>
            </div>
            
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider">Topic</label>
              <p className="text-purple-300">{selectedNode.cluster}</p>
            </div>
            
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider">Type</label>
              <p className="text-blue-300 capitalize">{selectedNode.type}</p>
            </div>
            
            {selectedNode.meta && (
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider">Created</label>
                <p className="text-green-300">{new Date(selectedNode.meta.createdAt).toLocaleDateString()}</p>
              </div>
            )}
            
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider">Node ID</label>
              <p className="text-gray-300 text-xs font-mono">{selectedNode.id}</p>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen toggle button when in fullscreen */}
      {isFullscreen && (
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 z-20 p-3 bg-slate-800/90 backdrop-blur-sm rounded-lg text-white hover:bg-slate-700 transition-colors"
          title="Exit Fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      )}

      {/* Main Graph Container */}
      <div className={`${isFullscreen ? 'w-full h-full' : 'w-full h-full pt-20'}`}>
        <Suspense fallback={<GraphLoader />}>
          <ForceGraph3D
            graphData={filteredData}
            nodeAutoColorBy="cluster"
            linkDirectionalParticles={2}
            linkDirectionalParticleSpeed={d => Math.max(0.5, d.weight)}
            linkWidth={5}
            nodeLabel={node => `
              <div style="
                background: rgba(0,0,0,0.8); 
                color: white; 
                padding: 8px 12px; 
                border-radius: 8px; 
                font-family: system-ui;
                max-width: 200px;
                border: 1px solid #666;
              ">
                <strong>${node.label}</strong><br/>
                <span style="color: #a78bfa;">Topic: ${node.cluster}</span><br/>
                <span style="color: #60a5fa;">Type: ${node.type}</span>
                ${node.meta ? `<br/><span style="color: #34d399;">Created: ${new Date(node.meta.createdAt).toLocaleDateString()}</span>` : ''}
              </div>
            `}
            nodeVal={node => Math.max(4, (node.meta?.messages || 1))}
            nodeColor={node => {
              const colors = {
                Technology: '#8b5cf6',
                Health: '#06d6a0',
                Education: '#f59e0b',
                Finance: '#3b82f6',
                Entertainment: '#ec4899',
                Environment: '#10b981',
                Politics: '#ef4444',
                Sports: '#f97316',
                Arts: '#a855f7',
                Science: '#06b6d4',
                History: '#84cc16'
              };
              return colors[node.cluster as keyof typeof colors] || '#64748b';
            }}
            linkColor={() => 'rgba(255,255,255,0.2)'}
            backgroundColor="rgba(15, 23, 42, 1)"
            onNodeClick={handleNodeClick}
            onNodeHover={node => {
              document.body.style.cursor = node ? 'pointer' : 'default';
            }}
          />
        </Suspense>
      </div>
    </div>
  );
}