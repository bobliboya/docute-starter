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

            title: '01 Ten Principles of Economics',
            children: [{
                    title: 'Introduction',
                    link: '/chap1/intro'
                },
                {
                    title: '10 Principles of Economy',
                    link: '/chap1/10prin'
                },
                {
                    title: 'Concepts & Definitions',
                    link: '/chap1/def1'
                },
            ]
        }, /*开始*/
        {

            title: '02 Thinking Like an Economist',
            children: [{
                title: 'Economists',
                link: '/chap2/economist'
            }, {
                title: 'Concepts & Definitions',
                link: '/chap2/def2'
            }, ]
        }, /*结束*/
        {

            title: '03 Interpendence and the Gains from Trade',
            children: [{
                title: 'Concepts & Definitions',
                link: '/chap3/def3'
            }, ]
        }, /*结束*/
        {

            title: '04 The Market Forces Supply or Demand',
            children: [{
                title: 'Concepts & Definitions',
                link: '/chap4/def4'
            }, ]
        }, /*结束*/
        {

            title: '05 Elasticity and Its Application',
            children: [{
                title: 'Concepts & Definitions',
                link: '/chap5/def5'
            }, ]
        }, /*结束*/
    ],
})