import BackgroundCard from '@/components/cards/background';
import CertificationsCard from '@/components/cards/certifications';
import EducationCard from '@/components/cards/education';
import ExperienceCard from '@/components/cards/experience';
import InstructorCard from '@/components/cards/instructor';
import MeCard from '@/components/cards/me';
import ResumeCard from '@/components/cards/resume';
import StackCard from '@/components/cards/stack';
import Heading from '@/components/heading/heading';
import Gallery from '@/components/ui/gallery';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section
      className="
      pt-24            /* 顶部内边距 96px */
      px-3 lg:px-8     /* 左右内边距：默认 12px，大屏幕 32px */
    "
    >
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8">
        {' '}
        {/* 垂直间距 16px，上下内边距 32px */}
        {/* 第一行卡片 */}
        <div
          className="
          space-y-4                /* 垂直间距 16px */
          md:grid                  /* 中等屏幕使用网格布局 */
          md:grid-cols-2           /* 中等屏幕两列 */
          md:gap-4                 /* 中等屏幕网格间距 16px */
          md:space-y-0             /* 中等屏幕取消垂直间距 */
          2xl:grid-cols-3          /* 超大屏幕三列 */
        "
        >
          <MeCard />
          <ResumeCard />
          <BackgroundCard />
          <div className="2xl:hidden">
            {' '}
            {/* 在超大屏幕下隐藏 */}
            <Gallery />
          </div>
        </div>
        {/* 第二行卡片 */}
        <div
          className="
          space-y-4                /* 垂直间距 16px */
          md:grid                  /* 中等屏幕使用网格布局 */
          md:grid-cols-2           /* 中等屏幕两列 */
          md:gap-4                 /* 中等屏幕网格间距 16px */
          md:space-y-0             /* 中等屏幕取消垂直间距 */
          2xl:grid-cols-3          /* 超大屏幕三列 */
        "
        >
          <div className="space-y-4">
            {' '}
            {/* 垂直间距 16px */}
            <InstructorCard />
            <CertificationsCard />
          </div>
          <div className="space-y-4">
            {' '}
            {/* 垂直间距 16px */}
            <StackCard />
            <ExperienceCard />
            <EducationCard />
          </div>
          <div className="hidden 2xl:flex">
            {' '}
            {/* 仅在超大屏幕显示 */}
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
