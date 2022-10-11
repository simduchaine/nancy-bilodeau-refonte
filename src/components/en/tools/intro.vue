<template>
  <div class="has-background-info">
    <featuredImage
      :image="$static.tools.thumbnail"
      :title="$static.tools.title"
    ></featuredImage>
    <!---<g-image class="header-img" :src="$static.soins.thumbnail"></g-image> -->
    <div
      class="container"
      v-html="$static.tools.content"
      style="padding-top: 2rem;"
    ></div>
  </div>
</template>

<static-query>
query {
  tools(id: "intro") {
    title
    content
    thumbnail (quality: 90, height: 700)
  }
}
</static-query>

<script>
import featuredImage from "~/components/en/featuredImage";

export default {
  name: "intro",
  components: {
    featuredImage,
  },
};
</script>
