<template>
  <header class="header">
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container is-fluid">
        <div class="navbar-brand">
          <g-link to="/" class="navbar-item">
            <g-image src="~/assets/img/nancy-bilodeau-logo.svg" />
          </g-link>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" class="navbar-menu is-size-6">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link is-arrowless"> Mission </a>
              <div class="navbar-dropdown">
                <g-link class="navbar-item" to="/ma-motivation"
                  >Ma motivation</g-link
                >
                <g-link class="navbar-item" to="/a-propos"
                  >À propos de moi</g-link
                >
                <g-link class="navbar-item" to="/mes-valeurs"
                  >Mes valeurs</g-link
                >
                <g-link class="navbar-item" to="/mes-competences-daffaires"
                  >Mes compétences d'affaires</g-link
                >
                <g-link
                  class="navbar-item"
                  to="/mes-competences-sante-mieux-etre"
                  >Mes compétences en santé et mieux-être</g-link
                >
                <g-link class="navbar-item" to="/outils-sante-integrative"
                  >Mes outils en santé intégrative</g-link
                >
              </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link is-arrowless">
                Santé et Mieux-être individuel
              </a>
              <div class="navbar-dropdown">
                <g-link class="navbar-item" to="/ameliorer-ma-sante"
                  >Améliorer ma santé</g-link
                >
                <a class="navbar-item" href="https://cours.nancybilodeau.com/coherencecardiaque"
                  >Diminuer mon stress et mon anxiété</a
                >
                <a
                  class="navbar-item"
                  href="https://cours.nancybilodeau.com/bioenergie"
                  >Vaincre la fatigue</a
                >
                <g-link class="navbar-item" to="/retraites"
                  >Participer à une retraite</g-link
                >
                <g-link class="navbar-item" to="/cures"
                  >Faire une cure - détox</g-link
                >
                <g-link
                  class="navbar-item"
                  to="/boutique/programme-de-transformation/"
                  >Devenir maitre de mon mieux-être</g-link
                >
                <g-link class="navbar-item" to="/boutique/shungite/"
                  >Améliorer mon hygiène électromagnétique</g-link
                >
              </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link is-arrowless">
                Santé et Mieux-être en entreprise
              </a>
              <div class="navbar-dropdown">
                <g-link
                  class="navbar-item"
                  to="/transformation-organisationnelle"
                  >Transformation organisationnelle</g-link
                >
                <g-link class="navbar-item" to="/retraites-corporatives"
                  >Retraites corporatives</g-link
                >
                <g-link class="navbar-item" to="/formations">Formations</g-link>
                <g-link class="navbar-item" to="/conferences"
                  >Conférences</g-link
                >
                <g-link
                  class="navbar-item"
                  to="/accompagnement-holistique-coaching"
                  >Coaching individuel</g-link
                >
                <g-link
                  class="navbar-item"
                  to="/pour-ton-equipe"
                  >Pour ton équipe</g-link
                >
              </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link is-arrowless"> Ressources </a>
              <div class="navbar-dropdown">
                <g-link class="navbar-item" to="/blogue">Blogue</g-link>
                <a class="navbar-item" href="https://anchor.fm/nancy-bilodeau">Podcast</a>
                <g-link class="navbar-item" to="/boutique">Boutique</g-link>
                <a
                  class="navbar-item"
                  href="https://cours.nancybilodeau.com/bioernergetic"
                  >Premier scan du champs corporel
                </a>
                <a
                  class="navbar-item"
                  href="https://cours.nancybilodeau.com/coherence-cardiaque"
                  >Pratique de cohérence cardiaque</a
                >
                <a
                  class="navbar-item"
                  href="https://cours.nancybilodeau.com/mmme"
                  >Les 8 clés de la santé holistique
                </a>
                <a
                  class="navbar-item"
                  href="https://cours.nancybilodeau.com/programmemieuxetre"
                  >Example de programme mieux-être</a
                >
                <g-link
                  class="navbar-item"
                  to="/mes-competences-sante-mieux-etre#inspirations"
                  >Mes inspirations</g-link
                >
                <a
                  class="navbar-item"
                  href="https://www.npr.org/sections/health-shots/2015/03/02/387007941/take-the-ace-quiz-and-learn-what-it-does-and-doesnt-mean"
                  >Test ACEs</a
                >
                <a
                  class="navbar-item"
                  href="https://www.valuescentre.com/tools-assessments/pva/"
                  >Test des valeurs</a
                >
                <a
                  class="navbar-item"
                  href="https://www.tablegroup.com/product/online-team-assessment/"
                  >Test des 5 dysfonctions d’une équipe</a
                >
              </div>
            </div>

            <g-link class="navbar-item" to="/contact">Contact</g-link>
            <div class="navbar-item brands">
              <a href="https://www.facebook.com/NancyBilodeauCoaching/">
                <font-awesome :icon="['fab', 'facebook-f']" size="xs" />
              </a>
            </div>
            <div class="navbar-item brands">
              <a
                href="https://www.youtube.com/channel/UCel4Y254TeW2NpNyw37RTcA"
              >
                <font-awesome :icon="['fab', 'youtube']" size="xs" />
              </a>
            </div>
            <div class="navbar-item brands">
              <a href="https://ca.linkedin.com/in/nancybilodeau">
                <font-awesome :icon="['fab', 'linkedin-in']" size="xs" />
              </a>
            </div>
            <div class="navbar-item brands">
              <a href="#">
                <font-awesome :icon="['fa', 'envelope']" size="xs" />
              </a>
            </div>
            <g-link class="navbar-item" style="color: #004369" to="/en/"
              >En</g-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: "Header",
  mounted() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  },
};
</script>

<style lang="scss">
.navbar {
  .has-dropdown {
    .navbar-link {
      font-style: normal;
    }
  }
}
</style>
