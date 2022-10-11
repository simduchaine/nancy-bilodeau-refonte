<template>
  <div>
    <div class="has-text-centered pb-5">
      <h2 class="title is-size-5">TESTIMONIALS</h2>
    </div>
    <VueSlickCarousel
      :dots="true"
      :autoplay="true"
      :autoplaySpeed="5000"
      :arrows="false"
      :centerMode="true"
    >
      <div
        v-for="testimonial in $page.linkedin.edges"
        :key="testimonial.node.id"
      >
        <div class="card m-2">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <g-image
                    class="is-rounded"
                    :src="testimonial.node.photo"
                  ></g-image>
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
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Testimonials",
  components: {
    VueSlickCarousel
  }
};
</script>