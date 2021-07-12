<template>
  <v-card>
    <v-container class="pt-15 mt-10 pb-25 mb-10">
      <v-row justify="center">
        <scale-loader color="#68d391" :loading="loaderTable" :size="20" />

        <cripto-table v-if="!loaderTable" :cryptos="cryptos.slice(initial_page,end_page)" :cryptos_all="cryptos_all" />
      </v-row>
    </v-container>
    <v-pagination
      v-model="page"
      :length="all_result"
      circle
      :total-visible="7"
    />
  </v-card>
</template>

<script>
import CriptoTable from '@/components/cripto/CriptoTable'
import axios from '@/plugins/axios'
export default {
  name: 'Home',
  components: {
    CriptoTable
  },
  data () {
    return {
      cryptos: [],
      cryptos_all: [],
      loaderTable: false,
      page: 1,
      all_result: 0,
      initial_page: 0,
      end_page: 9
    }
  },
  watch: {
    page () {
      this.loaderTable = true
      this.changePage()
    }
  },

  created () {
    this.loaderTable = true
  },

  async mounted () {
    try {
      const cryptos = await axios.get('https://api.coincap.io/v2/assets/')
      this.cryptos = cryptos.data.data
      this.cryptos_all = cryptos.data.data
      this.loaderTable = false
      this.all_result = this.cryptos.length / 10
    } catch (e) {
      console.error('Mounted Home', e)
    }
  },
  methods: {
    changePage () {
      this.initial_page = (this.page * 10) - 10
      this.end_page = (this.page * 10)
      this.loaderTable = false
    }
  }
}
</script>
