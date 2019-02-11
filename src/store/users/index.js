import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const state = {
  user: {
    name: {
      first: null,
      last: null,
      middle: null
    },
    address: {
      street_1: null,
      street_2: null,
      city: null,
      state: {
        abbreviation: null,
        name: null
      },
      country: null
    },
    date_of_birth: null
  },
  users: []
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
