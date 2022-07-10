import colors from "vuetify/es5/util/colors";

const og_image =
  "https://raw.githubusercontent.com/MisuseofMana/maggiesportfolio/main/ogImage.png";

const description =
  "The Art and Illustrations of Maggie Yager -    Maggie Yager is an illustrator and fine artist based in Indianapolis, IN whose work focuses on the magic found inchildhood, our innate connection to nature, and all the unique individuals that make our world one of a kind. She has a heart for children’s books, a knack for creating playful patterns, and the ambition to create editorials that suit any subject. Maggie enjoys growing plants with her partner, petting her moody rabbit, and exploring local trails when she’s not at home creating art.";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  generate: {
    dir: "docs",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Art of Maggie Yager",
    title: "Art of Maggie Yager",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },

      {
        name: "description",
        hid: "description",
        content: description,
      },
      { property: "og:type", hid: "og:type", content: "website" },
      {
        property: "og:url",
        hid: "og:url",
        content: "https://www.maggieyager.com/",
      },
      {
        property: "og:title",
        hid: "og:title",
        content: "The Art of Maggie Yager",
      },
      {
        property: "og:description",
        hid: "og:description",
        content: description,
      },
      { property: "og:image", hid: "og:image", content: og_image },
      {
        property: "twitter:card",
        hid: "summary_large_image",
        content: og_image,
      },
      {
        property: "twitter:url",
        hid: "twitter:url",
        content: "https://www.maggieyager.com/",
      },
      {
        property: "twitter:title",
        hid: "twitter:title",
        content: "The Art of Maggie Yager",
      },
      {
        property: "twitter:description",
        hid: "twitter:description",
        content: description,
      },
      { property: "twitter:image", hid: "twitter:image", content: og_image },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/masonry-plugin.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
