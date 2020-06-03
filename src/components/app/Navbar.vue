<template>
  <nav class="main-menu">
    <ul>
      <router-link
        v-for="animal in animals"
        :key="animal.title"
        tag="li"
        to="/goods"
        v-bind:class="{done: animal.chosen}"
      >
        <a
          href="#"
          v-on:click="showId(animal.navBid)"
        >
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
      {
        title: "Котейки",
        icon: ["fas", "cat"],
        navBid: "cat",
        chosen: false
      },
      {
        title: "Собакены",
        icon: ["fas", "dog"],
        navBid: "dog",
        chosen: false
      },
      {
        title: "Амфибии",
        icon: ["fas", "fish"],
        navBid: "fish",
        chosen: false
      },
      {
        title: "Парящие",
        icon: ["fas", "feather-alt"],
        navBid: "bird",
        chosen: false
      },
      {
        title: "Другие",
        icon: ["fas", "otter"],
        navBid: "other",
        chosen: false
      }
    ]
  }),
  methods: {
    showId(id) {
      console.log(id);
    }
  }
};
</script>

<style scoped>
.done {
  background: pink;
}
</style>