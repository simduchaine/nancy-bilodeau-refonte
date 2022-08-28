<template>
  <div>
    <div class="container">
      <div class="columns is-marginless is-centered">
        <div class="column is-three-quarters has-text-centered" style="padding:2.5rem;">
          <h1 v-html="$static.home.title" class="title"></h1>
          <h2 v-html="$static.home.subtitle" class="subtitle is-7"></h2>
          <div v-html="$static.home.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  home(path: "/data/home/video") {
    title
    subtitle
    content
  }
}
</static-query>

<script>
export default {
  name: "Video"
};
</script>
