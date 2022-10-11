<template>
  <div>
    <div class="container" style="padding: 2.5rem">
      <h1 class="title has-text-centered" v-html="$static.apropos.title"></h1>
      <div class="columns is-multiline">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <g-image
                :src="$static.apropos.card1.thumbnail"
                height="410"
                width="650"
              ></g-image>
            </div>
            <div class="card-content has-text-centered">
              <a :href="$static.apropos.card1.link" target="_blank" class="button" v-html="$static.apropos.card1.title">            
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="card-image">
              <g-image
                :src="$static.apropos.card2.thumbnail"
                height="410"
                width="650"
              ></g-image>
            </div>
            <div class="card-content has-text-centered">
              <a :href="$static.apropos.card2.link" target="_blank" class="button" v-html="$static.apropos.card2.title">
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="card-image">
              <g-image
                :src="$static.apropos.card3.thumbnail"
                height="410"
                width="650"
              ></g-image>
            </div>
            <div class="card-content has-text-centered">
              <a :href="$static.apropos.card3.link" target="_blank" class="button" v-html="$static.apropos.card3.title">
              </a>
            </div>
          </div>
        </div>
      </div>

      <a :href="$static.apropos.link" v-html="$static.apropos.link_text"></a>
    </div>
  </div>
</template>

<static-query>
  query {
  apropos: about(id: "follow") {
    title
    subtitle
    link_text
    link
    card1 {
      title
      link
      thumbnail
    }
    card2 {
      title
      link
      thumbnail
    }
    card3 {
      title
      link
      thumbnail
    }
  }
}
</static-query>

<script>
export default {
  name: "Follow",
};
</script>