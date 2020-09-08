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
    sidebar: [{
        /*第一组*/

        title: 'Start',
        links: [{
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



    }],
})