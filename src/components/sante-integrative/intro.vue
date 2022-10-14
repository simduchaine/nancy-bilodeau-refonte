<template>
  <div class="has-background-info">
    <featuredImage
      :image="$static.outils.thumbnail"
      :title="$static.outils.title"
    ></featuredImage>
    <!---<g-image class="header-img" :src="$static.soins.thumbnail"></g-image> -->
    <div
      class="container"
      v-html="$static.outils.content"
      style="padding-top: 2rem"
    ></div>
  </div>
</template>

<static-query>
query {
  outils(path: "/outils/mes-outils-en-sante-integrative/") {
    title
    content
    thumbnail (quality: 90, height: 700)
  }
}
</static-query>

<script>
import featuredImage from "~/components/featuredImage";

export default {
  name: "intro",
  components: {
    featuredImage,
  },
};
</script>
