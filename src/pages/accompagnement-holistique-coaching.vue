<template>
  <Layout>
    <featuredImage :image="$page.pageContent.thumbnail" :title="$page.pageContent.title"></featuredImage>
    <div class="section has-background-info">
      <div class="container">
        <div v-html="$page.pageContent.content"></div>
      </div>
    </div>

    <section id="linkedIn">
      <div class="container" style="padding: 3rem 0;">
        <h1 class="title is-size-5">Références</h1>
        <hr />
        <div v-for="reference in $page.linkedin.edges" :key="reference.node.id" class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <g-image class="is-rounded" :src="reference.node.photo"></g-image>
            </figure>
          </div>

          <div class="media-content">
            <div v-html="reference.node.content"></div>
            <h2 class="title is-size-6 is-family-primary">
              {{ reference.node.title }}
              <span
                v-if="reference.node.company"
              >, {{ reference.node.company }}</span>
            </h2>
          </div>
        </div>
        <hr />
        <p>
          Pour plus de références, accédez à mon profile sur LinkedIn :
          <a
            href="https://www.linkedin.com/in/nancybilodeau/"
          >https://www.linkedin.com/in/nancybilodeau/</a>
        </p>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  pageContent(path: "/data/pages/coaching/") {
    title
    content
    thumbnail (quality: 90, height: 700)
  },
  linkedin: allLinkedIn {
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
import featuredImage from "../components/featuredImage";

export default {
  metaInfo: {
    title: "Accompagnement Holistique (coaching)",
  },
  components: {
    featuredImage,
  },
};
</script>
