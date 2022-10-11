<template>
  <div>
    <div class="container">
      <div class="columns is-marginless is-centered">
        <div class="column is-three-quarters has-text-centered" style="padding:2.5rem;">
          <h1 v-html="$static.about.title" class="title"></h1>
          <div v-html="$static.about.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  about(id: "consultation") {
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
