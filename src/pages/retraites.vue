<template>
  <Layout>
    <div>
      <section class="offset-bg-blue section">
        <div class="container">
          <intro></intro>

          <h2 class="title is-5">Retraites à venir</h2>

          <div class="columns is-multiline">
            <div
              class="column is-one-third"
              v-for="edge in $page.upcoming.edges"
              :key="edge.node.id"
            >
              <div class="card">
                <div class="card-image">
                  <g-image :src="edge.node.thumbnail"></g-image>
                </div>
                <div class="card-content">
                  <h2 class="title is-6">{{ edge.node.title }}</h2>
                  <div v-html="edge.node.content"></div>
                </div>
                <a :href="edge.node.link">S'inscrire ></a>
                <div class="card-footer">
                  <div class="card-footer-item tag">{{ edge.node.type }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container section">
        <h2 class="title is-5">Autres formations disponibles</h2>

        <div class="columns is-multiline">
          <div
            class="column is-one-third"
            v-for="retraite in $page.retraites.edges"
            :key="retraite.node.id"
          >
            <div class="card">
              <div class="card-image">
                <g-image :src="retraite.node.thumbnail"></g-image>
              </div>
              <div class="card-content">
                <h2 class="title is-6">{{ retraite.node.title }}</h2>
                <div v-html="retraite.node.content"></div>
              </div>
              <div class="card-footer">
                <div class="card-footer-item tag">{{ retraite.node.type }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query Retraites {
  retraites: allRetraites (filter: { path: { nin: ["/retraites/type/retraites/"] }, upcoming: { ne: true }}, sortBy: "order", order: ASC) {
    edges {
      node {
        title
        id
        content
        path
        type
        thumbnail (quality: 90, width: 678, height: 452)
        link
        upcoming
      }
    }
  },
  upcoming: allRetraites (filter: { upcoming: { eq: true }}, sortBy: "order", order: ASC) {
    edges {
      node {
        title
        id
        content
        path
        type
        thumbnail (quality: 90, width: 678, height: 678)
        link
      }
    }
  }
}
</page-query>

<script>
import intro from "~/components/retraites/intro.vue";

export default {
  metaInfo: {
    title: "Retraites",
  },
  components: {
    intro,
  },
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  a {
    padding-left: 1.5rem;
    padding-bottom: 0.5rem;
  }
}
.card-content {
  margin-bottom: auto;
}
</style>
