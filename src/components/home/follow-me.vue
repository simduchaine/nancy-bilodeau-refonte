<template>
  <div class="container">
    <h1 class="title is-size-5 has-text-centered" v-html="$static.home.title"></h1>
    <h2 class="subtitle is-size-6 has-text-centered" v-html="$static.home.subtitle"></h2>
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <!-- <g-image src="../../../uploads/young-smiling-man.jpg" height="410" width="650"></g-image> -->
          </div>
          <div class="card-content has-text-centered">
            <h2 class="title" v-html="$static.home.card1.title"></h2>
            <a :href="$static.home.card1.link" v-html="$static.home.card1.buttonText" class="button"></a>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-image">
            <!-- <g-image src="../../../uploads/woman-coworkers.jpg" height="410" width="650"></g-image> -->
          </div>
          <div class="card-content has-text-centered">
            <h2 class="title" v-html="$static.home.card2.title"></h2>
            <a :href="$static.home.card2.link" v-html="$static.home.card2.buttonText" class="button"></a>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-image">
            <!-- <g-image src="../../../uploads/happy-young.jpg" height="410" width="650"></g-image> -->
          </div>
          <div class="card-content has-text-centered">
            <h2 class="title" v-html="$static.home.card3.title"></h2>
            <a :href="$static.home.card3.link" v-html="$static.home.card3.buttonText" class="button"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  home(path: "/data/home/follow-me/") {
    title
    subtitle
    card1 {
      title
      link
      buttonText
    }
    card2 {
      title
      link
      buttonText
    }
    card3 {
      title
      link
      buttonText
    }
  }
}
</static-query>

<script>
export default {
  name: "Follow-Me",
};
</script>