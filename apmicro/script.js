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

        title: 'Ch1 - Ten Principles of Economics',
        links: [{
                title: 'Introduction',
                link: '/intro/intro'
            },
            {
                title: '10 Principles of Economy',
                link: '/intro/10prin'
            },


        ]



    }],
})