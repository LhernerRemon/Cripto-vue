import axios from 'axios'
// import store from '../store'

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://api.coincap.io/v2'
} else {
  axios.defaults.baseURL = 'https://api.coincap.io/v2'
}

export default axios
