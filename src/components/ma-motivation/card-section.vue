<template>
    <div class="container">
          <h2 class="title" v-html="$static.motivation.title"></h2>

          <div class="columns">
            
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <g-image
                            :src="$static.motivation.card1.image"
                        />
                        </figure>
                    </div>
                    <div class="card-content has-text-centered">
                        <a :href="$static.motivation.card1.button_link" target="_blank" rel="noopener noreferrer" class="button" v-html="$static.motivation.card1.button_text"></a>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <g-image
                            :src="$static.motivation.card2.image"
                        />
                        </figure>
                    </div>
                    <div class="card-content has-text-centered">
                        <a :href="$static.motivation.card2.button_link" target="_blank" rel="noopener noreferrer" class="button" v-html="$static.motivation.card2.button_text"></a>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <g-image
                            :src="$static.motivation.card3.image"
                        />
                        </figure>
                    </div>
                    <div class="card-content has-text-centered">
                        <a :href="$static.motivation.card3.button_link" target="_blank" rel="noopener noreferrer" class="button" v-html="$static.motivation.card3.button_text"></a>
                    </div>
                </div>
            </div>
          </div>

          <div v-html="$static.motivation.content" class="has-text-centered p-6"></div>

        </div>
</template>

<static-query>
query {
    motivation (id: "card-section") {
        title
        content
        card1 {
            image
            button_text
            button_link
        }
        card2 {
            image
            button_text
            button_link
        }
        card3 {
            image
            button_text
            button_link
        }
    }
}
</static-query>

<script>
export default {
    name: "cardSection"
}
</script>