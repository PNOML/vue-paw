<template>
  <nav class="main-menu">
    <ul>

      <router-link
        v-for="animal in animals"
        :key="animal.title"
        tag="li"
        active-class="active"
        to="/goods"
      >
        <a href="#">
          <fa-icon
            :icon="animal.icon"
            size="2x"
          />
          <div>{{animal.title}}</div>
        </a>
      </router-link>

    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    animals: [
      { title: "Котейки", icon: ["fas", "cat"] },
      { title: "Собакены", icon: ["fas", "dog"] },
      { title: "Амфибии", icon: ["fas", "fish"] },
      { title: "Парящие", icon: ["fas", "feather-alt"] },
      { title: "Другие", icon: ["fas", "otter"] }
    ]
  })
};
</script>