<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h2 class="title is-5" v-html="$static.mission.title"></h2>
        <p v-html="$static.mission.content"></p>
      </div>
      <div class="column">
        <h2 class="title is-5" v-html="$static.vision.title"></h2>
        <p v-html="$static.vision.content"></p>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  mission: equipe(path: "/data/pour-ton-equipe/mission/") {
    title
    content
  },
  vision: equipe(path: "/data/pour-ton-equipe/vision/") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "MissionVision"
};
</script>