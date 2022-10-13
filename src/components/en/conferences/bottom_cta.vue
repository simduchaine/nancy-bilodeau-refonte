<template>
  <div class="container section">
    <div v-html="$static.conferencesEn.content"></div>
  </div>
</template>

<static-query>
query {
  conferencesEn(id: "bottom") {
    content
  }
}
</static-query>


<script>
export default {
  name: "conferencesEn_bottom",
};
</script>