/**
 * @file MethodologyScreen.jsx
 * @description The "Methods" screen (The Co-Grading Workflow).
 * Visualizes the 3-step process: Student Submission -> AI Assistant -> Human Instructor.
 */

import React from 'react';
import { FileText, Cpu, UserCheck } from 'lucide-react';

const MethodologyScreen = () => (
  <div className="max-w-5xl mx-auto animate-in slide-in-from-right duration-500">
    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">Study Design</h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      {/* Method 1 */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700">
        <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
          <MessageSquare size={24} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-200">1. TA Surveys</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">n=15 Teaching Assistants</p>
        <p className="text-slate-700 dark:text-slate-300">Mapping current habits. How many TAs already use AI? Do they feel guilty about it? What tools do they use?</p>
      </div>

      {/* Method 2 */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700">
        <div className="h-12 w-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4 text-pink-600 dark:text-pink-400">
          <Users size={24} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-200">2. Student Feedback</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">n=120 First-Year Students</p>
        <p className="text-slate-700 dark:text-slate-300">Surveys & Focus Groups. Gauging trust. Do students feel "cheated" if AI grades them? Do they trust AI grammar tips?</p>
      </div>

      {/* Method 3 */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700">
        <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
          <Microscope size={24} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-200">3. Comparative Analysis</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">n=50 Essays + Dialect Tests</p>
        <p className="text-slate-700 dark:text-slate-300">We ran 50 essays through AI tools vs. Human grading. Included specific stress tests for AAVE and dialect bias.</p>
      </div>
    </div>
  </div>
);

export default MethodologyScreen;
