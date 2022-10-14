<template>
  <div>
    <h1 v-html="$static.retraites.title" class="title"></h1>
    <div v-html="$static.retraites.content" style="margin-bottom:2rem;"></div>
  </div>
</template>

<static-query>
query {
  retraites: retreats(id: "intro") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "intro_retreats"
};
</script>