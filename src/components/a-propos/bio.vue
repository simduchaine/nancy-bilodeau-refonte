<template>
  <div class="container bio">
    <h1 class="title">{{ $static.apropos.title }}</h1>
    <g-image class="image is-right" :src="$static.apropos.thumbnail"></g-image>
    <div v-html="$static.apropos.content"></div>
  </div>
</template>

<static-query>
query {
  apropos(path: "/data/a-propos/bio/") {
    id
    title
    content
    thumbnail (quality: 90, width: 500)
  }
}
</static-query>

<script>
export default {
  name: "Bio"
};
</script>