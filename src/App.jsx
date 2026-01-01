/**
 * @file App.jsx
 * @description Main Application Component.
 * Manages global state (theme, sidebar visibility, active section),
 * handles routing/navigation between presentation screens,
 * and defines the responsive layout structure.
 */

import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import HomeScreen from './components/HomeScreen';
import ContextScreen from './components/ContextScreen';
import MethodologyScreen from './components/MethodologyScreen';
import FindingsScreen from './components/FindingsScreen';
import FrameworkScreen from './components/FrameworkScreen';
import ToolkitScreen from './components/ToolkitScreen';
import NavigationControls from './components/NavigationControls';
import { navItems } from './data/navigation';
import { Menu } from 'lucide-react';

// --- MAIN APP COMPONENT ---
export default function App() {
  // State: Tracks the currently visible presentation screen
  const [activeSection, setActiveSection] = useState('home');
  
  // State: Tracks sidebar visibility. 
  // Initializes based on viewport width (Open on Desktop >= 1024px, Closed on Mobile).
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  // Effect: Applies the 'dark' class to the document root (HTML tag) for Tailwind dark mode support
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  /**
   * Advances to the next section in the navItems array.
   */
  const handleNext = () => {
    const currentIndex = navItems.findIndex(item => item.id === activeSection);
    if (currentIndex < navItems.length - 1) {
      setActiveSection(navItems[currentIndex + 1].id);
    }
  };

  /**
   * Returns to the previous section in the navItems array.
   */
  const handlePrev = () => {
    const currentIndex = navItems.findIndex(item => item.id === activeSection);
    if (currentIndex > 0) {
      setActiveSection(navItems[currentIndex - 1].id);
    }
  };

  /**
   * Renders the appropriate component based on the activeSection state.
   */
  const renderSection = () => {
    switch(activeSection) {
      case 'home': return <HomeScreen setSection={setActiveSection} />;
      case 'context': return <ContextScreen />;
      case 'methods': return <MethodologyScreen />;
      case 'findings': return <FindingsScreen />;
      case 'framework': return <FrameworkScreen />;
      case 'toolkit': return <ToolkitScreen />;
      default: return <HomeScreen setSection={setActiveSection} />;
    }
  };

  return (
    <div className={`min-h-screen font-sans flex flex-col lg:flex-row transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      {/* Mobile Menu Button */}
      {!isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-md shadow-lg hover:bg-slate-700 transition lg:hidden cursor-pointer"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Mobile Overlay Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transform transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar with Hide/Show props */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        theme={theme}
        toggleTheme={toggleTheme}
        navItems={navItems}
      />
      
      <main className={`flex-1 overflow-y-auto h-screen px-6 pt-20 pb-24 lg:px-12 lg:pt-12 lg:pb-24 relative transition-all duration-300 ${!isSidebarOpen ? 'lg:ml-0' : ''}`}>
        {/* Toggle Sidebar Button (Desktop) - visible when sidebar is closed */}
        {!isSidebarOpen && (
             <button 
             onClick={() => setIsSidebarOpen(true)}
             className="hidden lg:flex absolute top-6 left-6 z-40 items-center justify-center p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-all text-slate-600 dark:text-slate-300 cursor-pointer"
             title="Open Sidebar"
           >
             <Menu size={20} />
           </button>
        )}
        
        {renderSection()}

        {/* Floating Navigation Buttons (Bottom Right) */}
        <NavigationControls 
          activeSection={activeSection}
          navItems={navItems}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </main>
    </div>
  );
}