import BackgroundCard from '@/components/cards/background';
import CertificationsCard from '@/components/cards/certifications';
import EducationCard from '@/components/cards/education';
import ExperienceCard from '@/components/cards/experience';
import MeCard from '@/components/cards/me';
import ResumeCard from '@/components/cards/resume';
import StackCard from '@/components/cards/stack';
import Heading from '@/components/heading/heading';
import Gallery from '@/components/ui/gallery';
import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';

const CV_PATH = '/Chi_Zhang_Resume.pdf';

const AboutSection: React.FC = () => {
  const [showStickyCV, setShowStickyCV] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setShowStickyCV(rect.top <= 0 && rect.bottom > 200);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    window.open(CV_PATH, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="pt-24 px-3 lg:px-8 relative">
      {/* Sticky Download CV bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          showStickyCV ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <button
          onClick={handleDownloadCV}
          className="w-full py-4 bg-gradient-to-r from-green-benzol via-blue-joust to-blue-hera text-black font-bold text-lg flex items-center justify-center gap-3 cursor-pointer hover:brightness-110 transition-all"
        >
          <FaDownload />
          Download CV
        </button>
      </div>

      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8">
        {/* Row 1: Me photo | Experience + Education (priority) | Resume/CV */}
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <MeCard />
          <div className="space-y-4">
            <ExperienceCard />
            <EducationCard />
          </div>
          <ResumeCard />
        </div>
        {/* Row 2: Background | Stack + Certifications | Gallery */}
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <BackgroundCard />
          <div className="space-y-4">
            <StackCard />
            <CertificationsCard />
          </div>
          <Gallery />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
