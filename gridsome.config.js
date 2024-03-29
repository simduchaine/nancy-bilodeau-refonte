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
  siteName: "Nancy Bilodeau, MBA, au service du bien-être et de la performance d’entreprise.",
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
            ["gridsome-plugin-remark-youtube", { width: "750px", align: "auto" }]
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
        path: "data/soins/**/*.md",
        typeName: "soins",
        resolveAbsolutePaths: true,
        route: "/soins/:title",
        remark: {
          plugins: [
            ["gridsome-plugin-remark-youtube", { width: "750px", align: "auto" }]
          ],
        },
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
        path: "data/ma-motivation/**/*.md",
        typeName: "motivation",
        resolveAbsolutePaths: true,
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
        path: "data_en/site.yaml",
        typeName: "settingsEn",
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
        path: "data_en/about-me/**/*.md",
        typeName: "about",
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
        path: "data_en/org-transfo/**/*.md",
        typeName: "orgtransfo",
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
        path: "data_en/for-your-team/**/*.md",
        typeName: "equipeEn",
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
        path: "data_en/retreats/**/*.md",
        typeName: "retreats",
        resolveAbsolutePaths: true,
        route: "/retreats/:type/:title",
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
        path: "data_en/carousel-health/**/*.md",
        typeName: "CarouselHealth",
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
        path: "data_en/carousel-team/**/*.md",
        typeName: "CarouselTeam",
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
        path: "data_en/health/**/*.md",
        typeName: "servicesEn",
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
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/shop/**/*.md",
        typeName: "productsEn",
        resolveAbsolutePaths: true,
        route: "/en/shop/:title",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/tools/**/*.md",
        typeName: "tools",
        resolveAbsolutePaths: true,
        route: "/tools/:title",
        remark: {},
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/services/**/*.md",
        typeName: "soinsEn",
        resolveAbsolutePaths: true,
        route: "/en/services/:title",
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
        path: "data_en/health-skills/**/*.md",
        typeName: "healthSkills",
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
        path: "data_en/values/**/*.md",
        typeName: "values",
        resolveAbsolutePaths: true,
        route: "/values/:title",
        remark: {},
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data_en/my-purpose/parallax.yaml",
        typeName: "PurposeParallax",
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
        path: "data_en/my-purpose/**/*.md",
        typeName: "purpose",
        resolveAbsolutePaths: true,
        remark: {},
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
