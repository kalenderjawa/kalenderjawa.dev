<template>
  <div class="container api-container">
    <div class="content">
      <Wates/>
      <!-- codesandbox playground --> 
      <h2>Online Editor</h2>
      <p>Kalau anda tidak ingin ribet-ribet dengan instalasi anda bisa juga jika anda memakai editor online seperti Codesandbox.</p>
      <iframe src="https://codesandbox.io/embed/distracted-glitter-rvl3z?autoresize=1&expanddevtools=1&fontsize=14" title="Pustaka Kalender Jawa " allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
    </div>
  </div>
</template>

<script>
import Wates from '~/components/Wates.vue'

export default {
  layout: 'dok',
  components: {
    Wates
  },
  head () {
    return {
    title: 'Panduan Node & NPM - Pustaka Kalender Jawa',
    meta: [
      { hid: 'description', name: 'description', content: 'Instalasi Pustaka Kalender Jawa Bisa Melalui NPM maupun Browser.' }
    ]
    }
  }
}
</script>
