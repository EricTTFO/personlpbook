import Vue from 'vue'
import Vuex from 'vuex'
import PersonalPBook from './modules/personpbook'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    PersonalPBook
  }
})
