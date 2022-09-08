<template>
  <div class="container">
    <div class="columns is-marginless">
      <div class="column is-two-fifths">
        <h1 class="title" v-html="$static.equipe.title"></h1>
        <h2 class="subtitle pt-4" v-html="$static.equipe.subtitle"></h2>
      </div>
      <div class="column"></div>
      <div class="column is-half" v-html="$static.equipe.content"></div>
    </div>
  </div>
</template>

<static-query>
query {
  equipe(path: "/data/pour-ton-equipe/lead/") {
    title
    subtitle
    content
  }
}
</static-query>

<script>
export default {
  name: "Lead"
};
</script>