import React from 'react';
import { FileText, Cpu, User, Users } from 'lucide-react';

const FrameworkScreen = () => (
  <div className="animate-in fade-in slide-in-from-right duration-500">
     <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden max-w-4xl mx-auto">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-800 dark:text-white">The Co-Grading Workflow</h2>
        
        {/* STEP 1 */}
        <div className="flex flex-col items-center mb-8 relative">
          <div className="w-64 bg-slate-100 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 p-4 rounded-lg text-center shadow-sm z-10">
            <div className="flex justify-center mb-2"><FileText className="text-slate-600 dark:text-slate-300" size={32} /></div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200">Student Submission</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Informed Consent</p>
          </div>
          <div className="h-12 w-0.5 bg-slate-300 dark:bg-slate-600 absolute -bottom-12"></div>
        </div>

        {/* STEP 2 */}
        <div className="relative mb-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-8 border-t-2 border-l-2 border-r-2 border-slate-300 dark:border-slate-600 rounded-t-xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {/* AI Lane */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 p-6 rounded-xl w-full max-w-xs text-center">
                <Cpu className="text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">AI Assistant</h3>
                <p className="text-xs text-blue-800 dark:text-blue-400">Grammar, Mechanics, Plagiarism</p>
              </div>
            </div>
            {/* Human Lane */}
            <div className="flex flex-col items-center">
              <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 p-6 rounded-xl w-full max-w-xs text-center">
                <User className="text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                <h3 className="font-bold text-orange-900 dark:text-orange-300 mb-2">Human Instructor</h3>
                <p className="text-xs text-orange-900 dark:text-orange-400">Argument, Voice, Context</p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="flex flex-col items-center mb-8 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-3/4 h-8 border-b-2 border-l-2 border-r-2 border-slate-300 dark:border-slate-600 rounded-b-xl"></div>
          <div className="mt-4 bg-teal-50 dark:bg-teal-900/20 border-2 border-teal-500 dark:border-teal-700 p-6 rounded-xl w-full max-w-md shadow-lg z-10 text-center">
            <div className="flex justify-center mb-3">
              <Users className="text-teal-600 dark:text-teal-400 h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-teal-900 dark:text-teal-300 mb-2">The "Human Loop" Review</h3>
            <p className="text-teal-700 dark:text-teal-400 text-sm">Instructor verifies AI data and synthesizes feedback.</p>
          </div>
           <div className="h-8 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
        </div>

         {/* STEP 4 */}
         <div className="flex flex-col items-center">
          <div className="w-56 bg-slate-800 dark:bg-slate-700 text-white p-4 rounded-lg text-center shadow-lg">
            <h3 className="font-bold">Final Feedback</h3>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default FrameworkScreen;
