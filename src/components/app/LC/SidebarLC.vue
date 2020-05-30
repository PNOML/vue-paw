<template>
  <aside class="sidebar">
    <ul>

      <router-link
        v-for="cat in categories"
        :key="cat.url"
        tag="li"
        active-class="active"
        :to="cat.url"
        exact
      >
        <a
          class="sidebar-links"
          href="#"
        >{{cat.title}}
        </a>
      </router-link>

    </ul>
  </aside>
</template>

<script>
export default {
  data: () => ({
    categories: [
      { title: "Профиль", url: "/profile" },
      { title: "История заказов", url: "/history" },
      { title: "Предложение для Вас", url: "offer" }
    ]
  })
};
</script>