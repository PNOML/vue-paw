<template>
  <div class="main-wrapper main-body">
    <Header />
    <main class="purchase-container">
      <div class="main-wrapper ">
        <Sidebar />
        <div class="sale-block">
          <Navbar />
          <section class="catalog">
            <GoodsItem
              v-for="item in allGoods"
              :key="item.article"
              v-bind:goods_data="item"
            />
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/app/Header";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
import GoodsItem from "@/components/app/GoodsItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "goods",
  components: {
    Header,
    Footer,
    Navbar,
    Sidebar,
    GoodsItem
  },

  computed: {
    ...mapGetters(["allGoods"])
  },

  async mounted() {
    this.$store.dispatch("fetchGoods");
  }
};
</script>