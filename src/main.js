// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "~/assets/sass/styles.scss";
import VueTypedJs from "vue-typed-js";
import VuePrlx from 'vue-prlx';

import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'


import DefaultLayout from "~/layouts/Default.vue";
import HomeLayout from "~/layouts/Home.vue";
import CarouselLayout from "~/layouts/Carousel.vue";
import CarouselEnLayout from "~/layouts/CarouselEn.vue";
import CarouselHome from "~/layouts/CarouselHome.vue";
import EnhomeLayout from "~/layouts/HomeEn.vue";
import EnglishLayout from "~/layouts/DefaultEn.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("HomeLayout", HomeLayout);
  Vue.component("CarouselLayout", CarouselLayout);
  Vue.component("CarouselEnLayout", CarouselEnLayout);
  Vue.component("Enhome", EnhomeLayout);
  Vue.component("EnglishLayout", EnglishLayout);
  Vue.component("CarouselHome", CarouselHome);
  //Vue.component("ssr-carousel", SsrCarousel);
  Vue.use(SsrCarousel);
  Vue.use(ssrCarouselCss);
  Vue.use(VueTypedJs);
  Vue.use(VuePrlx);
  // Add atributes to BODY tag
  head.bodyAttrs = { class: "has-navbar-fixed-top" };
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "fr_CA" };
  // Add mailchimp tag
  head.script.push({
        innerHTML: '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/23c00cdf65b51791bb6e5bda3/ab27433dc759b95305c252715.js");',
        id: "mcjs"
    });
}
