<template>
  <home-layout>
    
    <section id="featured-in">
      <featuredIn></featuredIn>
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

    <section id="video" class="has-background-info lead-content" style="margin-top: -10px">
      <video-section></video-section>
    </section>

    <section id="testimonials" class="container lead-content">
      <testimonials></testimonials>
    </section>

    <section id="Formation" style="background-color:#f1f0f0">
      <formation></formation>
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
  retraites: allRetraites(filter: {featured: {eq: true}}) {
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
  linkedin: allLinkedIn (filter: {affichage: {eq: "Accueil"}}) {
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
import formation from '~/components/home/formation.vue';
import testimonials from '~/components/home/testimonials.vue';
import featuredIn from '~/components/home/featured-in.vue'


export default {
  metaInfo: {
    title:
      "Guide en santé et mieux-être. Consultante, formatrice et coach certifiée. Bioénergie, neurosciences, cohérence cardiaque.",
    meta: [
      {
        name: "description",
        content:
          "J'assiste les entreprises à atteindre leurs objectifs par l'établissement d'un milieu de travail vibrant où tous prennent soin de leur santé et de leur attitude en pleine conscience, pour apporter le meilleur d'eux même et contribuer au succès de l'entreprise. J’assiste aussi les gestionnaires et employés en démarche individuelle vers l’atteinte d’une santé physique et mentale optimale.",
      },
    ],
  },
  components: {
    lead,
    callAction,
    videoSection,
    Magnet,
    services,
    FollowMe,
    BottomAnchor,
    formation,
    testimonials,
    featuredIn
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
    list-style-position: inside;
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
