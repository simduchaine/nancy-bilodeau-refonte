<template>
  <div>
    <div class="container">
      <div class="columns is-marginless is-centered">
        <div class="column is-three-quarters has-text-centered" style="padding:2.5rem;">
          <h1 v-html="$static.services.title" class="title"></h1>
          <div v-html="$static.services.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  services(path: "/data/ameliorer-sante/consultation/") {
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
