'use client';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import FancyButton from '@/components/ui/fancy-button';
import Input from '@/components/ui/input';
import LiveClock from '@/components/ui/live-clock';
import Profile from '@/components/ui/profile';
import ScrollDown from '@/components/ui/scroll-down';
import TextArea from '@/components/ui/text-area';
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper';
import WaterWaveWrapper from '@/components/visualEffects/water-wave-wrapper';
import FeaturedSection from '@/sections/featured';
import LandingSection from '@/sections/landing';
import { BsLinkedin } from 'react-icons/bs';
import { FaArrowRight, FaGithub, FaGoogle, FaUser } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { SiLeetcode } from 'react-icons/si';
import { TbPigMoney } from 'react-icons/tb';
export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius={'3'}
      perturbance={'3'}
      resolution={'2048'}
    >
      {() => (
        <div className="p-8">
          {/* <LandingSection /> */}
          <FeaturedSection />
        </div>
      )}
    </WaterWaveWrapper>
  );
}

