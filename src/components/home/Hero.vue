<template>
  <section class="hero is-primary is-medium">
    <g-image :src="$static.HeroImg.hero_image" height="740"/>
  </section>
</template>

<static-query>
query HeroImg {
  HeroImg: settings(path: "/data/site/") {
    hero_image (height: 740, quality: 100)
  }
}
</static-query>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped lang="scss">
.hero {
  &.is-medium {
  
  }
}
</style>
