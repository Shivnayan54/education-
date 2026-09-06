import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Bot, User, HelpCircle, Check, ArrowRight, RotateCcw, Lightbulb } from 'lucide-react';
import { aiResponses, defaultResponse } from '../../data/aiResponses';

export default function AITutorSection() {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "👋 Hi! I am your Learnova AI Tutor. Stuck on a concept or numerical problem? Ask me anything across Physics, Math, Chemistry, or Biology!",
      formula: null,
      example: "Try typing: 'What is Newton's second law?' or 'Explain photosynthesis'",
      followUp: ['What is Newton\'s second law?', 'What is gravity?', 'Explain photosynthesis'],
    },
    {
      sender: 'user',
      text: "What is Newton's second law?",
    },
    {
      sender: 'ai',
      text: "Newton's Second Law of Motion tells us how force affects an object's motion.\n\nIt states that Force = Mass × Acceleration (F = ma). A larger force produces greater acceleration, and a heavier object requires more force to accelerate at the same rate.",
      formula: "F = m × a  ⟹  a = F / m",
      example: "Example: Pushing an empty cart vs. a heavy cart full of bricks. With the same force, the lighter cart accelerates much faster!",
      followUp: ['Explain simpler', 'Give another example', 'Give me a quiz question'],
    },
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (queryText) => {
    const query = (queryText || input).trim();
    if (!query) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedKey = Object.keys(aiResponses).find((k) => lower.includes(k));
      let responseObj = matchedKey ? aiResponses[matchedKey] : defaultResponse;

      if (lower.includes('simpler')) {
        responseObj = {
          text: "Let's make it super simple! Think of it like this: 'How hard you push = How heavy the thing is × How fast it speeds up'. If it's heavy, push harder!",
          formula: "Push = Weight × Speed-up",
          example: "Pushing a toy car (easy) vs. pushing your friend's bicycle (needs more push).",
          followUp: ['Give me a quiz on this', 'Explain another concept', 'Show math derivation'],
        };
      } else if (lower.includes('quiz')) {
        responseObj = {
          text: "🎯 Quick Quiz Question:\nA constant force of 20 N acts on a mass of 4 kg. What is the acceleration produced?",
          formula: "Use Formula: a = F / m",
          example: "Options: A) 80 m/s²  |  B) 5 m/s²  |  C) 0.2 m/s²  |  D) 16 m/s²\n\n(Hint: 20 divided by 4 equals...)",
          followUp: ['Is the answer B) 5 m/s²?', 'Show step-by-step solution', 'Give me another question'],
        };
      } else if (lower.includes('example')) {
        responseObj = {
          text: "Here is another clear example:\nA bowler in cricket applies force to a 160g cricket ball to accelerate it to 140 km/h in a fraction of a second. If they tried to throw a heavy shotput with that same force, it would move much slower because of its larger mass!",
          formula: "F = m × a",
          example: "Mass is higher ⟹ Acceleration is lower for the same force.",
          followUp: ['Give me a quiz question', 'Explain Newton\'s third law', 'What is momentum?'],
        };
      }

      setMessages((prev) => [...prev, { sender: 'ai', ...responseObj }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-indigo-50/40 dark:from-slate-950 dark:to-indigo-950/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-3 border border-violet-200 dark:border-violet-800">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-violet-600" />
            Instant 24/7 AI Assistance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Meet Your AI Study Buddy
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Stuck on a tricky concept at 2 AM? Ask our fine-tuned educational AI tutor for instant, crystal-clear explanations, real-world examples, and step-by-step math derivations.
          </p>
        </div>

        {/* AI Chat Layout Box */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[600px]">
          
          {/* Chat Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-900 via-indigo-900 to-violet-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-sm">
                <Bot className="w-5 h-5 text-indigo-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm sm:text-base">Learnova AI Tutor</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-emerald-300 font-semibold">Online</span>
                </div>
                <p className="text-[11px] text-indigo-200">
                  Trained on NCERT, JEE, NEET, CBSE & STEM Syllabi
                </p>
              </div>
            </div>

            <button
              onClick={() => setMessages(messages.slice(0, 1))}
              className="text-xs text-indigo-200 hover:text-white flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Chat</span>
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-950/40">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1 shadow-sm">
                    AI
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-tr-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-sm border border-slate-200/60 dark:border-slate-700/60'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Formula Callout Box if present */}
                  {msg.formula && (
                    <div className="mt-3 p-3 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-900 dark:text-indigo-200 font-mono text-xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 mb-1">
                        Formula / Derivation:
                      </div>
                      <div className="font-semibold">{msg.formula}</div>
                    </div>
                  )}

                  {/* Example Callout Box if present */}
                  {msg.example && (
                    <div className="mt-3 p-3 rounded-2xl bg-amber-50/80 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-800/80 text-amber-900 dark:text-amber-200 text-xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1">
                        <Lightbulb className="w-3 h-3" />
                        Practical Example:
                      </div>
                      <p>{msg.example}</p>
                    </div>
                  )}

                  {/* Follow-up Suggestion Chips for AI messages */}
                  {msg.sender === 'ai' && msg.followUp && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                      {msg.followUp.map((chip, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(chip)}
                          className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700/80 hover:bg-violet-100 dark:hover:bg-violet-900/40 text-slate-700 dark:text-slate-200 hover:text-violet-700 dark:hover:text-violet-300 border border-slate-200 dark:border-slate-600 transition-all text-left"
                        >
                          {chip} →
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1 shadow-sm">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Live Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                  AI
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl rounded-tl-sm border border-slate-200/60 dark:border-slate-700/60 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-xs text-slate-400 ml-2 font-medium">Generating solution...</span>
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Quick Concept Action Pill Bar */}
          <div className="px-4 py-2 bg-slate-100/80 dark:bg-slate-800/80 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-400 font-semibold flex-shrink-0">Try asking:</span>
            {['Explain Simpler', 'Give Example', 'Give Me a Quiz', 'What is Gravity?', 'Explain Photosynthesis'].map((quick) => (
              <button
                key={quick}
                onClick={() => handleSend(quick)}
                className="px-3 py-1 rounded-full bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 border border-slate-200 dark:border-slate-600 whitespace-nowrap text-[11px] font-medium transition-colors shadow-xs"
              >
                {quick}
              </button>
            ))}
          </div>

          {/* User Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything (e.g., 'What is Ohm's law?' or 'Explain photosynthesis')..."
              className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 disabled:opacity-40 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md shadow-indigo-600/20 transition-all duration-200"
            >
              <span>Ask</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
