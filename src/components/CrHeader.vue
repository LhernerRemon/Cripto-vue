<template>
  <v-app-bar app color="primary">
    <router-link to="/" class="d-flex">
      <cr-icon class="ml-10 mr-2" />

      <h2 class="title"><strong>Exchange</strong></h2>
    </router-link>

    <div class="ml-10">
      <v-btn text color="secondary" dark v-for="c in cryptosH" :key="c.id">{{
        c.symbol
      }}</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import CrIcon from '@/components/CrIcon'
import axios from '@/plugins/axios'

export default {
  name: 'CrHeader',
  data () {
    return {
      cryptosH: null
    }
  },
  components: {
    CrIcon
  },
  async mounted () {
    try {
      const cryptos = await axios.get('/assets/?limit=3')
      this.cryptosH = cryptos.data.data
    } catch (e) {
      console.error('Mounted Header', e)
    }
  }
}
</script>

<style scoped>
.title {
  color: white;
}
.subtitle {
  opacity: initial;
  font-size: 15px;
}
</style>
