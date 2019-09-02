<template>
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
</template>

<script>
export default {
  name: 'Navin'
}
</script>

