import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

//Timeline ----------------------------------------------------
interface TimelineProps {
  children: ReactNode;
}

export const Timeline: FC<TimelineProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-6">{children}</div>;
};

//Timeline Item -----------------------------------------------

interface TimelineItemProps {
  date: string;
  title: string;
  subTitle: string | string[];
  link?: string;
  tag?: string;
  isCourse?: boolean;
}
// ... 前面的代码保持不变 ...

export const TimelineItem: FC<TimelineItemProps> = ({ date, subTitle, title, isCourse, link, tag }) => {
  return (
    <div className="flex flex-col gap-2">
      {/* 日期和标题行 */}
      <div className="flex items-start gap-4">
        {/* 日期 */}
        <div className={`flex-none ${isCourse ? 'w-0' : 'w-24'}`}>
          <p className="text-secondary-foreground whitespace-nowrap">{date}</p>
        </div>
        {/* 标题 */}
        <div className="flex-grow">
          <p className="text-primary-foreground font-medium text-sm leading-6">{title}</p>
        </div>
      </div>
      {/* 副标题行 */}
      <div className={`flex items-center ${isCourse ? 'ml-4' : 'ml-28'}`}>
        {link ? (
          <Link href={link} target="_blank" className="w-full">
            <Body link={link} subTitle={subTitle} tag={tag} />
          </Link>
        ) : (
          <Body subTitle={subTitle} tag={tag} />
        )}
      </div>
    </div>
  );
};

//Timeline Item Body -----------------------------------------------

interface BodyProps {
  subTitle: string | string[];
  tag?: string;
  link?: string;
}

const Body: FC<BodyProps> = ({ link, subTitle, tag }) => {
  const renderSubTitle = () => {
    if (typeof subTitle === 'string') {
      return <p className="text-sm font-normal leading-6">{subTitle}</p>;
    }
    return subTitle.map((line, index) => (
      <p key={index} className="text-sm font-normal leading-6">
        {line}
      </p>
    ));
  };

  return (
    <div className="text-secondary-foreground flex items-start flex-col">
      {renderSubTitle()}
      {link && <FiArrowUpRight className="mt-1" />}
      {tag && (
        <div className="mt-1 rounded-[20px] bg-white/5 py-0.5 px-1.5">
          <p className="text-[10px] font-normal text-secondary-foreground">{tag}</p>
        </div>
      )}
    </div>
  );
};
