<template>
  <div>
    <form @submit.prevent="login(email, password)">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" class="input" type="email" placeholder="Ingrese su email" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Passowrd</label>
        <div class="control">
          <input v-model="password" class="input" type="password" placeholder="Ingrese su contraseña" required>
        </div>
      </div>

      <div class="field">
        <p class="control">
          <button class="button is-success">
            Login
          </button>
        </p>
      </div>
      <p>{{ error }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: '',
      res: '',
      error: ''
    }
  },
  methods: {
    async login (email, password) {
      try {
        const { data } = await axios.post('http://localhost:8000/api/rest-auth/login/', { email, password })
        this.res = data
        console.log('token', this.res.key)
        window.localStorage.token = this.res.key
        this.$router.push('/')
      } catch (e) {
        this.error = e
        console.log('Error in login', e)
      }
    }
  }
}
</script>
