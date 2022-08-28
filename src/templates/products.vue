<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">{{ $page.products.title }}</h1>
        <g-image
          class="header-img"
          :src="$page.products.featured_image"
        ></g-image>
        <div v-html="$page.products.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query singleProduct ($id: ID!) {
  products (id: $id) {
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
      title: this.$page.products.title,
    };
  },
};
</script>

<style lang="scss">
.header-img {
  margin-bottom: 2rem;
}
</style>
