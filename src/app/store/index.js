import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'

// Modules
import auth from './modules/auth'
import sidebar from './modules/sidebar'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  /**
   * Assign the actions to the store
   */
  actions,

  /**
   * Assign the getters to the store
   */
  getters,

  /**
   * Assign the modules to the store
   */
  modules: {
    auth,
    sidebar
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
