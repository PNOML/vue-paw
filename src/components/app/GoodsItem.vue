<template>
  <div>
    <div class="catalog-item">
      <img
        v-bind:src="require(`../../assets/images/${goods_data.image}`)"
        alt=""
      >
      <p>{{goods_data.description}}</p>
      <div>
        <span class="weight">{{goods_data.weight}} г</span>
        <span class="price">{{goods_data.price}} руб</span>
      </div>
      <button
        class="add-to-cart"
        @click="sendDataToCart"
      >Добавить в корзину
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    sendDataToCart() {
      this.$emit("sendArticle", this.goods_data.article);
    }
  }
};
</script>