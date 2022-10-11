<template>
  <div class="columns is-marginless is-vcentered">
    <div class="column is-paddingless">
      <g-image :src="$static.home.thumbnail" style="width:100%" />
    </div>
    <div class="column is-paddingless">
      <div class="column is-two-thirds is-offset-one-fifth has-text-centered">
        <h1 class="title is-size-5" v-html="$static.home.title" style="color: #A88391" ></h1>
        <div v-html="$static.home.content"></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  home: homeEn(path: "/data-en/home/call-to-action") {
    title
    content
    thumbnail (quality: 100, height: 680, width: 940)
  }
}
</static-query>

<script>
export default {
  name: "CTA"
};
</script>