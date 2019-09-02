<template>
  <div  class="layar home-background">
    <nav class="navbar navbar-home">
      <Navin/>
    </nav>
    <!--
    <section class="section top-grad"><div></div></section>
    -->
    <div class="container first-container">
      <div class="section section-home-title">
        <h1 class="text-logo mistis">
          pustaka
        </h1>
        <h1 class="text-logo mistis">
          kalender jawa
        </h1>
        <p class="text-deskripsi">
          Pustaka JavaScript untuk perhitungan, pengkonversian dan penanggalan Kalender Jawa Abadi
        </p>
      </div>
    </div>
    <nuxt />
    <Footer/>
    <section class="section bottom-section thin-line">
      <div></div>
    </section>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Navin from '~/components/Navin.vue'

export default {
  components: {
    Footer,
    Navin
  }
}
</script>  
