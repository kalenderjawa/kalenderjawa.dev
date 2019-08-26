<template>
  <div  class="layar">
    <nav class="navbar">
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/api">API</nuxt-link>
          <!--
          <nuxt-link class="navbar-item" to="/dokumentasi">Dokumentasi</nuxt-link>
          -->
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
          © 2019, <a href="https://sajen.id">Equan Pr</a> & Kolaborator
          <br/>
          Lisensi dari isi website <a href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> | Tentang Website
        </p>
      </div>
    </footer>
    <section class="section bottom-section thin-line">
      <div></div>
    </section>
  </div>
</template>
