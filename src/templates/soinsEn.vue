<template>
  <English-Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">{{ $page.soinsEn.title }}</h1>
        <div v-html="$page.soinsEn.content"></div>
      </div>
    </div>
  </English-Layout>
</template>

<page-query>
query singleSoinEn ($id: ID!) {
  soinsEn (id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.soinsEn.title,
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
