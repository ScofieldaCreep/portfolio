import React from 'react';
import Card from '../ui/card';
import { Timeline, TimelineItem } from '../ui/timeline';

const experiencesData = [
  {
    date: '2022 - Now',
    title: 'Teacher and instructor',
    subTitle: 'Udemy',
    link: 'https://www.udemy.com/user/mohamed-hajji-25',
    tag: 'Remote'
  },
  {
    date: '2020 - 2021',
    title: 'React js full stack developer',
    subTitle: 'Toptal',
    link: 'https://www.toptal.com/',
    tag: 'Remote'
  }
];

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {experiencesData.map((experience, index) => (
          <TimelineItem
            key={index}
            date={experience.date}
            title={experience.title}
            subTitle={experience.subTitle}
            link={experience.link}
            tag={experience.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}

