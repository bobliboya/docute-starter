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

        title: 'Introductions',
        links: [{
                title: 'Introduction',
                link: '/start/intro'
            },
            {
                title: '10 Principles of Economy',
                link: '/start/10prin'
            },


        ]



    }],
})