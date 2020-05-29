<template>
  <div class="main-wrapper main-body">
    <Header />
    <main>
      <section class="nav-animal-group">
        <div class="main-wrapper">
          <Navbar />
        </div>
      </section>
      <div class="main-wrapper">
        <section class="contacts-info">
          <div class="main-wrapper">
            <h1>Бонусы</h1>
          </div>
        </section>
      </div>
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