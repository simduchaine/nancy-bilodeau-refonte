<template>
  <div>
    <div class="container">
      <div class="columns is-marginless">
        <div class="column is-half">
          <h1 v-html="$static.transfo.title" class="title"></h1>
          <div v-html="$static.transfo.definition"></div>
        </div>
        <div class="column"></div>
        <div class="column is-half" v-html="$static.transfo.content"></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  transfo: orgtransfo(id: "main") {
    title
    content
    definition
  }
}
</static-query>

<script>
export default {
  name: "Main"
};
</script>