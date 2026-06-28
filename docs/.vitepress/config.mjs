import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Muhammadiy X.",
  description: "About Me",
  head: [['link', { rel: 'icon', href: 'https://github.com/Xamrakulov.png' }]],
  cleanUrls: true,
  // Served as a GitHub project page at https://xamrakulov.github.io/Xamrakulov/.
  // If a custom domain (root) is re-enabled, change this back to '/'.
  base: '/Xamrakulov/',

  themeConfig: {
    logo: "https://github.com/Xamrakulov.png",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Companies', link: '/companies' },
      { text: 'Apps & Services', link: '/apps' },
      // { text: 'Sponsors', link: '/sponsors' }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/muhammadiy_k' },
      { icon: 'instagram', link: 'https://instagram.com/muhammadiy.k' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/muhammadiy' },
      { icon: 'github', link: 'https://github.com/Xamrakulov' }
    ],

    footer: {
      copyright: "Copyright © 2019-2023 <a href='https://github.com/Xamrakulov'>Muhammadqodir Xamrakulov</a>.",
    }
  }
})
