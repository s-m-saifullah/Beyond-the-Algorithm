/**
 * @file HomeScreen.jsx
 * @description The landing page screen.
 * Introduces the research topic and provides a "Start Presentation" CTA.
 */

import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';

const HomeScreen = ({ setSection }) => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
    <div className="max-w-3xl">
      <div className="mb-6 inline-block p-4 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
         <Brain size={48} className="text-blue-600 dark:text-blue-400" />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        Beyond the Algorithm
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-8">
        Co-Grading Strategies to Keep Humanity in Writing Evaluation
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-left bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div>
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Authors</p>
          <p className="font-semibold text-slate-800 dark:text-slate-200">S M Saifullah</p>
          <p className="font-semibold text-slate-800 dark:text-slate-200">Fahimul Habib</p>
        </div>
        <div>
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Institution</p>
          <p className="text-slate-600 dark:text-slate-300">University of Louisiana at Lafayette</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">MLA 2026 Innovation Room</p>
        </div>
      </div>

      <button 
        onClick={() => setSection('context')}
        className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900 flex items-center gap-2 mx-auto cursor-pointer"
      >
        Start Presentation <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

export default HomeScreen;
