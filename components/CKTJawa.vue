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
  console.log(`${d.kurup.taun}_${d.kurup.dinten.dino}_${d.kurup.pasaran.pasaran}`)
  // alip_senen_pahing (anenhing)
})
        </code>
      </pre>
      <div class="columns code-demo-form">
    <div class="column">
      <div class="field">
        <div class="field">
          <label class="label">Tahun Jawa</label>
          <div class="control">
            <input class="input" name="tj" type="number" placeholder="1867 - 2106" size="4" min="1867" max="2106" required v-model="taunjawa"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" v-on:click="cariKurup()">
              Cari Kurup
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <p class="code-demo-result-title">{{konversi}}</p>
      <p class="code-demo-result">{{hasil}}</p>
    </div>
  </div>
  </div>
</template>

<script>
import * as KalenderJawa from '@junwatu/kalender-jawa'

export default {
  name: 'CKTJawa',
  data () {
    return {
      hasil: '',
      konversi: '',
      taunjawa: ''
    }
  },
  methods: {
    async cariKurup () {
      if( parseInt(this.taunjawa) > 2106 || parseInt(this.taunjawa) < 1867 || this.taunjawa.length == 0) {
        alert('Masukkan angka antara 1867 - 2106!')
      } else {
        const k = await KalenderJawa.cariKurupTahunJawa(parseInt(this.taunjawa))
        this.hasil = `${k.kurup.taun}_${k.kurup.dinten.dino}_${k.kurup.pasaran.pasaran}`
        this.konversi = `${this.capitalizeFirstLetter(this.taunjawa)} J`
      }
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>