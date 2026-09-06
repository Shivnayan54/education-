import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Plus, Clock, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export default function StudyPlanner() {
  const [schedule, setSchedule] = useState([
    { id: 1, day: 'Monday', subject: 'Physics', duration: '1.5 Hours', topic: 'Laws of Motion & Friction Numericals', completed: true },
    { id: 2, day: 'Tuesday', subject: 'Mathematics', duration: '2.0 Hours', topic: 'Definite Integration & Areas', completed: true },
    { id: 3, day: 'Wednesday', subject: 'Chemistry', duration: '1.5 Hours', topic: 'SN1 vs SN2 Reaction Mechanisms', completed: true },
    { id: 4, day: 'Thursday', subject: 'Biology / CS', duration: '1.0 Hour', topic: 'Mendelian Genetics & Test Crosses', completed: false },
    { id: 5, day: 'Friday', subject: 'Revision & Doubts', duration: '1.5 Hours', topic: 'AI Tutor Practice Drills & PYQs', completed: false },
    { id: 6, day: 'Saturday', subject: 'Full Mock Test', duration: '3.0 Hours', topic: 'JEE/NEET Chapter Test Series #8', completed: false },
  ]);

  const toggleComplete = (id) => {
    setSchedule((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const handleAddSession = () => {
    const day = prompt('Enter Day (e.g., Sunday):', 'Sunday');
    const subject = prompt('Enter Subject (e.g., Physics):', 'Physics Revision');
    const topic = prompt('Enter Topic:', 'Electromagnetism Formula Sheet');
    if (day && subject) {
      setSchedule((prev) => [
        ...prev,
        {
          id: Date.now(),
          day,
          subject,
          duration: '1.0 Hour',
          topic: topic || 'Self Study Session',
          completed: false,
        },
      ]);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/60 dark:border-blue-800/60">
              <Calendar className="w-3.5 h-3.5" />
              Smart Study Scheduler
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Plan Your Learning Routine
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Consistent daily study habits deliver top ranks. Use our adaptive AI study planner to balance syllabus progress and revisions.
            </p>
          </div>

          <button
            onClick={handleAddSession}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all hover:scale-105 active:scale-100"
          >
            <Plus className="w-4 h-4" />
            <span>Add Study Session</span>
          </button>
        </div>

        {/* Schedule List Cards Grid (2 cols on md, 3 on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {schedule.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleComplete(item.id)}
              className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                item.completed
                  ? 'bg-slate-50/80 dark:bg-slate-900/60 border-slate-200/60 dark:border-slate-800 opacity-75'
                  : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-indigo-500/50'
              }`}
            >
              <div>
                {/* Day + Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-extrabold text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    {item.day}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <h3 className={`text-base sm:text-lg font-bold ${item.completed ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                  {item.subject}
                </h3>
                
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {item.topic}
                </p>
              </div>

              {/* Status Toggle Row */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">
                  {item.completed ? 'Click to mark pending' : 'Click to mark done'}
                </span>
                <span
                  className={`inline-flex items-center gap-1 font-bold px-2.5 py-1 rounded-full text-[11px] ${
                    item.completed
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                      : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {item.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
