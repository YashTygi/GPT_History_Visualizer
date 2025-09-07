# ChatGPT History Visualizer

A modern, interactive web application that transforms your ChatGPT conversation history into beautiful 3D network visualizations. Discover patterns, connections, and insights hidden in your chat data through an immersive force-directed graph interface.

## ✨ Features

- **3D Interactive Visualization**: Explore your conversations in a stunning 3D force-directed graph
- **Smart Clustering**: Automatically groups conversations by topics and themes
- **Advanced Filtering**: Search and filter conversations by content, topics, or date ranges
- **Real-time Analytics**: View statistics about your chat patterns and conversation trends
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **File Upload Support**: Handles JSON and ZIP files from ChatGPT data exports
- **Session Management**: Persistent sessions for returning to your visualizations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Modern web browser with WebGL support

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chatgpt-history-visualizer
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── upload/          # File upload API endpoint
│   │   └── session/         # Session management API
│   ├── visualize/
│   │   └── [sessionId]/     # Dynamic visualization page
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
└── data/
    └── dynamicGraph.ts      # Graph data generation utilities
```

## 🎯 How to Use

### Getting Your ChatGPT History

1. Go to ChatGPT Settings → Data Export
2. Request your data export
3. Download the provided ZIP or JSON file
4. Upload it to the visualizer

### Using the Visualizer

1. **Upload**: Drag and drop your ChatGPT history file or click to browse
2. **Explore**: Navigate the 3D graph using mouse controls:
   - **Left click + drag**: Rotate view
   - **Right click + drag**: Pan
   - **Mouse wheel**: Zoom in/out
   - **Click nodes**: View conversation details
3. **Filter**: Use the control panel to search and filter conversations
4. **Analyze**: View statistics and patterns in your chat history

## 🛠️ Technical Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS animations
- **3D Visualization**: react-force-graph-3d, Three.js
- **Icons**: Lucide React
- **API**: Next.js API Routes
- **File Processing**: Browser File API

## 🎨 Design Features

### Visual Effects
- Gradient backgrounds with animated elements
- Glass morphism UI components
- Smooth transitions and hover effects
- Custom loading animations
- Responsive color schemes

### User Experience
- Drag-and-drop file upload
- Real-time upload progress
- Intuitive 3D navigation controls
- Contextual tooltips and information panels
- Mobile-friendly responsive design

## 🔧 Configuration

### Graph Visualization Settings

The visualization can be customized by modifying parameters in the `ForceGraph3D` component:

```typescript
// Node appearance
nodeAutoColorBy="cluster"        // Color by conversation topic
nodeVal={node => node.messages}  // Node size based on message count

// Link behavior  
linkDirectionalParticles={2}     // Animated particles on links
linkWidth={d => d.weight * 2}    // Link thickness based on weight

// Physics simulation
d3AlphaDecay={0.01}             // Simulation cooling rate
d3VelocityDecay={0.3}           // Movement damping
```

### Data Processing

Conversations are automatically processed to:
- Extract topics using keyword analysis
- Calculate relationship weights between conversations
- Generate cluster assignments
- Create realistic metadata (message counts, timestamps, etc.)

## 🚧 Development

### Adding New Features

1. **New Visualization Types**: Extend the graph component with additional view modes
2. **Enhanced Analytics**: Add more statistical analysis of conversation patterns
3. **Export Capabilities**: Allow users to export visualizations or generate reports
4. **Real-time Updates**: Support live data streaming for active ChatGPT sessions

### API Endpoints

- `POST /api/upload` - Handle file uploads and processing
- `GET /api/session/[sessionId]` - Retrieve session data
- `DELETE /api/session/[sessionId]` - Delete session
- `PATCH /api/session/[sessionId]` - Update session metadata

## 🎭 Demo Mode

Try the interactive demo without uploading files:
- Click "Try Interactive Demo" on the homepage
- Explore sample conversation data
- Experience all visualization features
- No file upload required

## 🔐 Privacy & Security

- **Local Processing**: All file processing happens in your browser
- **No Data Storage**: Conversation content is not permanently stored
- **Session-Based**: Data exists only during your session
- **Secure Upload**: Files are validated and size-limited

## 🎨 Customization

### Themes and Colors

Modify `globals.css` to customize:
- Color schemes and gradients
- Animation timing and effects
- Component styling
- Responsive breakpoints

### Graph Appearance

Update `dynamicGraph.ts` to adjust:
- Node generation algorithms
- Clustering logic
- Relationship calculations
- Mock data generation

## 📱 Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

Requires WebGL support for 3D visualization.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [react-force-graph-3d](https://github.com/vasturiano/react-force-graph-3d) for 3D visualization
- [Three.js](https://threejs.org/) for WebGL rendering
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- [Lucide](https://lucide.dev/) for beautiful icons

---

**Note**: This is a demonstration project. For production use with real ChatGPT data, implement proper data validation, security measures, and privacy protections.