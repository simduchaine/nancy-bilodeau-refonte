<template>
  <English-Layout>
    <intro></intro>
    <div class="section">
      <div class="container" id="outils" style="padding-top: 2rem">
        <div
          v-for="values in $page.values.edges"
          :key="values.node.id"
          class="media"
        >
          <div class="media-left">
            <figure class="image is-96x96">
              <g-image :src="values.node.thumbnail"></g-image>
            </figure>
          </div>
          <div class="media-content">
            <h2 class="title is-size-5 is-family-primary">
              {{ values.node.title }}
            </h2>
            <div v-html="values.node.content"></div>
          </div>
        </div>
      </div>
    </div>
    <outro></outro>
  </English-Layout>
</template>

<page-query>
query Values {
  values: allValues(filter: { id: { nin: ["intro"] }} )  {
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
import intro from "~/components/en/values/intro.vue";

export default {
  metaInfo: {
    title: "My Values",
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
