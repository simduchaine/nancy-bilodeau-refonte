<template>
  <div>
    <custom-header />

    <slot />

    <custom-footer />
  </div>
</template>

<script>
import customFooter from "~/components/en/Footer.vue";
import customHeader from "~/components/en/Header.vue";

export default {
  components: {
    customFooter,
    customHeader
  },
};
</script>
