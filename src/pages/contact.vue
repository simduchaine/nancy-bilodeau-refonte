<template>
  <Layout>
    <section class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Contact</h1>
        <iframe
          width="1350"
          height="450"
          frameborder="0"
          style="border:0; height:450px; margin-bottom: 1.5rem;"
          src="https://www.google.com/maps/embed/v1/view?zoom=15&center=46.7282483%2C-71.3192885&key=AIzaSyBi6IpWLQlVCG16Y7KtdCdfCBrBFTR9UkM"
          allowfullscreen
        ></iframe>
        <div class="columns">
          <div class="column">
            <h2 class="title is-5">Écrivez-nous</h2>
            <form name="contact" method="POST" action="https://formspree.io/f/maykeley">
              <input type="hidden" name="form-name" value="contact" />
              <div class="field">
                <label class="label">Nom</label>
                <div class="control">
                  <input class="input" type="text" name="nom" />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" name="email" />
                </div>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea" name="message"></textarea>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <button type="submit" class="button">Envoyer</button>
                </div>
              </div>
            </form>
          </div>
          <div id="contact-info" class="column is-one-third">
            <h2 class="title is-5">Coordonnées</h2>
            <address>1279 rue de la Brigantine,<br />Lévis, Québec, <br /> G7A 0Z6</address>
            <div>
              <font-awesome :icon="['fa', 'phone']" class="contact-icon" />
              <a href="tel:418-955-9602">418-955-9602</a>
            </div>
            <div>
              <font-awesome :icon="['fa', 'envelope']" class="contact-icon" />
              <a href="mailto:nancy@nancybilodeau.com">nancy@nancybilodeau.com</a>
            </div>
            <div>
              <a
                href="https://www.gorendezvous.com/homepage/111690"
                class="button"
              >Prendre Rendez-vous</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
  },
};
</script>

<style lang="scss">
/* .submit-btn {
  border-width: 1px;
  padding-top: calc(0.375em - 1px);
  background: transparent;
} */

#contact-info {
  div {
    margin-bottom: 1rem;
  }
}

.contact-icon {
  margin-right: 0.5rem;
  color: #3b3049;
}

/* .full-btn {
  background: #004369;
  //background: #d05208;
  color: white;
  border: none;
  &:hover {
    color: white;
    background: #3b3049;
  }
} */
</style>
