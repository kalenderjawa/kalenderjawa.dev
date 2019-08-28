<template>
  <div class="api-container-detail">
    <span class="api">sasi(w, t)</span>
    <div class="code-deskripsi">
      <p>Mencari hari dan pasaran selama satu bulan penuh pada tahun Jawa tertentu.</p>
      <p>Misalnya:</p>
      <p>Untuk daftar hari dan pasaran satu bulan penuh untuk bulan <strong>Romadon</strong> pada <strong>1952</strong> Tahun Jawa</p>
    </div>
    <pre v-highlightjs>
      <code class="javascript">
import * as KalenderJawa from '@junwatu/kalender-jawa'

KalenderJawa.sasi('mukarom', 1953).then({ k, s } => {
  console.log(s.get(k))
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
            <button class="button is-dark" v-on:click="cariSasiPenuh()">
              Daftar Hari & Pasaran
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="column"></div>
    </div>
    
    <div class="columns">
      <div class="column demo-result-list" v-if="ok">
      <ul id="sasi_v">
        <li v-for="(item, index) in hasil">
          Tanggal <strong>{{ index + 1 }}</strong> Hari <strong>{{ capitalizeFirstLetter(item[index + 1].dinten) }}</strong> Pasaran <strong>{{ capitalizeFirstLetter(item[index + 1].pasaran) }}</strong> 
        </li>
      </ul>
    </div>
    </div>
  </div> 
</template>

<script>
import * as KalenderJawa from '@junwatu/kalender-jawa'

export default {
  name: 'Sasi',
  data () {
    return {
      props: KalenderJawa.araningSasi,
      selected: 1,
      taunjawa: 1953,
      hasil: [],
      konversi: '',
      ok: false
    }
  },
  methods: {
    onChangeEventHandler () {
      this.hasil = ''
      this.konversi = ''
      this.ok = false
    },
    async cariSasiPenuh () {
      if( parseInt(this.taunjawa) > 2106 || parseInt(this.taunjawa) < 1867 || this.taunjawa.length == 0) {
        alert('Masukkan angka antara 1867 - 2106!')
      } else {

        const { k, s } = await KalenderJawa.sasi(this.selected, this.taunjawa)
        this.hasil = s.get(k)
        this.ok = true
      }
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
