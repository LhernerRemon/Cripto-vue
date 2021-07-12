import axios from 'axios'

export default {
  updateUser: async ({ commit }, payload) => {
    const userResponse = await axios.put('api/rest-auth/user/', payload)
    const user = userResponse.data
    commit('SET_USER', user)
  }
}
