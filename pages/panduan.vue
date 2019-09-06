<template>
  <div class="container api-container">
    <div class="content">
      <Wates/>
      <EmbedCS/>
    </div>
  </div>
</template>

<script>
import Wates from '~/components/Wates.vue'
import EmbedCS from '~/components/EmbedCS.vue'

export default {
  layout: 'dok',
  components: {
    Wates,
    EmbedCS
  },
  head () {
    return {
    title: 'Panduan Node & NPM - Pustaka Kalender Jawa',
    meta: [
      { hid: 'description', name: 'description', content: 'Instalasi Pustaka Kalender Jawa Bisa Melalui NPM maupun Browser.' }
    ]
    }
  }
}
</script>
