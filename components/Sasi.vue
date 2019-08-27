<template>
  <div class="api-container-detail">
    <span class="api">sasi(w, t)</span>
    <div class="code-deskripsi">
      <p>Mencari hari dan pasaran selama satu bulan penuh pada tahun Jawa tertentu.</p>
      <p>Misalnya:</p>
      <p>Untuk daftar hari dan pasaran satu bulan penuh untuk bulan <strong>Romadon</strong> pada <strong>1952</strong> Tahun Jawa</p>
    </div>
    <pre v-highlightjs>
      <code class="javascript">
import * as KalenderJawa from '@junwatu/kalender-jawa'

KalenderJawa.sasi('mukarom', 1953).then({ k, s } => {
  console.log(s.get(k))
})
      </code>
     </pre>
  </div>
  
</template>

<script>
export default {
  name: 'Sasi'
}
</script>
