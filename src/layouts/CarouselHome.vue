<template>
  <div>
    <custom-header />

    <h-carousel />

    <slot />

    <custom-footer />
  </div>
</template>

<script>
import customFooter from "~/components/Footer.vue";
import customHeader from "~/components/Header.vue";
import HCarousel from "~/components/home/Carousel.vue";

export default {
  components: {
    customFooter,
    customHeader,
    HCarousel
  },
};
</script>
