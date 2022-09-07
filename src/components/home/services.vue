<template>
    <div class="container">
        <h1 class="title is-size-5 has-text-centered" v-html="$static.home.title"></h1>
        <div class="columns">

            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <g-image :src="$static.home.card1.thumbnail" height="410" width="650"></g-image>
                    </div>
                    <div class="card-content has-text-centered">
                        <g-link :to="$static.home.card1.link" class="button"><h2 class="title is-size-6" v-html="$static.home.card1.buttonText"></h2></g-link>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <g-image :src="$static.home.card2.thumbnail" height="410" width="650"></g-image>
                    </div>
                    <div class="card-content has-text-centered">
                        <g-link :to="$static.home.card2.link" class="button"><h2 class="title is-size-6" v-html="$static.home.card2.buttonText"></h2></g-link>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <g-image :src="$static.home.card3.thumbnail" height="410" width="650"></g-image>
                    </div>
                    <div class="card-content has-text-centered">
                        <g-link :to="$static.home.card3.link" class="button"> <h2 class="title is-size-6" v-html="$static.home.card3.buttonText"></h2></g-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<static-query>
query {
  home(path: "/data/home/services/") {
    title
    card1 {
      link
      buttonText
      thumbnail
    }
    card2 {
      link
      buttonText
      thumbnail
    }
    card3 {
      link
      buttonText
      thumbnail
    }
  }
}
</static-query>

<script>
export default {
    name: "Services"
};
</script>