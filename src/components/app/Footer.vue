<template>
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
            <router-link
              v-for="item in menu"
              :key="item.url"
              tag="li"
              :to="item.url"
            >
              <a
                class="footer-links"
                href="#"
              >{{item.title}}
              </a>
            </router-link>
          </ul>
        </div>
        <div class="animals">
          <h3>Животные</h3>
          <ul>
            <router-link
              v-for="animal in animals"
              :key="animal.title"
              tag="li"
              :to="animal.url"
            >
              <a
                class="footer-links"
                href=""
              >{{animal.title}}
              </a>
            </router-link>
          </ul>
        </div>
        <div class="other-info">
          <h3>Дополнительно</h3>
          <ul>
            <router-link
              v-for="info in otherinfo"
              :key="info.url"
              tag="li"
              :to="info.url"
            >
              <a
                class="footer-links"
                href=""
              >{{info.title}}
              </a>
            </router-link>
          </ul>
        </div>
        <div class="follow-up">
          <h3>Следуй за нами</h3>
          <ul>
            <router-link
              v-for="sm in socialmedia"
              :key="sm.icon"
              tag="li"
              :to="sm.url"
              class="footer-social-media"
            >
              <a href="#">
                <fa-icon :icon="sm.icon" />
              </a>
            </router-link>

          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: "Главная", url: "/" },
      { title: "Товары", url: "/goods" },
      { title: "Доставка", url: "/delivery" },
      { title: "Корзина", url: "/cart" },
      { title: "Оплата", url: "/payment" },
      { title: "Контакты", url: "/contacts" },
      { title: "Личный кабинет", url: "/lc" }
    ],
    animals: [
      { title: "Котейки", url: "/goods" },
      { title: "Собакены", url: "/goods" },
      { title: "Амфибии", url: "/goods" },
      { title: "Парящие", url: "/goods" },
      { title: "Другие", url: "/goods" }
    ],
    otherinfo: [{ title: "Дополнительно", url: "/" }],
    socialmedia: [
      { icon: ["fab", "instagram"], url: "/" },
      { icon: ["fab", "telegram-plane"], url: "/" },
      { icon: ["fab", "vk"], url: "/" },
      { icon: ["fab", "whatsapp"], url: "/" },
      { icon: ["fab", "viber"], url: "/" }
    ]
  })
};
</script>