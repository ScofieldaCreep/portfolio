import { featuredData } from "@/data";
import FeaturedCard from "../cards/featured/featured-card";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ExpandableFeatured() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const items = featuredData.slice(1);

  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
      {items.map((featured, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[640px] mb-16 transition-all origin-center duration-300 ease-in-out",
            i === hoveredIndex ? "lg:w-[55%]" : "lg:w-[45%]"
          )}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <FeaturedCard
            active={i === hoveredIndex}
            title={featured.title}
            tag={featured.tag}
            video={featured.video}
            image={featured.image}
            link={featured.link}
          />
        </div>
      ))}
    </div>
  );
}
