import React from 'react';
import Card from '../ui/card';
import { Timeline, TimelineItem } from '../ui/timeline';

const educationsData = [
  {
    date: '2018 - 2022',
    title: 'Bachelor of Science in Computer Science',
    subTitle: 'Massachusetts Institute of Technology'
  },
  {
    date: '2016 - 2018',
    title: 'Advanced Level',
    subTitle: 'International School'
  }
];

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {educationsData.map((education, index) => (
          <TimelineItem
            key={index}
            date={education.date}
            title={education.title}
            subTitle={education.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

