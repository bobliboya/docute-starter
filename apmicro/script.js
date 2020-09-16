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

            title: '1 - Ten Principles of Economics',
            children: [{
                    title: 'Introduction',
                    link: '/intro/intro'
                },
                {
                    title: '10 Principles of Economy',
                    link: '/intro/10prin'
                },
                {
                    title: 'Concepts & Definitions',
                    link: '/intro/def1'
                },


            ]



        }, /*开始*/
        {

            title: '2 - Thinking Like an Economist',
            children: [{
                    title: 'Economists',
                    link: '/chap2/economist'
                },



            ]



        } /*结束*/
    ],
})