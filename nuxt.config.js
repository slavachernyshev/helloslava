export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // https://nuxtjs.org/docs/2.x/deployment/github-pages/#deploying-to-github-pages-for-repository
  router: {
    // base: '/helloslava/'
    base: '/'
  },

  // Dev server configutation: https://nuxtjs.org/docs/2.x/features/configuration#edit-host-and-port
  // If the host is assigned the string value of '0' (not 0, which is falsy), or '0.0.0.0'
  // your local IP address will be assigned to your Nuxt.js application.
  server: {
    host: '0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Секретный уровень / Чернышёв Слава',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Secret Level of Cybersecurity' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Secret Level' },
      { name: "twitter:site", content: "@slavachernyshev" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: "canonical",
        rel: "canonical",
        href: process.env.BASE_URL,
      },
    ],
    // https://github.com/nuxt/nuxt.js/issues/2230
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        innerHTML: '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/6c667c7166723a7e5c304db16/d739af95ab30674873b4f7a29.js");',
        id: "mcjs" 
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/yandex-metrika'
  ],

  yandexMetrika: {
    id: '83435275',
    webvisor: true,
    // clickmap: true,
    // useCDN: false,
    // trackLinks: true,
    // accurateTrackBounce: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  content: {
    markdown: {
      remarkPlugins: [
        'remark-squeeze-paragraphs',
        'remark-slug',
        'remark-autolink-headings',
        'remark-external-links',
        'remark-footnotes'
      ],
      rehypePlugins: [
        'rehype-minify-whitespace',
        'rehype-sort-attribute-values',
        'rehype-sort-attributes',
        'rehype-raw',
        // https://blog.rizalrenaldi.com/blog/nuxt-content-image-inside-markdown/
        '~/plugins/rehype-content-image.js'
      ]
    }
  }
}
