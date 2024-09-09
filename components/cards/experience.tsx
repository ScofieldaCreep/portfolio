import React from 'react';
import Card from '../ui/card';
import { cn } from '@/lib/utils';

const ExperienceItem: React.FC<{
  date: string;
  company: string;
  title: string;
  description: string[];
  tag?: string;
}> = ({ date, company, title, description, tag }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex justify-between items-center mb-1">
      <h3 className="font-semibold text-primary-foreground">{company}</h3>
      <span className="text-sm text-secondary-foreground">{date}</span>
    </div>
    <div className="flex justify-between items-center mb-2">
      <p className="text-sm font-medium">{title}</p>
      {tag && <span className="text-xs bg-secondary-background px-2 py-1 rounded-full">{tag}</span>}
    </div>
    <ul className="list-disc list-inside text-sm text-secondary-foreground space-y-1">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default function ExperienceCard() {
  return (
    <Card title="Professional Experience" className="space-y-4">
      {experiencesData.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </Card>
  );
}

const experiencesData = [
  {
    date: 'May 2024 — Aug 2024',
    company: 'Paypal',
    title: 'Software Engineer Intern',
    description: [
      'Developed B2B backend service using Kotlin and Spring Boot',
      'Implemented Kafka message producers within Kubernetes',
      'Optimized data processing logic with Airflow DAGs and Spark jobs',
      'Scripted data migration from AWS S3 to GCP Cloud Storage'
    ],
    tag: 'Intern'
  },
  {
    date: 'Mar 2022 — Aug 2022',
    company: 'ByteDance',
    title: 'Software Engineer Intern',
    description: [
      'Processed large-scale user activity data (300GB/day) using Hadoop and Spark',
      'Collaborated on anti-fraud model training and algorithm A/B tests',
      'Developed real-time data processing platform using Flink and Kafka'
    ],
    tag: 'Intern'
  },
  {
    date: 'Jul 2021 — Oct 2021',
    company: 'Qihoo 360',
    title: 'Software Developer Intern',
    description: [
      'Integrated Restful APIs for smart camera data platform',
      'Developed logic module archetypes in Python for smart camera system',
      'Wrote unit tests using PyTest for quality assurance'
    ],
    tag: 'Intern'
  }
];
