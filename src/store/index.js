import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import projects from './projects/index'
import users from './users/index'
import interests from './interests/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects,
    users,
    interests
  },
  state: {

  },
  actions,
  getters,
  mutations
})
