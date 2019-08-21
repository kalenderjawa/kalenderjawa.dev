<template>
 <div class="container api-container">
   <section class="section">
     <div class="content">
       <h1 class="title is-medium">Mencari Hari dan Pasaran Awal Bulan Tahun Jawa</h1>
       <p>Fungsi ini mencari hari dan pasaran untuk awal bulan tahun jawa</p>
       <pre v-highlightjs>
         <code class="javascript">
import * as KalenderJawa from '@junwatu/kalender-jawa'

KalenderJawa.cariHariPasaranAwalBulanTahunJawa('romadon', 1952).then({kH, kP} => {
  console.log(`${kH.dino} ${kP.pasaran}`) // senen legi
})
         </code>
       </pre>
     </div>
   </section>
 </div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import * as KalenderJawa from '@junwatu/kalender-jawa'

Vue.use(VueHighlightJS)

KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1953).then(function (d) {
  console.log(d)
})

export default {
  layout: 'tambahan'
}
</script>
