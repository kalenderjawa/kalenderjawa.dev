<template>
  <div  class="layar">
    <nav class="navbar is-fixed-top">
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/"><span class="icon is-large"><i class="fas fa-home"></i></span></nuxt-link>
          <nuxt-link class="navbar-item" to="/api">API</nuxt-link>
          <nuxt-link class="navbar-item" to="/dokumentasi">Dokumentasi</nuxt-link>
          <a class="navbar-item">Github</a>
        </div>
      </div>
    </nav>
    <section class="section top-grad"><div></div></section>
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
