<template>
  <div class="container">
    <div
      class="has-text-centered"
      v-html="$static.tools.content"
      style="padding-top: 2rem;"
    ></div>
    <g-image
      :src="$static.tools.thumbnail"
      style="display: block; margin:0 auto 2em"
    ></g-image>
  </div>
</template>

<static-query>
query {
  tools(id: "footer") {
    content
    thumbnail (width: 200)
  }
}
</static-query>

<script>
export default {
  name: "outro",
};
</script>
