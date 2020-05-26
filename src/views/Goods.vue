<template>
  <div class="main-wrapper main-body">
    <header>
      <div class="main-wrapper">
        <div>
          <router-link to="/"><img
              src="images/logo.png"
              class="logo"
            >
          </router-link>
          <div class="top-menu">
            <div>
              <a
                class="drop-menu"
                href=""
              >
                <fa-icon
                  class="my-icons"
                  :icon="['fas', 'bars']"
                />
              </a>
            </div>
            <div class="top-menu-center">
              <a
                href=""
                class="top-menu_links"
              >
                <fa-icon
                  :icon="['fas', 'gift']"
                  size="2x"
                />
                <div class="ml-10">Бонусы и акции</div>
              </a>
              <a
                href=""
                class="top-menu_links"
              >
                <fa-icon
                  :icon="['fas', 'phone-volume']"
                  size="2x"
                />
                <div class="ml-10">
                  <div>8 903 111 09 23</div>
                  <div class="top-menu_links_small">Прием звонков c 10:00-21:00</div>
                </div>
              </a>
              <a
                href=""
                class="top-menu_links"
              >
                <fa-icon
                  :icon="['fas', 'truck']"
                  size="2x"
                />
                <div class="ml-10">
                  <div>Бесплатная доставка</div>
                  <div class="top-menu_links_small">От 3333 руб</div>
                </div>
              </a>
            </div>
            <div class="search">
              <input
                class="search-txt"
                type="text"
                name=""
                placeholder="Начните искать товар..."
              >
              <a
                href="#"
                class="search-btn"
              >
                <fa-icon
                  class="white"
                  :icon="['fas', 'search']"
                />
              </a>
            </div>
            <div class="user-block">
              <a
                class="user-block_links"
                href=""
              >
                <fa-icon
                  :icon="['fas', 'shopping-cart']"
                  size="2x"
                />
              </a>
              <a
                class="user-block_links"
                href=""
              >
                <fa-icon
                  :icon="['fas', 'user']"
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="purchase-container">
      <div class="main-wrapper ">
        <Sidebar />
        <div class="sale-block">
          <Navbar />
          <section class="catalog">
            <GoodsItem
              v-for="item in GOODS"
              :key="item.article"
              v-bind:goods_data="item"
              @sendArticle="showConsole"
            />
          </section>
        </div>
      </div>
    </main>
    <footer>
      <div class="main-wrapper">
        <div>
          <div>
            <router-link to="/">
              <img
                src="images/footer-logo (1).png"
                class="footer-logo"
              >
            </router-link>
          </div>
          <div class="footer-menu">
            <h3>Меню</h3>
            <ul>
              <li><a
                  class="footer-links"
                  href=""
                >Главная</a></li>
              <li><a
                  class="footer-links"
                  href=""
                >Товары</a></li>
              <li><a
                  class="footer-links"
                  href=""
                >Доставка</a></li>
              <li><a
                  class="footer-links"
                  href=""
                >Оплата</a></li>
              <li><a
                  class="footer-links"
                  href=""
                >Контакты</a></li>
            </ul>
          </div>
          <div class="animals">
            <h3>Животные</h3>
            <ul>
              <li><a
                  class="footer-links"
                  href=""
                >Котейки</a></li>
              <li><a
                  class="footer-links"
                  href=""
                >Собакены</a></li>
              <li><a
                  class="footer-links"
                  href=""
                >Амфибии</a></li>
              <li><a
                  class="footer-links"
                  href=""
                >Парящие</a></li>
              <li><a
                  class="footer-links"
                  href=""
                >Другие</a></li>
            </ul>
          </div>
          <div class="other-info">
            <h3>Дополнительно</h3>
            <ul>
              <li><a
                  class="footer-links"
                  href=""
                >Дополнительно</a></li>
            </ul>
          </div>
          <div class="follow-up">
            <h3>Следуй за нами</h3>
            <ul>
              <li class="footer-social-media">
                <a href="">
                  <fa-icon :icon="['fab', 'instagram']" />
                </a>
              </li>
              <li class="footer-social-media">
                <a href="">
                  <fa-icon :icon="['fab', 'telegram-plane']" />
                </a>
              </li>
              <li class="footer-social-media">
                <a href="">
                  <fa-icon :icon="['fab', 'vk']" />
                </a>
              </li>
              <li class="footer-social-media">
                <a href="">
                  <fa-icon :icon="['fab', 'whatsapp']" />
                </a>
              </li>
              <li class="footer-social-media">
                <a href="">
                  <fa-icon :icon="['fab', 'viber']" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
import GoodsItem from "@/components/app/GoodsItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "goods",
  components: {
    Navbar,
    Sidebar,
    GoodsItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["GOODS"])
  },
  methods: {
    ...mapActions(["GET_GOODS_FROM_API"]),
    showConsole(data) {
      console.log(data);
    }
  },
  mounted() {
    this.GET_GOODS_FROM_API()
      .then(res => {
        if (res.data) {
          console.log("Data has been gotten!");
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>