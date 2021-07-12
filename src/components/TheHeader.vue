<template>
  <div>
    <v-app-bar app color="primary">
      <router-link to="/" class="d-flex">
        <cripto-icon class="ml-10 mr-2" />

        <h2 class="title">
          <strong>Exchange</strong>
        </h2>
      </router-link>

      <div class="ml-10">
        <v-btn v-for="c in cryptosTop" :key="c.id" text color="secondary" dark>
          {{ c.symbol }}
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import CriptoIcon from '@/components/cripto/CriptoIcon'
import axios from '@/plugins/axios'

export default {
  name: 'TheHeader',
  components: {
    CriptoIcon
  },
  data () {
    return {
      cryptosTop: []
    }
  },
  async created () {
    try {
      const { data } = await axios.get('https://api.coincap.io/v2/assets?limit=3')
      this.cryptosTop = data.data
    } catch (e) {
      console.error('Error fetch top criptos', e)
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
