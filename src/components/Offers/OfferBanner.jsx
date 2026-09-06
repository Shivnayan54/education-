import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Clock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import useCountdown from '../../hooks/useCountdown';

export default function OfferBanner() {
  const timeLeft = useCountdown();

  const timeBlocks = [
    { label: 'Days', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background dynamic light gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl border border-indigo-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle grid pattern in banner */}
          <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Offer Details */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4 fill-orange-400 text-orange-400 animate-bounce" />
                <span>Special Mega Admission Offer</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Learn More. <span className="text-amber-400">Pay Less.</span>
              </h2>

              <p className="text-sm sm:text-base text-indigo-100/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Get up to <strong className="text-white font-bold">60% OFF</strong> on all JEE, NEET, Class 10/12 Boards, and Programming complete bundles. Includes unlimited AI tutor access & free test series.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-medium text-indigo-200">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% NCERT Aligned
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-amber-300" /> Free AI Tutor Included
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-blue-300" /> Instant Batch Access
                </span>
              </div>
            </div>

            {/* Right Column: Functional Countdown Clock & CTA */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center space-y-6">
              <div className="text-center lg:text-right">
                <div className="text-xs uppercase tracking-widest text-indigo-300 font-bold mb-3 flex items-center justify-center lg:justify-end gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Offer Ends In</span>
                </div>

                {/* 4 Clock Digits Grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {timeBlocks.map((block) => (
                    <div
                      key={block.label}
                      className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md min-w-[65px] sm:min-w-[75px]"
                    >
                      <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                        {block.value}
                      </span>
                      <span className="text-[10px] sm:text-xs text-indigo-200 font-medium uppercase mt-0.5">
                        {block.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-100 transition-all duration-200"
              >
                <span>Claim 60% Discount Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
