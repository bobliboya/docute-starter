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
        }, /*结束*/ {

            title: '06 Supply, Demand, and Government Policies',
            children: [{
                title: 'Concepts & Definitions',
                link: '/chap6/def6'
            }, ]
        }, /*结束*/ {

            title: '07 Consumers, Producers, and the Efficiency of Markets',
            children: [{
                title: 'Consumer Suplus & Producer Surplus',
                link: '/chap7/surplus'
            }, {
                title: 'Concepts & Definitions',
                link: '/chap7/def7'
            }, ]
        }, /*结束*/ {

            title: '08 Application: The Costs of Taxation',
            children: [{
                title: 'Deadwight Loss',
                link: '/chap8/deadwightloss'
            }, {
                title: 'Concepts & Definitions',
                link: '/chap8/def8'
            }, ]
        }, /*结束*/ {

            title: '09 Application: International Trade',
            children: [{
                title: '9.1 Import and Export',
                link: '/chap9/importandexport'
            }, {
                title: '9.2 Tariff',
                link: '/chap9/tariff'
            }, {
                title: 'Concepts & Definitions',
                link: '/chap9/def9'
            }, ]
        }, /*结束*/ {

            title: '10 Externalities',
            children: [{
                title: '10.1 Externalities',
                link: '/chap10/externalities'
            }, {
                title: '10.2 Policies to Fix Externalities',
                link: '/chap10/policies'
            }, {
                title: '10.3 The Coase Theorem',
                link: '/chap10/coase'
            }, {
                title: '10.4 Tax or Regulation',
                link: '/chap10/taxorregulation'
            }, {
                title: 'Concepts & Definitions',
                link: '/chap10/def10'
            }, ]
        }, /*结束*/ {

            title: '11 Public Goods and Commom Resources',
            children: [{
                title: '11.1 Public Goods',
                link: '/chap11/publicgoods'
            }, {
                title: '11.2 Common Resources',
                link: '/chap11/commonresources'
            }, {
                title: 'Concepts & Definitions',
                link: '/chap11/def11'
            }, ]
        },
    ],
})