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
        title: '文法',
        links: [{
                title: 'SAT文法简介',
                link: '/grammar/aboutg'
            },
            {
                title: '标点符号',
                link: '/grammar/biaodian'
            },
            {
                title: '形容词作定语时的位置分析',
                link: '/grammar/adjp'
            },
            {
                title: '悬垂结构',
                link: '/grammar/xuanchui'
            },
            {
                title: '平行结构',
                link: '/grammar/parr'
            },
            {
                title: '代词',
                link: '/grammar/daici'
            },
            {
                title: '时态',
                link: '/grammar/tense'
            },

            {
                title: '词汇',
                link: '/grammar/word'
            },
            {
                title: '主谓一致',
                link: '/grammar/zhuwei'
            },
            {
                title: '倒装句',
                link: '/grammar/daoz'
            },

        ]



    }],
})