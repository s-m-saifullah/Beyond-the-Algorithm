/**
 * @file ToolkitScreen.jsx
 * @description The "Toolkit" screen (Implementation Guide).
 * Provides actionable steps for instructors to adopt the co-grading workflow.
 */

import React from 'react';
import { CheckSquare, Download } from 'lucide-react';

const ToolkitScreen = () => (
  <div className="animate-in fade-in slide-in-from-right duration-500 max-w-4xl mx-auto">
     <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 text-white shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-2">The Ethical Toolkit</h2>
      <p className="text-teal-100">Actionable steps for your classroom.</p>
    </div>

    <div className="space-y-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border-l-4 border-blue-500 dark:border-blue-500">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">1. Transparency</h3>
          <p className="text-slate-600 dark:text-slate-300">Tell students exactly what the AI does. Put it in the syllabus.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border-l-4 border-orange-500 dark:border-orange-500">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">2. Verification</h3>
          <p className="text-slate-600 dark:text-slate-300">Never copy-paste AI feedback without reading it. Check for bias against dialects.</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border-l-4 border-teal-500 dark:border-teal-500">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">3. The Conversation</h3>
          <p className="text-slate-600 dark:text-slate-300">Ask students: "Did this feedback help you?" Make it a dialogue, not just a grade.</p>
        </div>
    </div>
  </div>
);

export default ToolkitScreen;
