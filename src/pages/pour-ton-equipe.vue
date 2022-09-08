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

    <section id="magnet" style="background: #f1f0f0">
      <Magnet></Magnet>
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

    <section id="inspirations" class="has-background-info lead-content">
      <inspirations></inspirations>
    </section>

  </carousel-layout>
</template>

<page-query>
    query {
        data: allEquipe(filter: { path: { nin: ["/data/pour-ton-equipe/par-ou-commencer/", "/data/pour-ton-equipe/lead/", "/data/pour-ton-equipe/consultation/", "/data/pour-ton-equipe/inspirations/", "/data/pour-ton-equipe/magnet/", "/data/pour-ton-equipe/vision/", "/data/pour-ton-equipe/mission/"] }}, sortBy: "position", order: ASC) {
            edges {
                node {
                title
                thumbnail (quality: 100, height: 680, width: 940)
                id
                content
                }
            }
        },
        slides: allCarouselEquipe(sortBy: "order", order: ASC) {
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
import services from "~/components/pour-ton-equipe/Services.vue";
import lead from "~/components/pour-ton-equipe/Lead.vue";
import formation from "~/components/pour-ton-equipe/formations/Formation.vue";
import consultation from "~/components/pour-ton-equipe/consultation.vue";
import Magnet from "~/components/pour-ton-equipe/Magnet.vue";
import Mission from "~/components/pour-ton-equipe/Mission.vue";
import inspirations from "~/components/pour-ton-equipe/inspirations.vue";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  metaInfo: {
    title: "Pour ton équipe",
    /* meta: [
      { name: 'description', content: "J'accompagne les individus à atteindre un mieux-être optimal et se réaliser. J'aide aussi les entreprises à atteindre leurs objectifs, gérer leurs projects, améliorer leur processus, réduire les conflits et établir un milieu de travail sain basé sur des valeurs universelles durables." },
    ] */
  },
  components: {
    services,
    lead,
    formation,
    consultation,
    Magnet,
    Mission,
    VueSlickCarousel,
    inspirations
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