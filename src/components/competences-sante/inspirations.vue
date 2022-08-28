<template>
  <div class="container">
    <div class="columns is-marginless is-centered">
      <div class="column is-three-quarters has-text-centered" style="padding:2.5rem;">
        <h1 v-html="$static.bio.title" class="title"></h1>
        <div v-html="$static.bio.content"></div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h2 class="title is-5">Documentaires</h2>
        <ul>
          <li v-for="(item, index) in $static.bio.documentaires" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="column">
        <h2 class="title is-5">Santé</h2>
        <ul>
          <li v-for="(item, index) in $static.bio.sante" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="column">
        <h2 class="title is-5">Spirituelle</h2>
        <ul>
          <li v-for="(item, index) in $static.bio.spirituelle" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="column">
        <h2 class="title is-5">Affaires</h2>
        <ul>
          <li v-for="(item, index) in $static.bio.affaires" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  bio: competencesSante(path: "/data/competences-sante/inspirations/") {
    title
    content
    sante
    spirituelle
    affaires
    documentaires
  }
}
</static-query>

<script>
export default {
  name: "Inspirations"
};
</script>
