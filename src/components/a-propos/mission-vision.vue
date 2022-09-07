<template>
  <div class="container">
    <div class="columns has-text-centered">
      <div class="column">
        <g-image :src="$static.apropos.Mission.icone" width="200"></g-image>
        <h2 class="title is-5" v-html="$static.apropos.Mission.title"></h2>
        <p v-html="$static.apropos.Mission.content"></p>
      </div>
      <div class="column">
        <g-image :src="$static.apropos.Vision.icone" width="200"></g-image>
        <h2 class="title is-5" v-html="$static.apropos.Vision.title"></h2>
        <p v-html="$static.apropos.Vision.content"></p>
      </div>
    </div>
  </div>
</template>

<static-query>
query MissionVision {
  apropos(path: "/data/a-propos/mission-vision/") {
    Mission {
        title
        icone (width: 200)
        content
    }
    Vision {
        title
        icone (width: 200)
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