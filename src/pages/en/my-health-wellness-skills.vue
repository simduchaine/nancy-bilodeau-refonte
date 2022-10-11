<template>
  <English-Layout>
    <div v-for="edge in $page.allHealthSkills.edges" :key="edge.node.id">
      <section class="offset-bg-blue section">
        <div class="container bio">
          <h1 class="title">{{ edge.node.title }}</h1>
          <g-image class="image is-right" :src="edge.node.thumbnail"></g-image>
          <div v-html="edge.node.content"></div>
        </div>
      </section>

      <section class="section" id="formations">
        <div class="container">
          <h2 class="title is-5">Main Training</h2>
          <ul>
            <li v-for="(item, index) in edge.node.cv" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </section>

      <section class="section has-background-info">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h2 class="title is-5">My vision</h2>
              <p>{{ edge.node.vision }}</p>
            </div>
            <div class="column">
              <h2 class="title is-5">My mission</h2>
              <p>{{ edge.node.mission }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="inspirations">
        <inspirations></inspirations>
      </section>
    </div>
  </English-Layout>
</template>

<page-query>
query allHealthSkills {
  allHealthSkills(filter: { path: { nin: ["/data-en/health-skills/inspirations/"] }}) {
    edges {
      node {
        id
        title
        content
        cv
        vision
        mission
        thumbnail (quality: 90, width: 700)
        cv_link
      }
    }
  }
}
</page-query>

<script>
import inspirations from "~/components/en/health-skills/inspirations.vue";

export default {
  metaInfo: {
    title: "About",
    htmlAttrs: {
      lang: "en",
    },
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
