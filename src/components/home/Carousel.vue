<template>
  <section>
    <VueSlickCarousel class="hero is-medium has-background" :arrows="true" :dots="true" :autoplay="true">
      <div>
        <g-image
          :src="$static.settings.hero_image1"
          class="hero-background"
        />
       <!--  <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-2"></h1>
            <h2 class="title is-size-3 is-family-primary">
            </h2>
          </div>
        </div> -->
      </div>
      <div>
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

<style lang="scss">
.hero {
  height: 800px;
   &.has-background {
    position: relative;
    overflow: hidden;
  }

  &-background {
    // position: absolute;
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100vh;

    &.is-transparent {
      opacity: 0.7;
    }
  }

}

.slick-slider {
  position: relative;
}

.slick-next {
  right: 25px;
}
.slick-prev {
  left: 25px;
  z-index: 1000;
}
</style>
