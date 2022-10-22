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

    <section id="mission" class="lead-content">
      <Mission></Mission>
    </section>

    <section id="lead" class="has-background-info lead-content">
      <lead></lead>
    </section>

    <section id="services">
      <services
        v-for="edge in $page.data.edges"
        :key="edge.node.id"
        :title="edge.node.title"
        :content="edge.node.content"
        :thumbnail="edge.node.thumbnail"
      />
    </section>

    <section id="formations">
      <formation
        class="has-background-info lead-content"
        style="margin-top: -10px"
      ></formation>
    </section>

    <section id="consultation">
      <consultation></consultation>
    </section>

    <section id="articles" class="has-background-info">
      <div class="container" style="padding: 2.5rem">
        <h1 class="title has-text-centered">My favorite publications for you</h1>
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
        <a href="/blogue/"
          >See my blog for more publications for your well-being ></a
        >
      </div>
    </section>

    <section id="linkedIn">
      <div class="container" style="padding: 3rem 0">
        <h1 class="title is-size-5">Testimonials</h1>
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
  query {
    data: allServicesEn(filter: { path: { nin: ["/data-en/health/formations/", "/data-en/health/lead/", "/data-en/health/consultation/", "/data-en/health/featured-articles/", "/data-en/health/magnet/", "/data-en/health/mission-vision/"] }}, sortBy: "position", order: ASC) {
      edges {
        node {
          title
          thumbnail (quality: 100, height: 680, width: 940)
          id
          content
        }
      }
    },
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
  slides: allCarouselHealth(sortBy: "order", order: ASC) {
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
    linkedin: allLinkedInEn (filter: {affichage: {eq: "Ameliorer Sante"}}) {
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
import services from "~/components/en/health/Services.vue";
import lead from "~/components/en/health/Lead.vue";
import formation from "~/components/en/health/formations/Formation.vue";
import consultation from "~/components/en/health/consultation.vue";
import articles from "~/components/en/health/articles.vue";
import Magnet from "~/components/en/health/Magnet.vue";
import Mission from "~/components/en/health/Mission.vue";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    services,
    lead,
    formation,
    consultation,
    articles,
    Magnet,
    Mission,
    VueSlickCarousel,
  },
};
</script>

<style scoped lang="scss">
.hero {
  &.has-background {
    position: relative;
    overflow: hidden;
  }

  &-background {
    position: absolute;
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100vh;

    &.is-transparent {
      opacity: 0.7;
    }
  }

  &.is-medium {
    .hero-body {
      padding-bottom: 9.5rem;
      padding-top: 9.5rem;
    }
  }
}
.slick-arrow {
  z-index: 999;
}
.slick-prev {
  left: 20px;
}
.slick-next {
  right: 20px;
}
.slick-slide {
  position: relative;
}

.slick-dots {
  bottom: 20px;
}

#carousel,
#carouselEn {
  .button {
    margin-top: 2.5rem;
  }

  .title {
    color: #004369;
    line-height: 0.9;
  }
}

.button {
  border-radius: 5px;
}

.title {
  line-height: 1.325;

  a {
    color: #004369;
    //color: #d05208;
    text-decoration: underline;

    .navbar-item.active--exact.active {
      background-color: #fafafa;
      color: #004369;
      //color: #d05208;
    }

    &:hover {
      color: inherit;
    }
  }
}

a {
  &:not(.button):not(.navbar-item) {
    font-style: italic;
  }
}

ul {
  li {
    list-style-type: circle;
    list-style-position: inside;
  }
}

blockquote {
  position: relative;
  padding-left: 0.5em;
  font-style: italic;
  border-left: 0.14em solid #3b3049;
  margin-bottom: 1.5rem;
  p {
    padding: 0;
    display: inline;
  }
  &:before,
  &:after {
    content: "\201C";
    color: #3b3049;
  }
  &:after {
    content: "\201D";
  }
}

.reverse-row-order {
  flex-direction: row-reverse;
}

.is-right {
  padding: 0px 1rem 1rem;
  float: right;
}

.self_center {
  margin: 0.8rem 0.5rem;
  display: inline-block;
}

.offset-bg-blue {
  background-image: linear-gradient(transparent 9rem, #c4e0ec80 0);
  //margin-bottom: 2rem;
}

.brands {
  a {
    color: #929292;
    //color: #3b3049;
    &:hover {
      color: #004369;
      //color: #d05208;
    }
  }
}

.navbar-dropdown {
  max-width: 100%;
}

#services {
  > .columns:nth-child(odd) {
    flex-direction: row-reverse;
    text-align: right;
  }
}

@media screen and (min-width: 768px) {
  .lead-content {
    padding: 5rem;
  }
}
</style>
