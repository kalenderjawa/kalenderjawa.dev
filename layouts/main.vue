<template>
  <div  class="layar">
    <nav class="navbar is-spaced">
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/api">API</nuxt-link>
          <nuxt-link class="navbar-item" to="/panduan">Panduan</nuxt-link>
          <nuxt-link class="navbar-item" to="/sejarah">Sejarah</nuxt-link>
          <a class="navbar-item" href="https://github.com/kalenderjawa" alt="https://github.com/kalenderjawa"> 
            <span class="icon is-large"><i class="fab fa-github"></i></span>
          </a>
        </div>
      </div>
    </nav>
    <!--
    <section class="section top-grad"><div></div></section>
    -->
    <div class="container first-container">
      <div class="section">
        <h1 class="text-logo">
          pustaka
        </h1>
        <h1 class="text-logo">
          kalender jawa
        </h1>
        <p class="text-deskripsi">
          Pustaka JavaScript untuk perhitungan, pengkonversian dan penanggalan Kalender Jawa Abadi
        </p>
      </div>
    </div>
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <span>Pustaka Kalender Jawa Abadi</span>
          <br/>
          © 2019, <a href="https://sajen.id" class="grad-link">Equan Pr</a> & Kolaborator
          <br/>
          Lisensi dari isi website <a href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
        </p>
      </div>
    </footer>
  
    <section class="section bottom-section thin-line">
      <div></div>
    </section>

  </div>
</template>
