 <template>
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
            <button class="button is-primary" v-on:click="cariHariPasaran()">
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
     async cariHariPasaran () {
       if( parseInt(this.taunjawa) > 2000 || parseInt(this.taunjawa) < 1867 || this.taunjawa.length == 0) {
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
