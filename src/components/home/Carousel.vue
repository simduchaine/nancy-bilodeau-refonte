<template>
  <section id="homeCarousel">
    <VueSlickCarousel class="hero is-medium has-background" :arrows="true" :dots="true" :autoplay="true" >
        <div id="slide1" >
          <g-image
          :src="$static.settings.hero_image1"
          class="hero-background"
          />
        </div>
        
        <div id="slide2" >
          <g-image
          :src="$static.settings.hero_image2"
          class="hero-background"
        />
        </div>
        
    </VueSlickCarousel>
  </section>
</template>

<static-query>
query {
  settings(path: "/data/site/") {
    hero_image1 (quality: 100)
    hero_image2 (quality: 100)
  }
}
</static-query>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "HCarousel",
  components: { VueSlickCarousel },
};
</script>

<style scoped lang="scss">

#slide1, #slide2{
  height: 800px;
}

.hero {
  &.has-background {
    position: relative;
    overflow: hidden;
  }

  &-background {
    //position: absolute;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100vh;

    &.is-transparent {
      opacity: 0.7;
    }
  }

  &.is-medium {
    .hero-body {
      padding-bottom: 8.5rem;
      padding-top: 8.5rem;
    }
  }
}


 .slick-list {
  min-height: 800px;
}

.slick-slider {
  position: relative;
}

.slick-next {
  right: 25px;
}
.slick-prev {
  left: 50px;
  z-index: 1000;
}
</style>
