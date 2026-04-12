import { ReactNode } from 'react';
import {
  SiCplusplus, SiJavascript, SiTypescript, SiPython, SiRust,
  SiReact, SiNextdotjs, SiVuedotjs, SiHtml5, SiCss3,
  SiSpringboot, SiNodedotjs, SiDjango,
  SiRedis, SiPostgresql, SiMongodb, SiApachehadoop, SiApachespark,
  SiKubernetes, SiDocker, SiApachekafka, SiJenkins,
  SiKotlin
} from 'react-icons/si';
import { FaJava, FaNetworkWired } from 'react-icons/fa';

interface StackItem {
  id: number;
  title: string;
  image?: any;
  icon?: ReactNode;
  bgColor: string;
}

interface StackCategory {
  title: string;
  stack: StackItem[];
}

export const stackData: StackCategory[] = [
  {
    title: 'Languages',
    stack: [
      { id: 0, title: 'C/C++', icon: <SiCplusplus className="w-5 h-5" />, bgColor: '#00599C' },
      { id: 1, title: 'Java', icon: <FaJava className="w-5 h-5" />, bgColor: '#ED8B00' },
      { id: 2, title: 'Python', icon: <SiPython className="w-5 h-5" />, bgColor: '#3776AB' },
      { id: 3, title: 'JS', icon: <SiJavascript className="w-5 h-5" />, bgColor: '#F0DB4F' },
      { id: 4, title: 'TS', icon: <SiTypescript className="w-5 h-5" />, bgColor: '#3179C7' },
      { id: 5, title: 'Kotlin', icon: <SiKotlin className="w-5 h-5" />, bgColor: '#7F52FF' },
      { id: 6, title: 'Rust', icon: <SiRust className="w-5 h-5" />, bgColor: '#CE422B' },
    ]
  },
  {
    title: 'Frontend',
    stack: [
      { id: 0, title: 'React', icon: <SiReact className="w-5 h-5" />, bgColor: '#61DAFB' },
      { id: 1, title: 'Next.js', icon: <SiNextdotjs className="w-5 h-5" />, bgColor: '' },
      { id: 2, title: 'Vue.js', icon: <SiVuedotjs className="w-5 h-5" />, bgColor: '#4FC08D' },
      { id: 3, title: 'HTML5', icon: <SiHtml5 className="w-5 h-5" />, bgColor: '#E34F26' },
      { id: 4, title: 'CSS3', icon: <SiCss3 className="w-5 h-5" />, bgColor: '#1572B6' },
    ]
  },
  {
    title: 'Backend',
    stack: [
      { id: 0, title: 'Spring', icon: <SiSpringboot className="w-5 h-5" />, bgColor: '#6DB33F' },
      { id: 1, title: 'Node.js', icon: <SiNodedotjs className="w-5 h-5" />, bgColor: '#339933' },
      { id: 2, title: 'Django', icon: <SiDjango className="w-5 h-5" />, bgColor: '#092E20' },
    ]
  },
  {
    title: 'Data',
    stack: [
      { id: 0, title: 'Redis', icon: <SiRedis className="w-5 h-5" />, bgColor: '#DC382D' },
      { id: 1, title: 'Postgres', icon: <SiPostgresql className="w-5 h-5" />, bgColor: '#4169E1' },
      { id: 2, title: 'MongoDB', icon: <SiMongodb className="w-5 h-5" />, bgColor: '#47A248' },
      { id: 3, title: 'Hadoop', icon: <SiApachehadoop className="w-5 h-5" />, bgColor: '#66CCFF' },
      { id: 4, title: 'Spark', icon: <SiApachespark className="w-5 h-5" />, bgColor: '#E25A1C' },
    ]
  },
  {
    title: 'DevOps',
    stack: [
      { id: 0, title: 'K8s', icon: <SiKubernetes className="w-5 h-5" />, bgColor: '#326CE5' },
      { id: 1, title: 'Docker', icon: <SiDocker className="w-5 h-5" />, bgColor: '#2496ED' },
      { id: 2, title: 'Kafka', icon: <SiApachekafka className="w-5 h-5" />, bgColor: '' },
      { id: 3, title: 'gRPC', icon: <FaNetworkWired className="w-5 h-5" />, bgColor: '#244C5A' },
      { id: 4, title: 'Jenkins', icon: <SiJenkins className="w-5 h-5" />, bgColor: '#D24939' },
    ]
  }
];
