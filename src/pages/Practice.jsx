import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, HelpCircle, Flame, Clock } from 'lucide-react';

export default function Practice() {
  const quizQuestions = [
    {
      id: 1,
      q: 'What is the SI unit of Force?',
      options: ['Joule (J)', 'Newton (N)', 'Watt (W)', 'Pascal (Pa)'],
      correct: 1,
      explanation: 'Newton (N) is the SI unit of force, defined as 1 kg·m/s² according to Newton\'s Second Law (F = ma).',
    },
    {
      id: 2,
      q: 'What is the correct formula for the kinetic energy of a body of mass m moving with velocity v?',
      options: ['KE = m × v', 'KE = m × v²', 'KE = ½ × m × v²', 'KE = 2 × m × v²'],
      correct: 2,
      explanation: 'Kinetic energy is calculated as KE = ½mv², derived from the work-energy theorem.',
    },
    {
      id: 3,
      q: 'Which Newton\'s law defines the quantitative relationship F = ma?',
      options: ['First Law of Motion', 'Second Law of Motion', 'Third Law of Motion', 'Law of Universal Gravitation'],
      correct: 1,
      explanation: 'Newton\'s Second Law states that net force is directly proportional to the rate of change of momentum (F = dp/dt = ma for constant mass).',
    },
    {
      id: 4,
      q: 'The speed of light in vacuum is approximately equal to:',
      options: ['3 × 10⁶ m/s', '3 × 10⁸ m/s', '3 × 10¹⁰ m/s', '3 × 10⁴ m/s'],
      correct: 1,
      explanation: 'The speed of light in vacuum is an invariant physical constant c ≈ 299,792,458 m/s ≈ 3 × 10⁸ m/s.',
    },
    {
      id: 5,
      q: 'What is the SI unit of Electric Charge?',
      options: ['Volt (V)', 'Ohm (Ω)', 'Coulomb (C)', 'Ampere (A)'],
      correct: 2,
      explanation: 'The Coulomb (C) is the SI unit of electric charge (1 C = 1 A·s), named after Charles-Augustin de Coulomb.',
    },
  ];

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = quizQuestions[currentQIndex];

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex + 1 < quizQuestions.length) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50/70 dark:bg-slate-950/70 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3 border border-indigo-200/60 dark:border-indigo-800/60">
            <Target className="w-3.5 h-3.5" />
            Interactive Testing Engine
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Practice Arena & Daily Challenge
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Test your conceptual clarity with instant grading, step-by-step answer derivations, and rank analytics.
          </p>
        </div>

        {/* Interactive Quiz Engine Box */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-2xl">
          {!quizFinished ? (
            <div>
              {/* Question Header & Progress */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6 text-xs font-bold text-slate-500">
                <span className="text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Physics · Chapter Drill #1
                </span>
                <span>
                  Question {currentQIndex + 1} of {quizQuestions.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
                  style={{ width: `${((currentQIndex + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>

              {/* Question Prompt */}
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6 leading-relaxed">
                {currentQ.q}
              </h2>

              {/* 4 Options Grid */}
              <div className="space-y-3 mb-8">
                {currentQ.options.map((opt, idx) => {
                  let optionStyle = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-indigo-500 text-slate-800 dark:text-slate-200';
                  
                  if (selectedOption === idx && !isAnswerSubmitted) {
                    optionStyle = 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/20';
                  }

                  if (isAnswerSubmitted) {
                    if (idx === currentQ.correct) {
                      optionStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 ring-2 ring-emerald-500/30';
                    } else if (selectedOption === idx) {
                      optionStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200 ring-2 ring-rose-500/30';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold flex items-center justify-between transition-all ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center font-bold text-xs shadow-xs border border-slate-200 dark:border-slate-600">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isAnswerSubmitted && idx === currentQ.correct && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      )}
                      {isAnswerSubmitted && selectedOption === idx && idx !== currentQ.correct && (
                        <XCircle className="w-5 h-5 text-rose-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box when Submitted */}
              {isAnswerSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 sm:p-5 rounded-2xl mb-6 text-xs sm:text-sm ${
                    selectedOption === currentQ.correct
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                      : 'bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                  }`}
                >
                  <div className="font-bold mb-1">
                    {selectedOption === currentQ.correct ? '🎉 Correct Answer!' : '❌ Incorrect Answer!'}
                  </div>
                  <p>{currentQ.explanation}</p>
                </motion.div>
              )}

              {/* Action Button Row */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-100"
                  >
                    <span>{currentQIndex + 1 < quizQuestions.length ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Final Quiz Result Screen */
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center text-4xl mx-auto shadow-xl shadow-orange-500/20">
                🏆
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Quiz Completed!
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  You scored <strong className="text-indigo-600 dark:text-indigo-400 text-lg">{score}</strong> out of <strong className="text-lg">{quizQuestions.length}</strong> ({Math.round((score / quizQuestions.length) * 100)}% Accuracy)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 max-w-sm mx-auto text-xs text-slate-600 dark:text-slate-300 font-medium">
                {score >= 4
                  ? '🔥 Outstanding! Your conceptual foundation is exceptionally strong.'
                  : score >= 3
                  ? '👍 Good job! Review the explanations to achieve a 100% score.'
                  : '💡 Keep practicing! Ask the AI Tutor for more step-by-step examples.'}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleRestartQuiz}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md hover:bg-indigo-700 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retry Quiz</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
