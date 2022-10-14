<template>
  <div class="container bio">
    <h1 class="title">{{ $static.bioEn.title }}</h1>
    <g-image class="image is-right" :src="$static.bioEn.thumbnail"></g-image>
    <div v-html="$static.bioEn.content"></div>
  </div>
</template>

<static-query>
query {
  bioEn(path: "/data-en/bio/bio/") {
    id
    title
    content
    thumbnail (quality: 90, width: 500)
  }
}
</static-query>

<script>
export default {
  name: "Bio",
};
</script>