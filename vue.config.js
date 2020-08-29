module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/styles/main.sass";`,
      },
    },
  },
  pwa: {
    name: "cafe Versal",
    themeColor: "#f0c013",
    msTileColor: "#f0c013",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    

    // настройки манифеста
    manifestOptions: {
      name: "cafe Versal",
      short_name: "Versal",
      start_url: "/",
      lang: "ru",
      display: "fullscreen",
      orientation: "any",
      categories: ["food", "shopping"],
      background_color: "white",
      description: "Заказ доставки роллов и курочки",
      icons: [
        {
          src: "./img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./img/icons/android-chrome-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      // ...другие настройки манифеста...
    },

    // настройка workbox-плагина
    workboxPluginMode: "GenerateSW",
  },
};
