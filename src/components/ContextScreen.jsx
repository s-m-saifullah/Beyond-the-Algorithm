import React from 'react';
import { Scale, User } from 'lucide-react';

const ContextScreen = () => (
  <div className="max-w-4xl mx-auto animate-in slide-in-from-right duration-500">
    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">The Core Conflict</h2>
    
    <div className="grid md:grid-cols-2 gap-8 mb-10">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg"><Scale className="text-blue-600 dark:text-blue-400" size={24}/></div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Efficiency</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Instructors are overwhelmed. AI tools like Grammarly and Turnitin offer speed. They can grade grammar in seconds, allowing instructors to manage larger classes.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-l-4 border-orange-500">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg"><User className="text-orange-600 dark:text-orange-400" size={24}/></div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Equity & Humanity</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          But efficiency comes at a cost. Algorithmic bias can unfairly penalize non-standard English. Over-reliance on tools risks losing the "human touch" in evaluating creativity and voice.
        </p>
      </div>
    </div>

    <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
      <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-2">Our Research Question</h3>
      <p className="text-xl text-blue-900 dark:text-blue-300 italic">
        "How can we use AI to save time without losing the human connection and fairness essential to teaching writing?"
      </p>
    </div>
  </div>
);

export default ContextScreen;
