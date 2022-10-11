<template>
  <English-Layout>
    <section class="offset-bg-blue section">
      <bio></bio>
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

    <section id="rendez-vous">
      <rendezvous
        class="has-background-info lead-content"
        style="margin-top: -10px"
      ></rendezvous>
    </section>

    <section id="consultation">
      <consultation></consultation>
    </section>

    <section id="articles" class="has-background-info">
      <follow></follow>
    </section>
  </English-Layout>
</template>

<page-query>
  query {
    data: allAbout(filter: { id: { nin: ["about-me", "lead", "appointment", "consultation", "mission-vision", "follow"] }}, sortBy: "position", order: ASC) {
      edges {
        node {
          title
          thumbnail (quality: 100, height: 680, width: 940)
          id
          content
        }
      }
    }
   }
</page-query>

<script>
import bio from "~/components/en/about-me/bio";
import Mission from "~/components/en/about-me/mission-vision.vue";
import lead from "~/components/en/about-me/Lead.vue";
import services from "~/components/en/about-me/Services.vue";
import rendezvous from "~/components/en/about-me/rendez-vous.vue";
import consultation from "~/components/en/about-me/consultation.vue";
import follow from "~/components/en/about-me/follow.vue";

export default {
  metaInfo: {
    title: "About Me",
  },
  components: {
    bio,
    Mission,
    lead,
    services,
    rendezvous,
    consultation,
    follow,
  },
};
</script>

    Follow
<style lang="scss">
</style>