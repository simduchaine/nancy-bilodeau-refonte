<template>
  <div class="container">
    <div class="columns is-marginless">
      <div class="column is-two-fifths">
        <h1 class="title" v-html="$static.services.title"></h1>
      </div>
      <div class="column"></div>
      <div class="column is-half" v-html="$static.services.content"></div>
    </div>
  </div>
</template>

<static-query>
query {
  services: servicesEn(id: "lead") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "Lead"
};
</script>