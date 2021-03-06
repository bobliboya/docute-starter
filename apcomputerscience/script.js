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
            children: [{
                    title: '实例1',
                    link: '/part1/examples1'
                },

            ]
        }, {


            title: 'Unit 3 Boolean Statements and if Statements',
            children: [{
                    title: '实例1',
                    link: '/part1/examples1'
                },

            ]
        }, {


            title: 'Unit 4 Iteration',
            children: [{
                    title: '实例1',
                    link: '/part1/examples1'
                },

            ]
        }, {


            title: 'Unit 5 Writing Classes',
            children: [{
                    title: '实例1',
                    link: '/part1/examples1'
                },

            ]
        }, {


            title: 'Unit 6 Array',
            children: [{
                    title: '实例1',
                    link: '/part1/examples1'
                },

            ]
        }, {


            title: 'Unit 7 ArrayList',
            children: [{
                    title: '实例1',
                    link: '/part1/examples1'
                },

            ]
        }, {


            title: 'Unit 8 2D Array',
            children: [{
                    title: '实例1',
                    link: '/part1/examples1'
                },

            ]
        }, {


            title: 'Unit 9 Inheritance',
            children: [{
                    title: '实例1',
                    link: '/part1/examples1'
                },

            ]
        }, {


            title: 'Unit 10 Recursion',
            children: [{
                    title: '实例1',
                    link: '/part1/examples1'
                },

            ]
        },

    ],
})