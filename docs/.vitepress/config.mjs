import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Muhammadiy K.",
  description: "About Me",
  head: [['link', { rel: 'icon', href: 'https://camo.githubusercontent.com/c7a8bc3462663c3f208eb72f7d26d604e45a3c773f38d3240a3705f657c2bd97/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f616c706861636f6e74726f6c2e61707073706f742e636f6d2f6d656d6f6a692d666f722d6769746875622e706e67' }]],
  cleanUrls: true,

  themeConfig: {
    logo: "https://camo.githubusercontent.com/c7a8bc3462663c3f208eb72f7d26d604e45a3c773f38d3240a3705f657c2bd97/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f616c706861636f6e74726f6c2e61707073706f742e636f6d2f6d656d6f6a692d666f722d6769746875622e706e67",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Companies', link: '/companies' },
      { text: 'Privacy', link: '/privacy' },
      // { text: 'Sponsors', link: '/sponsors' }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/muhammadiy_k' },
      { icon: 'instagram', link: 'https://instagram.com/muhammadiy.k' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/muhammadiy' },
      { icon: 'github', link: 'https://github.com/MKbek' }
    ],

    footer: {
      copyright: "Copyright © 2019-2023 <a href='https://github.com/MKbek'>Muhammadqodir Khamrakulov</a>.",
    }
  }
})
