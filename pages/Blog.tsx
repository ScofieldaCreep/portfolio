import { NotionAPI } from 'notion-client';
import * as React from 'react';
import { NotionRenderer } from 'react-notion-x';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

// 懒加载较重的组件
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection));
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation));
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), { ssr: false });
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), { ssr: false });

// 获取 Notion 页面数据
export async function getStaticProps() {
  const notion = new NotionAPI();
  // https://chizhang111.notion.site/Chi-s-Blog-10a60c58edc280f39036c84b3da84780?pvs=4
  const recordMap = await notion.getPage('10a60c58edc280f39036c84b3da84780');
  return {
    props: {
      recordMap
    }
  };
}

// 渲染 Notion 页面
const Blog = ({ recordMap }) => {
  return <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />;
};

export default Blog;
