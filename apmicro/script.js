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
                link: '/xuyan/intro'
            },
            {
                title: '10 Basic',
                link: '/xuyan/10prin'
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