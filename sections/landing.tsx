import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Header from '@/components/navigation/header/header';
import FancyButton from '@/components/ui/fancy-button';
import LiveClock from '@/components/ui/live-clock';
import ScrollDown from '@/components/ui/scroll-down';
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper';

const landingContent = {
  mainTitle: ['Life isn\u2019t', 'Long Enough for both', 'Art and love'],
  subTitle: [
    'Embracing challenges,',
    'crafting innovative solutions,',
    'and building the digital future',
    'one line of code at a time.'
  ],
  connectButtonText: 'Connect',
  timeZone: 'America/New_York'
};

const LandingSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden p-8">
      <Header />
      <ConnectButton />
      <Clock />
      <MainContent />
    </section>
  );
};

const ConnectButton: React.FC = () => (
  <div className="absolute bottom-36 left-10 z-20 md:hidden">
    <MagneticWrapper>
      <FancyButton text={landingContent.connectButtonText} icon={<FaArrowRight />} />
    </MagneticWrapper>
  </div>
);

const Clock: React.FC = () => (
  <div className="absolute right-10 bottom-10">
    <LiveClock timeZone={landingContent.timeZone} />
  </div>
);

const MainContent: React.FC = () => (
  <div
    className="
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    w-full max-w-7xl mx-auto px-4
    /* 绝对定位居中,最大宽度限制,水平居中,水平内边距 */
    mt-8 
    font-medium 
    tracking-tight
    /* 字间距收紧 */
  "
  >
    <div
      className="
      flex flex-col justify-center items-center 
      text-primary-foreground 
      text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] 2xl:text-[4rem] 
      /* 响应式字体大小 */
      leading-[1.1] sm:leading-[1.2] md:leading-[1.3]
      /* 响应式行高 */
      uppercase
    "
    >
      {landingContent.mainTitle.map((line, index) => (
        <div key={index} className="text-center">
          <span>{line}</span>
        </div>
      ))}
      <SubTitle />
    </div>
    <ScrollDownButton />
  </div>
);

const SubTitle: React.FC = () => (
  <div
    className="
    mt-4 sm:mt-6 md:mt-8
    /* 响应式上边距 */
    text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] 
    /* 响应式字体大小 */
    leading-relaxed 
    tracking-wide
    text-center
    uppercase font-normal
    max-w-xl mx-auto
    /* 最大宽度限制,水平居中 */
  "
  >
    {landingContent.subTitle.map((line, index) => (
      <React.Fragment key={index}>
        <span>{line}</span>
        <br />
      </React.Fragment>
    ))}
  </div>
);

const ScrollDownButton: React.FC = () => (
  <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] 2xl:-bottom-10">
    <ScrollDown />
  </MagneticWrapper>
);

export default LandingSection;
