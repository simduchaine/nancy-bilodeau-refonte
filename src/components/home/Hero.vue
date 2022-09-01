<template>
  <section class="hero is-primary is-medium has-background">
    <!-- <g-image
      class="hero-background is-transparent"
      :src="$static.HeroImg.hero_image"
    /> -->
    <!-- <g-image
      class="hero-background is-transparent"
      src="../../../uploads/hero-vitalise.jpg"
      width="2560"
      height="1707"
      quality="100"
    /> -->
    <img class="hero-background is-transparent" :src="$static.HeroImg.hero_image" alt="">
  </section>
</template>

<static-query>
query HeroImg {
  HeroImg: settings(path: "/data/site/") {
    hero_image (width: 2560, height: 1707, quality: 100)
  }
}
</static-query>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss">
</style>
