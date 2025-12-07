"use client";

import { useState, useEffect, Suspense, useRef, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Info, 
  Maximize2, 
  RotateCcw,
  Users,
  Filter,
  Search
} from "lucide-react";
import { graphData as rawGraphData } from "@/data/dynamicGraph";

// Prevent SSR issues with Three.js
const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
  loading: () => <GraphLoader /> 
});

// Loading component
function GraphLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-900">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-white text-lg">Loading your conversation graph...</p>
      </div>
    </div>
  );
}

export default function VisualizePage() {
  const params = useParams();
  const router = useRouter();
  
  // Fix: Provide initial value for useRef
  const fgRef = useRef<any>(null);

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

  // Fix: Memoize and sort clusters to ensure consistent ordering between SSR and client
  const clusters = useMemo(() => {
    return Array.from(new Set(rawGraphData.nodes.map(node => node.cluster))).sort();
  }, []);

  // Calculate stats on mount
  useEffect(() => {
    const avgConnections = rawGraphData.edges.length / rawGraphData.nodes.length;
    
    setGraphStats({
      totalNodes: rawGraphData.nodes.length,
      totalEdges: rawGraphData.edges.length,
      clusters: clusters.length,
      avgConnections: Math.round(avgConnections * 10) / 10
    });
  }, [clusters.length]);

  // Filter data
  const filteredData = useMemo(() => ({
    nodes: rawGraphData.nodes.filter(node => {
      const matchesSearch = node.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          node.cluster.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCluster = filterCluster === "all" || node.cluster === filterCluster;
      return matchesSearch && matchesCluster;
    }),
    links: rawGraphData.edges.filter(edge => true) // Add link filtering if needed
  }), [searchTerm, filterCluster]);

  // --- PHYSICS ENGINE LOGIC (Closeness & Strength) ---
  useEffect(() => {
    const fg = fgRef.current;
    if (fg) {
      // Access the d3 force object for links
      const linkForce = fg.d3Force('link');
      
      if (linkForce) {
        // 1. CLOSENESS (Distance)
        // Inverse relationship: Higher weight = Shorter distance
        linkForce.distance((link: any) => {
          const weight = link.weight || 1;
          // If weight is 8, distance is ~12. If weight is 1, distance is 100.
          return 100 / weight; 
        });

        // 2. CONNECT STRENGTH (Stiffness)
        // Direct relationship: Higher weight = Stronger pull
        linkForce.strength((link: any) => {
             const weight = link.weight || 1;
             // Scale factor ensures physics remains stable (usually 0 to 1 range is best)
             // Using normalized weight (assuming max weight around 8-10)
             return Math.min(1, weight * 0.15); 
        });

        // Re-heat simulation to apply new forces
        fg.d3ReheatSimulation();
      }
    }
  }, [filteredData]);

  const handleNodeClick = useCallback((node: any) => {
    setSelectedNode(node);
    const distance = 40;
    const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
    
    if (fgRef.current) {
      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
        node,
        3000
      );
    }
  }, []);

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);
  
  const resetView = () => {
    setSearchTerm("");
    setFilterCluster("all");
    setSelectedNode(null);
    if(fgRef.current) fgRef.current.zoomToFit(1000, 50);
  };

  return (
    <div className="w-full h-screen bg-slate-900 relative overflow-hidden">
      {!isFullscreen && (
        <header className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-b border-slate-700">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <button onClick={() => router.push('/')} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
              <div className="h-6 w-px bg-gray-600"></div>
              <h1 className="text-xl font-bold text-white">Session: {params.sessionId}</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>{graphStats.totalNodes} nodes</span>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={resetView} title="Reset view" className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-slate-700">
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button onClick={toggleFullscreen} title="Toggle fullscreen" className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-slate-700">
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {!isFullscreen && (
        <div className="absolute top-20 left-4 z-20 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 space-y-4 w-80">
          <h3 className="font-semibold text-white flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
            />
          </div>
          <select
            value={filterCluster}
            title="Cluster"
            onChange={(e) => setFilterCluster(e.target.value)}
            className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
          >
            <option value="all">All Topics</option>
            {clusters.map(cluster => (
              <option key={cluster} value={cluster}>{cluster}</option>
            ))}
          </select>
        </div>
      )}

      {selectedNode && !isFullscreen && (
        <div className="absolute top-20 right-4 z-20 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white flex items-center">
              <Info className="w-4 h-4 mr-2" />
              Details
            </h3>
            <button onClick={() => setSelectedNode(null)} className="text-gray-400 hover:text-white text-xl">×</button>
          </div>
          <div className="space-y-3">
             <p className="text-white font-medium">{selectedNode.label}</p>
             <p className="text-purple-300">{selectedNode.cluster}</p>
             <p className="text-gray-300 text-xs font-mono">{selectedNode.id}</p>
             {selectedNode.meta && (
               <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mt-2">
                 <div>Messages: {selectedNode.meta.messages}</div>
                 <div>Word Count: {selectedNode.meta.wordCount}</div>
               </div>
             )}
          </div>
        </div>
      )}

      <div className={`${isFullscreen ? 'w-full h-full' : 'w-full h-full pt-20'}`}>
        <Suspense fallback={<GraphLoader />}>
          <ForceGraph3D
            ref={fgRef}
            graphData={filteredData}
            nodeAutoColorBy="cluster"
            
            // --- VISUAL LOGIC ---
            
            // 3. OPACITY: Higher weight = More White (Higher Alpha)
            linkColor={(link: any) => {
              const weight = link.weight || 1;
              const alpha = Math.min(1, Math.max(0.1, weight / 8));
              return `rgba(255, 255, 255, ${alpha})`;
            }}
            
            // 4. WIDTH: Higher weight = Thicker line
            linkWidth={(link: any) => {
                const weight = link.weight || 1;
                // Scale width: weight 1 -> 0.8px, weight 8 -> ~6px (capped at 6)
                return Math.min(weight * 0.8, 10);
            }}
            
            // Particles for traffic flow effect
            linkDirectionalParticles={2}
            linkDirectionalParticleSpeed={d => Math.max(0.005, (d.weight || 1) * 0.002)}
            
            nodeLabel={node => `<div style="color:black;background:white;padding:4px;border-radius:4px;">${node.label}</div>`}
            nodeVal={node => Math.max(4, (node.meta?.messages || 1))}
            backgroundColor="rgba(15, 23, 42, 1)"
            onNodeClick={handleNodeClick}
            warmupTicks={100}
            cooldownTicks={100}
          />
        </Suspense>
      </div>
    </div>
  );
}