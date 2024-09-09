// "use client" 指令告诉 Next.js 这个文件中的组件应该在客户端渲染。没有 "use client" 的组件默认被视为服务器组件。
'use client';

import { FC, memo, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// 动态导入 AnimatedCursor 组件,禁用服务器端渲染
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), { ssr: false });

// 定义 Cursor 组件的 props 接口
interface CursorProps {
  color: string;
  outerSize?: number;
  innerSize?: number;
  outerScale?: number;
  innerScale?: number;
  outerAlpha?: number;
  clickables?: string[];
}

// 默认的可点击元素
const DEFAULT_CLICKABLES = ['a', 'button', 'select', 'input', '.link'];

// 使用 memo 包装 Cursor 组件以避免不必要的重渲染
const Cursor: FC<CursorProps> = memo(
  ({
    color,
    outerSize = 35,
    innerSize = 8,
    outerScale = 2,
    innerScale = 1,
    outerAlpha = 0,
    clickables = DEFAULT_CLICKABLES
  }) => {
    // 使用 useState 和 useEffect 来处理客户端渲染
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    // 如果组件还未挂载,返回 null
    if (!isMounted) {
      return null;
    }

    return (
      <AnimatedCursor
        innerSize={innerSize}
        outerSize={outerSize}
        innerScale={innerScale}
        outerScale={outerScale}
        outerAlpha={outerAlpha}
        innerStyle={{
          backgroundColor: color
        }}
        outerStyle={{
          border: `1px solid ${color}`
        }}
        clickables={clickables}
      />
    );
  }
);

// 为了在开发环境中更好地识别组件,添加显示名称
Cursor.displayName = 'Cursor';

export default Cursor;
