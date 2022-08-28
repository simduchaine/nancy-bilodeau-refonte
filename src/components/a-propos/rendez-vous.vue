<template>
  <div>
    <div class="container">
      <div class="columns is-marginless is-multiline">
        <div class="column is-full">
          <h1 v-html="$static.apropos.title" class="title"></h1>
        </div>
        <div class="column is-half" v-html="$static.apropos.content"></div>
        <div class="column"></div>
        <div class="column is-one-third is-italic">
          <ul>
            <li v-for="(item, index) in $static.apropos.liste" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  apropos(path: "/data/a-propos/rendez-vous/") {
    title
    liste
    content
  }
}
</static-query>

<script>
export default {
  name: "Rendez-vous"
};
</script>