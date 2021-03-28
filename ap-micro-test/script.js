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

            title: '1 Basic Economic Concepts',
            children: [{
                    title: 'Introduction',
                    link: '/chap1/intro'
                },
                {
                    title: 'PPF',
                    link: '/chap1/ppf'
                },
                {
                    title: 'Trade',
                    link: '/chap1/trade'
                },
            ]
        }, /*开始*/
        {

            title: '2 Supply and Demand',
            children: [

            ]
        }, /*结束*/
        {

            title: '3 Production, Cost and PCM',
            children: [

            ]
        }, /*结束*/
        {

            title: '4 Imperfect Competition',
            children: [

            ]
        }, /*结束*/
        {

            title: '5 Factor Markets',
            children: [

            ]
        }, /*结束*/ {

            title: '6 Market Failure and the Role of Gov\'t',
            children: [

            ]
        }, /*结束*/
    ]
})