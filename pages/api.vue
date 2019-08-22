<template>
  <div class="container api-container">
    <section class="section">
      <div class="content">
        <h1 class="title is-medium">API Pustaka Kalender Jawa</h1>
        <span class="api">cariHariPasaranAwalBulanTahunJawa(w,t)</span>
        <div class="code-deskripsi">
          <p>Metode ini digunakan untuk mencari hari dan pasaran untuk awal bulan pada tahun jawa tertentu.</p>
          <p>Misalnya:</p>
          <p>Untuk mencari hari dan pasaran awal bulan <strong>Romadon</strong> pada <strong>1952</strong> Tahun Jawa</p>
        </div>
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
