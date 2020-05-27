<template>
  <div class="main-wrapper main-body">
    <Header />
    <main>
      <section class="nav-animal-group">
        <div class="main-wrapper">
          <Navbar />
        </div>
      </section>
      <section class="main-board">
        <div class="main-wrapper">
          <h1>Зоомагазин</h1>
          <h2>Мы позаботимся о оздоровье Вашего друга</h2>
          <img
            src="images/main-bg 1.png"
            class="main-board_img"
          >
        </div>
      </section>
      <section class="bonus-game">
        <div class="main-wrapper">
          <h1>Дал на лапу - получил скидку 3%</h1>
          <div class="game-buttons">
            <button>
              <fa-icon
                :icon="['fas', 'bone']"
                size="2x"
              />
            </button>
            <button>
              <fa-icon
                :icon="['fas', 'paw']"
                size="2x"
              />
            </button>
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
  components: {
    Navbar,
    Header,
    Footer
  }
};
</script>
