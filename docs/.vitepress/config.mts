import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "perry-note",
  description: "A blog bulid by VitePress",
  cleanUrls: true,
  base: "/perry-notes/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '学习笔记', link: '/study/2-frontend-concepts' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: 'markdown',
        items: [
          { text: '规范参考', link: '/0-markdown-syntax' }
        ]
      },
      {
        text: 'git',
        items: [
          { text: 'convention风格', link: '/study/1-git-commit-convention' },
          { text: '配置参考', link: '/study/1.1-ssh-key-configuration' }
        ]
      },
      {
        text: '前端学习',
        items: [
          { text: '学习框架', link: '/study/2-frontend-concepts' },
          { text: 'HTML5', link: '/study/2.1.1-html5' },
          { text: 'JavaScript基础', link: '/study/2.1.3-javascript-basics' },
          { text: '异步编程', link: '/study/2.1.5-async-programming' },
          { text: '事件循环和界面渲染', link: '/study/2.2.1-event-loop-rendering.svg' },
          { text: '渲染模式', link: '/study/2.3.1-rendering-modes' },
          { text: 'SSR（服务端渲染）', link: '/study/2.3.2-ssr-csr-analysis-nuxt' },
          { text: 'Node.js', link: '/study/2.6.1-nodejs-browser-differences' },
          { text: 'nvm', link: '/study/2.6.2-nvm-nodejs' },
          { text: 'JavaScript的历史演进', link: '/study/2.9.1-javascript-history' }
        ]
      },
      {
        text: 'license',
        items: [
          { text: '开源协议关系和区别', link: '/study/4-license' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    outline: {
      label: '页面导航'
    },
  }
})
