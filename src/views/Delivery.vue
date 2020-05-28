<template>
  <div class="main-wrapper main-body">
    <Header />
    <main>
      <section class="nav-animal-group">
        <div class="main-wrapper">
          <Navbar />
        </div>
      </section>
      <div class="delivery main-wrapper">
        <section class="delivery-info">
          <div class="main-wrapper">
            <h1>Доставка по ЖК "Мещерский лес"</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quam? Ipsam similique, culpa labore aliquam
              adipisci deserunt ex suscipit ab illum dolore sequi eligendi, corporis nemo vitae hic provident a?
            </p>
            <h1>Доставка по Москве</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quam? Ipsam similique, culpa labore aliquam
              adipisci deserunt ex suscipit ab illum dolore sequi eligendi, corporis nemo vitae hic provident a?
            </p>
          </div>
        </section>
        <section class="delivery-map">
          <div class="main-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9733.200618950257!2d37.40029924385955!3d55.65778410978719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x736e66fdbd66d06a!2z0JbQmiDQnNC10YnQtdGA0YHQutC40Lk!5e0!3m2!1sru!2sru!4v1590650761872!5m2!1sru!2sru"
              width="500"
              height="350"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
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