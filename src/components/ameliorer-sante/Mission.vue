<template>
  <div class="container">
    <div class="columns has-text-centered">
      <div class="column">
        <h2 class="title is-5" v-html="$static.services.Mission.title"></h2>
        <p v-html="$static.services.Mission.content"></p>
      </div>
      <div class="column">
        <h2 class="title is-5" v-html="$static.services.Vision.title"></h2>
        <p v-html="$static.services.Vision.content"></p>
      </div>
    </div>
  </div>
</template>

<static-query>
query MissionVision {
  services(path: "/data/ameliorer-sante/mission-vision/") {
    Mission {
        title
        content
    }
    Vision {
        title
        content
    }
  }
}
</static-query>

<script>
export default {
  name: "MissionVision"
};
</script>