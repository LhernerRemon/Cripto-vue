import Vue from 'vue'
import Vuex from 'vuex'
import { profile } from '@/store/modules/profile'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    profile: {
      ...profile,
      namespaced: true
    }
  }
})

export default store
