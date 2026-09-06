import Hero from '../components/Hero/Hero';
import CategoryGrid from '../components/Courses/CategoryGrid';
import PopularCourses from '../components/Courses/PopularCourses';
import OfferBanner from '../components/Offers/OfferBanner';
import ExamPrep from '../components/Exams/ExamPrep';
import AITutorSection from '../components/AITutor/AITutorSection';
import PracticeZone from '../components/Practice/PracticeZone';
import DashboardPreview from '../components/Dashboard/DashboardPreview';
import ProgressSection from '../components/Dashboard/ProgressSection';
import LiveClasses from '../components/LiveClasses/LiveClasses';
import TopInstructors from '../components/Instructors/TopInstructors';
import Testimonials from '../components/Testimonials/Testimonials';
import Achievements from '../components/Achievements/Achievements';
import StudyMaterials from '../components/StudyMaterials/StudyMaterials';
import StudyPlanner from '../components/StudyPlanner/StudyPlanner';
import FinalCTA from '../components/CTA/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategoryGrid />
      <PopularCourses />
      <OfferBanner />
      <ExamPrep />
      <AITutorSection />
      <PracticeZone />
      <DashboardPreview />
      <ProgressSection />
      <LiveClasses />
      <TopInstructors />
      <Testimonials />
      <Achievements />
      <StudyMaterials />
      <StudyPlanner />
      <FinalCTA />
    </div>
  );
}
