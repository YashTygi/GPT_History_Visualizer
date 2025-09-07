import { NextRequest, NextResponse } from 'next/server';
import { graphData as mockGraphData } from '@/data/dynamicGraph';

// Mock database - In production, use a real database
const mockSessions = new Map();

// Initialize with some mock data
mockSessions.set('demo123', {
  id: 'demo123',
  metadata: {
    fileName: 'chatgpt_history_demo.json',
    fileSize: 1024000,
    conversationCount: 500,
    dateRange: {
      start: '2023-01-15',
      end: '2024-12-20'
    },
    topics: ['Technology', 'Health', 'Education', 'Finance', 'Entertainment'],
    uploadedAt: new Date().toISOString(),
    processingStatus: 'completed'
  },
  graphData: mockGraphData
});

export async function GET(
  request: NextRequest,
  { params }: { params: { sessionId: string } }
) {
  try {
    const sessionId = params.sessionId;
    
    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Check if session exists (in a real app, query your database)
    const sessionData = mockSessions.get(sessionId);
    
    if (!sessionData) {
      // For demo purposes, generate mock data for any session ID
      const generatedSession = {
        id: sessionId,
        metadata: {
          fileName: 'chatgpt_history.json',
          fileSize: Math.floor(Math.random() * 5000000) + 500000,
          conversationCount: mockGraphData.nodes.length,
          dateRange: {
            start: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            end: new Date().toISOString().split('T')[0]
          },
          topics: Array.from(new Set(mockGraphData.nodes.map(node => node.cluster))),
          uploadedAt: new Date().toISOString(),
          processingStatus: 'completed'
        },
        graphData: mockGraphData
      };
      
      // Store for future requests
      mockSessions.set(sessionId, generatedSession);
      
      return NextResponse.json({
        success: true,
        session: generatedSession
      });
    }

    return NextResponse.json({
      success: true,
      session: sessionData
    });

  } catch (error) {
    console.error('Session API error:', error);
    
    return NextResponse.json(
      { error: 'Failed to retrieve session data' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { sessionId: string } }
) {
  try {
    const sessionId = params.sessionId;
    
    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Delete session (in a real app, delete from your database)
    const deleted = mockSessions.delete(sessionId);
    
    if (!deleted) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Session deleted successfully'
    });

  } catch (error) {
    console.error('Session deletion error:', error);
    
    return NextResponse.json(
      { error: 'Failed to delete session' },
      { status: 500 }
    );
  }
}

// Update session metadata
export async function PATCH(
  request: NextRequest,
  { params }: { params: { sessionId: string } }
) {
  try {
    const sessionId = params.sessionId;
    const updates = await request.json();
    
    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const sessionData = mockSessions.get(sessionId);
    
    if (!sessionData) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Update session data
    const updatedSession = {
      ...sessionData,
      metadata: {
        ...sessionData.metadata,
        ...updates,
        updatedAt: new Date().toISOString()
      }
    };

    mockSessions.set(sessionId, updatedSession);

    return NextResponse.json({
      success: true,
      session: updatedSession
    });

  } catch (error) {
    console.error('Session update error:', error);
    
    return NextResponse.json(
      { error: 'Failed to update session' },
      { status: 500 }
    );
  }
}