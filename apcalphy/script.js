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

        title: '序言',
        links: [{
                title: 'Introduction',
                link: '/start/intro'
            },
            {
                title: '10 Basic Principles of Economy',
                link: '/start/10prin'
            },
            {
                title: '前言',
                link: '/start/qianyan'
            },
            {
                title: 'Preface',
                link: '/start/preface'
            },
            {
                title: '绪论',
                link: '/start/xulun'
            },
            {
                title: 'Introduction',
                link: '/start/introduction'
            },

        ]



    }],
})