<template>
  <div>
    <div class="container">
      <div class="columns is-marginless is-multiline">
        <div class="column is-full">
          <h1 v-html="$static.equipe.title" class="title"></h1>
        </div>
        <div class="column is-half" v-html="$static.equipe.texte"></div>
        <div class="column"></div>
        <div class="column is-one-third is-italic">
          <p v-html="$static.equipe.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  equipe: equipeEn(path: "/data-en/for-your-team/par-ou-commencer/") {
    title
    texte
    content
  }
}
</static-query>

<script>
export default {
  name: "Formation"
};
</script>