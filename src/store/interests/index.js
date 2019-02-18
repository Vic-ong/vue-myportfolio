import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const state = {
  hobbies: [],
  goals: [],
  music: []
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
