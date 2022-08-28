<template>
  <carousel-layout>
    <section id="carousel">
      <VueSlickCarousel
        class="hero is-medium has-background"
        :dots="true"
        :autoplay="true"
        :autoplaySpeed="5000"
        :arrows="true"
      >
        <div v-for="slide in $page.slides.edges" :key="slide.node.id">
          <g-image
            class="hero-background is-transparent"
            :src="slide.node.backgroundImg"
          />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">{{ slide.node.title }}</h1>
              <h2 class="title is-size-3 is-family-primary">
                {{ slide.node.subtitle }}
              </h2>
              <a :href="slide.node.buttonLink" class="button">
                {{ slide.node.buttonText }}
              </a>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </section>

    <section id="mission-vision" class="section">
      <mission-vision></mission-vision>
    </section>

    <section id="lead" class="has-background-info lead-content">
      <lead></lead>
    </section>

    <section id="call-to-action">
      <call-action></call-action>
    </section>

    <section id="main">
      <main-content
        class="has-background-info lead-content"
        style="margin-top: -10px"
      ></main-content>
    </section>

    <section id="consultation">
      <consultation></consultation>
    </section>

    <section id="articles" class="has-background-info lead-content">
      <div class="container">
        <h1 class="title has-text-centered">Articles à la une</h1>
        <div class="columns is-multiline">
          <articles
            v-for="article in $page.articles.edges"
            :key="article.node.id"
            :title="article.node.title"
            :thumbnail="article.node.thumbnail"
            :link="article.node.link"
            class="column is-third"
          ></articles>
        </div>
        <a href="/blogue/">Plus d'articles ></a>
      </div>
    </section>

  </carousel-layout>
</template>

<page-query>
query Articles {
  articles: allArticles (filter: {sticky: {eq: true}}) {
    edges {
      node {
        title
        id
        path
        thumbnail (quality: 90, width: 678, height: 410)
        link
      }
    }
  },
  slides: allCarousel(sortBy: "order", order: ASC) {
    edges {
      node {
        title
        subtitle
        path
        backgroundImg (quality: 100)
        buttonText
        buttonLink
        id
      }
    }
  }
}
</page-query>

<script>
import lead from "~/components/transfo-org/Lead.vue";
import callAction from "~/components/transfo-org/call-to-action.vue";
import mainContent from "~/components/transfo-org/Main.vue";
import consultation from "~/components/transfo-org/consultation.vue";
import missionVision from "~/components/transfo-org/mission-vision.vue";
import articles from "~/components/transfo-org/articles.vue";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    lead,
    callAction,
    mainContent,
    consultation,
    missionVision,
    articles,
    VueSlickCarousel,
  },
};
</script>

<style lang="scss">
.hero {
  &.has-background {
    position: relative;
    overflow: hidden;
  }

  &-background {
    position: absolute;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100vh;

    &.is-transparent {
      opacity: 0.7;
    }
  }

  &.is-medium {
    .hero-body {
      padding-bottom: 8.5rem;
      padding-top: 8.5rem;
    }
  }
}

</style>
