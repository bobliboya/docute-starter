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
    highlight: ['java'],
    /* 导航栏 */
    sidebar: [{
            title: 'Chapter 1',
            link: '/chapter1'
        }, {
            title: 'Chapter 2',
            link: '/chapter2'
        }, {
            title: 'Chapter 3',
            link: '/chapter3'
        }, {
            title: 'Chapter 4',
            link: '/chapter4'
        }, {
            title: 'Chapter 5',
            link: '/chapter5'
        }, {
            title: 'Chapter 6',
            link: '/chapter6'
        }, {
            title: 'Chapter 7',
            link: '/chapter7'
        }, {
            title: 'Chapter 8',
            link: '/chapter8'
        }, {
            title: 'Chapter 9',
            link: '/chapter9'
        }, {
            title: 'Chapter 10',
            link: '/chapter10'
        }, {
            title: 'Chapter 11',
            link: '/chapter11'
        }, {
            title: 'Chapter 12',
            link: '/chapter12'
        },

    ],
})