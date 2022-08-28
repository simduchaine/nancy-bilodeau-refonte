<template>
  <div class="container">
    <div class="columns has-text-centered">
      <div class="column" v-for="edge in $static.allTransfo.edges" :key="edge.node.id">
        <h2 class="title is-5">{{edge.node.title}}</h2>
        <p v-html="edge.node.content"></p>
      </div>
    </div>
  </div>
</template>

<static-query>
query MissionVision {
  allTransfo(filter: { path: { in: ["/data/transfo-organisation/mission/", "/data/transfo-organisation/vision/"] }}) {
      edges {
          node {
            id
            title
            content
          }
      }
  }
}
</static-query>

<script>
export default {
  name: "missionVision"
};
</script>