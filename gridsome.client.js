import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faPhone,
  faEnvelope,
  faLanguage,
  faPinterest,
  faInstagram
);

import { VuePrlxDirective } from 'vue-prlx'

export default function(Vue) {
  Vue.component("font-awesome", FontAwesomeIcon);
  Vue.directive('prlx', VuePrlxDirective);
}
