import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const state = {
  user: {
    name: {
      first: '',
      last: '',
      middle: ''
    },
    address: {
      street_1: '',
      street_2: '',
      city: '',
      state: {
        abbreviation: '',
        name: ''
      },
      country: ''
    },
    date_of_birth: '',
    profile_pic: '',
    resume_pdf: ''
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
