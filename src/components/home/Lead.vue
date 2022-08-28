<template>
  <div class="container">
    <div class="columns is-marginless is-centered">
      <div class="column is-three-quarters has-text-centered">
        <div class="is-size-5" v-html="$static.home.content"></div>
      </div>
      
    </div>
  </div>
</template>

<static-query>
query {
  home(path: "/data/home/lead") {
    content
  }
}
</static-query>

<script>
export default {
  name: "Lead"
};
</script>