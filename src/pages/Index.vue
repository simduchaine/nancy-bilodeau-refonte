<template>
  <home-layout>

    <section id="featured-in" class="container">
      <div class="columns pt-5">
        <div class="column has-text-centered">
          <h2 class="subtitle is-6">Présente sur</h2>
        </div>
      </div>
      <div class="columns is-vcentered">
        <div class="column">
          <a href="https://www.lesaffaires.com/auteur/nancy-bilodeau/2403">
            <g-image src="../../uploads/les-affaires-logo.png"></g-image>
          </a>
        </div>
        <div class="column">
          <a href="https://www.journalactionpme.com/author/nancy-bilodeau/">
            <g-image src="../../uploads/japme-logo.png"></g-image>
          </a>
        </div>
        <div class="column">
          <g-image src="../../uploads/Logo-Mindset-entrepreneur.jpg"></g-image>
        </div>
        <div class="column">
          <g-image src="../../uploads/spa-eastman-logo.png"></g-image>
        </div>
        <div class="column">
          <g-image src="../../uploads/monastere-augustine-logo.png"></g-image>
        </div>
        <div class="column">
          <a href="https://www.magazinevivre.com/">
            <g-image src="../../uploads/mag-vivre-logo.png"></g-image>
          </a>
        </div>
      </div>
    </section>

    <section id="Magnet" style="background-color:#f1f0f0">
      <Magnet></Magnet>
    </section>

    <section id="lead" class="lead-content">
      <lead></lead>
    </section>

    <section id="services" class="has-background-info lead-content">
      <services></services>
    </section>

    <section id="call-to-action">
      <call-action></call-action>
    </section>

    <section id="video">
      <video-section class="has-background-info lead-content" style="margin-top: -10px"></video-section>
    </section>

    <section id="testimonials" class="container lead-content">
      <div class="has-text-centered pb-5">
        <h2 class="title">Témoignages</h2>
      </div>
      <VueSlickCarousel :dots="true" :autoplay="true" :autoplaySpeed="5000" :arrows="false" :centerMode="true">
        <div v-for="testimonial in $page.linkedin.edges" :key="testimonial.node.id">
          <div class="card m-2">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-128x128">
                    <g-image class="is-rounded" :src="testimonial.node.photo"></g-image>
                  </figure>
                </div>
                <div class="media-content">
                  <div class="title is-4">{{ testimonial.node.title }}</div>
                  <div class="subtitle is-6">{{ testimonial.node.company }}</div>
                </div>
              </div>

              <div class="content" v-html="testimonial.node.content"></div>

            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </section>

    <section id="Formation" style="background-color:#f1f0f0">
      <div class="container lead-content">
        <div class="columns is-three-quarters has-text-centered">
          <div class="column">
            <h1 class="title">PROCHAINE ACTIVITÉ OUVERTE À TOUS</h1>
            <h2 class="subtitle is-7">POUR VIVRE DES EXPÉRIENCES TRANSFORMATRICES QUI NOUS PERMETTENT D’INCARNER LE
              MONDE
              DANS LEQUEL ON SOUHAITE VIVRE.</h2>
          </div>
        </div>
        <div v-for="edge in $page.formations.edges" :key="edge.node.id" class="columns is-vcentered">
          <div class="column">
            <g-image :src="edge.node.thumbnail"></g-image>
          </div>
          <div class="column">
            <h2 class="pb-2">{{ edge.node.title }}</h2>
            <p v-html="edge.node.content"></p>
            <a :href="edge.node.link" class="button" target="blank">Voir la formation</a>
          </div>
        </div>
      </div>
    </section>

    <section id="follow" class="lead-content">
      <follow-me></follow-me>
    </section>

    <section id="bottom-anchor" class="has-background-info lead-content">
      <bottom-anchor></bottom-anchor>
    </section>

  </home-layout>
</template>

<page-query>
query {
  formations: allFormations(filter: {featured: {eq: true}}) {
    edges {
      node {
        id
        title
        thumbnail
        link
        content
      }
    }
  },
  linkedin: allLinkedIn {
    edges {
      node {
        title
        company
        content
        photo
      }
    }
  }
}
</page-query>


<script>
import lead from "~/components/home/Lead.vue";
import callAction from "~/components/home/call-to-action.vue";
import videoSection from "~/components/home/video.vue";
import Magnet from "~/components/home/Magnet.vue";
import services from "~/components/home/services.vue";
import FollowMe from "~/components/home/follow-me.vue";
import BottomAnchor from '~/components/home/bottom-anchor.vue';

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";


export default {
  metaInfo: {
    title:
      "Services conseils holistiques en entreprises et coaching individuel pour employés et gestionnaires",
    meta: [
      {
        name: "description",
        content:
          "J'assiste les entreprises à atteindre leurs objectifs par l'établissement d'un milieu de travail vibrant où tous prennent soin de leur santé et de leur attitude en pleine conscience, pour apporter le meilleur d'eux même et contribuer au succès de l'entreprise.",
      },
    ],
  },
  components: {
    lead,
    callAction,
    videoSection,
    Magnet,
    VueSlickCarousel,
    services,
    FollowMe,
    BottomAnchor
  },
};
</script>

<style lang="scss">
/* .hero {
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
} */

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
    list-style-position: outside;
    margin-left: 1em;
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

#services {
  > .columns:nth-child(odd) {
    flex-direction: row-reverse;
    text-align: right;
  }

  /* .columns {
    max-height: 689px;
  } */
}

@media screen and (min-width: 768px) {
  .lead-content {
    padding: 5rem;
  }
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
}
</style>
