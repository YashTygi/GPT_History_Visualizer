"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, FileText, Archive, Sparkles, Brain, Network, AlertCircle, CheckCircle } from 'lucide-react';
import Error from 'next/error';

export default function Home() {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  };

  const handleFiles = async (file: File) => {
    setError(null);
    setSuccess(null);
    
    const validTypes = ['application/json', 'application/zip', 'application/x-zip-compressed'];
    
    if (!validTypes.includes(file.type) && !file.name.endsWith('.json') && !file.name.endsWith('.zip')) {
      setError('Please upload a JSON or ZIP file containing your ChatGPT history');
      return;
    }

    // Check file size (50MB limit)
    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      setError('File too large. Maximum size is 50MB.');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // try {
    //   const formData = new FormData();
    //   formData.append('file', file);
      
    //   const response = await fetch('/api/upload', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   const result = await response.json();

    //   if (!response.ok) {
    //     throw new Error(result.error || 'Upload failed');
    //   }

    //   setUploadProgress(100);
    //   setSuccess(`Successfully processed ${result.metadata.conversationCount} conversations!`);
      
    //   // Redirect to visualization page
    //   setTimeout(() => {
    //     router.push(`/visualise/${result.sessionId}`);
    //   }, 1500);
      
    // } catch (error: Error | any) {
    //   console.error('Upload failed:', error);
    //   setError(error.message || 'Upload failed. Please try again.');
    //   setUploading(false);
    //   setUploadProgress(0);
    //   clearInterval(progressInterval);
    // }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const tryDemo = () => {
    setSuccess('Loading demo visualization...');
    setTimeout(() => {
      router.push('/visualise/demo123');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mr-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              ChatGPT History Visualizer
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your ChatGPT conversations into beautiful, interactive 3D network visualizations. 
            Discover patterns, connections, and insights hidden in your chat history.
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-purple-300">
              <Network className="w-5 h-5" />
              <span>3D Network Graphs</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-300">
              <Sparkles className="w-5 h-5" />
              <span>Interactive Exploration</span>
            </div>
            <div className="flex items-center space-x-2 text-pink-300">
              <FileText className="w-5 h-5" />
              <span>Conversation Analytics</span>
            </div>
          </div>
        </div>

        {/* Error/Success Messages */}
        {error && (
          <div className="mb-6 max-w-2xl mx-auto">
            <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-200">{error}</p>
            </div>
          </div>
        )}

        {success && (
          <div className="mb-6 max-w-2xl mx-auto">
            <div className="bg-green-900/50 border border-green-500 rounded-lg p-4 flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <p className="text-green-200">{success}</p>
            </div>
          </div>
        )}

        {/* Upload area */}
        <div className="w-full max-w-2xl mx-auto mb-8">
          <form
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onSubmit={(e) => e.preventDefault()}
            className="relative"
          >
            <input
              ref={inputRef}
              type="file"
              title="Upload ChatGPT history file"
              multiple={false}
              className="hidden"
              accept=".json,.zip"
              onChange={handleChange}
            />

            <div
              className={`
                relative border-2 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all duration-300 backdrop-blur-sm
                ${dragActive 
                  ? 'border-purple-400 bg-purple-500/20 scale-105' 
                  : 'border-gray-600 bg-gray-900/30 hover:border-purple-500 hover:bg-purple-500/10'
                }
                ${uploading ? 'pointer-events-none' : ''}
              `}
              onClick={onButtonClick}
            >
              {uploading ? (
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-spin">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-white text-lg font-medium">Processing your file...</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-400 text-sm">{Math.round(uploadProgress)}% complete</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Upload className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-white">
                      Drop your ChatGPT history here
                    </p>
                    <p className="text-gray-400">
                      or <span className="text-purple-400 underline">click to browse</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Supports JSON and ZIP files (max 50MB)
                    </p>
                  </div>
                  
                  {/* File type indicators */}
                  <div className="flex justify-center space-x-8 mt-8">
                    <div className="flex flex-col items-center space-y-2 opacity-70 hover:opacity-100 transition-opacity">
                      <FileText className="w-8 h-8 text-blue-400" />
                      <span className="text-xs text-gray-400">JSON</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 opacity-70 hover:opacity-100 transition-opacity">
                      <Archive className="w-8 h-8 text-green-400" />
                      <span className="text-xs text-gray-400">ZIP</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Try Demo Button */}
        <div className="mb-16">
          <button
            onClick={tryDemo}
            disabled={uploading}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Sparkles className="w-5 h-5 inline mr-2" />
            Try Interactive Demo
          </button>
          <p className="text-gray-400 text-sm mt-2">Experience the visualization with sample data</p>
        </div>

        {/* Instructions */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6 text-center">How to get your ChatGPT history</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
                <p className="text-gray-300 text-sm">Visit ChatGPT settings and go to &quot;Data Export&quot;</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
                <p className="text-gray-300 text-sm">Request your data export and wait for the download link</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
                <p className="text-gray-300 text-sm">Upload the downloaded file here to visualize</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}