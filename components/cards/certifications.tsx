import React from 'react';
import Card from '../ui/card';
import { Timeline, TimelineItem } from '../ui/timeline';

// 定义证书数据的接口
interface Certification {
  date: string;
  title: string;
  subTitle: string;
}

// 证书数据
const certificationsData: Certification[] = [
  {
    date: '2024',
    title: 'AWS Certified Developer - Associate (DVA-C02)',
    subTitle: 'Amazon Web Services'
  },
  {
    date: '2000',
    title: 'Born Certification',
    subTitle: 'China'
  }
];

// CertificationsCard 组件
const CertificationsCard: React.FC = () => {
  return (
    <Card title="My Certifications">
      <Timeline>
        {certificationsData.map((cert, index) => (
          <TimelineItem key={index} date={cert.date} title={cert.title} subTitle={cert.subTitle} />
        ))}
        {/* 添加一个额外的注释 */}
      </Timeline>
      <p
        className="
          text-sm               /* 小号字体 */
          text-secondary-foreground /* 次要前景色 */
          italic                /* 斜体 */
          mt-4                  /* 上边距 16px */
        "
      >
        How I wish I could have more...
      </p>
    </Card>
  );
};

export default CertificationsCard;
