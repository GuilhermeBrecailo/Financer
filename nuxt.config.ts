import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Módulos
  modules: [
    "@nuxtjs/tailwindcss",
    // Plugin personalizado para Vuetify com Vite
    function (_options, nuxt) {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  // Configuração de build
  build: {
    transpile: ["vuetify"],
  },

  // Configuração do Vite
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
