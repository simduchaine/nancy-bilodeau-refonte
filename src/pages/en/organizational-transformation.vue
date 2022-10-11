<template>
  <carouselEn-layout>
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
      <lead class="pt-4"></lead>
    </section>

    <section id="call-to-action">
      <call-action></call-action>
    </section>

    <section id="main">
      <main-content
        class="has-background-info lead-content pt-4"
        style="margin-top: -10px"
      ></main-content>
    </section>

    <section id="consultation">
      <consultation></consultation>
    </section>

    <section id="articles" class="has-background-info lead-content">
      <div class="container">
        <h1 class="title has-text-centered">My favorite publications for your business</h1>
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
        <a href="/blogue/">See my blog for more publications for your organizational transformation ></a>
      </div>
    </section>

    <section id="linkedIn">
      <div class="container" style="padding: 3rem 0">
        <h1 class="title is-size-5">Referrals</h1>
        <hr />
        <div
          v-for="reference in $page.linkedin.edges"
          :key="reference.node.id"
          class="media"
        >
          <div class="media-left">
            <figure class="image is-128x128">
              <g-image class="is-rounded" :src="reference.node.photo"></g-image>
            </figure>
          </div>

          <div class="media-content">
            <div v-html="reference.node.content"></div>
            <h2 class="title is-size-6 is-family-primary">
              {{ reference.node.title }}
              <span v-if="reference.node.company"
                >, {{ reference.node.company }}</span
              >
            </h2>
          </div>
        </div>
        <hr />
        <p>
          For more referrals, access my LinkedIn profile: 
          <a href="https://www.linkedin.com/in/nancybilodeau/"
            >https://www.linkedin.com/in/nancybilodeau/</a
          >
        </p>
      </div>
    </section>

  </carouselEn-layout>
</template>

<page-query>
query Articles {
  articles: allArticles (filter: {sticky_transfo: {eq: true}}) {
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
  slides: allCarouselTeam(sortBy: "order", order: ASC) {
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
  },
  linkedin: allLinkedInEn (filter: {affichage: {eq: "Org. Transfo"}}) {
    edges {
      node {
        title
        photo (quality: 90)
        company
        content
      }
    }
  }
}
</page-query>

<script>
import lead from "~/components/en/org-transfo/Lead.vue";
import callAction from "~/components/en/org-transfo/call-to-action.vue";
import mainContent from "~/components/en/org-transfo/Main.vue";
import consultation from "~/components/en/org-transfo/consultation.vue";
import missionVision from "~/components/en/org-transfo/mission-vision.vue";
import articles from "~/components/en/org-transfo/articles.vue";

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
