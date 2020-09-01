<template>
<div class="content">
  <div class="api-container-detail">
    <h3>Modul ES6</h3>
    <p>Pustaka Kalender Jawa juga mendukung penggunaan sistem modul ES6, meskipun saat ini tidak semua browser mendukung fitur ini (cek di <strong><a href="https://caniuse.com/#search=module">caniuse.com</a>)</strong>.</p>
    <p>Manfaat utama dari Modul ES6 adalah kode yang di eksekusi oleh browser bukanlah kode hasil transpilasi dari babel ataupun hasil <i>bundling</i> dari webpack dan biasanya
    ukuran berkas JavaScript akan menjadi jauh lebih kecil karena tidak adanya <i>polyfill</i>, dsb.</p>
    <p>Ada beberapa cara untuk memakai modul ES6 di pustaka ini:</p>
    
    <h4>Stabil</h4>
    <p>Belum release saat ini.</p>
    
    <h4>Beta</h4>
    <p>Mulai versi <a href="https://www.npmjs.com/package/@kalenderjawa/pustaka/v/1.0.0-beta.8.esm.0"><strong>v1.0.0-beta.8</strong></a> keatas, paket npm akan disertakan versi pustaka dengan dukungan Modul ES6 tetapi perlu
    diingat bahwa Modul ES6 pada pustaka saat ini hanya berlaku untuk browser saja!.</p>
    <p>Anda bisa mereferensikan paket npm dengan dukungan Modul ES6 ini melalui <code>unpkg.com</code> maupun melalui <code>jsDelivr</code>.</p>
    <div>
      <pre v-highlightjs>
        <code>
&lt;script type=&quot;module&quot;&gt;
import { sasi } from 'https://unpkg.com/@kalenderjawa/pustaka@1.0.0-beta.9/lib/kalenderjawa.min.mjs'
  
sasi('mukarom',1999).then( { k, s } =&gt; {
  console.log(s.get(k)))
}
&lt;/script&gt;</code>
      </pre>
    </div>
    <p>yang perlu menjadi catatan yaitu kode diatas mereferensikan pustaka yang berekstensi <code>.mjs</code> bukan <code>.js</code>.</p>
    <p>Jika ada yang ditanyakan atau kurang jelas silahkan bertanya atau <a href="https://github.com/kalenderjawa/pustaka/issues">mengisi <i>issue</i> di <strong>Github</strong></a>.</p> 
  </div>
</div>
</template>

<script>
export default {
  name: 'PanduanModule'
}
</script>

