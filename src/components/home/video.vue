<template>
  <div class="container">
    <div class="columns is-marginless is-centered">
      <div
        class="column is-three-quarters has-text-centered"
        style="padding: 2.5rem"
      >
        <h1 class="title is-size-5" v-html="$static.home.title"></h1>
        <h2 v-html="$static.home.subtitle" class="subtitle is-7"></h2>
      </div>
    </div>
    <div class="columns">
      <div class="column is-three-fifths">
        <div style="width: 100%; margin: 0 auto">
          <div
            style="
              position: relative;
              padding-bottom: 56.25%;
              padding-top: 25px;
              height: 0;
            "
          >
            <iframe
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
              :src="$static.home.video"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="column">
        <div v-html="$static.home.content"></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  home(path: "/data/home/video") {
    title
    subtitle
    content
    video
  }
}
</static-query>

<script>
export default {
  name: "Video",
};
</script>
