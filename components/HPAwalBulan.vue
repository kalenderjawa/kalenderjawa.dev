 <template>
  <div class="api-container-detail">
    <h1 class="title is-medium">API Pustaka Kalender Jawa</h1>
        <span class="api">cariHariPasaranAwalBulanTahunJawa(w,t)</span>
        <div class="code-deskripsi">
          <p>Metode ini digunakan untuk mencari hari dan pasaran untuk awal bulan pada tahun jawa tertentu.</p>
          <p>Misalnya:</p>
          <p>Untuk mencari hari dan pasaran awal bulan <strong>Romadon</strong> pada <strong>1952</strong> Tahun Jawa</p>
        </div>
        <pre v-highlightjs>
          <code class="javascript">
  import * as KalenderJawa from '@junwatu/kalender-jawa'

  KalenderJawa.cariHariPasaranAwalBulanTahunJawa('romadon', 1952).then({kH, kP} => {
    console.log(`${kH.dino} ${kP.pasaran}`) // senen legi
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
              <select v-model="selected" v-on:change="onChangeEventHandler()">
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
            <input class="input" name="tj" type="number" placeholder="1867 - 2106" size="4" min="1867" max="2106" required v-model="taunjawa" v-on:input="onChangeEventHandler()"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-dark" v-on:click="cariHariPasaran()">
              Cari Hari & Pasaran
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
  name: 'HPAwalBulan',

  data () {
    return {
      props: KalenderJawa.araningSasi,
      selected: 1,
      taunjawa: 1953,
      hasil: '',
      konversi: ''
    }
  },
  methods: {
    onChangeEventHandler () {
      this.hasil = ''
      this.konversi = ''
    },
    async cariHariPasaran () {
      if( parseInt(this.taunjawa) > 2106 || parseInt(this.taunjawa) < 1867 || this.taunjawa.length == 0) {
        alert('Masukkan angka antara 1867 - 2106!')
      } else {
        const { kH, kP } = await KalenderJawa.cariHariPasaranAwalBulanTahunJawa(this.selected, this.taunjawa)
        this.hasil = `${kH.dino} ${kP.pasaran}`
        this.konversi = `1 ${this.capitalizeFirstLetter(KalenderJawa.araningSasi[this.selected-1].wulan)} ${this.taunjawa} J`
      }
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
