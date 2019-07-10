import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playid:1
  },
  mutations: {
    playing(state,num){
      state.playid=num
    }
  },
  actions: {
    getplaying(context,num){   //同上注释，num为要变化的形参
      context.commit('playing',num)
    }
  }
})
