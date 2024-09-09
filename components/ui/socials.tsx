import Button from './button';
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa6';

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    link: 'https://github.com/scofieldacreep',
    username: 'scofieldacreep'
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    link: 'https://www.linkedin.com/in/chizhang111',
    username: 'Chi Zhang'
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    link: 'https://www.instagram.com/zcccofield/',
    username: 'Chi Zhang'
  },
  {
    icon: <SiLeetcode className="w-5 h-5" />,
    link: 'https://leetcode.com/scofieldacreep/',
    username: 'scofieldacreep'
  }
];
