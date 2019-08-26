<template>
  <div class="container api-container">
    <section class="section">
      <div class="content">
        <HPAwalBulan/>
        <CKTJawa/>
        <CRumusAbadi/>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import HPAwalBulan from '~/components/HPAwalBulan.vue'
import CKTJawa from '~/components/CKTJawa.vue'
import CRumusAbadi from '~/components/CRumusAbadi.vue'

Vue.use(VueHighlightJS)

export default {
  layout: 'isi',
  head () {
    return {
    title: 'API - Pustaka Kalender Jawa',
    meta: [
      { hid: 'description', name: 'description', content: 'Dokumentasi API Pustaka Kalender Jawa' }
    ]
    }
  }, 
  components: {
    HPAwalBulan,
    CKTJawa,
    CRumusAbadi
  }
}
</script>
