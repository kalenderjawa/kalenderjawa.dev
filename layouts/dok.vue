<template>
  <div  class="layar">
    <nav class="navbar navbar-lain">
      <Navin/>
    </nav>
    <!--
    <section class="section top-grad"><div></div></section>
    -->
    <nuxt />
    <Footer/>
    <section class="section bottom-section thin-line">
      <div></div>
    </section>
  </div>
</template>

<script>
import Navin from '~/components/Navin.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer,
    Navin
  }
}
</script>  
