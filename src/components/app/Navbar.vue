<template>
  <nav class="main-menu">
    <ul>
      <router-link
        v-for="animal in animals"
        :key="animal.title"
        tag="li"
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
      { title: "Котейки", icon: ["fas", "cat"], animalid: "cat" },
      { title: "Собакены", icon: ["fas", "dog"], animalid: "dog" },
      { title: "Амфибии", icon: ["fas", "fish"], animalid: "fish" },
      { title: "Парящие", icon: ["fas", "feather-alt"], animalid: "bird" },
      { title: "Другие", icon: ["fas", "otter"], animalid: "other" }
    ]
  }),
  methods: {
    showBorder(act) {
      console.log(act);
    }
  }
};
</script>

<style scoped>
.done {
  border: 1px solid red;
}
</style>