<template>
  <div class="parallax-container hero" :class="customClass" :style="`background-image: url( ${image.src} )`" v-prlx.background="{ speed: 0.025 }">
            <!-- <g-image class="parallax-image" :src="image" v-prlx="{ preserveInitialPosition: false, fromBottom: true }"></g-image> -->
            <div class="parallax-title">
                <h1 class="title is-family-primary is-size-2" v-html="title"></h1>
                <h2 class="title" v-html="subtitle"></h2>
            </div>
        </div>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";

export default {
  name: "ParallaxSection",
  props: ["image", "custom-class", "title", "subtitle"],
  components: {
    Parallax,
  },
};
</script>

<style lang="scss" scoped>
.parallax-container {
  position: relative;
  height: 850px;
  overflow: hidden;
}

.parallax-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  color: white;
  text-align: center;
}

.parallax-image {
  object-fit: contain;
  object-position: center;
}

/* @media screen and (min-width: 768px) {
  .Masthead {
    min-height: 40vh;
  }
}

.hero-parallax {
  position: absolute;
  margin-left: -50px;
  margin-top: -130px;
  top: 50%;
  height: 100%;
  width: 100%;
} */
</style>