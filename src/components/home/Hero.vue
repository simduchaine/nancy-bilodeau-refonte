<template>
  <section class="hero is-primary is-medium has-background">
    <g-image :src="$static.HeroImg.hero_image" />
  </section>
</template>

<static-query>
query HeroImg {
  HeroImg: settings(path: "/data/site/") {
    hero_image (width: 2545, height: 740, quality: 100)
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
