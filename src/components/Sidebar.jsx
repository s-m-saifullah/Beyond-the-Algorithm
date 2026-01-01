import React from 'react';
import { Home, AlertTriangle, Microscope, BarChart2, Layers, CheckCircle, Moon, Sun, X, ChevronLeft } from 'lucide-react';
import mlaLogo from '../assets/mla-logo.svg';

const Sidebar = ({ activeSection, setActiveSection, isSidebarOpen, setIsSidebarOpen, theme, toggleTheme, navItems }) => {

  return (
    <nav className={`bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 h-screen flex flex-col justify-between overflow-y-auto transition-all duration-300 
      ${isSidebarOpen ? 'w-64 translate-x-0 shadow-2xl lg:shadow-none' : '-translate-x-full w-0 lg:w-0 lg:-translate-x-full overflow-hidden'}
      fixed lg:relative z-50 border-r border-slate-200 dark:border-slate-800
    `}>
      <div className="p-6 flex flex-col">
        <div className="flex justify-between items-start mb-6 lg:mb-8">
           <div className="flex items-center gap-3">
              <div className="bg-white dark:bg-slate-800 p-1 rounded-md shadow-sm border border-slate-200 dark:border-transparent">
                 <img src={mlaLogo} alt="MLA Logo" className="h-8 w-auto" />
              </div>
              <div>
                <div className="font-bold text-slate-800 dark:text-white text-lg leading-tight">MLA 2026</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Innovation Room</div>
              </div>
           </div>
           
           {/* Close Button (Mobile Only usually, but here for both if needed) */}
           <button 
             onClick={() => setIsSidebarOpen(false)}
             className="text-slate-400 hover:text-slate-600 dark:hover:text-white lg:hidden cursor-pointer"
           >
             <X size={24} />
           </button>
           
             {/* Collapse Button (Desktop) */}
             <button 
             onClick={() => setIsSidebarOpen(false)}
             className="text-slate-400 hover:text-slate-600 dark:hover:text-white hidden lg:block cursor-pointer"
             title="Collapse Sidebar"
           >
             <ChevronLeft size={20} />
           </button>
        </div>

        <div className="flex flex-col w-full space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  // On mobile, close sidebar after selection with delay
                  if (window.innerWidth < 1024) {
                    setTimeout(() => setIsSidebarOpen(false), 750);
                  }
                }}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors cursor-pointer
                  ${isActive 
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 border-l-4 border-blue-500' 
                    : 'border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-slate-200'
                  }`}
              >
                <Icon size={20} className={`mr-3 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-slate-300'}`} />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-slate-500">Theme</span>
            <button 
              onClick={toggleTheme}
              className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-yellow-400 cursor-pointer"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-600">
          &copy; 2026 Saifullah & Habib
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
