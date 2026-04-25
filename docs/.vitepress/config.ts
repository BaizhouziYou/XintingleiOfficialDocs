import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: false,
  titleTemplate: false,
  title: '新亭泪',
  description: '新亭泪服务器官方文档',
  themeConfig: {
    search: {
      provider: 'local'
    },
    footer: {
      message: '<div class="footer-links"><a href="http://beian.miit.gov.cn" target="_blank" style="color:var(--vp-c-text-2);">蜀ICP备2025122567号-1</a> <span style="margin:0 8px;">|</span> <a href="https://beian.mps.gov.cn/#/query/webSearch?code=51010702043466" target="_blank" style="color:var(--vp-c-text-2);">川公网安备51010702043466号</a></div> 网站代码基于 MIT 协议开源，文档内容基于 CC BY-NC-SA 4.0 协议许可。',
      copyright: 'Copyright &copy; 2024-2026 新亭泪 All Rights Reserved.'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BaizhouziYou/XintingleiOfficialDocs' }
    ],
    nav: [
      { text: '组织介绍', link: '/' },
      { 
        text: '服内事项', 
        items: [
          { text: '服务器相关', link: '/info/server-info' },
          { text: '游玩规则', link: '/rules/play-rules' },
          { text: '入服步骤', link: '/guide/join-steps' },
          { text: '服内指令', link: '/info/commands' },
          { text: '服内模组', link: '/info/mods' },
          { text: '服内称号获取', link: '/gameplay/titles' },
          { text: '皮肤站相关', link: '/gameplay/skin' },
          { text: 'PCL配置教程', link: '/guide/pcl-config' },
          { text: 'FCL入服教程', link: '/guide/fcl-mobile' }
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
          { text: '赞助渠道', link: '/others/donate' }
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
    ],
    sidebar: [
      {
        text: '组织介绍',
        link: '/',
        collapsed: true,
        collapsible: true,
        items: [
            { text: '组织介绍', link: '/' }
            ]
      },
      {
        text: '服内事项',
        collapsed: true, 
        collapsible: true,
        items: [
          { text: '服务器相关', link: '/info/server-info' },
          { text: '游玩规则', link: '/rules/play-rules' },
          { text: '入服步骤', link: '/guide/join-steps' },
          { text: '服内指令', link: '/info/commands' },
          { text: '服内模组', link: '/info/mods' },
          { text: '服内称号获取', link: '/gameplay/titles' },
          { text: '皮肤站相关', link: '/gameplay/skin' },
          { text: 'PCL配置教程', link: '/guide/pcl-config' },
          { text: 'FCL入服教程', link: '/guide/fcl-mobile' }
        ]
      },
      {
        text: '群聊相关',
        collapsed: true, 
        collapsible: true,
        items: [
          { text: '群聊守则', link: '/rules/qq-group-rules' },
          { text: '群头衔获取', link: '/gameplay/qq-titles' },
          { text: '邀请好友', link: '/guide/invite-friends' }
        ]
      },
      {
        text: '其他内容',
        collapsed: true, 
        collapsible: true,
        items: [
          { text: '管理人员', link: '/about/managers' },
          { text: '赞助渠道', link: '/others/donate' }
        ]
      },
      {
        text: '杂项',
        collapsed: true, 
        collapsible: true,
        items: [
          { text: '一些Q&A', link: '/guide/qa' },
          { text: '神人史', link: '/about/legends' },
          { text: '组织简史', link: '/about/history' },
          { text: '图片风采', link: '/about/gallery' }
        ]
      },
      {
        text: '鸣谢',
        collapsed: true, 
        collapsible: true,
        items: [
          { text: '特别鸣谢', link: '/about/thanks' },
          { text: '赞助鸣谢', link: '/about/sponsors' }
        ]
      }
    ]
  }
})