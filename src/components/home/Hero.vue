<template>
  <section class="hero is-primary is-medium">
    <g-image :src="$static.HeroImg.hero_image" class="hero-background" style="height:740px;"/>
    <div class="hero-body">
      <div class="container"></div>
    </div>
  </section>
</template>

<static-query>
query HeroImg {
  HeroImg: settings(path: "/data/site/") {
    hero_image (quality: 100)
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
  height: 740px;
  &.has-background {
    position: relative;
    overflow: hidden;
  }

  &-background {
    position: absolute;
    object-fit: cover;
    object-position: top;
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
</style>
