<template>
  <English-Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Products</h1>
        <div class="columns is-multiline">
          <div
            class="column is-one-third"
            v-for="product in $page.products.edges"
            :key="product.node.id"
          >
            <div class="card">
              <g-link :to="product.node.path">
                <div class="card-image">
                  <g-image :src="product.node.thumbnail"></g-image>
                </div>
              </g-link>
              <div class="card-content">
                <h2 class="title is-6">{{ product.node.title }}</h2>
              </div>
              <div class="card-footer">
                <div class="card-footer-item tag">
                  {{ product.node.categorie }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </English-Layout>
</template>

<page-query>
query Boutique {
  products: allProductsEn (sortBy: "order", order: ASC) {
    edges {
      node {
        title
        id
        thumbnail (quality: 90, width: 678, height: 452)
        url
        path
        categorie
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Shop",
    htmlAttrs: {
      lang: "en",
    },
  },
  components: {},
};
</script>
