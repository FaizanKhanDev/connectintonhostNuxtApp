import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - connectintonhost',
    title: 'connectintonhost',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/plugins/nhost.js", mode: 'client' }
    { src: "~/plugins/google-map.js", mode: 'client' },
    { src: '~/plugins/vue-tel-input-vuetify.js', mode: 'client' },
    // { src: "~/plugins/vuetify-input.js", mode: 'client' },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  build: {
    transpile: ['vuetify', 'vue-tel-input-vuetify'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nhost/nuxt'
  ],
  // nhost: {
  //   baseURL: 'https://omfnterzxnldtmkfcewp.graphql.ap-south-1.nhost.run/v1'
  // },

  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: 'https://omfnterzxnldtmkfcewp.hasura.ap-south-1.nhost.run/v1/graphql',
  //     },
  //   },
  // },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
