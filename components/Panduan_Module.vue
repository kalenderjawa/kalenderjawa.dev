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
  const url = 'https://unpkg.com/@kalenderjawa/pustaka@1.0.0-beta.8.esm.0/lib/kalenderjawa.min.mjs'
  import { sasi } from `${url}` 
  
  sasi('mukarom',1999).then( { k, s } =&gt; {
    console.log(s.get(k)))
  }
&lt;/script&gt;</code>
      </pre>
    </div>
    <p>yang perlu menjadi catatan yaitu kode diatas mereferensikan pustaka dengan ekstensi <code>.mjs</code> bukan <code>.js</code></p>

    <h4>Eksperimental</h4>
    <p>Versi ini adalah versi pengembangan dan hanya diperuntukkan bagi pengguna yang memakai browser yang PASTI mendukung modul ES6.</p>
    <p>Perbedaan mendasar dengan versi beta maupun stabil adalah pada versi eksperimental tidak terdapat dependensi apapun sehingga
      ukuran berkas yang akan di download oleh browser jauh lebih kecil dibandingkan dengan versi beta atau stabil.</p>
    <p><strong>jsdelivr</strong></p>
    <div class="javascript hljs">
    <pre> 
<code>https://cdn.jsdelivr.net/npm/@kalenderjawa/pustaka@1.0.0-beta.7-native-module-eksperimen</code>
    </pre>
    </div>
    <p>Untuk memakai modul di browser pastikan <code>type="module"</code> ditulis pada tag script.</p>
      <pre v-highlightjs>
        <code class="javascript hljs">
&lt;script type="module"&gt;
  const url = 'https://cdn.jsdelivr.net/npm/@kalenderjawa/pustaka@1.0.0-beta.7-native-module-eksperimen'
  import { cariKurupTahunJawa } from `${url}` 
  
  cariKurupTahunJawa(1999).then( x => {
      console.log(x)
  })
&lt;/script&gt;
        </code>
      </pre>
      <p>Jika ada yang ditanyakan atau kurang jelas silahkan ask atau isi issue di <strong><a href="https://github.com/kalenderjawa/pustaka/issues">Github</a></strong>.</p> 
  </div>
</div>
</template>

<script>
export default {
  name: 'PanduanModule'
}
</script>

