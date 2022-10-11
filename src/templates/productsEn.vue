<template>
  <English-Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">{{ $page.productsEn.title }}</h1>
        <g-image
          class="header-img"
          :src="$page.productsEn.featured_image"
        ></g-image>
        <div v-html="$page.productsEn.content"></div>
      </div>
    </div>
  </English-Layout>
</template>

<page-query>
query singleProductEn ($id: ID!) {
  productsEn (id: $id) {
    title
    content
    featured_image (quality: 90, height: 700)
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.productsEn.title,
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>

<style lang="scss">
.header-img {
  margin-bottom: 2rem;
}
</style>
