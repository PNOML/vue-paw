<template>
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
            <router-link
              to="/bonuses"
              href="#"
              class="top-menu_links"
            >
              <fa-icon
                :icon="['fas', 'gift']"
                size="2x"
              />
              <div class="ml-10">Бонусы и акции</div>
            </router-link>
            <router-link
              to="/contacts"
              href="#"
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
            </router-link>
            <router-link
              to="/delivery"
              href="#"
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
            </router-link>
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
            <router-link
              to="/cart"
              class="user-block_links"
              href="#"
            >
              <fa-icon
                :icon="['fas', 'shopping-cart']"
                size="2x"
              />
            </router-link>
            <router-link
              to="/profile"
              class="user-block_links"
              href=""
            >
              <fa-icon
                :icon="['fas', 'user']"
                size="2x"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>