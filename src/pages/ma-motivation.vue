<template>
  <Layout>
    <div style="margin-top: -3rem;" v-for="prlximage in $page.allMotivParallax.edges" :key="prlximage.node.id">

      <parallax-section :title="prlximage.node.hero_img.title" :subtitle="prlximage.node.hero_img.subtitle" :image="prlximage.node.hero_img.image"></parallax-section>

      <div class="section">
        <div class="container">
          <g-image
            :src="prlximage.node.bloc2.image"
            quality="100"
          />
        </div>
      </div>

      <div class="section has-background">
        <content-block3></content-block3>
      </div>

       <parallax-section :title="prlximage.node.img2.title" :subtitle="prlximage.node.img2.subtitle" :image="prlximage.node.img2.image" :custom-class="'is-dark'"></parallax-section>

      <div class="section" style="background-color: #fff;">
        <content-block5></content-block5>
      </div>

      <div class="section has-background">
        <content-block6></content-block6>
      </div>

      <div class="section" style="background-color: #fff;">
        <content-block7></content-block7>
      </div>

      <div class="section has-background">
        <content-block8></content-block8>
      </div>

      <parallax-section :title="prlximage.node.img3.title" :subtitle="prlximage.node.img3.subtitle" :image="prlximage.node.img3.image" :custom-class="'is-dark'"></parallax-section>

      <div class="section" style="background-color: #fff;">
        <content-block10></content-block10>
      </div>

      <parallax-section :title="prlximage.node.img4.title" :subtitle="prlximage.node.img4.subtitle" :image="prlximage.node.img4.image" :custom-class="'is-dark'"></parallax-section>

      <div class="section has-background">
        <card-section></card-section>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
  allMotivParallax {
    edges {
      node {
        hero_img {
          image
          title
          subtitle
        }
        bloc2 {
          image
        }
        img2 {
          image
          title
          subtitle
        }
        img3 {
          image
          title
          subtitle
        }
        img4 {
          image
          title
        }
      }
    }
  }
}
</page-query>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ParallaxSection from "../components/parallaxImage.vue";

import cardSection from "../components/ma-motivation/card-section.vue";
import ContentBlock3 from '../components/ma-motivation/content-block3.vue';
import ContentBlock5 from '../components/ma-motivation/content-block5.vue';
import ContentBlock6 from '../components/ma-motivation/content-block6.vue';
import ContentBlock7 from '../components/ma-motivation/content-block7.vue';
import ContentBlock8 from '../components/ma-motivation/content-block8.vue';
import ContentBlock10 from '../components/ma-motivation/content-block10.vue';

export default {
  metaInfo: {
    title: "Ma motivation",
  },
  components: {
    VueSlickCarousel,
    ParallaxSection,
    cardSection,
    ContentBlock3,
    ContentBlock5,
    ContentBlock6,
    ContentBlock7,
    ContentBlock8,
    ContentBlock10
  },
};
</script>

<style scoped lang="scss">
.has-background {
  background-color: rgb(196 224 236);
}

.title {
  color: #004369;
  position: relative;
}
</style>
