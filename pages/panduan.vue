<template>
  <div class="container api-container">
    <div class="content">
      <PanduanModule/>
      <Wates/>
      <EmbedCS/>
      <br>
      <div>
         <p>Jika ada yang ditanyakan atau kurang jelas silahkan bertanya atau <a href="https://github.com/kalenderjawa/pustaka/issues">mengisi <i>issue</i> di <strong>Github</strong></a>.</p> 
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS)

import Wates from '~/components/Wates.vue'
import EmbedCS from '~/components/EmbedCS.vue'
import PanduanModule from '~/components/Panduan_Module.vue'

export default {
  layout: 'dok',
  components: {
    Wates,
    EmbedCS,
    PanduanModule
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
