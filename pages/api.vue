<template>
  <div class="container api-container">
      <div class="content">
        <HPAwalBulan/>
        <CKTJawa/>
        <CRumusAbadi/>
        <Sasi/>
        <div>
          <h2 id="properti">Properti</h2>
<h3 id="-araningpasaran-"><code>araningPasaran</code></h3>
<p>Nama atau <em>araning</em> dari Pasaran</p>
<div class="content params">
<p> <strong>Return</strong>:</p>
<ul>
<li>Array</li>
</ul>
</div>
<p>Contoh</p>
<pre><code class="javascript hljs"><span class="hljs-keyword">const</span> pasaran = KalenderJawa.araningPasaran
console.<span class="hljs-built_in">log</span>(pasaran[<span class="hljs-number">0</span>].pasaran) <span class="hljs-comment">// legi</span>
</code></pre>
<h3 id="-araningdinten-"><code>araningDinten</code></h3>
<div class="content params">
<p><strong>Return</strong>:</p>
<ul>
<li>Array</li>
</ul>
</div>
<p>Contoh</p>
<pre><code class="javascript hljs">const iterator = KalenderJawa.araningDinten.<span class="hljs-built_in">values</span>()
<span class="hljs-keyword">let</span> <span class="hljs-built_in">index</span> = iterator.<span class="hljs-keyword">next</span>()

<span class="hljs-keyword">while</span> (!index.done) {
  console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">index</span>.value) // { dino: <span class="hljs-string">'senen'</span>, urutan: <span class="hljs-number">1</span> } ...
  <span class="hljs-built_in">index</span> = iterator.<span class="hljs-keyword">next</span>()
}
</code></pre>
<h3 id="-taunjawa-"><code>taunJawa</code></h3>
<div class="content params">
<p><strong>Return</strong>:</p>
<ul>
<li>Array</li>
</ul>
</div>
<p>Contoh </p>
<pre><code class="javascript hljs">console.log(KalenderJawa<span class="hljs-selector-class">.tahunJawa</span>[<span class="hljs-number">1</span>]) <span class="hljs-comment">// { taun: 'dal', neptu: 4, urutan: 5, cacah: 355 }</span>
</code></pre>
        </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import HPAwalBulan from '~/components/HPAwalBulan.vue'
import CKTJawa from '~/components/CKTJawa.vue'
import CRumusAbadi from '~/components/CRumusAbadi.vue'
import Sasi from '~/components/Sasi.vue'

Vue.use(VueHighlightJS)

export default {
  layout: 'isi',
  head () {
    return {
    title: 'API - Pustaka Kalender Jawa',
    meta: [
      { hid: 'description', name: 'description', content: 'Dokumentasi API Pustaka Kalender Jawa' }
    ]
    }
  }, 
  components: {
    HPAwalBulan,
    CKTJawa,
    CRumusAbadi,
    Sasi
  }
}
</script>
