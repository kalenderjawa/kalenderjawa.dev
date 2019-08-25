<template>
  <div class="api-container-detail">
    <span class="api">cariKurupTahunJawa(t)</span>
    <div class="code-deskripsi">
      <p>Fungsi ini akan mencari pada tahun apa dalam se-windu dan berada pada kurup apa suatu taun. Misalnya anda ingin mencari nama taun jawa dan kurup dari tahun 1994 maka tahun tersebut berada pada tahun Jimakir dan kurup Alip Senen Pahing atau Anenhing.</p>
      <p>Misalnya:</p>
      <p>Untuk mencari kurup <strong>1994</strong> Tahun Jawa</p>
    </div>
      <pre v-highlightjs>
        <code class="javascript">
KalenderJawa.cariKurupTahunJawa(1994).then( d => {
  console.log(d.taun.taun) // jimakir
  console.log(`${d.kurup.taun}_${d.dinten.dino}_${d.kurup.pasaran.pasaran}`)
  // alip_senen_pahing (anenhing)
})
        </code>
      </pre>
  </div>
</template>

<script>
export default {
  name: 'CKTJawa'
}
</script>