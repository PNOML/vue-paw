<template>
  <div class="main-wrapper main-body">
    <Header />
    <main>
      <section class="nav-animal-group">
        <div class="main-wrapper">
          <Navbar />
        </div>
      </section>
      <section class="cart">
        <div class="main-wrapper">
          <h2>Ваша корзина</h2>
          <div class="cart-item b">
            <img
              src="images/catalog-item.jpg"
              alt=""
            >
            <p class="cart-item-title">Lorem ipsum dolor, sit amet consectetur adip</p>
            <div>
              <div>Количество</div>
              <div>5 шт</div>
            </div>
            <div>
              <div>Общая стоимость</div>
              <div>150 руб</div>
            </div>
            <a href="">
              <fa-icon :icon="['fas', 'trash-alt']" />
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/app/Header";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";

export default {
  name: "goods",
  components: {
    Header,
    Footer,
    Navbar
  }
};
</script>