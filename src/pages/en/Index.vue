<template>
  <Enhome>

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

  </Enhome>
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
  linkedin: allLinkedInEn (filter: {affichage: {eq: "Accueil"}}) {
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
import lead from "~/components/en/home/Lead.vue";
import callAction from "~/components/en/home/call-to-action.vue";
import videoSection from "~/components/en/home/video.vue";
import Magnet from "~/components/en/home/Magnet.vue";
import services from "~/components/en/home/services.vue";
import FollowMe from "~/components/en/home/follow-me.vue";
import BottomAnchor from '~/components/en/home/bottom-anchor.vue';
import formation from '~/components/en/home/formation.vue';
import testimonials from '~/components/en/home/testimonials.vue';
import featuredIn from '~/components/en/home/featured-in.vue'


export default {
  metaInfo: {
    title: "Coaching and holistic consulting for companies and individuals",
    meta: [
      { name: 'description', content: "I help companies achieve their goals, manage projects, improve processes, reduce conflict and build a healthy workplace based on sustainable human values. I also help individuals achieve optimal wellness and fulfill themselves." },
    ],
    htmlAttrs: {
      lang: "en",
    },
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



