import { defineConfig } from 'vitepress'
import { buildFooter } from './build-info.mjs'

const sections = [
  {
    text: '组织介绍',
    link: '/',
    items: [{ text: '组织介绍', link: '/' }]
  },
  {
    text: '服内事项',
    items: [
      { text: '服务器相关', link: '/info/server-info' },
      { text: '游玩规则', link: '/rules/play-rules' },
      { text: '入服步骤', link: '/guide/join-steps' },
      { text: '服内指令', link: '/info/commands' },
      { text: '服内模组', link: '/info/mods' },
      { text: '服内数据包', link: '/info/datapacks' },
      { text: '服内称号获取', link: '/gameplay/titles' },
      { text: '玩家图鉴', link: '/gameplay/altas' },
      { text: '皮肤站相关', link: '/gameplay/skin' },
      { text: 'PCL配置教程', link: '/guide/pcl-config' },
      { text: 'FCL入服教程', link: '/guide/fcl-mobile' },
      { text: 'Xintinglei客户端安装教程', link: '/guide/xintinglei-client-installation' },
      { text: 'Xintinglei客户端介绍', link: '/guide/XintingleiClient-ver-Rosa' },
      { text: '生电服专属附魔玩法', link: '/info/centifolia-enchantments' },
      { text: '周年庆活动', link: '/info/anniversary-activity' }
    ]
  },
  {
    text: '群聊相关',
    items: [
      { text: '群聊守则', link: '/rules/qq-group-rules' },
      { text: '群头衔获取', link: '/gameplay/qq-titles' },
      { text: '邀请好友', link: '/guide/invite-friends' }
    ]
  },
  {
    text: '其他内容',
    items: [
      { text: '管理人员', link: '/about/managers' },
      { text: '赞助相关', link: '/others/donate' }
    ]
  },
  {
    text: '杂项',
    items: [
      { text: '一些Q&A', link: '/guide/qa' },
      { text: '神人史', link: '/about/legends' },
      { text: '组织简史', link: '/about/history' },
      { text: '图片风采', link: '/about/gallery' }
    ]
  },
  {
    text: '鸣谢',
    items: [
      { text: '特别鸣谢', link: '/about/thanks' },
      { text: '赞助鸣谢', link: '/about/sponsors' }
    ]
  }
]

export default defineConfig({
  appearance: false,
  titleTemplate: false,
  title: '新亭泪',
  description: '新亭泪服务器官方文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
  ],
  themeConfig: {
    search: { provider: 'local' },
    footer: {
      message: `
        <a class="footer-brand" href="/" aria-label="返回新亭泪文档首页">
          <span class="footer-brand-name">XINTINGLEI</span>
          <span class="footer-brand-subtitle">COMMUNITY DOCUMENTATION</span>
        </a>
        <span class="footer-copyright">
          <span>&copy; 2024-2026 Xintinglei</span>
          <span>新亭泪官方文档</span>
        </span>`,
      copyright: `
        <span class="footer-links" role="group" aria-label="文档源码与许可">
          <a class="footer-source" href="https://github.com/BaizhouziYou/XintingleiOfficialDocs" target="_blank" rel="noopener noreferrer" aria-label="查看 Xintinglei Docs 源码">Xintinglei Docs <span aria-hidden="true">SOURCE ↗</span></a>
          <a href="https://github.com/BaizhouziYou/XintingleiOfficialDocs/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">代码 MIT</a>
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank" rel="noopener noreferrer">文档 CC BY-NC-SA 4.0</a>
        </span>
        <span class="footer-records" role="group" aria-label="网站备案信息">
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">蜀ICP备2025122567号-1</a>
          <a href="https://beian.mps.gov.cn/#/query/webSearch?code=51010702043466" target="_blank" rel="noopener noreferrer">川公网安备51010702043466号</a>
        </span>
        <span class="build-info">${buildFooter()}</span>`
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BaizhouziYou/XintingleiOfficialDocs' }
    ],
    nav: [
      { text: '官网', link: 'https://xintinglei.cn' },
      ...sections.map(({ text, link, items }) => ({ text, link, items }))
    ],
    sidebar: sections.map((section) => ({
      ...section,
      collapsed: true,
      collapsible: true
    }))
  }
})
