<template>
  <header class="header">
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container is-fluid">
        <div class="navbar-brand">
          <g-link to="/en/" class="navbar-item">
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
                <g-link class="navbar-item" to="/en/my-purpose">My Purpose</g-link>
                <g-link class="navbar-item" to="/en/about-me">About Me</g-link>
                <g-link class="navbar-item" to="/en/my-values">My Values</g-link>
                <g-link class="navbar-item" to="/en/my-business-skills">My Business Skills</g-link>
                <g-link class="navbar-item" to="/en/my-health-wellness-skills">My Health and Wellness Skills</g-link>
                <g-link class="navbar-item" to="/en/integrative-health-tools">My Integrative Health Tools</g-link>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link is-arrowless"> Individual Health & Wellness </a>
              <div class="navbar-dropdown">
                <g-link class="navbar-item" to="/en/improve-my-health">Improve My Health</g-link>
                <a class="navbar-item" href="https://cours.nancybilodeau.com/reducestress" target="_blank">Reduce my Stress and Anxiety</a>
                <a class="navbar-item" href="https://cours.nancybilodeau.com/bioenergy" target="_blank">Overcome Chronic Fatigue</a>
                <g-link class="navbar-item" to="/en/retreats">Participate in a Retreat</g-link>
                <g-link class="navbar-item" to="/en/detox">Detox</g-link>
                <g-link class="navbar-item" to="/en/shop/shungite/">Improve my electromagnetic hygiene</g-link>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link is-arrowless"> Corporate Health & Wellness </a>
              <div class="navbar-dropdown">
                <g-link class="navbar-item" to="/en/organizational-transformation">Organizational Transformation</g-link>
                <g-link class="navbar-item" to="/en/corporate-retreats">Corporate Retreats</g-link>
                 <g-link class="navbar-item" to="/en/training">Training</g-link>
                 <g-link class="navbar-item" to="/en/conferences">Conferences</g-link>
                 <g-link class="navbar-item" to="/en/holistic-coaching">Coaching</g-link>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link is-arrowless"> Ressources </a>
              <div class="navbar-dropdown">
                 <g-link class="navbar-item" to="/blogue">French Blog</g-link>
                 <a class="navbar-item" href="https://anchor.fm/nancy-bilodeau" target="_blank">French Podcast</a>
                 <g-link class="navbar-item" to="/en/shop">Shop</g-link>
                 <a class="navbar-item" href="https://portal.neshealth.com/user/create/SDRzSUFBQUFBQUFFQUROa01HQ3dCRUp6QmdCM2t5ZmZDZ0FBQUE9PQ__" target="_blank">Free First Body Field Scan</a>
                 <a class="navbar-item" href="https://www.heartmath.com/experience/" target="_blank">Free Heart Coherence Training</a>
                 <a class="navbar-item" href="https://cours.nancybilodeau.com/mmme" target="_blank">French Holistic Health Keys </a>
                 <a class="navbar-item" href="https://cours.nancybilodeau.com/officewellnessrescue" target="_blank">Office Wellness Program Sample</a>
                 <g-link class="navbar-item" to="/en/my-health-wellness-skills#inspirations">My Inspirations</g-link>
                 <a class="navbar-item" href="https://www.npr.org/sections/health-shots/2015/03/02/387007941/take-the-ace-quiz-and-learn-what-it-does-and-doesnt-mean" target="_blank">ACE Test</a>
                 <a class="navbar-item" href="https://www.valuescentre.com/tools-assessments/pva/" target="_blank">Values Test</a>
                 <a class="navbar-item" href="https://www.tablegroup.com/product/online-team-assessment/" target="_blank">5 Dysfonctions of a Team Test</a>
              </div>
            </div>

            <g-link class="navbar-item" to="/en/contact">Contact</g-link>

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
            <g-link class="navbar-item" style="color:#004369" to="/">Fr</g-link>
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

</style>
