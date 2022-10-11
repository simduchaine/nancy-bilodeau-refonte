<template>
  <div>
    <div class="container">
      <div class="columns is-marginless is-multiline">
        <div class="column is-full">
          <h1 v-html="$static.apropos.title" class="title"></h1>
        </div>
        <div class="column is-half" v-html="$static.apropos.texte"></div>
        <div class="column"></div>
        <div class="column is-one-third is-italic">
          <div v-html="$static.apropos.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  apropos: about(id: "appointment") {
    title
    texte
    content
  }
}
</static-query>

<script>
export default {
  name: "Rendez-vous"
};
</script>