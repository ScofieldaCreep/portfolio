import React from 'react';
import Card from '../ui/card';
export default function BackgroundCard() {
  return (
    <div>
      <Card className="md:h-full" title="My Background">
        <div>
          <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
            My journey in tech started with a{' '}
            <span className="text-white underline">strong foundation</span> in
            Construction Management from Tianjin University, leading me to
            pursue a Masters in Computer Science at New York University. This
            path has equipped me with a{' '}
            <span className="text-white underline">
              keen analytical mindset
            </span>{' '}
            and a passion for solving complex problems.
            <br />
            <br />
            Ive had the opportunity to intern at{' '}
            <span className="text-white underline">
              top tech companies
            </span>{' '}
            like PayPal, ByteDance, and Qihoo 360, where I developed skills in
            distributed systems, cloud computing, and data processing. These
            experiences have allowed me to make significant contributions to
            various projects, from developing B2B backend services to optimizing
            data processing logic.
            <br />
            <br />I am skilled in a range of{' '}
            <span className="text-white underline">
              programming languages and technologies
            </span>
            , such as Java, Python, Kotlin, React.js, and Spring Boot. My
            ability to adapt to different software development environments has
            enabled me to work on scalable, efficient solutions that tackle
            real-world issues.
            <br />
            <br />
            My journey from a humble beginning to a career in technology
            showcases my{' '}
            <span className="text-white underline">
              resilience, dedication, and passion
            </span>{' '}
            for computer science. I am always eager to learn and take on new
            challenges.
          </p>
        </div>
      </Card>
    </div>
  );
}

