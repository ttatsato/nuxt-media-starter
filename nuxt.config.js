let contentFulConfig = {}
if (process.env.NODE_ENV === 'development') {
  contentFulConfig = require('./.contentful.json')
} else {
  contentFulConfig = {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: process.env.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID
  }
}
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/typescript-build',
    'nuxt-buefy'
  ],
  /*
  ** Build configuration
  */
  build: {},
  env: {
    CTF_SPACE_ID: contentFulConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: contentFulConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: contentFulConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: contentFulConfig.CTF_BLOG_POST_TYPE_ID
  },
  vue: {
    config: {
      ignoredElements :['nuxt']
    }
  }
}
