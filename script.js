/* globals Docute */

new Docute({
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
                title: '终身学习者一定会喜欢这部万物大历史',
                link: '/Gates'
            },
            {
                title: 'Installation',
                link: '/installation'
            }

        ]



    }],
})