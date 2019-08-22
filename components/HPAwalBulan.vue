 <template>
  <div class="columns">
    <div class="column">
      <div class="field">
      <label class="label">Bulan</label>
      <div class="control">
        <div class="select">
          <select v-model="selected">
            <option v-for="prop in props" v-bind:value="prop.urutan" v-bind:key="prop.urutan">{{capitalizeFirstLetter(prop.wulan)}}</option>
          </select>
       </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Tahun</label>
      <div class="control">
       <input class="input" type="text" placeholder="Tahun Jawa">
      </div>
    </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import * as KalenderJawa from '@junwatu/kalender-jawa'

export default {
  name: 'HPAwalBulan',
  data () {
    return {
      props: KalenderJawa.araningSasi,
      selected: 1
    }
  },
  methods: {
    cariHP () {
      KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1953).then(function (d) {
        // console.log(d)
      })
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
