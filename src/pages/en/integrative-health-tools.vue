<template>
  <English-Layout>
    <intro></intro>
    <div class="section">
      <div class="container" id="outils" style="padding-top: 2rem;">
        <div
          v-for="outil in $page.outils.edges"
          :key="outil.node.id"
          class="media"
        >
          <div class="media-left">
            <figure class="image is-96x96">
              <g-image :src="outil.node.thumbnail"></g-image>
            </figure>
          </div>
          <div class="media-content">
            <h2 class="title is-size-5 is-family-primary">
              {{ outil.node.title }}
            </h2>
            <div v-html="outil.node.content"></div>
          </div>
        </div>
      </div>
    </div>
    <outro></outro>
  </English-Layout>
</template>

<page-query>
query Outils {
  outils: allTools(filter: { id: { nin: ["footer", "intro"] }} )  {
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
import intro from "~/components/en/tools/intro.vue";
import outro from "~/components/en/tools/outro.vue";

export default {
  metaInfo: {
    title: "My Integrative Health Tools",
    htmlAttrs: {
      lang: "en",
    },
  },
  components: {
    intro,
    outro,
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
