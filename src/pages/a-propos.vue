<template>
  <Layout>
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
  </Layout>
</template>

<page-query>
  query {
    data: allApropos(filter: { path: { nin: ["/data/a-propos/bio/", "/data/a-propos/lead/", "/data/a-propos/rendez-vous/", "/data/a-propos/consultation/"] }}, sortBy: "position", order: ASC) {
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
import bio from "~/components/a-propos/bio";
import Mission from "~/components/ameliorer-sante/Mission.vue";
import lead from "~/components/a-propos/Lead.vue";
import services from "~/components/a-propos/Services.vue";
import rendezvous from "~/components/a-propos/rendez-vous.vue";
import consultation from "~/components/a-propos/consultation.vue";
import follow from "~/components/a-propos/follow.vue";
import Follow from "../components/a-propos/follow.vue";

export default {
  metaInfo: {
    title: "À propos",
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