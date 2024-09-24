// _app.js 是 Next.js 项目中的一个特殊文件，用于自定义应用程序的根组件。它允许你在页面之间共享布局、状态和样式。通过在 _app.js 中引入全局样式，可以确保这些样式在整个应用程序中生效。

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
