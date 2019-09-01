<template>
  <div  class="layar home-background">
    <nav class="navbar navbar-home">
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/api">API</nuxt-link>
          <nuxt-link class="navbar-item" to="/panduan">Panduan</nuxt-link>
          <nuxt-link class="navbar-item" to="/sejarah">Sejarah</nuxt-link>
          <a class="navbar-item" href="https://github.com/kalenderjawa" alt="Kalender Jawa Github" target="_blank" rel="noopener"> 
            <span class="icon is-large"><i class="fab fa-github"></i></span>
          </a>
        </div>
      </div>
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

export default {
  components: {
    Footer
  }
}
</script>  
