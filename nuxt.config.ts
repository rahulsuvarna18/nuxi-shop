// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/supabase",
    "@vueuse/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  supabase: {
    redirect: false,
  },
});
