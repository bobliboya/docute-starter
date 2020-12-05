/* globals Docute */

new Docute({
    layout: 'left',
    target: '#docute',
    sourcePath: './docs/',
    nav: [{
            title: 'Home',
            link: '/README'
        },
        {
            title: 'About',
            link: '/about'
        }
    ],
    detectSystemDarkTheme: true,
    darkThemeToggler: true,
    /* 导航栏 */
    sidebar: [{
        /*第一组*/
        title: '序言',
        links: [{
                title: '终身学习者一定会喜欢这部万物大历史',
                link: '/xuyan/Gates'
            },
            {
                title: '中文版序',
                link: '/xuyan/installation'
            },
            {
                title: '前言',
                link: '/xuyan/qianyan'
            },
            {
                title: 'Preface',
                link: '/xuyan/preface'
            },
            {
                title: '绪论',
                link: '/xuyan/xulun'
            },
            {
                title: 'Introduction',
                link: '/xuyan/introduction'
            },

        ]



    }],
})