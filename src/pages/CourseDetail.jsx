import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, Users, BookOpen, Clock, PlayCircle, CheckCircle2, 
  Sparkles, ShieldCheck, ArrowRight, Download, Award, ChevronDown, ChevronUp, Lock
} from 'lucide-react';
import { courses } from '../data/courses';

export default function CourseDetail() {
  const { id } = useParams();
  const courseId = parseInt(id, 10) || 1;
  const course = courses.find((c) => c.id === courseId) || courses[0];

  const [expandedModule, setExpandedModule] = useState(0);
  const [enrolled, setEnrolled] = useState(false);

  const curriculum = [
    { title: '01. Fundamentals & Mathematical Prerequisites', lessons: 8, duration: '12 hrs', freePreview: true },
    { title: '02. Kinematics in 1D & 2D with Vectors', lessons: 14, duration: '18 hrs', freePreview: true },
    { title: '03. Newton\'s Laws of Motion & Friction Dynamics', lessons: 16, duration: '22 hrs', freePreview: false },
    { title: '04. Work, Energy, Power & Circular Dynamics', lessons: 12, duration: '15 hrs', freePreview: false },
    { title: '05. Center of Mass, Collisions & Momentum Conservation', lessons: 15, duration: '20 hrs', freePreview: false },
    { title: '06. Rotational Mechanics & Angular Momentum', lessons: 18, duration: '26 hrs', freePreview: false },
    { title: '07. Gravitation & Planetary Motion Orbitals', lessons: 10, duration: '14 hrs', freePreview: false },
    { title: '08. Fluid Mechanics & Surface Tension', lessons: 12, duration: '16 hrs', freePreview: false },
    { title: '09. Thermal Physics & Laws of Thermodynamics', lessons: 15, duration: '20 hrs', freePreview: false },
    { title: '10. Full Syllabus Practice & Previous Year Problem Solving', lessons: 20, duration: '27 hrs', freePreview: false },
  ];

  const handleEnroll = () => {
    setEnrolled(true);
    alert(`🎉 Congratulations! You have successfully enrolled in ${course.title}. Access granted to all 180 video lessons and the AI tutor!`);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50/70 dark:bg-slate-950/70 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
          <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
          <span>/</span>
          <Link to="/courses" className="hover:text-indigo-600 dark:hover:text-indigo-400">Courses</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white truncate max-w-xs">{course.title}</span>
        </nav>

        {/* Course Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Details (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider border border-indigo-200 dark:border-indigo-800">
                {course.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold text-xs">
                {course.exam} Track
              </span>
              {course.badge && (
                <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 font-extrabold text-xs">
                  ⭐ {course.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {course.description}
            </p>

            {/* Instructor & Metrics Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-800">
              <div>
                <span className="text-slate-400">Taught by </span>
                <strong className="text-slate-900 dark:text-white font-bold">{course.instructor}</strong>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1 font-bold text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{course.rating} (4,820 ratings)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-slate-400" />
                <span>{course.students} enrolled</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{course.duration}</span>
              </div>
            </div>

            {/* "What you'll learn" Box */}
            <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                What you will master in this course
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {course.topics.map((t, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>500+ Solved Numerical Problems with AI Video Step Guides</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Full-length NTA / CBSE Mock Tests & AI Doubt Clearing</span>
                </div>
              </div>
            </div>

            {/* Curriculum Accordion */}
            <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Course Curriculum
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    10 Modules • 180 Lectures • 210 Hours Total Length
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {curriculum.map((mod, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/70 dark:border-slate-800 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedModule(expandedModule === idx ? -1 : idx)}
                      className="w-full p-4 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between text-left transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <PlayCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                          {mod.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span>{mod.lessons} Lessons · {mod.duration}</span>
                        {expandedModule === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {expandedModule === idx && (
                      <div className="p-4 bg-white dark:bg-slate-900 space-y-2.5 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800">
                        <div className="flex items-center justify-between py-1">
                          <span className="flex items-center gap-2">
                            <PlayCircle className="w-3.5 h-3.5 text-indigo-500" /> Lesson 1: Concept Overview & Core Theory
                          </span>
                          {mod.freePreview ? (
                            <span className="text-indigo-600 dark:text-indigo-400 font-bold cursor-pointer hover:underline">
                              Free Preview
                            </span>
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-slate-400" />
                          )}
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="flex items-center gap-2">
                            <PlayCircle className="w-3.5 h-3.5 text-indigo-500" /> Lesson 2: Step-by-Step Derivation & Deep Intuition
                          </span>
                          <Lock className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="flex items-center gap-2">
                            <PlayCircle className="w-3.5 h-3.5 text-indigo-500" /> Lesson 3: 20 Practice Questions & AI Doubt Analysis
                          </span>
                          <Lock className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sticky Enrollment Sidebar (4 cols on lg) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl p-6 sm:p-7 space-y-6">
              
              {/* Thumbnail Container with Play */}
              <div
                className="h-48 rounded-2xl p-4 flex flex-col justify-between text-white relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${course.thumbnail || '#1E3A8A'}, #0f172a)`,
                }}
              >
                <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md self-start">
                  Course Preview
                </span>
                <div className="self-center w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-xl cursor-pointer hover:scale-110 transition-transform">
                  <PlayCircle className="w-7 h-7 fill-white/20" />
                </div>
                <span className="text-[11px] text-center font-medium">Click to preview free sample lecture</span>
              </div>

              {/* Pricing Section */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                    ₹{course.price}
                  </span>
                  {course.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      ₹{course.originalPrice}
                    </span>
                  )}
                  {course.discount && (
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-rose-500 text-white">
                      {course.discount}
                    </span>
                  )}
                </div>
                <div className="text-xs text-rose-500 font-semibold mt-1">
                  🔥 Special Offer ends in 24 hours!
                </div>
              </div>

              {/* Enroll Button */}
              <button
                onClick={handleEnroll}
                className={`w-full py-4 rounded-2xl font-extrabold text-sm sm:text-base shadow-xl transition-all hover:scale-105 active:scale-100 ${
                  enrolled
                    ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                    : 'bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white shadow-indigo-600/30'
                }`}
              >
                {enrolled ? '✓ Enrolled! Go to Classroom' : 'Enroll in Batch Now →'}
              </button>

              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                30-day money back guarantee · Instant automated access
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                <div className="font-bold text-slate-900 dark:text-white">This course includes:</div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  <span>{course.lessons} high-definition video lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-500" />
                  <span>Unlimited 24/7 AI tutor doubt resolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-emerald-500" />
                  <span>Downloadable PDF formula sheets & notes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Certificate of completion & test series</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
