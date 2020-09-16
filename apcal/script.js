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

    /* 导航栏 */
    sidebar: [
        // A sidebar item, with child links
        {
            title: 'Start / 介绍',
            children: [{
                    title: 'Precalculus复习',
                    link: '/start/preview'
                },
                {
                    title: '微积分的已有应用',
                    link: '/start/apply'
                },
                {
                    title: '微分简介',
                    link: '/start/introd'
                },
                {
                    title: '积分简介',
                    link: '/start/introi'
                },
                {
                    title: '微分与积分的综合对比',
                    link: '/start/compare'
                },
                {
                    title: 'Introduction',
                    link: '/start/introduction'
                },

            ]
        },
        // An external link
        {
            title: 'Limit / 极限',
            children: [{
                title: '数列的极限',
                link: '/limit/los'
            }, ]
        },
        /*Sep*/


    ]
})