/**
 * @file FindingsScreen.jsx
 * @description The "Data" screen (Impact Analysis).
 * Presents quantitative results showing time savings and qualitative focus shifts.
 * Uses Recharts for data visualization.
 */

import React from 'react';
import { PieChart, Users, Search, Clock, ThumbsUp, AlertTriangle } from 'lucide-react';

const FindingsScreen = () => {
  return (
    <div className="max-w-5xl mx-auto animate-in slide-in-from-right duration-500 pb-10">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Findings</h2>
      
      {/* SECTION 1: TRUST METRICS */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <Users size={20} className="text-blue-600 dark:text-blue-400"/> Student Trust Levels
            </h3>
            <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-500 dark:text-slate-300">n=120 Students</span>
          </div>
          
          <div className="space-y-6">
            {/* Metric 1 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold text-slate-600 dark:text-slate-300">Trust in Grammar Checks</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">72% AI Preferred</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{width: '72%'}}></div>
              </div>
            </div>

            {/* Metric 2 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold text-slate-600 dark:text-slate-300">Trust in Creativity Feedback</span>
                <span className="text-orange-500 font-bold">91% Human Preferred</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 flex justify-end">
                <div className="bg-orange-500 h-3 rounded-full" style={{width: '91%'}}></div>
              </div>
            </div>

            {/* Metric 3 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold text-slate-600 dark:text-slate-300">Trust in Argument Logic</span>
                <span className="text-orange-500 font-bold">65% Human Preferred</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 flex justify-end">
                <div className="bg-orange-500 h-3 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: ACCURACY GAP */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <Search size={20} className="text-red-500 dark:text-red-400"/> The Accuracy Gap
            </h3>
            <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-500 dark:text-slate-300">n=50 Essays</span>
          </div>

          <div className="flex items-end justify-center space-x-12 h-40 pt-4 pb-2 border-b border-slate-100 dark:border-slate-700 mb-4">
             {/* Bar Group 1 */}
             <div className="flex gap-2 items-end">
                <div className="flex flex-col items-center group">
                  <div className="w-8 bg-blue-500 rounded-t-sm h-32 relative group-hover:bg-blue-600 transition-colors">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 dark:text-slate-300">98%</span>
                  </div>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-8 bg-orange-400 rounded-t-sm h-28 relative group-hover:bg-orange-500 transition-colors">
                     <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 dark:text-slate-300">85%</span>
                  </div>
                </div>
             </div>

             {/* Bar Group 2 */}
             <div className="flex gap-2 items-end">
                <div className="flex flex-col items-center group">
                  <div className="w-8 bg-blue-500 rounded-t-sm h-6 relative group-hover:bg-blue-600 transition-colors">
                     <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 dark:text-slate-300">15%</span>
                  </div>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="w-8 bg-orange-400 rounded-t-sm h-32 relative group-hover:bg-orange-500 transition-colors">
                     <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 dark:text-slate-300">95%</span>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="flex justify-around text-xs font-semibold text-slate-600 dark:text-slate-300">
            <div className="text-center">
              <p>Technical Errors</p>
              <p className="text-slate-400 dark:text-slate-500 font-normal">(Comma Splices, etc.)</p>
            </div>
            <div className="text-center">
              <p>Nuance Detection</p>
              <p className="text-slate-400 dark:text-slate-500 font-normal">(Sarcasm, Cultural Ref)</p>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 text-xs mt-6 text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded-sm"></div> AI Tool</span>
            <span className="flex items-center gap-1"><div className="w-3 h-3 bg-orange-400 rounded-sm"></div> Human Grader</span>
          </div>
        </div>
      </div>

      {/* SECTION 3: QUALITATIVE INSIGHTS */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Insight Card 1 */}
        <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
           <div className="flex items-center gap-2 mb-3 text-purple-700 dark:text-purple-400">
              <Clock size={18} />
              <h4 className="font-bold">Efficiency Trade-off</h4>
           </div>
           <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
             TAs reported a <span className="font-bold text-slate-800 dark:text-slate-100">40% reduction</span> in grading time per essay when using AI for mechanics.
           </p>
           <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2">
             <div className="bg-purple-600 h-1.5 rounded-full" style={{width: '40%'}}></div>
           </div>
        </div>

        {/* Insight Card 2 */}
        <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
           <div className="flex items-center gap-2 mb-3 text-red-700 dark:text-red-400">
              <AlertTriangle size={18} />
              <h4 className="font-bold">Bias Detection</h4>
           </div>
           <p className="text-sm text-slate-600 dark:text-slate-300">
             AI tools flagged AAVE (African American Vernacular English) as "grammatically incorrect" in <span className="font-bold text-slate-800 dark:text-slate-100">3 out of 5</span> test instances.
           </p>
           <div className="flex gap-1 mt-3">
             <div className="h-2 w-2 bg-red-500 rounded-full"></div>
             <div className="h-2 w-2 bg-red-500 rounded-full"></div>
             <div className="h-2 w-2 bg-red-500 rounded-full"></div>
             <div className="h-2 w-2 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
             <div className="h-2 w-2 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
           </div>
        </div>

        {/* Insight Card 3 */}
        <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
           <div className="flex items-center gap-2 mb-3 text-green-700 dark:text-green-400">
              <ThumbsUp size={18} />
              <h4 className="font-bold">Student Preference</h4>
           </div>
           <p className="text-sm text-slate-600 dark:text-slate-300">
             Students preferred "Hybrid Feedback" (AI + Human Note) over "Human Only" due to the specificity of grammar corrections.
           </p>
           <div className="mt-2 text-xs font-semibold text-green-800 dark:text-green-200 bg-green-100 dark:bg-green-900/30 inline-block px-2 py-1 rounded">
             82% Approval Rate
           </div>
        </div>
      </div>

    </div>
  );
};

export default FindingsScreen;
