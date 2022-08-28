<template>
  <div class="has-background-info">
    <featuredImage
      :image="$static.valeurs.thumbnail"
      :title="$static.valeurs.title"
    ></featuredImage>
    <!---<g-image class="header-img" :src="$static.soins.thumbnail"></g-image> -->
    <div
      class="container"
      v-html="$static.valeurs.content"
      style="padding-top: 2rem"
    ></div>
  </div>
</template>

<static-query>
query {
  valeurs(path: "/valeurs/mes-valeurs/") {
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
