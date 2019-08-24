<template>
  <div class="container api-container">
    <section class="section">
      <div class="content">
        <HPAwalBulan/>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import HPAwalBulan from '~/components/HPAwalBulan.vue'

Vue.use(VueHighlightJS)

export default {
  layout: 'tambahan',
  components: {
    HPAwalBulan
  }
}
</script>
