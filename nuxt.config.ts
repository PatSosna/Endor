// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  modules: [
    '@nuxt/ui'
  ],

  nitro: {
    experimental: {
      database: true,
    },

    database: {
      default: {
        connector: 'libsql',
        options: {
          url: process.env.TURSO_DB_URL,
          authToken: process.env.TURSO_DB_AUTH_TOKEN,
        }
      }
    }
  },
});
