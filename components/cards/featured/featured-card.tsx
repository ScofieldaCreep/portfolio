import { FC, ReactNode } from 'react';
import Header from './header';
import Video from './video';

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video?: string;
  image?: string;
  active: boolean;
  link?: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({ logo, title, tag, video, image, active, link }) => {
  const content = (
    <div
      className="
      link
      w-full h-full
      rounded-3xl
      flex flex-col gap-2 flex-nowrap
      p-2
    "
    >
      <Header title={title} tag={tag} />

      <div
        className="
        relative
        flex float-none flex-nowrap
        p-6
        w-full
        items-center justify-center
        h-[550px]
        border border-border
        rounded-3xl
      "
      >
        <Video video={video} image={image} active={active} />
      </div>

      {logo && <div className="absolute top-4 left-4 z-10">{logo}</div>}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default FeaturedCard;
