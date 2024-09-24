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
export async function getStaticProps({ params }) {
  const notion = new NotionAPI();
  const pageId = params.pageId;
  const recordMap = await notion.getPage(pageId);
  return {
    props: {
      recordMap,
      pageId
    }
  };
}

// 获取动态路径
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

// 渲染 Notion 页面
const BlogPage = ({ recordMap, pageId }) => {
  const router = useRouter();

  const handleLinkClick = (pageId) => {
    router.push(`/blog/${pageId}`);
  };

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf,
        PageLink: ({ href, as, passHref, prefetch, replace, scroll, shallow, locale, ...props }) => (
          <a
            {...props}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(href);
            }}
          />
        )
      }}
    />
  );
};

export default BlogPage;
