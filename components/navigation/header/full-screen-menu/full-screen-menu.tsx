import { motion } from 'framer-motion';
import { menuSlide } from './animation';
import Curve from './curve';
import Profile from '@/components/ui/profile';
import NavLink from './nav-link';
import MenuCard from './menu-card';

export default function FullScreenMenu() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald"
    >
      <div className="relative w-full pl-[5%]">
        <div className="absolute top-8">
          <Profile />
        </div>
      </div>
      {/*Menu and card*/}
      <div className="absolute bottom-32 w-full lg:px-[5%]">
        <div className="grid relative" style={{ gridTemplateColumns: '1fr 500px' }}>
          <div className="pl-4 flex flex-col justify-end">
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index }} />
            ))}
          </div>
          <MenuCard />
        </div>
      </div>
      {/*Footer links*/}
      <div className="w-[95%] pl-[5%] absolute bottom-8">
        <div className="flex flex-wrap items-center justify-between uppercase text-white text-sm">
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/chizhang111" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors">LINKEDIN</a>
            <a href="https://github.com/chichasescheese" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">GITHUB</a>
            <a href="https://www.instagram.com/zcccofield/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-colors">INSTAGRAM</a>
          </div>
          <div className="flex items-center gap-4">
            <span>©2025 Chi Zhang</span>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}

const navItems = [
  {
    title: 'Home',
    href: '/#'
  },
  {
    title: 'Featured',
    href: '/#featured'
  },
  {
    title: 'About',
    href: '/#about'
  },
  {
    title: 'Contact',
    href: '/#contact'
  },
  {
    title: 'Blog',
    href: '/blog'
  }
];
