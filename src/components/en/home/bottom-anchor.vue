<template>
  <div>
    <div class="container">
      <div class="columns is-marginless is-centered">
        <div class="column is-three-quarters has-text-centered" style="padding:2.5rem;">
          <h1 v-html="$static.home.title" class="title" style="color: #A88391"></h1>
          <div v-html="$static.home.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  home: homeEn(path: "/data-en/home/bottom-anchor") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "Bottom-Anchor"
};
</script>
