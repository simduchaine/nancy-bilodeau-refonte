<template>
  <div class="container bio">
    <h1 class="title">{{ $static.bio.title }}</h1>
    <g-image class="image is-right" :src="$static.bio.thumbnail"></g-image>
    <div v-html="$static.bio.content"></div>
  </div>
</template>

<static-query>
query {
  bio(path: "/data/bio/bio") {
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