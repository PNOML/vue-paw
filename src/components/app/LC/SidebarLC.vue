<template>
  <aside class="sidebar">
    <ul>

      <router-link
        v-for="cat in categories"
        :key="cat.title"
        tag="li"
        active-class="active"
        to="/goods"
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
      { title: "Профиль" },
      { title: "История заказов" },
      { title: "Предложение для Вас" }
    ]
  })
};
</script>