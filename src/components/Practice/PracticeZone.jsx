import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, ArrowRight, Clock, HelpCircle, Flame, Sparkles, CheckCircle, FileText } from 'lucide-react';

export default function PracticeZone() {
  const practiceCards = [
    {
      id: 1,
      tag: '🔥 Daily Challenge',
      tagColor: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
      title: "Today's Physics Drill",
      subject: 'Physics · Laws of Motion',
      questions: '10 Questions',
      time: '15 Minutes',
      difficulty: 'Medium',
      difficultyColor: 'text-amber-500',
      description: 'Daily streak booster with instant step-by-step video solutions and AI analysis.',
      btnText: 'Start Daily Quiz →',
    },
    {
      id: 2,
      tag: '🎯 Full Mock Test',
      tagColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      title: 'JEE Main Full Mock #14',
      subject: 'PCM · All India Rank Prediction',
      questions: '75 Questions',
      time: '180 Minutes',
      difficulty: 'Exam Level',
      difficultyColor: 'text-red-500',
      description: 'Exact NTA computer-based testing interface with detailed percentile prediction.',
      btnText: 'Take Mock Test →',
    },
    {
      id: 3,
      tag: '📖 Previous Year Papers',
      tagColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
      title: 'NEET 2024 Question Bank',
      subject: 'Biology, Physics & Chemistry',
      questions: '200 Questions',
      time: '200 Minutes',
      difficulty: 'High Yield',
      difficultyColor: 'text-purple-500',
      description: 'Chapter-wise tagged past year questions with NCERT page references.',
      btnText: 'Solve PYQs →',
    },
    {
      id: 4,
      tag: '⚡ Speed Flashcards',
      tagColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
      title: 'Organic Reaction Flashcards',
      subject: 'Chemistry · Named Reactions',
      questions: '50 Flashcards',
      time: '10 Minutes',
      difficulty: 'Active Recall',
      difficultyColor: 'text-emerald-500',
      description: 'Spaced repetition flashcards to memorize reagents, catalysts, and products.',
      btnText: 'Start Flashcards →',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3 border border-indigo-200/60 dark:border-indigo-800/60">
              <Target className="w-3.5 h-3.5" />
              Practice Arena
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Practice. Improve. Master.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Turn conceptual knowledge into exam-ready confidence with daily quizzes, high-yield flashcards, and full-length simulated mock tests.
            </p>
          </div>

          <Link
            to="/practice"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            <span>Go to Interactive Practice Arena</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Practice Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex flex-col justify-between bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 p-6 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div>
                {/* Tag */}
                <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full border mb-4 ${card.tagColor}`}>
                  {card.tag}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  {card.subject}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {card.description}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                    <span>{card.questions}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{card.time}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/practice"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all"
                >
                  <span>{card.btnText}</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
