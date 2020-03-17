module.exports = {
    title: '後生安一一', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '後生安 | 后生安 | 安一一', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/egg.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {    
        logo: '/avt.jpeg',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: '看代码', link: '/pages/code/js.md' },
                    { text: '学英语', link: '/pages/english/one.md' },
                ]
            },
            // { text: '功能演示', link: '/pages/folder1/test3.md' },
            { text: 'Github', link: 'https://github.com/yiyi-an/yiyi-an.github.io' },
        ],
        sidebar: {
            '/pages/code/':[
                {
                    title: 'Coding',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['http.md', 'HTTP'],
                        ['htmlcss.md', 'HTML/CSS'],
                        ['js.md', 'Javascript'],
                        ['vue.md', 'Vue'],
                        ['node.md', 'Node'],
                        ['webpack.md', 'Webpack'],
                        ['wxdev.md', '微信开发'],
                        ['PAP.md', '项目实际问题'],
                    ]
                }
            ],
            '/pages/english/':[
              {
                  title: 'learn English',   // 必要的
                  collapsable: false, // 可选的, 默认值是 true,
                  sidebarDepth: 1,    // 可选的, 默认值是 1
                  children: [
                      ['one.md', '基础语法'],
                  ]
              }
          ]
        }
    }
}