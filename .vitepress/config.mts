import { defineConfig } from 'vitepress';
import { title, name, description, repository } from '../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  base: `/${name}/`,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
        collapsed: false
      },
      {
        text: 'Contributing',
        // TODO: we can use auto-generated sidebar for this
        items: [
            { text: 'Overview', link: '/contributing/' },
            { text: 'Pull Requests', link: '/contributing/pull-requests' },
            { text: 'Commit Message Convention', link: '/contributing/commit-message-convention' },
        ]
      }
    ],
    editLink: {
      text: "Edit this page on GitHub",
      pattern: `${repository}/edit/main/:path`,
    },

    socialLinks: [
      { icon: 'github', link: repository }
    ],
  },
  srcExclude: [
    // exclude the README.md in the root folder, that's only for GitHub
    "./README.md"
  ],
  lastUpdated: true,
});
