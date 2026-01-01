/**
 * @file NavigationControls.jsx
 * @description Floating navigation buttons (Next/Previous) for linear presentation flow.
 */

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationControls = ({ activeSection, navItems, handlePrev, handleNext }) => {
  // Do not render controls on the Home screen
  if (activeSection === 'home') return null;

  return (
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
  );
};

export default NavigationControls;
