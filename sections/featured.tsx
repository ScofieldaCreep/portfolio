import FeaturedCard from '@/components/cards/featured/featured-card';
import ExpandableFeatured from '@/components/expandables/expandable-featured';
import Heading from '@/components/heading/heading';
import { featuredData } from '@/data';

// 获取主要特色项目数据
const MainFeatured = featuredData[0];

export default function FeaturedSection() {
  return (
    <section className="pt-24 px-3 lg:px-8">
      {/* 标题组件 */}
      <Heading number="01" title_1="Featured" title_2="Work" />

      {/* 主要特色项目卡片 */}
      <FeaturedCard active title={MainFeatured.title} tag={MainFeatured.tag} video={MainFeatured.video} />

      {/* 可展开的其他特色项目 */}
      <div className="mt-24">
        <ExpandableFeatured />
      </div>
    </section>
  );
}
