<template>
  <Layout>
    <featuredImage :image="$page.pageContent.thumbnail" :title="$page.pageContent.title"></featuredImage>
    <div class="section has-background-info">
      <div class="container">
        <div v-html="$page.pageContent.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  pageContent(path: "/data/pages/cure/") {
    title
    content
    thumbnail (quality: 90, height: 700)
  }
}
</page-query>

<script>
import featuredImage from "../components/featuredImage";

export default {
  metaInfo: {
    title: "Cures",
  },
  components: {
    featuredImage,
  },
};
</script>