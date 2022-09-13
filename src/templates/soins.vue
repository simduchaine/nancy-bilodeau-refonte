<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">{{ $page.soins.title }}</h1>
        <div v-html="$page.soins.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query singleSoin ($id: ID!) {
  soins (id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.soins.title,
    };
  },
};
</script>

<style lang="scss">
.header-img {
  margin-bottom: 2rem;
}
</style>
