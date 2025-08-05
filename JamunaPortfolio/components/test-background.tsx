'use client'

import React from 'react'

export default function TestBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      {/* Test dots to ensure visibility */}
      <div 
        className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse"
        style={{ top: '20%', left: '20%' }}
      />
      <div 
        className="absolute w-4 h-4 bg-purple-400 rounded-full animate-pulse"
        style={{ top: '50%', left: '60%' }}
      />
      <div 
        className="absolute w-4 h-4 bg-cyan-400 rounded-full animate-pulse"
        style={{ top: '80%', left: '40%' }}
      />
      
      {/* Test connecting lines */}
      <div 
        className="absolute h-px bg-gradient-to-r from-blue-400 to-purple-400 opacity-50"
        style={{ 
          top: '20%', 
          left: '20%', 
          width: '200px',
          transform: 'rotate(45deg)',
          transformOrigin: 'left center'
        }}
      />
      <div 
        className="absolute h-px bg-gradient-to-r from-purple-400 to-cyan-400 opacity-50"
        style={{ 
          top: '50%', 
          left: '60%', 
          width: '150px',
          transform: 'rotate(-30deg)',
          transformOrigin: 'left center'
        }}
      />
    </div>
  )
}
