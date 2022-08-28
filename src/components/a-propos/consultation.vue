<template>
  <div>
    <div class="container">
      <div class="columns is-marginless is-centered">
        <div class="column is-three-quarters has-text-centered" style="padding:2.5rem;">
          <h1 v-html="$static.apropos.title" class="title"></h1>
          <div v-html="$static.apropos.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  apropos(path: "/data/a-propos/consultation/") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "Consultation"
};
</script>
