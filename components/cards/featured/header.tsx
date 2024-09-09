import { FC } from 'react';

// 01展示页中，卡片头部的标题，比如 "Demo - Sep 2023"
interface HeaderProps {
  title: string;
  tag: string;
}

const Header: FC<HeaderProps> = ({ title, tag }) => {
  return (
    <div
      className="
      bg-secondary-background   
      flex flex-none flex-nowrap /* 弹性布局，不伸缩，不换行 */
      relative                   /* 相对定位 */
      p-6                        /* 内边距 1.5rem (24px) */
      w-full                     /* 宽度 100% */
      items-center               /* 垂直居中对齐 */
      justify-between            /* 水平两端对齐 */
      h-12                       /* 高度 3rem (48px) */
      border border-border       /* 边框样式 */
      rounded-3xl                /* 大圆角 */
    "
    >
      {/* 标题 */}
      <div>
        <p
          className="
          text-lg                /* 文字大小 1.125rem (18px) */
          font-medium            /* 中等字重 */
          leading-3              /* 行高 0.75rem (12px) */
          text-primary-foreground /* 主要前景色 */
        "
        >
          {title}
        </p>
      </div>
      {/* 标签 */}
      <div>
        <p
          className="
          text-lg                /* 文字大小 1.125rem (18px) */
          font-medium            /* 中等字重 */
          leading-3              /* 行高 0.75rem (12px) */
          font-pixel             /* 像素字体 */
          text-secondary-foreground /* 次要前景色 */
        "
        >
          {tag}
        </p>
      </div>
    </div>
  );
};

export default Header;
