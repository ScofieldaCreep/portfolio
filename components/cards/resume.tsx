import React from 'react';
import Card from '../ui/card';
import Image from 'next/image';
import SignatureImage from '@/public/assets/signature.png';
import Button from '../ui/button';
import { FaDownload } from 'react-icons/fa';
import Socials from '../ui/socials';
export default function ResumeCard() {
  return (
    <div>
      <Card className="md:h-full 2xl:h-fit">
        <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
          Hi, I&lsquom Chi Zhang, a Computer Science MS student at NYU with a
          strong background in Construction Management from Tianjin University.
          I&lsquove interned at PayPal, ByteDance, and Qihoo 360, focusing on
          distributed systems, cloud computing, and data processing. I&lsquom
          skilled in languages like Java, Python, and Kotlin, and have
          experience with frameworks and technologies such as React.js, Spring
          Boot, Kafka, and Hadoop. I&lsquom passionate about building scalable,
          efficient software solutions and am always eager to learn and take on
          new challenges.
        </p>
        <div>
          <Image src={SignatureImage} alt="Chi Zhang" />
        </div>

        <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
          <Socials />
          <Button>
            <FaDownload>Resume</FaDownload>
          </Button>
        </div>
      </Card>
    </div>
  );
}

