import { createStore } from 'vuex'

export default createStore({
  state: {
    mensage:null,
    mensage_erro:null
  },
  getters: {
  },
  mutations: {
    fechar_mensagem(state,data){
      state.mensage = false
    },
    mensage(state,data){
      state.mensage = true
      
    }
  },
  actions: {
  },
  modules: {
  }
})
