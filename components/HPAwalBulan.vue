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
            <input class="input" type="text" placeholder="1867 - 2106" size="4" min="1867" max="2106" required/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary">
              Cari
            </button>
          </div>
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
      KalenderJawa.cariHariPasaranAwalBulanTahunJawa('mukarom', 1953).then(
        function (d) {
          // console.log(d)
        }
      )
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
