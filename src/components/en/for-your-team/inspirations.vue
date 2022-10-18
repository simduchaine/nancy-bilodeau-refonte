<template>
  <div class="container">
    <h1
      class="title is-size-5 has-text-centered"
      v-html="$static.equipe.title"
    ></h1>
    <h2
      class="subtitle is-size-6 has-text-centered"
      v-html="$static.equipe.subtitle"
    ></h2>
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <g-image
              :src="$static.equipe.card1.thumbnail"
              height="410"
              width="650"
            ></g-image>
          </div>
          <div class="card-content has-text-centered">
            <a :href="$static.equipe.card1.link"
              ><h2
                class="title is-7 has-text-centered"
                v-html="$static.equipe.card1.title"
              ></h2
            ></a>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-image">
            <g-image
              :src="$static.equipe.card2.thumbnail"
              height="410"
              width="650"
            ></g-image>
          </div>
          <div class="card-content has-text-centered">
            <a :href="$static.equipe.card2.link"
              ><h2
                class="title is-7 has-text-centered"
                v-html="$static.equipe.card2.title"
              ></h2
            ></a>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-image">
            <g-image
              :src="$static.equipe.card3.thumbnail"
              height="410"
              width="650"
            ></g-image>
          </div>
          <div class="card-content has-text-centered">
            <a :href="$static.equipe.card3.link"
              ><h2
                class="title is-7 has-text-centered"
                v-html="$static.equipe.card3.title"
              ></h2
            ></a>
          </div>
        </div>
      </div>
    </div>

    <a :href="$static.equipe.link" v-html="$static.equipe.link_text"></a>
  </div>
</template>

<static-query>
query {
  equipe: equipeEn(path: "/data-en/for-your-team/inspirations/") {
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
  name: "Inspirations",
};
</script>