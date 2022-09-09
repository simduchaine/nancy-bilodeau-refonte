<template>
  <Layout>
    <div v-for="edge in $page.allCompetencesSante.edges" :key="edge.node.id">
      <section class="offset-bg-blue section">
        <div class="container bio">
          <h1 class="title">{{ edge.node.title }}</h1>
          <g-image class="image is-right" :src="edge.node.thumbnail"></g-image>
          <div v-html="edge.node.content"></div>
        </div>
      </section>

      <section class="section" id="formations">
        <div class="container">
          <h2 class="title is-5">{{ edge.node.title_formation }}</h2>
          <ul>
            <li v-for="(item, index) in edge.node.cv" :key="index">
              {{ item }}
            </li>
          </ul>
          <a :href="edge.node.link_formation">{{ edge.node.link_formation_text }}</a>
        </div>
      </section>

      <section class="section has-background-info">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h2 class="title is-5">{{ edge.node.vision_title  }}</h2>
              <p>{{ edge.node.vision }}</p>
            </div>
            <div class="column">
              <h2 class="title is-5">{{ edge.node.mission_title }}</h2>
              <p>{{ edge.node.mission }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="inspirations">
        <inspirations></inspirations>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query allCompetencesSante {
  allCompetencesSante(filter: { path: { nin: ["/data/competences-sante/inspirations/"] }}) {
    edges {
      node {
        id
        title
        title_formation
        link_formation
        link_formation_text
        content
        cv
        vision
        mission
        thumbnail (quality: 90, width: 500)
        thumbnail2 (quality: 90, width: 500)
        thumbnail3 (quality: 90, width: 500)
        vision_title
        mission_title
      }
    }
  }
}
</page-query>

<script>
import inspirations from "~/components/competences-sante/inspirations.vue";

export default {
  metaInfo: {
    title: "Mes compétences en santé et mieux-être",
  },
  components: {
    inspirations,
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .carousel {
    width: 50%;
    margin: 0 auto;
  }
}

#formations,
#inspirations {
  ul {
    li {
      margin-left: 1em;
      list-style-position: outside;
    }
  }
}
</style>
