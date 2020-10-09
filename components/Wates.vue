<template>
  <div class="content">
  <div class="api-container-detail">
    
      <h2 id="instalasi">Instalasi</h2>
<p>Pustaka Kalender Jawa bisa dipakai dilingkungan Node maupun Browser dan ada 3 hasil build untuk Node.js ataupun browser dengan default build yaitu ES Module (ESM). Berikut daftar hasil build dari Pustaka Kalender Jawa:</p>

<p><strong>Untuk browser yang tidak mendukung ESM</strong></p>
<code>kalenderjawa.browser.min.js</code>
<p><strong>Untuk Node.js yang tidak mendukung ESM (sebelum Node.js 12.17.0)</strong></p>
<code>kalenderjawa.min.cjs</code>
<p><strong>Untuk Node.js & browser yang mendukung ESM</strong></p>
<code>kalenderjawa.min.js</code>

<h3 id="node">Node</h3>

<div class="javascript hljs">
<pre><code>npm install --save @kalenderjawa/pustaka</code></pre>
</div>

<p>Penggunaanya umum saja kalau untuk Node.js yang sudah mendukung ES Module</p>

<div class="javascript hljs">
<pre><code>import * as KalenderJawa from "@kalenderjawa/pustaka"</code></pre>
</div>

<p>Untuk Node.js yang belum mendukung ES Module maka anda harus meng-import hasil build yang spesifik seperti berikut</p>
<div class="javascript hljs">
<pre><code>const KalenderJawa = require("@kalenderjawa/pustaka/lib/kalenderjawa.min.cjs")</code></pre>
</div>


<h3 id="browser">Browser</h3>
<p>Jika anda memakai browser pustaka ini bisa di ambil melalui CDN (<em>Content Delivery Network</em>) di <code>unpkg.com</code>. </p>
<p>Kode berikut akan mengambil pustaka dengan versi terbaru dari CDN dan default adalah mendukung ES Module.</p>
<div class="html hljs">
<pre><code>
&lt;script type="module"&gt;
  import * as KalenderJawa from "@kalenderjawa/pustaka";

  const thun = 1954;

  KalenderJawa.cariKurupTahunJawa(1954).then((d) => {
    document.getElementById("tahun").innerHTML = `${thun}:${d.kurup.taun}_${d.kurup.dinten.dino}_${d.kurup.pasaran.pasaran}`;
  });

  let s = KalenderJawa.araningSasi;
  document.getElementById("sasi").innerHTML = `sasi_1:${s[0].wulan}`;
&lt;/script&gt;

</code></pre>
</div>
    </div>

<p>Untuk browser yang belum mendukung ES Module anda harus meng-import hasil build khusus untuk browser yang belum mendukung ES Module.</p>

<p>Misalnya melalui CDN unpkg</p>
<div class="javascript hljs">
<code>&lt;script src="https://unpkg.com/@kalenderjawa/pustaka/lib/kalenderjawa.browser.min.js"&gt;
</code>
</div>
</div>
</template>

<script>
export default {
  name: 'Wates'
}
</script>
