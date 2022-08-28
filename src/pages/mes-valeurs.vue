<template>
  <Layout>
    <intro></intro>
    <div class="section">
      <div class="container" id="outils" style="padding-top: 2rem">
        <div
          v-for="valeur in $page.valeurs.edges"
          :key="valeur.node.id"
          class="media"
        >
          <div class="media-left">
            <figure class="image is-96x96">
              <g-image :src="valeur.node.thumbnail"></g-image>
            </figure>
          </div>
          <div class="media-content">
            <h2 class="title is-size-5 is-family-primary">
              {{ valeur.node.title }}
            </h2>
            <div v-html="valeur.node.content"></div>
          </div>
        </div>
      </div>
    </div>
    <outro></outro>
  </Layout>
</template>

<page-query>
query Valeurs {
  valeurs: allValeurs(filter: { path: { nin: ["/valeurs/mes-valeurs/"] }} )  {
    edges {
      node {
        title
        id
        thumbnail (quality: 100)
        content
      }
    }
  }
}
</page-query>

<script>
import intro from "~/components/valeurs/intro.vue";

export default {
  metaInfo: {
    title: "Mes Valeurs",
  },
  components: {
    intro,
  },
};
</script>

<style scoped lang="scss">
.section {
  padding-top: 0.5rem;
}
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card-content {
  margin-top: auto;
  padding: 0 1.5rem 1rem;
}

.card-image {
  padding: 1rem;
}
</style>
