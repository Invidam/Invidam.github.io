import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    // scripts: [
    //   {
    //     src: '/ts/fix-location.ts',
    //     async: false,
    //     defer: false,
    //   },
    // ],
    title: '기술 블로그',
    tagline: 'Personal Blog',
    favicon: 'img/favicon.ico',
    trailingSlash: true,

    // Set the production url of your site here
    url: 'https://vidam.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Invidam', // Usually your GitHub org/user name.
    projectName: 'invidam.github.io', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'kr',
        locales: ['kr'],
    },

    presets: [
        [
            'classic',
            {
                docs: false,
                blog: {
                    blogTitle: 'News',
                    routeBasePath: '/',
                    showReadingTime: true,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
                        createFeedItems: async (params) => {
                            const {blogPosts, defaultCreateFeedItems, ...rest} = params;
                            return defaultCreateFeedItems({
                                // keep only the 10 most recent blog posts in the feed
                                blogPosts: blogPosts.filter((item, index) => index < 10),
                                ...rest,
                            });
                        },
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        metadata: [
            {"property": "og:description",},
            {"property": "og:title", "content": "."},
            {"property": "og:locale", "content": "kr"},
            {"property": "og:image"},
            {"property": "og:url"},
        ],

        headTags: [],
        // Replace with your project's social card
        navbar: {
            title: 'fait-accompli',
            items: [
                {to: '/', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {},
                {},
                {
                    title: 'Profile',
                    items: [
                        {
                            label: 'Github',
                            href: 'https://github.com/Invidam',
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/vidam_in',
                        },
                    ],
                },
                {},
                {},
            ],
            //copyright: `Copyright © ${new Date().getFullYear()} by ParkHansu.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['powershell', 'bash'],
        },
    },
};

export default config;
