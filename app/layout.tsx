import type { Metadata } from 'next';
import { Bricolage_Grotesque, Oswald } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from '../lib/utils';
import GrainEffect from '@/components/visualEffects/grain-effect';
import Cursor from '@/components/cursor/cursor';

// 字体定义
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage-grotesque'
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald'
});

const pixelFont = localFont({
  src: '../public/assets/fonts/pixel-font-7.ttf',
  variable: '--font-pixel'
});

// 元数据定义
export const metadata: Metadata = {
  title: 'Chi Zhang the Coder',
  description: 'Portfolio - Chi Zhang'
};

// 根布局组件
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(bricolageGrotesque.className, oswald.variable, pixelFont.variable)}>
        {/* 视觉效果组件 */}
        <GrainEffect />
        <Cursor color="#fff" />

        {/* 主要内容 */}
        {children}
      </body>
    </html>
  );
}
