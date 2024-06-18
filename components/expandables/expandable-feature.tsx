import React, { useState } from 'react';
import FeaturedCard from '../cards/featured/featured-card';
import { featuredData } from '@/data';
import { cn } from '@/lib/utils';

export default function ExpandableFeatured() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handelMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
  };
  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
      {featuredData.slice(1).map((featured, index) => (
        <div
          key={index}
          className={cn(
            'relative h-[640] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out',
            index === hoveredIndex ? 'lg:w-[42%]' : 'lg:w-[33%]'
          )}
          onMouseEnter={() => handelMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <FeaturedCard
            active={hoveredIndex === index}
            title={featured.title}
            tag={featured.tag}
            video={featured.video}
          />
        </div>
      ))}
    </div>
  );
}

