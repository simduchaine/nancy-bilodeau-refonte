<template>
  <div>
    <div class="container">
      <div class="columns is-marginless is-multiline">
        <div class="column is-full">
          <h1 v-html="$static.services.title" class="title"></h1>
        </div>
        <div class="column is-half" v-html="$static.services.content"></div>
        <div class="column"></div>
        <div class="column is-one-third is-italic">
          <ul>
            <li v-for="(item, index) in $static.services.liste" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  services(path: "/data/ameliorer-sante/formations/") {
    title
    liste
    content
  }
}
</static-query>

<script>
export default {
  name: "Formation"
};
</script>