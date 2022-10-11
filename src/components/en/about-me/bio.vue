<template>
  <div class="container bio">
    <h1 class="title">{{ $static.about.title }}</h1>
    <g-image class="image is-right" :src="$static.about.thumbnail"></g-image>
    <div v-html="$static.about.content"></div>
  </div>
</template>

<static-query>
query {
  about(id: "about-me") {
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