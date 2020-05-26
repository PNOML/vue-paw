import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  //Brands
  faInstagram, faVk, faTelegramPlane, faWhatsapp, faViber
} from '@fortawesome/free-brands-svg-icons'
import { //solid icons
  faGift, faPhoneVolume, faBars, faCat, faDog,
  faTruck, faSearch, faShoppingCart, faFish, faFeatherAlt,
  faUser, faOtter, faBone, faPaw,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGift, faPhoneVolume, faBars, faCat, faDog,
  faTruck, faSearch, faShoppingCart, faFish, faFeatherAlt,
  faUser, faOtter, faBone, faPaw, faInstagram, faVk,
  faTelegramPlane, faWhatsapp, faViber
)

Vue.component('fa-icon', FontAwesomeIcon)