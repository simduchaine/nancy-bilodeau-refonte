<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <intro></intro>
        <div class="columns is-multiline">
          <div
            class="column is-one-third"
            v-for="formation in $page.formations.edges"
            :key="formation.node.id"
          >
            <div class="card">
              <div class="card-image">
                <g-image :src="formation.node.thumbnail"></g-image>
              </div>
              <div class="card-content">
                <h2 class="title is-6">{{formation.node.title}}</h2>
                <div v-html="formation.node.content"></div>
                <a :href="formation.node.link">En savoir plus ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom-cta></bottom-cta>
  </Layout>
</template>

<page-query>
query Formations {
  formations: allFormations (filter: { path: { nin: ["/formations/type/formations/", "/formations/type/section-du-bas/"] }}, sortBy:  "order", order: ASC) {
    edges {
      node {
        title
        id
        content
        path
        link
        thumbnail
      }
    }
  }
}
</page-query>


<script>
import intro from "~/components/formations/intro.vue";
import bottomCta from "~/components/formations/bottom_cta.vue";

export default {
  metaInfo: {
    title: "Formations"
  },
  components: {
    intro,
    bottomCta
  }
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card-content {
  margin-bottom: auto;
}
</style>