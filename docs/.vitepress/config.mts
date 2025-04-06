import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "perry-note",
  description: "A blog bulid by VitePress",
  cleanUrls: true,
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
        base: '/study',
        items: [
          { text: '规范参考', link: '/0-markdown-syntax' }
        ]
      },
      {
        text: 'git',
        base: '/study',
        items: [
          { text: 'convention风格', link: '/1-git-commit-convention' },
          { text: '配置参考', link: '/1.1-ssh-key-configuration' }
        ]
      },
      {
        text: '前端学习',
        base: '/study',
        items: [
          { text: '学习框架', link: '/2-frontend-concepts' },
          { text: '基础知识', link: '/2.1.3-javascript-basics' },
          { text: '异步编程', link: '/2.1.5-async-programming' },
          { text: '事件循环和界面渲染', link: '/2.2.1-event-loop-rendering.svg' },
          { text: '渲染模式', link: '/2.3.1-rendering-modes' },
          { text: 'SSR（服务端渲染）', link: '/2.3.2-ssr-csr-analysis-nuxt' },
          { text: 'Node.js', link: '/2.6.1-nodejs-browser-differences' },
          { text: 'nvm', link: '/2.6.2-nvm-nodejs' },
          { text: 'JavaScript的历史演进', link: '/2.9.1-javascript-history' }
        ]
      },
      {
        text: 'license',
        base: '/study',
        items: [
          { text: '开源协议关系和区别', link: '/4-license' }
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
