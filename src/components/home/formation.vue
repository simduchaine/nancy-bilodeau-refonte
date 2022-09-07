<template>
    <div class="container lead-content">
        <div class="columns is-three-quarters has-text-centered">
          <div class="column">
            <h1 class="title is-size-5">PROCHAINE ACTIVITÉ OUVERTE À TOUS</h1>
            <h2 class="subtitle is-7">POUR VIVRE DES EXPÉRIENCES TRANSFORMATRICES QUI NOUS PERMETTENT D’INCARNER LE
              MONDE
              DANS LEQUEL ON SOUHAITE VIVRE.</h2>
          </div>
        </div>
        <div v-for="edge in $page.formations.edges" :key="edge.node.id" class="columns is-vcentered">
          <div class="column">
            <g-image :src="edge.node.thumbnail"></g-image>
          </div>
          <div class="column">
            <h2 class="pb-2">{{ edge.node.title }}</h2>
            <p v-html="edge.node.content"></p>
            <a :href="edge.node.link" class="button" target="blank">Voir l'activité</a>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Formation"
};
</script>