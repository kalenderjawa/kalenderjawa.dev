<template>
 <div class="container api-container">
   <section class="section">
     <div class="content">
       <h1 class="title is-medium">Mencari Hari dan Pasaran Awal Bulan Tahun Jawa</h1>
       <p>Fungsi ini mencari hari dan pasaran untuk awal bulan tahun jawa</p>
     </div>
   </section>
 </div>
</template>

<script>
import * as KalenderJawa from '@junwatu/kalender-jawa'

KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1953).then(function (d) {
  console.log(d)
})

export default {
  layout: 'tambahan'
}
</script>
