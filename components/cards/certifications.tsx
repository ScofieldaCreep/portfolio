import React from 'react';
import Card from '../ui/card'; // Corrected the import path
import { Timeline, TimelineItem } from '../ui/timeline';

// Define the certifications data
const CertificationsData = [
  {
    date: '2021',
    title: 'Red Hat Certified Engineer (RHCE)',
    subTitle: 'RedHat'
  },
  {
    date: '2020',
    title: 'Huawei Certified Network Developer', // Corrected spelling
    subTitle: 'Huawei' // Corrected spelling
  },
  {
    date: '2020',
    title: 'Cisco Certified DevNet Associate',
    subTitle: 'Cisco'
  }
];

export default function CertificationsCard() {
  return (
    <Card title="My Certifications">
      <Timeline>
        {CertificationsData.map((certification, i) => (
          <TimelineItem
            key={i}
            date={certification.date}
            title={certification.title}
            subTitle={certification.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}
