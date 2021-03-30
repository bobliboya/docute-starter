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
            /*第一组*/

            title: 'Unit 1 Primitive Types',
            children: [{
                    title: '实例1',
                    link: '/part1/examples1'
                }, {
                    title: '斐波那契数列',
                    link: '/part1/fibonacci'
                }, {
                    title: '应用题',
                    link: '/part1/applications'
                }, {
                    title: 'Scanner的用法',
                    link: '/part1/input'
                },

            ]
        }, /*开始*/ {


            title: 'Unit 2 Using Objects',
            children: [

            ]
        }, {


            title: 'Unit 3 Boolean Statements and if Statements',
            children: [

            ]
        }, {


            title: 'Unit 4 Iteration',
            children: [

            ]
        }, {


            title: 'Unit 5 Writing Classes',
            children: [

            ]
        }, {


            title: 'Unit 6 Array',
            children: [

            ]
        }, {


            title: 'Unit 7 ArrayList',
            children: [

            ]
        }, {


            title: 'Unit 8 2D Array',
            children: [

            ]
        }, {


            title: 'Unit 9 Inheritance',
            children: [

            ]
        }, {


            title: 'Unit 10 Recursion',
            children: [

            ]
        }, {


            title: 'Practice Questions',
            children: [{
                    title: '2013 FRQ Questions',
                    link: '/past-exams/apcs-2013-frq-q'
                }, {
                    title: '2013 FRQ Solutions',
                    link: '/past-exams/apcs-2013-frq-s'
                }, {
                    title: '2014 FRQ Questions',
                    link: '/past-exams/apcs-2014-frq-q'
                }, {
                    title: '2014 FRQ Solutions',
                    link: '/past-exams/apcs-2014-frq-s'
                }, {
                    title: '2015 FRQ Questions',
                    link: '/past-exams/apcs-2015-frq-q'
                }, {
                    title: '2015 FRQ Solutions',
                    link: '/past-exams/apcs-2015-frq-s'
                }, {
                    title: '2016 FRQ Questions',
                    link: '/past-exams/apcs-2016-frq-q'
                }, {
                    title: '2016 FRQ Solutions',
                    link: '/past-exams/apcs-2016-frq-s'
                }, {
                    title: '2017 FRQ Questions',
                    link: '/past-exams/apcs-2017-frq-q'
                }, {
                    title: '2017 FRQ Solutions',
                    link: '/past-exams/apcs-2017-frq-s'
                }, {
                    title: '2018 FRQ Questions',
                    link: '/past-exams/apcs-2018-frq-q'
                }, {
                    title: '2018 FRQ Solutions',
                    link: '/past-exams/apcs-2018-frq-s'
                }, {
                    title: '2019 FRQ Questions',
                    link: '/past-exams/apcs-2019-frq-q'
                }, {
                    title: '2019 FRQ Solutions',
                    link: '/past-exams/apcs-2019-frq-s'
                },

            ]
        },


    ],
})