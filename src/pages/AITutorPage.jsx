import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Sparkles, Send, RotateCcw, Lightbulb, BookOpen, Atom, Calculator, Dna, Code2, ArrowRight } from 'lucide-react';
import { aiResponses, defaultResponse } from '../data/aiResponses';

export default function AITutorPage() {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "👋 Hello! Welcome to the Learnova AI Workspace. I'm your dedicated 24/7 STEM tutor.\n\nAsk me any concept, derivation, numerical problem, or question from Physics, Chemistry, Mathematics, Biology, or Computer Science.",
      formula: null,
      example: "Tip: Click any subject shortcut in the left sidebar or type your question below.",
      followUp: ['What is gravity?', 'What is Newton\'s second law?', 'Explain photosynthesis', 'What is an algorithm?'],
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

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedKey = Object.keys(aiResponses).find((k) => lower.includes(k));
      let responseObj = matchedKey ? aiResponses[matchedKey] : defaultResponse;

      if (lower.includes('simpler')) {
        responseObj = {
          text: "Simplified View:\nThink of the concept in everyday terms without complex jargon. Focus on cause and effect!",
          formula: "Core intuition: Effect = Cause / Resistance",
          example: "Imagine a water pipe: Water flow (Current) increases with more pressure (Voltage), but slows down if the pipe is narrow (Resistance).",
          followUp: ['Give me a quiz on this', 'Show math derivation', 'Ask another question'],
        };
      } else if (lower.includes('quiz')) {
        responseObj = {
          text: "🎯 AI Practice Question:\nIf you double both the net force on an object and its mass, what happens to its acceleration?",
          formula: "a = F / m ⟹ a' = (2F) / (2m) = F / m",
          example: "Options: A) Doubled | B) Halved | C) Remains Unchanged | D) Quadrupled\n\n(Think about how the factor of 2 cancels out!)",
          followUp: ['Is it C) Remains Unchanged?', 'Explain why', 'Give me another question'],
        };
      }

      setMessages((prev) => [...prev, { sender: 'ai', ...responseObj }]);
      setIsTyping(false);
    }, 1000);
  };

  const subjectShortcuts = [
    { icon: Atom, name: 'Physics', query: 'What is Newton\'s second law?' },
    { icon: Calculator, name: 'Mathematics', query: 'How does integration work?' },
    { icon: Sparkles, name: 'Chemistry', query: 'What is Ohm\'s law?' },
    { icon: Dna, name: 'Biology', query: 'Explain photosynthesis' },
    { icon: Code2, name: 'Computer Science', query: 'What is an algorithm?' },
  ];

  return (
    <div className="pt-20 pb-12 bg-slate-50/70 dark:bg-slate-950/70 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Workspace Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)] min-h-[650px]">
          
          {/* Left Sidebar (4 cols on lg) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-between bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-md overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-violet-600/30">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white text-base">
                    Learnova AI Workspace
                  </h2>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Ultra-fast Neural Model
                  </span>
                </div>
              </div>

              {/* Subject Prompts */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Quick Subject Prompts
                </label>
                <div className="space-y-2">
                  {subjectShortcuts.map((s) => {
                    const Icon = s.icon;
                    return (
                      <button
                        key={s.name}
                        onClick={() => handleSend(s.query)}
                        className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-violet-50 dark:hover:bg-violet-950/40 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-left transition-all group"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                            {s.name}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mode Badges */}
              <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/60 space-y-2">
                <div className="text-xs font-bold text-indigo-900 dark:text-indigo-200">
                  ✨ Interactive Commands:
                </div>
                <div className="text-[11px] text-indigo-700/80 dark:text-indigo-300/80 space-y-1">
                  <p>• Type <strong>"Explain simpler"</strong> for intuitive analogies</p>
                  <p>• Type <strong>"Give me a quiz"</strong> to generate active recall drills</p>
                  <p>• Type <strong>"Give example"</strong> for daily life applications</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setMessages(messages.slice(0, 1))}
              className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Conversation</span>
            </button>
          </div>

          {/* Right Main Chat Window (8 cols on lg) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col h-full overflow-hidden">
            
            {/* Chat Topbar */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="font-bold text-sm text-slate-900 dark:text-white">Learnova AI Assistant</span>
              </div>
              <span className="text-xs text-slate-400">Response time: ~0.4s</span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/40 dark:bg-slate-950/40">
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
                    className={`max-w-[85%] sm:max-w-[78%] rounded-3xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-tr-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-sm border border-slate-200/60 dark:border-slate-700/60'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {msg.formula && (
                      <div className="mt-3 p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 font-mono text-xs">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 mb-1">
                          Key Mathematical Formula:
                        </div>
                        <div className="font-semibold">{msg.formula}</div>
                      </div>
                    )}

                    {msg.example && (
                      <div className="mt-3 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1">
                          <Lightbulb className="w-3 h-3" />
                          Intuition / Example:
                        </div>
                        <p>{msg.example}</p>
                      </div>
                    )}

                    {msg.sender === 'ai' && msg.followUp && (
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                        {msg.followUp.map((chip, i) => (
                          <button
                            key={i}
                            onClick={() => handleSend(chip)}
                            className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-violet-100 dark:hover:bg-violet-900/40 text-slate-700 dark:text-slate-200 hover:text-violet-700 dark:hover:text-violet-300 border border-slate-200 dark:border-slate-600 transition-all text-left"
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

              {isTyping && (
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                    AI
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl rounded-tl-sm border border-slate-200/60 dark:border-slate-700/60 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce [animation-delay:0.4s]" />
                    <span className="text-xs text-slate-400 ml-2 font-medium">Formulating concept breakdown...</span>
                  </div>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Input Bar */}
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
                placeholder="Ask any educational question or problem statement..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 disabled:opacity-40 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-indigo-600/20 transition-all"
              >
                <span>Ask AI</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </div>
  );
}
