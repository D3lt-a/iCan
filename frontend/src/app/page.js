'use client'

import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#1a1d23', color: '#e8e9ed' }}>
      
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none">
        <div 
          className="w-full h-full rounded-full animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(143, 165, 153, 0.08) 0%, transparent 70%)',
            opacity: 0.5
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Literata, serif' }}>
            Ican
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href={'/signIn'}
              className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
              style={{
                color: '#a8adb8',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#e8e9ed';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#a8adb8';
              }}
            >
              Sign In
            </Link>
            <Link
              href={'/singUp'}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
              style={{
                backgroundColor: '#8fa599',
                color: '#1a1d23'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#9fb5a7';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 12px rgba(143, 165, 153, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#8fa599';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex items-center justify-center px-8" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          
          {/* Main Heading */}
          <h1 
            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
            style={{ fontFamily: 'Literata, serif' }}
          >
            Turn goals into<br />structured journeys
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#a8adb8' }}
          >
            A calm space to break down career aspirations into achievable steps, track progress with intention, and share your growth story.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300"
              style={{
                backgroundColor: '#8fa599',
                color: '#1a1d23'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#9fb5a7';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(143, 165, 153, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#8fa599';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Start Your Journey
            </button>
            <button 
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-medium transition-all duration-300"
              style={{
                backgroundColor: '#2a2e36',
                color: '#e8e9ed',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#33373f';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#2a2e36';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              Learn More
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Literata, serif' }}>
                Goal Structuring
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#a8adb8' }}>
                Transform aspirations into clear, actionable paths
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Literata, serif' }}>
                Progress Tracking
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#a8adb8' }}>
                Visualize your journey with timelines and milestones
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Literata, serif' }}>
                Social Sharing
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#a8adb8' }}>
                Celebrate wins and inspire others on their paths
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-8 text-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <p className="text-sm" style={{ color: '#6b7280' }}>
          © 2024 Ican. A platform for intentional growth.
        </p>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Literata:wght@600;700&display=swap');

        * {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
          animation-fill-mode: both;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default page;