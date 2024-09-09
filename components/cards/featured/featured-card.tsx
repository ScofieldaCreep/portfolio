import { FC, ReactNode } from 'react';
import Header from './header';
import Video from './video';

// 定义 FeaturedCard 的属性接口
interface FeaturedCardProps {
  logo?: ReactNode; // 可选的 logo
  title: string; // 卡片标题
  tag: string; // 卡片标签
  video: string; // 视频 URL 或标识符
  active: boolean; // 卡片是否处于激活状态
}

const FeaturedCard: FC<FeaturedCardProps> = ({ logo, title, tag, video, active }) => {
  return (
    <div
      className="
      link 
      w-full h-full                  /* 占满容器宽高 */
      rounded-3xl                    /* 大圆角 */
      flex flex-col gap-2 flex-nowrap /* 纵向弹性布局 项目间间隔2 不换行 */
      p-2                            /* 内边距 2 */
    "
    >
      {/* 卡片头部 */}
      <Header title={title} tag={tag} />

      {/* 卡片主体 */}
      <div
        className="
        relative                     /* 相对定位 */
        flex float-none flex-nowrap  /* 弹性布局，不浮动，不换行 */
        p-6                          /* 内边距 6 */
        w-full                       /* 宽度100% */
        items-center justify-center  /* 居中对齐 */
        h-[550px]                    /* 固定高度 550px */
        border border-border         /* 边框样式 */
        rounded-3xl                  /* 大圆角 */
      "
      >
        {/* 视频组件 */}
        <Video video={video} active={active} />
      </div>

      {/* 如果提供了 logo，则渲染 logo */}
      {logo && <div className="absolute top-4 left-4 z-10">{logo}</div>}
    </div>
  );
};

export default FeaturedCard;
