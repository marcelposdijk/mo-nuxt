export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Klusvrouw Monique',
    htmlAttrs: {
      lang: 'nl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preload", href: "/fonts/themify.woff", as: "font"}
    ],
    script: [
      { src: "/js/jquery-3.6.0.min.js", body: true  },
      { src: '/js/isotope.pkgd.min.js', body: true, defer: '' },
      { src: '/js/jquery.magnific-popup.min.js', body: true, defer: '' },
      { src: "/js/owl.carousel.min.js", body: true, defer: '' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/plugins.css',
    '~/assets/scss/styles.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/dateFormatting.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    'nuxt-lazy-load',
    '@nuxtjs/google-gtag'
  ],
  content: {
    //Options
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
    babel: {
      compact: true,
    },
  },
  axios: {
    baseURL: 'https://www.marpos.nl'
  },
  i18n: {
    langDir: '~/assets/locales',
    locales: [
    {
      code: 'nl',
      name: 'Nederlands',
      file: 'nl.js'
    }],
    defaultLocale: 'nl',
    strategy: 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'nl',
      silentTranslationWarn: true
    }
  },
  'google-gtag':{
    id: 'G-CNEZ54JWC4', // required
    config:{
      // this are the config options for `gtag
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true, // anonymize IP 
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)
   }
}
