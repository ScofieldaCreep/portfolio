import Image from 'next/image';
import Card from '../ui/card';
import SignatureImg from '@/public/assets/images/me/signature.png';
import Button from '../ui/button';
import { FaDownload } from 'react-icons/fa';
import Socials from '../ui/socials';
import Link from 'next/link';

const introText = [
  'Incoming SDE2 @ Paypal Core Transaction Team.',
  'Curiosity level: Cat with 9 lives (and daily knowledge anxiety)',
  'Jack of all trades: Management, Economics, and turning myself into a &quot;product&quot;',
  'INTP: Initially skeptical of MBTI, now a walking stereotype (but in a cool way)'
];

const CV_PATH = '/Chi_Zhang_Resume.pdf';

export default function ResumeCard() {
  return (
    <Card className="md:h-full flex flex-col justify-between">
      <IntroSection />
      <SignatureSection />
      <FooterSection />
    </Card>
  );
}

const IntroSection = () => (
  <div className="text-lg xl:text-2xl font-medium text-primary-foreground space-y-2">
    {introText.map((text, index) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
    ))}
  </div>
);

const SignatureSection = () => (
  <div className="my-4">
    <Image src={SignatureImg} alt="Personal Signature" />
  </div>
);

const FooterSection = () => {
  const handleDownload = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    window.open(CV_PATH, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:right-6">
      <Socials />
      <a href={CV_PATH} onClick={handleDownload} download="Chi_Zhang_Resume.pdf">
        <Button>
          <FaDownload className="mr-2" />
          Download CV
        </Button>
      </a>
    </div>
  );
};
