const schemaorg = require('../SchemaScript.json');
module.exports = {
    title: 'Study Blazor .NET',
    description: 'Blazor tutorial for beginners, in simple and easy steps starting from basics to advanced concepts with more code snippets.',
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'shortcut icon', href: `/favicon.ico`, type:'image/x-icon' }],
        ['meta', { name: 'robots', content: 'all' }],
        ['meta', { name: 'keywords', content: 'Blazor Tutorial, SPA, ASP.Net Core, C#, Javascript Alternative, Web Assembly' }],
        ['meta', { property:'og:type',content:'website'}],
        ['meta', { property:'og:title',content:'Study Blazor'}],
        ['meta', { property:'og:description',content:'Blazor tutorial for beginners, in simple and easy steps starting from basics to advanced concepts with more code snippets.'}],      
        ['meta', { property:'og:locale',content:'en_US'}],
        ['meta', { property:'og:url',content:'https://studyblazor.com'}],
        ['meta', { property:'og:image',content:'https://studyblazor.com/logo.png'}],
        ['script',{type:'application/ld+json'},JSON.stringify(schemaorg)],
        ['script', { async:'' , src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }],
        ['script', {},
            '(adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-9955716341281227", enable_page_level_ads: true });'],
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Tutorial', link: '/tutorial/' },            
            { text: 'About Blazor', link: 'https://blazor.net' },
            { text: 'More', 
                items: 
                [
                    {text: 'Contact', link: '/contact/'},
                    {text: 'Privacy Policy', link: '/privacy-policy/'},
                    {text: 'Terms and Conditions', link:'/terms-and-conditions/'}
                ] 
            }
        ],
        sidebar: {
            '/tutorial/': [
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
