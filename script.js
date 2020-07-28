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
                title: 'Introduction',
                link: '/introduction'
            },
            {
                title: 'Installation',
                link: '/installation'
            }

        ]



    }],
})