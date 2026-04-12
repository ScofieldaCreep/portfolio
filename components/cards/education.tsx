import React from 'react';
import Card from '../ui/card';
import { Timeline, TimelineItem } from '../ui/timeline';

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {EducationsData.map((ed, i) => (
          <TimelineItem key={i} date={ed.date} title={ed.title} subTitle={ed.subTitle} />
        ))}
      </Timeline>
    </Card>
  );
}

const EducationsData = [
  {
    date: '2018 — 2023',
    title: 'BS in Construction Management',
    subTitle: ['Tianjin University']
  },
  {
    date: '2023 — 2025',
    title: 'MS in Computer Science',
    subTitle: ['New York University']
  }
];
