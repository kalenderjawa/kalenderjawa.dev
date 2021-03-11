
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pustaka | Kalender Jawa Abadi 2021',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'google-site-verification', content: 'nnMyQZtqIzLmDf0eyZKMXXy84S0u4A5G8zm2D1zCdmk' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Kalender Jawa Abadi 2921, Pustaka JavaScript untuk perhitungan, pengkonversian dan penanggalan Kalender Jawa Abadi' },

      { name: 'og:url', content: 'https://kalenderjawa.dev' },
      { name: 'og:locale', content: 'id_ID' },
      { name: 'og:description', content: 'Pustaka Kalender Jawa Abadi' },
      { name: 'og:title', content: 'Kalender Jawa' },
      { name: 'og:type', content: 'website' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@junwatu' },
      { name: 'twitter:url', content: 'https://twitter.com/junwatu' },
      { name: 'twitter:description', content: 'Pustaka Kalender Jawa, Pustaka JavaScript untuk perhitungan, pengkonversian dan penanggalan Kalender Jawa Abadi' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/kj.scss',
    '@/node_modules/highlight.js/scss/github.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    [
      '@nuxtjs/sitemap',
      {
        hostname: 'https://kalenderjawa.dev',
        gzip: true
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    babel: {
      presets ({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  }
}
