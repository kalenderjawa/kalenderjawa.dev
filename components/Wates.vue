<template>
  <div class="content">
  <div class="api-container-detail">
    
      <h2 id="instalasi">Instalasi</h2>
<p>Pustaka Kalender Jawa bisa dipakai dilingkungan Node maupun Browser</p>
<h3 id="node">Node</h3>
<div class="javascript hljs">
<pre><code><span class="hljs-selector-tag">npm</span> <span class="hljs-selector-tag">install</span> <span class="hljs-selector-tag">--save</span> @<span class="hljs-keyword">kalenderjawa</span>/<span class="hljs-keyword">pustaka</span>
</code></pre>
</div>

<h3 id="browser">Browser</h3>
<p>Jika anda memakai browser pustaka ini bisa di ambil melalui CDN (<em>Content Delivery Network</em>) di <code>unpkg.com</code>. </p>
<p>Kode berikut akan mengambil pustaka dengan versi terbaru dari CDN</p>
<div class="html hljs">
<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://unpkg.com/@kalenderjawa/pustaka"</span>/&gt;</span><span class="undefined"></span>
</code></pre>
</div>
    </div>

    <p>Memakai pustaka dengan <code>import</code> ES6</p>

<div class="javascript hljs">
<pre><code class="lang-js"><span class="hljs-keyword">import</span> * as KalenderJawa <span class="hljs-keyword">from</span> <span class="hljs-string">'@kalenderjawa/pustaka'</span>

KalenderJawa.cariKurupTahunJawa(<span class="hljs-number">1881</span>).<span class="hljs-keyword">then</span>(<span class="hljs-comment">/**...*/</span>)
</code></pre>
</div>
  </div>
</template>

<script>
export default {
  name: 'Wates'
}
</script>
