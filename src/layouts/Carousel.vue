<template>
  <div>
    <custom-header />

    <slot />

    <custom-footer />
  </div>
</template>

<script>
import customFooter from "~/components/Footer.vue";
import customHeader from "~/components/Header.vue";

export default {
  components: {
    customFooter,
    customHeader
  },
};
</script>
