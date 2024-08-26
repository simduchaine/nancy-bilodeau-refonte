<template>
  <section id="homeCarousel">
    <ssr-carousel>
      <div class="slide">
        <g-image
          :src="$static.settings.hero_image1"
          class="hero-background"
          />
      </div>
      <div class="slide">
        <a href="https://cours.nancybilodeau.com/lancement25" target="_blank" rel="noopener noreferrer">
        <g-image
          :src="$static.settings.hero_image2"
          class="hero-background"
        />
        </a>
        <a href="https://cours.nancybilodeau.com/lancement25" target="_blank" class="button" style="position: absolute; bottom: 5%; left: 35%;">Je veux participer au lancement!</a>
      </div>
    </ssr-carousel>
    <!-- <VueSlickCarousel class="hero is-medium has-background" :arrows="true" :dots="true" :autoplay="true" >
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
        
    </VueSlickCarousel> -->
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
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'

export default {
  name: "HCarousel",
  components: {
    SsrCarousel,
    ssrCarouselCss
  }
};
</script>

<style lang="scss">

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

.ssr-carousel-slide {
  height: 800px;
  position: relative;
}


</style>
