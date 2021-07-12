import Vue from 'vue'

export const set = property => (state, payload) => (state[property] = payload)
export const toggle = property => state => (state[property] = !state[property])

export const unshift = property => (state, payload) => {
  if (Array.isArray(state[property])) {
    state[property].unshift(payload)
  } else {
    throw Error('Trying to unshift to a non Array object')
  }
}
export const push = property => (state, payload) => {
  if (Array.isArray(state[property])) {
    state[property].push(payload)
  } else {
    throw Error('Trying to push to a non Array object')
  }
}

export const replaceById = property => (state, payload) => {
  const index = state[property].findIndex((object) => object.id === payload.replaceObjectId)
  if (index === -1) {
    throw Error('Object not found')
  } else {
    Vue.set(state[property], index, payload.object)
  }
}
