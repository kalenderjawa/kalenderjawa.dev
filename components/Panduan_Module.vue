<template>
<div class="content">
  <div class="api-container-detail">
    <h3>Modul ES6</h3>
    <p>Pustaka Kalender Jawa mendukung penggunaan sistem modul ES6, meskipun saat ini tidak semua browser mendukung fitur ini (cek di <strong><a href="https://caniuse.com/#search=module">caniuse.com</a>)</strong>, tetapi prosentase pemakai browser modern sudah lebih dari 90% sehingga Pustaka Kalender Jawa ditargetkan terutama untuk browser yang mendukung ES Module.</p>
    <p>Manfaat utama dari Modul ES6 adalah kode yang di eksekusi oleh browser bukanlah kode hasil transpilasi dari babel ataupun hasil <i>bundling</i> dari webpack dan ukuran berkas JavaScript jauh lebih kecil karena tidak adanya <i>polyfill</i>, dsb.</p>    

    <p>Anda bisa mereferensikan paket npm dengan dukungan Modul ES6 ini melalui <code>unpkg.com</code> maupun melalui <code>jsDelivr</code>.</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'PanduanModule'
}
</script>

