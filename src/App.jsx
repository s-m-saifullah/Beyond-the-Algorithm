import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import HomeScreen from './components/HomeScreen';
import ContextScreen from './components/ContextScreen';
import MethodologyScreen from './components/MethodologyScreen';
import FindingsScreen from './components/FindingsScreen';
import FrameworkScreen from './components/FrameworkScreen';
import ToolkitScreen from './components/ToolkitScreen';
import { Menu, Home, AlertTriangle, Microscope, BarChart2, Layers, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// --- MAIN APP COMPONENT ---
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
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

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'context', label: 'Problem', icon: AlertTriangle },
    { id: 'methods', label: 'Methods', icon: Microscope },
    { id: 'findings', label: 'Data', icon: BarChart2 },
    { id: 'framework', label: 'Framework', icon: Layers },
    { id: 'toolkit', label: 'Toolkit', icon: CheckCircle },
  ];

  const handleNext = () => {
    const currentIndex = navItems.findIndex(item => item.id === activeSection);
    if (currentIndex < navItems.length - 1) {
      setActiveSection(navItems[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    const currentIndex = navItems.findIndex(item => item.id === activeSection);
    if (currentIndex > 0) {
      setActiveSection(navItems[currentIndex - 1].id);
    }
  };

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
        {activeSection !== 'home' && (
          <div className="fixed bottom-6 right-6 z-50 flex gap-4">
             <button 
               onClick={handlePrev}
               disabled={navItems.findIndex(i => i.id === activeSection) === 0}
               className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border border-slate-200 dark:border-slate-700"
               title="Previous"
             >
               <ChevronLeft size={24} />
             </button>
             <button 
               onClick={handleNext}
               disabled={navItems.findIndex(i => i.id === activeSection) === navItems.length - 1}
               className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-400"
               title="Next"
             >
               <ChevronRight size={24} />
             </button>
          </div>
        )}
      </main>
    </div>
  );
}