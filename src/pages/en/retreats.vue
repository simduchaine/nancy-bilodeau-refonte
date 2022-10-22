<template>
  <English-Layout>
    <div>
      <section class="offset-bg-blue section">
        <div class="container">
          <intro></intro>

          <h2 class="title is-5">Upcoming Retreats</h2>

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
        <h2 class="title is-5">Other training available</h2>

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

      <section id="linkedIn" class="has-background-info">
      <div class="container" style="padding: 3rem 0">
        <h1 class="title is-size-5">Testimonials</h1>
        <hr />
        <div
          v-for="reference in $page.linkedin.edges"
          :key="reference.node.id"
          class="media"
        >
          <div class="media-left">
            <figure class="image is-128x128">
              <g-image class="is-rounded" :src="reference.node.photo"></g-image>
            </figure>
          </div>

          <div class="media-content">
            <div v-html="reference.node.content"></div>
            <h2 class="title is-size-6 is-family-primary">
              {{ reference.node.title }}
              <span v-if="reference.node.company"
                >, {{ reference.node.company }}</span
              >
            </h2>
          </div>
        </div>
        <hr />
        <p>
          For more testimonials, go to my profile on LinkedIn:
          <a href="https://www.linkedin.com/in/nancybilodeau/"
            >https://www.linkedin.com/in/nancybilodeau/</a
          >
        </p>
      </div>
    </section>
    </div>
  </English-Layout>
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
        thumbnail (quality: 90)
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
        thumbnail (quality: 90)
        link
      }
    }
  },
  linkedin: allLinkedInEn (filter: {affichage: {eq: "retraites"}}) {
    edges {
      node {
        title
        photo (quality: 90)
        company
        content
      }
    }
  }
}
</page-query>

<script>
import intro from "~/components/en/retreats/intro.vue";

export default {
  metaInfo: {
    title: "Retreats",
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
