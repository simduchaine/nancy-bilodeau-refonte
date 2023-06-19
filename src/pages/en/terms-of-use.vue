<template>
  <English-Layout>
    <featuredImage :image="$page.pageContentEn.thumbnail" :title="$page.pageContentEn.title"></featuredImage>
    <div class="section has-background-info">
      <div class="container">
        <div v-html="$page.pageContentEn.content"></div>
      </div>
    </div>
  </English-Layout>
</template>

<page-query>
query {
  pageContentEn(path: "/data-en/pages/terms-of-use/") {
    title
    content
    thumbnail (quality: 90, height: 700)
  }
}
</page-query>

<script>
import featuredImage from "../../components/featuredImage";

export default {
  metaInfo: {
    title: "Terms of Use",
  },
  components: {
    featuredImage,
  },
};
</script>