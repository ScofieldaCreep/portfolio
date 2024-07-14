import BackgroundCard from '@/components/cards/background';
import CertificationsCard from '@/components/cards/certifications';
import EducationCard from '@/components/cards/education';
import ExperienceCard from '@/components/cards/experience';

import MeCard from '@/components/cards/me';
import ResumeCard from '@/components/cards/resume';
import StackCard from '@/components/cards/stack';
import { Heading } from '@/components/heading/heading';
import GalleryCard from '@/components/cards/gallery';
import React from 'react';

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <MeCard />
          <ResumeCard />
          <BackgroundCard />
          <div className="2xl:hidden">
            <GalleryCard />
          </div>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <CertificationsCard />
            <EducationCard />
          </div>
          <div className="space-y-4">
            <StackCard />
            <ExperienceCard />
          </div>
          <div className="hidden 2xl:flex">
            <GalleryCard />
          </div>
        </div>
      </div>
    </div>
  );
}

