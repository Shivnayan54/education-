import { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Users, Clock, Bell, Play, Check } from 'lucide-react';
import { liveClasses } from '../../data/liveClasses';

export default function LiveClasses() {
  const [reminders, setReminders] = useState({});

  const toggleReminder = (id) => {
    setReminders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="live-classes" className="py-16 md:py-24 bg-slate-50/70 dark:bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-3 border border-rose-200/60 dark:border-rose-800/60">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              Live Interactive Classes
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Live & Upcoming Sessions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Join interactive two-way audio/video masterclasses with India's best educators, real-time live polls, and instant doubt resolution.
            </p>
          </div>
        </div>

        {/* Live Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {liveClasses.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Live or Scheduled Badge */}
                <div className="flex items-center justify-between mb-4">
                  {item.isLive ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-rose-500/30">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      LIVE NOW
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-700">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      {item.time}
                    </span>
                  )}

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                    {item.subject}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
                
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  By {item.instructor}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  Topic: <strong className="text-slate-800 dark:text-slate-200">{item.topic}</strong>
                </p>
              </div>

              {/* Action Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {item.isLive ? (
                    <span className="flex items-center gap-1 font-bold text-rose-500">
                      <Users className="w-3.5 h-3.5" />
                      {item.viewers?.toLocaleString()} Students Watching
                    </span>
                  ) : (
                    <span>Duration: {item.duration}</span>
                  )}
                </div>

                {item.isLive ? (
                  <button
                    onClick={() => alert(`Joining ${item.title}... Interactive stream loading!`)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white text-xs font-bold shadow-md shadow-rose-600/30 transition-all hover:scale-105 active:scale-100"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Join Class</span>
                  </button>
                ) : (
                  <button
                    onClick={() => toggleReminder(item.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      reminders[item.id]
                        ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {reminders[item.id] ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Reminder Set!</span>
                      </>
                    ) : (
                      <>
                        <Bell className="w-3.5 h-3.5" />
                        <span>Set Reminder</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
