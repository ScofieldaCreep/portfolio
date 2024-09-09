import { FC, ReactNode } from 'react';
import Button from '../ui/button';

interface ContactCardProps {
  title: string;
  icon: ReactNode;
  text: string;
  btnText: string;
}

const ContactCard: FC<ContactCardProps> = ({ icon, btnText, text, title }) => {
  return (
    <div className="bg-secondary-background border border-border rounded-lg relative overflow-hidden p-5 shadow-md">
      {/* 卡片容器 */}
      <div className="flex flex-col gap-4">
        {/* 标题行 */}
        <div className="flex items-center gap-x-2">
          {/* 图标容器 */}
          <span className="bg-white w-8 h-8 rounded-lg grid place-items-center">{icon}</span>
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>

        {/* 内容和按钮行 */}
        <div className="flex justify-between items-center">
          {/* 主要文本 */}
          <h2 className="font-bold text-xl">{text}</h2>
          {/* 操作按钮 */}
          <Button className="w-24">{btnText}</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
