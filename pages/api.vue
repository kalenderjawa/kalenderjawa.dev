<template>
  <div class="container api-container">
    <section class="section">
      <div class="content">
        <h1 class="title is-medium">Mencari Hari dan Pasaran Awal Bulan Tahun Jawa</h1>
        <span class="api">cariHariPasaranAwalBulanTahunJawa(w,t)</span>
        <p class="code-deskripsi">Fungsi ini mencari hari dan pasaran untuk awal bulan tahun jawa</p>
        <pre v-highlightjs>
         <code class="javascript">
import * as KalenderJawa from '@junwatu/kalender-jawa'

KalenderJawa.cariHariPasaranAwalBulanTahunJawa('romadon', 1952).then({kH, kP} => {
  console.log(`${kH.dino} ${kP.pasaran}`) // senen legi
})
         </code>
       </pre>
       <HPAwalBulan/>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import HPAwalBulan from '~/components/HPAwalBulan.vue'

Vue.use(VueHighlightJS)

export default {
  layout: 'tambahan',
  components: {
    HPAwalBulan
  }
}
</script>
