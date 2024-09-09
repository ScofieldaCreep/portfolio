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
    date: '2018 — 2022',
    title: 'BEng in Construction Management',
    subTitle: ['Tianjin University', 'GPA: 3.81/4.0', 'TOP 0.5% of Chinese students', 'TOP 10% of the class']
  },
  {
    date: '2023 — 2024',
    title: 'MS in Computer Science',
    subTitle: ['New York University', 'GPA: 3.5/4.0']
  }
];
