// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/sass/*.sass"),
        // you can also use a glob if you'd prefer
        // path.resolve(__dirname, './src/assets/sass/*.sass'),
      ],
    });
}

module.exports = {
  siteName: "Nancy Bilodeau - Consultante holistique pour entreprises",
  //host: "0.0.0.0",
  siteUrl: "https://nancybilodeau.com",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "fas fa-hashtag",
      plugins: [
        // ...global plugins
      ],
    },
  },
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-38958579-4",
      },
    },
    /* {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
      },
    }, */
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/bio/**/*.md",
        typeName: "bio",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/a-propos/**/*.md",
        typeName: "apropos",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/ameliorer-sante/**/*.md",
        typeName: "services",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/carousel/**/*.md",
        typeName: "carousel",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/carousel-perso/**/*.md",
        typeName: "CarouselPerso",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/carousel-equipe/**/*.md",
        typeName: "CarouselEquipe",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/pages/**/*.md",
        typeName: "PageContent",
        resolveAbsolutePaths: true,
        // route: "/:slug",
        remark: {
          plugins: [
            [
              "gridsome-plugin-remark-youtube",
              ,
              { width: "500px", align: "auto" },
            ],
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/linkedIn/**/*.md",
        typeName: "linkedIn",
        resolveAbsolutePaths: true,
        // route: "/:slug",
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/home/**/*.md",
        typeName: "home",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            [
              "gridsome-plugin-remark-youtube",
              ,
              { width: "500px", align: "auto" },
            ],
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/formations/**/*.md",
        typeName: "formations",
        resolveAbsolutePaths: true,
        route: "/formations/:type/:title",
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/retraites/**/*.md",
        typeName: "retraites",
        resolveAbsolutePaths: true,
        route: "/retraites/:type/:title",
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/conference-midi/**/*.md",
        typeName: "conferences",
        resolveAbsolutePaths: true,
        route: "/conferences/:type/:title",
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/articles/**/*.md",
        typeName: "articles",
        resolveAbsolutePaths: true,
        //route: "/formations/:type/:slug",
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/transfo-organisation/**/*.md",
        typeName: "transfo",
        resolveAbsolutePaths: true,
        //route: "/formations/:type/:slug",
        remark: {
          plugins: [
            [
              "gridsome-plugin-remark-youtube",
              ,
              { width: "500px", align: "auto" },
            ],
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/pour-ton-equipe/**/*.md",
        typeName: "equipe",
        resolveAbsolutePaths: true,
        //route: "/formations/:type/:slug",
        remark: {
          plugins: [
            [
              "gridsome-plugin-remark-youtube",
              ,
              { width: "500px", align: "auto" },
            ],
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/competences-sante/**/*.md",
        typeName: "competencesSante",
        resolveAbsolutePaths: true
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/outils/**/*.md",
        typeName: "outils",
        resolveAbsolutePaths: true,
        route: "/outils/:title",
        remark: {},
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/valeurs/**/*.md",
        typeName: "valeurs",
        resolveAbsolutePaths: true,
        route: "/valeurs/:title",
        remark: {},
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/boutique/**/*.md",
        typeName: "products",
        resolveAbsolutePaths: true,
        route: "/boutique/:title",
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/site.yaml",
        typeName: "settings",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/ma-motivation/parallax.yaml",
        typeName: "MotivParallax",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/bio/**/*.md",
        typeName: "bioEn",
        resolveAbsolutePaths: true,
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/pages/**/*.md",
        typeName: "PageContentEn",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            [
              "gridsome-plugin-remark-youtube",
              ,
              { width: "500px", align: "auto" },
            ],
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/linkedIn/**/*.md",
        typeName: "linkedInEn",
        resolveAbsolutePaths: true,
        // route: "/:slug",
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/home/**/*.md",
        typeName: "homeEn",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            [
              "gridsome-plugin-remark-youtube",
              ,
              { width: "500px", align: "auto" },
            ],
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/carousel/**/*.md",
        typeName: "carouselEn",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            //require("remark-attr")
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/training/**/*.md",
        typeName: "training",
        resolveAbsolutePaths: true,
        route: "/en/training/:type/:title",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/conference/**/*.md",
        typeName: "conferencesEn",
        resolveAbsolutePaths: true,
        route: "/en/conferences/:type/:title",
      },
    },
  ],
  chainWebpack: (config) => {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("sass").oneOf(type))
    );
  },
};
