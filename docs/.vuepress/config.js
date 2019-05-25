module.exports = {
    title: 'Study Blazor',
    description: 'Blazor Tutorials - ASP.Net Core UI Framework',
    head:[
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['meta', { name: 'description', content: 'Blazor tutorial for beginners, in simple and easy steps starting from basics to advanced concepts with more code snippets.' }],
        ['meta', { name: 'robots', content: 'all'}],
        ['meta', { name: 'keywords', content: 'Blazor, Tutorial, ASP.Net Core, C#, Javascript Alternative, Web Assembly'}]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Tutorial', link: '/tutorial/' },
            { text: 'Contact', link:'/contact/'},
            { text: 'About Blazor', link: 'https://blazor.net'}
        ],
        sidebar: {
            '/tutorial/':[
                '',
                'Install',
                'AboutComponent',
                'DataBindings',
                'ComponentLifecycle',
                'DependencyInjection',
                'Routing',
                'Layouts',
                'FutureOfBlazor'
            ]
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/google-analytics', {
            'ga': 'UA-140858401-1'
          }]
    ]
  }
