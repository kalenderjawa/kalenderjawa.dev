<template>
  <div  class="layar">
    <nav class="navbar is-fixed-top">
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/api">API</nuxt-link>
          <nuxt-link class="navbar-item" to="/dokumentasi">Dokumentasi</nuxt-link>
          <a class="navbar-item">Github</a>
        </div>
      </div>
    </nav>
    <section class="section top-grad"><div></div></section>
    <div class="container first-container">
      <div class="section">
        <h1 class="text-logo">
          pustaka
        </h1>
        <h1 class="text-logo">
          kalender jawa
        </h1>
        <p class="text-deskripsi">
          Pustaka JavaScript untuk perhitungan, pengkonversian dan penanggalan abadi Kalender Jawa
        </p>
      </div>
    </div>
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <span>Pustaka Kalender Jawa Abadi</span>
          <br/>
          Lisensi dari isi website <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>
          <br/>
          © 2019, <a href="https://sajen.id">Equan Pr</a> & Kolaborator
        </p>
      </div>
    </footer>
    <section class="section bottom-section thin-line">
      <div></div>
    </section>
  </div>
</template>
