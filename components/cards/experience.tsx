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
    date: 'Feb 2025 — Present',
    company: 'PayPal',
    title: 'Software Engineer',
    description: [
      'Led American Express transaction fee calculation system using Snowflake and PostgreSQL, managing billions in daily transaction volume',
      'Spearheaded Braintree\'s net settlement project, enabling next-day fund transfers and optimizing cash flow efficiency',
      'Participated in legacy system refactoring, migrating Ruby and Kotlin business logic to Snowflake and Java',
      'Enhanced system observability by implementing transaction tracing pipeline using Sentry and Datadog'
    ],
    tag: 'Full-time'
  },
  {
    date: 'May 2024 — Aug 2024',
    company: 'PayPal',
    title: 'Software Engineer Intern',
    description: [
      'Developed B2B backend service using Kotlin and Spring Boot to calculate transaction fees and generate compliance reports',
      'Built efficient Kafka message queues within Kubernetes for distributed event processing',
      'Optimized transaction verification and settlement workflows with Airflow DAGs and Spark jobs',
      'Migrated data infrastructure from AWS S3 to GCP Cloud Storage using Scala'
    ],
    tag: 'Intern'
  }
];
