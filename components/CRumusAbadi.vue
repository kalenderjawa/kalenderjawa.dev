 <template>
  <div class="api-container-detail">
        <span class="api">cariRumusAbadiAwalBulanTahunJawa(w, t)</span>
        <div class="code-deskripsi">
          <p>Rumus perhitungan abadi untuk hari awal bulan pada masing-masing tahun dalam siklus windu.</p>
          <p>Misalnya:</p>
          <p>Untuk mencari rumus abadi bulan <strong>Romadon</strong> pada <strong>1952</strong> Tahun Jawa</p>
        </div>
        <pre v-highlightjs>
          <code class="javascript">
KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('romadon', 1952).then(data => {
  console.log(`${data.rumus.wulan.wulan}_${data.rumus.dino}_${data.rumus.pasaran}`)
  // romadon_7_4 (don tu pat)
})
          </code>
        </pre>
  <div class="columns code-demo-form">
    <div class="column">
      <div class="field">
        <div class="field">
          <label class="label">Bulan</label>
          <div class="control">
            <div class="select">
              <select v-model="selected">
                <option
                  v-for="prop in props"
                  v-bind:value="prop.urutan"
                  v-bind:key="prop.urutan"
                >{{capitalizeFirstLetter(prop.wulan)}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Tahun Jawa</label>
          <div class="control">
            <input class="input" name="tj" type="number" placeholder="1867 - 2106" size="4" min="1867" max="2106" required v-model="taunjawa"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" v-on:click="cariRumusAbadi()">
              Cari
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
  name: 'CRumusAbadi',

  data () {
    return {
      props: KalenderJawa.araningSasi,
      selected: 9,
      taunjawa: 1952,
      hasil: '',
      konversi: ''
    }
  },
  methods: {
    async cariRumusAbadi () {
      if( parseInt(this.taunjawa) > 2106 || parseInt(this.taunjawa) < 1867 || this.taunjawa.length == 0) {
        alert('Masukkan angka antara 1867 - 2106!')
      } else {
        const data = await KalenderJawa.cariRumusAbadiAwalBulanTahunJawa(this.selected, this.taunjawa)
        this.hasil = `${data.rumus.wulan.wulan}_${data.rumus.dino}_${data.rumus.pasaran}`
        this.konversi = `1 ${this.capitalizeFirstLetter(KalenderJawa.araningSasi[this.selected-1].wulan)} ${this.taunjawa} J`
      }
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
