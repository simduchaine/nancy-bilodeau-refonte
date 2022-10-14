<template>
    <div class="container lead-content">
        <div class="columns is-three-quarters has-text-centered">
          <div class="column">
            <h1 class="title is-size-5" v-html="$static.home.title"></h1>
            <h2 class="subtitle is-7" v-html="$static.home.subtitle"></h2>
          </div>
        </div>
        <div v-for="edge in $page.retraites.edges" :key="edge.node.id" class="columns is-vcentered">
          <div class="column">
            <g-image :src="edge.node.thumbnail"></g-image>
          </div>
          <div class="column">
            <h2 class="pb-2">{{ edge.node.title }}</h2>
            <p v-html="edge.node.content"></p>
            <a :href="edge.node.link" class="button" target="blank">See the event</a>
          </div>
        </div>
      </div>
</template>

<static-query>
query {
  home: homeEn(path: "/data-en/home/formation/") {
    title
    subtitle
  }
}
</static-query>

<script>
export default {
  name: "Retraites"
};
</script>