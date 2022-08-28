<template>
  <div class="container">
    <div class="has-text-centered" v-html="$static.outils.content" style="padding-top: 2rem;"></div>
    <g-image :src="$static.outils.thumbnail" style="display: block; margin:0 auto 2em"></g-image>
  </div>
</template>

<static-query>
query {
  outils(path: "/outils/footer") {
    content
    thumbnail (width: 200)
  }
}
</static-query>

<script>

export default {
  name: "outro"
};
</script>
