<template>
  <div class="main-wrapper main-body">
    <Header />
    <main class="purchase-container">
      <div class="main-wrapper ">
        <SidebarLC />
        <div class="sale-block">
          <Navbar />
          <section class="profile">
            <h1>История Ваших заказов</h1>
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
import SidebarLC from "@/components/app/LC/SidebarLC";

export default {
  name: "goods",
  components: {
    Header,
    Footer,
    Navbar,
    SidebarLC
  }
};
</script>