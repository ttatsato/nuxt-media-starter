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
    title: process.env.APP_NAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.APP_DESICRIPTION || '' }
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
    'nuxt-buefy',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://messy-ttatsato.herokuapp.com/',
    // generate: true,
    async routes () {
      const contentful = require('contentful');
      const client = contentful.createClient({
        space: contentFulConfig.CTF_SPACE_ID,
        accessToken: contentFulConfig.CTF_CDA_ACCESS_TOKEN
      });
      const posts = await client.getEntries({
        'content_type': contentFulConfig.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      });

      let urls = [];
      posts.items.forEach((val, idx, arr) => {
        console.log(val.fields.slug)
        urls[idx] = val.fields.slug
      });
      return urls;
    }
  },
  /*
  ** Build configuration
  */
  build: {},
  env: {
    CTF_SPACE_ID: contentFulConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: contentFulConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: contentFulConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: contentFulConfig.CTF_BLOG_POST_TYPE_ID,
    GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID
  },
  vue: {
    config: {
      ignoredElements :['nuxt']
    }
  },
  serverMiddleware: [
    '~/server'
  ]
}
